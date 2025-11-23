"use client";

// Dependencias
import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa6";
import RootLayout from "./layout";
import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

// Componentes
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import StructuredData, {
  personSchema,
  websiteSchema,
  breadcrumbSchema,
} from "@/components/StructuredData";

const AnimatedText = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [text, setText] = useState("");

  const words = useMemo(
    () => [
      "Desarrollador Web",
      "Mantenimiento Web",
      "Desarrollador Full-Stack",
      "SEO",
      "Desarrollador Front-End",
      "Desarrollador Back-End",
      "Soporte Técnico",
    ],
    []
  );

  useEffect(() => {
    if (waiting) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      setWaiting(true);
      setTimeout(() => {
        setReverse(true);
        setWaiting(false);
      }, 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      setWaiting(true);
      setTimeout(() => {
        setWaiting(false);
      }, 250);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, waiting, words]);

  useEffect(() => {
    setText(words[index].substring(0, subIndex));
  }, [index, subIndex, words]);

  return (
    <span className="text-lg text-white/60 font-secondary">
      {text}
      <span className="cursor-blink text-accent font-extrabold">|</span>
    </span>
  );
};
const Home = () => {
  const breadcrumbs = breadcrumbSchema([
    {
      name: "Inicio",
      url: "https://mariowebdesign.vercel.app",
    },
  ]);

  return (
    <RootLayout page="home">
      {/* Structured Data para SEO */}
      <StructuredData data={personSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={breadcrumbs} />

      <main className="min-h-[calc(100vh-7rem)] flex flex-col">
        <article className="flex-1 flex flex-col">
          <section
            className="flex-1 flex items-center"
            aria-label="Presentación personal"
          >
            <div className="container mx-auto w-full">
              <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-2 xl:pb-10">
                {/* Texto */}
                <header className="text-center xl:text-left order-2 xl:order-none z-20">
                  <AnimatedText />
                  <h1 className="h1 mb-3 text-[40px]">
                    Hola<span className="text-accent">!</span> Soy
                    <br />{" "}
                    <span className="text-accent h1">Mario Hernandez</span>
                  </h1>
                  <p className="max-w-[500px] mb-9 text-white/90">
                    Un Desarrollador Web Full-Stack con amplia experiencia en
                    diversas tecnologías, apasionado por crear soluciones web
                    innovadoras y funcionales.
                  </p>
                  {/* Botones Extra & Redes Sociales */}
                  <div className="flex flex-col xl:flex-row items-center gap-8">
                    <motion.div
                      className="box"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <a
                        href="/assets/Curriculum-Mario Forero Hernandez.pdf"
                        download="Curriculum-Mario Forero Hernandez.pdf"
                      >
                        <Button
                          size="md"
                          className="uppercase flex items-center gap-3 z-20 transition-all duration-500 button-gradient"
                          aria-label="Descargar CV"
                        >
                          <span className="font-semibold text-white">
                            Descargar CV
                          </span>
                          <FaDownload className="text-lg text-white" />
                        </Button>
                      </a>
                    </motion.div>
                    <div className="mb-8 xl:mb-0 z-20">
                      <Social
                        containerStyles="flex gap-4"
                        iconStyles="button-gradient-social w-12 h-12 mr-2 border border-accent rounded-full flex justify-center items-center text-white text-base hover:bg-accent transition-all duration-500"
                      />
                    </div>
                  </div>
                </header>
                {/* Foto */}
                <div className="order-1 xl:order-none mb-8 xl:mb-0 z-20">
                  <Photo />
                </div>
              </div>
            </div>
          </section>
          <section aria-label="Estadísticas profesionales">
            <Stats />
          </section>
        </article>
      </main>
    </RootLayout>
  );
};

export default Home;
