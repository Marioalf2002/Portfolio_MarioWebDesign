"use client";

require("dotenv").config();

// Dependencias
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import axios from "axios";

const stats = [
  { num: 5, text: "Años de Experiencia" },
  { num: 18, text: "Proyectos Completados" },
  { num: 14, text: "Tecnologías Dominadas" },
];

// Variables de entorno
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Componente de Estadísticas
const Stats = () => {
  const [commits, setCommits] = useState(() => {
    // Verificar si localStorage está disponible
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
                visibility: "all", // Incluir todos los repositorios
                per_page: 100, // Aumentar el límite por página
                page: page, // Paginar los resultados
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
                  author: GITHUB_USERNAME, // Asegurarse de contar solo los commits del usuario especificado
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

        // Actualizar el estado de commits
        setCommits(totalCommits);

        // Guardar la cantidad de commits en localStorage
        localStorage.setItem("commits", totalCommits.toString());
      } catch (error) {
        console.error("Error fetching commits from GitHub:", error);
      }
    };

    // Llamar a la función para obtener la cantidad de commits inicialmente
    fetchCommits();

    // Configurar una actualización periódica (cada 5 minutos)
    const intervalId = setInterval(fetchCommits, 5 * 60 * 1000); // Actualizar cada 5 minutos

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vh] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
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
                } leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
          <div
            className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            key="commits"
          >
            <CountUp
              end={commits}
              duration={5}
              delay={2}
              className="text-4xl xl:text-6xl font-extrabold text-accent"
            />
            <p className="max-w-[150px] leading-snug text-white/80">
              Code Commits
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
