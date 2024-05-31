"use client";

// Dependencias
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import axios from "axios";

const stats = [
  { num: 4, text: "Años de Experiencia" },
  { num: 16, text: "Proyectos Completados" },
  { num: 14, text: "Tecnologías Estudiadas" },
];

// Variables de entorno
const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

// Componente de Estadísticas
const Stats = () => {
  const [commits, setCommits] = useState(() => {
    const savedCommits =
      typeof localStorage !== "undefined"
        ? localStorage.getItem("commits")
        : null;
    return savedCommits ? parseInt(savedCommits, 10) : 0;
  });

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        let page = 1;
        let repos = [];
        let totalCommits = 0;

        // Obtener lista de todos los repositorios, incluyendo los privados, paginados
        while (true) {
          const reposResponse = await axios.get(
            "https://api.github.com/user/repos",
            {
              headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
              },
              params: {
                visibility: "all",
                per_page: 100,
                page: page,
              },
            }
          );

          if (reposResponse.data.length === 0) break;
          repos = repos.concat(reposResponse.data);
          page++;
        }

        // Obtener commits para cada repositorio
        for (const repo of repos) {
          let commitPage = 1;
          while (true) {
            const commitsResponse = await axios.get(
              `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/commits`,
              {
                headers: {
                  Authorization: `token ${GITHUB_TOKEN}`,
                },
                params: {
                  author: GITHUB_USERNAME,
                  per_page: 100,
                  page: commitPage,
                },
              }
            );

            if (commitsResponse.data.length === 0) break;
            totalCommits += commitsResponse.data.length;
            commitPage++;
          }
        }

        setCommits(totalCommits);
        localStorage.setItem("commits", totalCommits.toString());
        localStorage.setItem("lastUpdate", new Date().toISOString());
      } catch (error) {
        console.error("Error fetching commits from GitHub:", error);
      }
    };

    const shouldFetchCommits = () => {
      const lastUpdate = localStorage.getItem("lastUpdate");
      if (!lastUpdate) return true;
      const tenMinutes = 10 * 60 * 1000;
      return new Date() - new Date(lastUpdate) > tenMinutes;
    };

    const updateCommits = () => {
      if (shouldFetchCommits()) {
        fetchCommits().then(() => {
          setTimeout(updateCommits, 10 * 60 * 1000); // Llamar a fetchCommits después de 10 minutos
        });
      } else {
        setTimeout(updateCommits, 10 * 60 * 1000); // Comprobar otra vez en 10 minutos
      }
    };

    updateCommits();
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
              end={commits}
              duration={5}
              delay={2}
              className="text-4xl xl:text-6xl font-extrabold text-accent"
            />
            <p className="max-w-[150px] leading-snug text-white/90">
              Code Commits
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
