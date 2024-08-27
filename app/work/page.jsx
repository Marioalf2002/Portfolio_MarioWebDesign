"use client";

// Dependencias
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import Image from "next/image";
import RootLayout from "../layout";

// Componentes
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { VscLiveShare } from "react-icons/vsc";

// Proyectos
const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Asociación Asorredecol E.S.P.",
    description:
      "Asorredecol lidera un modelo de empresa basado en la contribución a la preservación de medio ambiente, afianzando la cultura del reciclaje, al cuidado de los recursos naturales & su aprovechamiento moderado a través de la utilización de técnicas para la transformación de los materiales aprovechables & de este modo contribuir a la protección en el medio ambiente, es nuestra mayor promesa.",
    stack: [{ name: "WordPress" }, { name: "Elementor" }],
    image: "/assets/work/asociacionasorredecol.webp",
    live: "https://asociacionasorredecol.com/",
    github: "",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "IC TERRAQUANTUM S.A.S.",
    description:
      "Es una empresa dedicada a la prestación de servicios en las diferentes áreas de la construcción, diseño e interventoría de toda clase de obras civiles privadas, públicas & bienes raíces; que nace en la ciudad de Medellín como una Sociedad Anónima Simplificada, con la misión de suministrar soluciones & servicios para el mercado de la construcción.",
    stack: [
      { name: "Html 5" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "PHP" },
    ],
    image: "/assets/work/icterraquantum.webp",
    live: "",
    github: "https://github.com/Marioalf2002/IC-Terraquantum",
  },
  {
    num: "03",
    category: "3D",
    title: "Spline 3D",
    description:
      "Spline es una empresa que ofrece una herramienta en línea para el diseño & modelado 3D interactivo. Su plataforma permite a los diseñadores crear, modificar & visualizar modelos 3D directamente en el navegador web sin necesidad de instalar software adicional.",
    stack: [{ name: "Next.js" }, { name: "Spline" }],
    image: "/assets/work/spline.webp",
    live: "https://spline-jade.vercel.app/",
    github: "https://github.com/Marioalf2002/spline",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Galaxy Parallax",
    description:
      "Este proyecto es una página web interactiva que utiliza HTML, CSS & JavaScript para crear un efecto de paralaje de galaxia.",
    stack: [{ name: "Html 5" }, { name: "CSS" }, { name: "JavaScript" }],
    image: "/assets/work/galaxyparallax.webp",
    live: "https://marioalf2002.github.io/galaxy-parallax/",
    github: "https://github.com/Marioalf2002/galaxy-parallax",
  },
  {
    num: "05",
    category: "Frontend",
    title: "Medellín Ecologico",
    description:
      "El sitio web presenta información sobre diferentes lugares turísticos en Medellín que están relacionados con la ecología, como parques naturales, museos & áreas naturales protegidas. También incluye fotografías & testimonios de visitantes.",
    stack: [
      { name: "Html 5" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "Bootstrap" },
      { name: "jQuery" },
    ],
    image: "/assets/work/medellinecologicoweb.webp",
    live: "https://marioalf2002.github.io/MedellinEcologicoWeb/",
    github: "https://github.com/Marioalf2002/MedellinEcologicoWeb",
  },
  {
    num: "06",
    category: "Fullstack",
    title: "eCommerce",
    description:
      "Este proyecto es una plantilla de tienda en línea que incluye un catálogo de productos, un carrito de compras. También cuenta con un dashboard de administración para gestionar productos.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "NextAuth" },
      { name: "Google" },
    ],
    image: "/assets/work/ecommerce.webp",
    live: "https://e-commerce-gamma-peach.vercel.app/",
    github: "https://github.com/Marioalf2002/eCommerce",
  },
  {
    num: "07",
    category: "Frontend",
    title: "Starts",
    description:
      "Star Generator es un programa JavaScript que genera una disposición aleatoria de estrellas en un lienzo. Utiliza lienzo HTML5 & JavaScript para crear un efecto de galaxia visualmente atractivo.",
    stack: [{ name: "Html 5" }, { name: "CSS" }, { name: "JavaScript" }],
    image: "/assets/work/starts.webp",
    live: "https://marioalf2002.github.io/starts/",
    github: "https://github.com/Marioalf2002/starts",
  },
  {
    num: "08",
    category: "Fullstack",
    title: "PacCraft",
    description:
      "El juego fue creado, usando el lenguaje C++ & la Librería de Allegro 5 para implementar texturas, sonidos, entre otras funciones, es un juego creado bajo la lógica del juego PacMan usando diferentes texturas al estilo Minecraft.",
    stack: [{ name: "C++" }, { name: "Allegro 5" }],
    image: "/assets/work/paccraft.webp",
    live: "",
    github: "https://github.com/Marioalf2002/PacCraft",
  },
  {
    num: "09",
    category: "Backend",
    title: "Plugin GitList-GLPI",
    description:
      "Este proyecto es un plugin para el sistema de gestión de activos de TI GLPI que permite a los usuarios ver los repositorios de GitLab en la interfaz de usuario de GLPI.",
    stack: [
      { name: "Html 5" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "PHP" },
      { name: "TSQL" },
    ],
    image: "/assets/work/gitlistglpi.webp",
    live: "",
    github: "https://github.com/Marioalf2002/GitList-Plugin-Glpi",
  },
];

// Funciones Auxiliares
const hasLiveLink = (project) => !!project.live;
const hasGithubLink = (project) => !!project.github;

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // Reinicia el progreso a 0 cuando cambia el slider
    setProgress(0);
    // Obtener Slide Actual
    const currentIndex = swiper.activeIndex;
    // Actualizar Proyecto
    setProject(projects[currentIndex]);
  };

  // Barra de Progreso
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalDuration = 20000; // Duración total en milisegundos (15 segundos)
    const incrementInterval = 100; // Intervalo de incremento en milisegundos (100 ms)
    const incrementAmount = (100 / totalDuration) * incrementInterval;

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          return 0; // Reinicia el progreso a 0 cuando llega al 100%
        }
        return prevProgress + incrementAmount;
      });
    }, incrementInterval);

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, []);

  return (
    <RootLayout page="work">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[70vh] flex flex-col justify-center py-6 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[25px] h-[50%]">
                {/* Numero de proyecto */}
                <div className="text-7xl font-secondary leading-none font-extrabold text-transparen text-accent z-20">
                  {project.num}
                </div>
                {/* Nombre */}
                <h2 className="text-[42px] leading-none font-secondary text-white z-20">
                  {project.title}
                </h2>
                {/* Categoria */}
                <h2 className="text-2xl font-semibold leading-none text-accent z-20">
                  Proyecto {project.category}
                </h2>
                {/* Descripcion */}
                <p className="text-white/90 z-20">{project.description}</p>
                {/* Stack */}
                <ul className="flex gap-4 z-20">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-accent font-semibold">
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
                {/* Border */}
                <div className="border border-white/20 z-20"></div>
                {/* Botones */}
                <div className="flex items-center gap-4 z-20">
                  {/* Boton Live Proyecto */}
                  {hasLiveLink(project) && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="live"
                      aria-label="Live project"
                    >
                      <motion.div
                        className="box"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger
                              rel="noopener noreferrer"
                              id="live"
                              aria-label="Live project"
                              className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:-rotate-12 transition-all duration-500 z-20"
                            >
                              <VscLiveShare className="text-white text-3xl group-hover:text-accent" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Live project</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </motion.div>
                    </Link>
                  )}
                  {/* Boton GitHub Proyecto */}
                  {hasGithubLink(project) && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="github"
                      aria-label="GitHub repository"
                    >
                      <motion.div
                        className="box"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger
                              rel="noopener noreferrer"
                              id="github"
                              aria-label="GitHub repository"
                              className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:-rotate-12 transition-all duration-500"
                            >
                              <BsGithub className="text-white text-3xl group-hover:text-accent" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>GitHub Repositorio</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </motion.div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%] z-20">
              <Progress
                value={progress}
                className="w-full"
                id="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={progress}
                aria-labelledby="progress-bar-label"
                aria-label="Progress bar"
              />
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="lg:h-[520px] h-[300px] mb-12"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[300px] lg:h-[460px] w-full relative group flex justify-center items-center bg-black/10">
                        {/* Overlay */}
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        {/* Imagen */}
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            fill
                            sizes="(min-width: 640px) 640px, 100vw"
                            priority
                            className="object-contain xl:object-cover"
                            alt={project.title}
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                {/* Botones Slider */}
                <WorkSliderBtns
                  containerStyles="flex absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:justify-none"
                  btnStyles="bg-transparen md:text-white md:button-gradient hover:bg-accent-hover text- hover:text-white text-accent text-[22px] w-[44px] h-[44px] flex justify-center items-center rounded-xl transition-all duration-500"
                />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.div>
    </RootLayout>
  );
};

export default Work;
