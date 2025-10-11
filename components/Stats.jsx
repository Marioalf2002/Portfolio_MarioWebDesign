"use client";

// Dependencias
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import axios from "axios";

const currentYear = new Date().getFullYear();
const years = currentYear - 2020;

const CACHE_KEY = "githubCommitsCache";
const CACHE_DURATION = 1000 * 60 * 60 * 12; // 12 horas

const stats = [
  { num: years, text: "Años de Experiencia" },
  { num: 16, text: "Proyectos Completados" },
  { num: 14, text: "Tecnologías Estudiadas" },
];

// Variables de entorno
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME;

/**
 * Obtiene el total de commits SOLO del usuario autenticado usando GraphQL
 * Filtra por author para contar únicamente commits hechos por ti
 */
const fetchGitHubCommitsGraphQL = async () => {
  if (!GITHUB_TOKEN || !GITHUB_USERNAME) {
    console.warn("GitHub credentials not configured");
    return 0;
  }

  try {
    // Primero obtener el ID del usuario para filtrar commits
    const userQuery = `
      query($username: String!) {
        user(login: $username) {
          id
        }
      }
    `;

    const userResponse = await axios.post(
      "https://api.github.com/graphql",
      {
        query: userQuery,
        variables: { username: GITHUB_USERNAME },
      },
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (userResponse.data.errors) {
      console.error(
        "GraphQL errors getting user ID:",
        userResponse.data.errors
      );
      return await fetchGitHubCommitsREST();
    }

    const userId = userResponse.data.data.user.id;
    console.log(`Filtering commits by author ID: ${userId}`);

    // Ahora obtener repos y contar commits del autor
    const query = `
      query($username: String!, $authorId: ID!) {
        user(login: $username) {
          repositories(first: 100, ownerAffiliations: [OWNER, COLLABORATOR, ORGANIZATION_MEMBER]) {
            totalCount
            nodes {
              name
              defaultBranchRef {
                target {
                  ... on Commit {
                    history(first: 1, author: {id: $authorId}) {
                      totalCount
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    const response = await axios.post(
      "https://api.github.com/graphql",
      {
        query,
        variables: {
          username: GITHUB_USERNAME,
          authorId: userId,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data.errors) {
      console.error("GraphQL errors:", response.data.errors);
      return await fetchGitHubCommitsREST();
    }

    const repos = response.data.data.user.repositories.nodes;
    let totalCommits = 0;

    repos.forEach((repo) => {
      if (repo.defaultBranchRef?.target?.history) {
        const commits = repo.defaultBranchRef.target.history.totalCount;
        totalCommits += commits;
        if (commits > 0) {
          console.log(`${repo.name}: ${commits} commits by ${GITHUB_USERNAME}`);
        }
      }
    });

    console.log(`Total commits by ${GITHUB_USERNAME}: ${totalCommits}`);
    return totalCommits;
  } catch (error) {
    console.error("Error with GraphQL API, trying REST:", error);
    return await fetchGitHubCommitsREST();
  }
};

/**
 * Fallback: Usa REST API filtrando por author (commits del usuario solamente)
 */
const fetchGitHubCommitsREST = async () => {
  try {
    let totalCommits = 0;
    let page = 1;
    const perPage = 100;

    // Primero obtener todos los repositorios
    const allRepos = [];
    while (true) {
      const reposResponse = await axios.get(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
        {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
          },
          params: {
            per_page: perPage,
            page: page,
            type: "all",
          },
        }
      );

      if (reposResponse.data.length === 0) break;
      allRepos.push(...reposResponse.data);

      if (reposResponse.data.length < perPage) break;
      page++;
    }

    console.log(`Found ${allRepos.length} repositories`);

    // Obtener commits SOLO del autor en cada repositorio
    for (const repo of allRepos) {
      try {
        // CLAVE: Usar author=${GITHUB_USERNAME} para filtrar por autor
        const commitsResponse = await axios.get(
          `https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits`,
          {
            headers: {
              Authorization: `token ${GITHUB_TOKEN}`,
              Accept: "application/vnd.github.v3+json",
            },
            params: {
              author: GITHUB_USERNAME, // FILTRO POR AUTOR
              per_page: 1,
            },
          }
        );

        // Extraer total de commits del autor del header Link
        const linkHeader = commitsResponse.headers.link;
        if (linkHeader) {
          const match = linkHeader.match(/page=(\d+)>; rel="last"/);
          if (match) {
            const repoCommits = parseInt(match[1], 10);
            totalCommits += repoCommits;
            console.log(
              `${repo.name}: ${repoCommits} commits by ${GITHUB_USERNAME}`
            );
          } else {
            totalCommits += commitsResponse.data.length;
          }
        } else {
          totalCommits += commitsResponse.data.length;
        }
      } catch (commitError) {
        // Ignorar repos sin commits del autor o privados sin acceso
        if (commitError.response?.status !== 409) {
          console.warn(`Skipping ${repo.name}:`, commitError.message);
        }
      }
    }

    console.log(`Total commits by ${GITHUB_USERNAME} (REST): ${totalCommits}`);
    return totalCommits;
  } catch (error) {
    console.error("Error fetching commits via REST:", error);
    return 0;
  }
};

const Stats = () => {
  const [commitCount, setCommitCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const now = new Date().getTime();

        // Verificar cache en localStorage
        if (typeof window !== "undefined") {
          const cachedData = localStorage.getItem(CACHE_KEY);
          if (cachedData) {
            const parsed = JSON.parse(cachedData);
            if (now - parsed.timestamp < CACHE_DURATION) {
              setCommitCount(parsed.data);
              setLoading(false);
              return;
            }
          }
        }

        // Intentar GraphQL primero (más eficiente), luego REST
        const totalCommits = await fetchGitHubCommitsGraphQL();

        // Guardar en cache
        if (typeof window !== "undefined" && totalCommits > 0) {
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({
              timestamp: now,
              data: totalCommits,
            })
          );
        }

        setCommitCount(totalCommits);
      } catch (error) {
        console.error("Error fetching commits:", error);
        setCommitCount(0);
      } finally {
        setLoading(false);
      }
    };

    fetchCommits();
  }, []);

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vh] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start z-20"
              key={index}
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold text-accent"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/90`}
              >
                {item.text}
              </p>
            </div>
          ))}
          <div
            className="flex-1 flex gap-4 items-center justify-center xl:justify-start z-20"
            key="commits"
          >
            <CountUp
              end={commitCount}
              duration={5}
              delay={2}
              className="text-4xl xl:text-6xl font-extrabold text-accent"
            />
            <p className="max-w-[150px] leading-snug text-white/90">
              {loading ? "Cargando commits..." : "Code Commits"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
