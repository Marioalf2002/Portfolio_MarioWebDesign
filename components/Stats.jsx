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

const GITHUB_USERNAME = "Marioalf2002";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const Stats = () => {
  const [commits, setCommits] = useState(() => {
    // Leer commits guardados desde el almacenamiento local
    const savedCommits = localStorage.getItem("commits");
    return savedCommits ? parseInt(savedCommits, 10) : 0;
  });

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        // Obtener lista de repositorios (incluye repositorios privados)
        const reposResponse = await axios.get(
          `https://api.github.com/user/repos`,
          {
            headers: {
              Authorization: `token ${GITHUB_TOKEN}`,
            },
            params: {
              visibility: "all", // Incluye todos los repositorios
              per_page: 100, // Aumenta el límite por página
            },
          }
        );

        const repos = reposResponse.data;

        let totalCommits = 0;

        // Obtener commits para cada repositorio
        for (const repo of repos) {
          const commitsResponse = await axios.get(
            `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/commits`,
            {
              headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
              },
              params: {
                author: GITHUB_USERNAME, // Asegurarse de contar solo los commits del usuario especificado
              },
            }
          );

          totalCommits += commitsResponse.data.length;
        }

        console.log(`Total commits: ${totalCommits}`);
      } catch (error) {
        console.error("Error fetching commits from GitHub:", error);
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
