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

const Stats = () => {
  const [commitCount, setCommitCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const now = new Date().getTime();
        const cachedData = JSON.parse(localStorage.getItem(CACHE_KEY));

        // Verificar si existe la cache y si no ha caducado
        if (cachedData && now - cachedData.timestamp < CACHE_DURATION) {
          setCommitCount(cachedData.data);
          setLoading(false);
          return;
        }

        let totalCommits = 0;
        let page = 1;
        const perPage = 100; // Número de repositorios por página

        while (true) {
          // Obtén los repositorios de la página actual
          const reposResponse = await axios.get(
            "https://api.github.com/user/repos",
            {
              headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
                Accept: "application/vnd.github.v3+json",
              },
              params: {
                per_page: perPage,
                page: page,
              },
            }
          );

          if (reposResponse.data.length === 0) break; // Salir si no hay más repositorios

          const repos = reposResponse.data;

          for (const repo of repos) {
            try {
              // Obtén los commits del repositorio
              const commitsResponse = await axios.get(
                `https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits`,
                {
                  headers: {
                    Authorization: `token ${GITHUB_TOKEN}`,
                    Accept: "application/vnd.github.v3+json",
                  },
                }
              );

              // Suma el número de commits
              totalCommits += commitsResponse.data.length;
            } catch (commitError) {
              console.error(
                `Error fetching commits for ${repo.name}:`,
                commitError
              );
            }
          }

          page++;
        }

        // Guardar los datos en el cache
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            timestamp: now,
            data: totalCommits,
          })
        );

        setCommitCount(totalCommits);
      } catch (error) {
        console.error("Error fetching repos:", error);
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
            {/* <p className="text-4xl xl:text-6xl font-extrabold text-accent">+</p> */}
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
