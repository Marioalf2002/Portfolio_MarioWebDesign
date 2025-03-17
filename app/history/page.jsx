"use client";

// Dependencias
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaWordpress,
  FaCloudflare,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaPython,
  FaLaravel,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiCplusplus,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobeaudition,
  SiAndroidstudio,
  SiFlutter,
  SiDart,
  SiPostman,
  SiMongodb,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { BiLogoVisualStudio } from "react-icons/bi";
import { DiMsqlServer, DiVisualstudio } from "react-icons/di";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import RootLayout from "../layout";
import React from "react";

const currentYear = new Date().getFullYear();
const years = currentYear - 2020;
const edad = currentYear - 2002;

// Informacion Data
const about = {
  title: "Sobre mi",
  description:
    "Soy un desarrollador web full stack con experiencia en tecnologías modernas & escalables. Mi objetivo es impulsar el éxito de tu proyecto con soluciones web innovadoras & eficientes. ¡Trabajemos juntos para llevar tus ideas al siguiente nivel!",
  info: [
    {
      fieldName: "Nombre",
      fieldValue: "Mario Hernandez",
    },
    {
      fieldName: "Edad",
      fieldValue: `${edad} años`,
    },
    {
      fieldName: "Experiencia",
      fieldValue: `${years} años`,
    },
    {
      fieldName: "Nacionalidad",
      fieldValue: "Colombiano",
    },
    {
      fieldName: "Email",
      fieldValue: "contacto@mariowebdesigns.com",
    },
    {
      fieldName: "Telefono",
      fieldValue: "(+57) 324 777 3515",
    },
  ],
};

// Experiencia Data
const experience = {
  title: "Mi Experiencia",
  description:
    "Durante mi carrera he trabajado con diferentes tecnologías, lo que me ha permitido adquirir experiencia en diferentes áreas.",
  items: [
    {
      company: "Freelancer",
      position: "Web Developer",
      duration: "Presente - 2019",
    },
    {
      company: "Asociación Asorredecol E.S.P.",
      position: "Web Developer",
      duration: "Presente - 2023",
    },
    {
      company: "IC TERRAQUANTUM S.A.S.",
      position: "Web Developer",
      duration: "2022 - 2021",
    },
    {
      company: "Soluciones Globales S.A.S.",
      position: "Developer Backend",
      duration: "2020 - 2019",
    },
  ],
};

// Educacion Data
const education = {
  title: "Mi Educación",
  description:
    "Mi formación académica me ha permitido adquirir conocimientos en diferentes áreas, lo que me ha permitido ser un profesional integral.",
  items: [
    {
      institution: "Institución Universitaria Pascual Bravo",
      degree: "Tecnología en Desarrollo de Software",
      duration: "En Curso - 2022",
    },
    {
      institution: "SENA",
      degree: "Técnico en Programación de Software",
      duration: "2020",
    },
  ],
};

// Skills Data
const skills = {
  title: "Mis Habilidades",
  description:
    "Poseo un conjunto diverso de habilidades que me permiten crear proyectos de alta calidad utilizando tecnologías modernas & escalables. Mi experiencia abarca desde el desarrollo frontend & backend hasta el diseño, gestión de bases de datos & herramientas de programación.",
  skillList: {
    frontend: [
      {
        iconName: "FaHtml5",
        iconColor: "#E44D26",
        name: "HTML",
      },
      {
        iconName: "FaCss3",
        iconColor: "#264DE4",
        name: "CSS",
      },
      {
        iconName: "FaJs",
        iconColor: "#F0DB4F",
        name: "JavaScript",
      },
      {
        iconName: "FaReact",
        iconColor: "#61DAFB",
        name: "React",
      },
      {
        iconName: "SiNextdotjs",
        iconColor: "#000000",
        name: "Next.js",
      },
      {
        iconName: "SiTailwindcss",
        iconColor: "#38B2AC",
        name: "Tailwind CSS",
      },
      {
        iconName: "SiTypescript",
        iconColor: "#3178C6",
        name: "TypeScript",
      },
    ],
    backend: [
      {
        iconName: "FaNodeJs",
        iconColor: "#68A063",
        name: "Node.js",
      },
      {
        iconName: "FaJs",
        iconColor: "#F0DB4F",
        name: "JavaScript",
      },
      {
        iconName: "SiTypescript",
        iconColor: "#3178C6",
        name: "TypeScript",
      },
      {
        iconName: "TbBrandCSharp",
        iconColor: "#d946ef",
        name: "C#",
      },
      {
        iconName: "SiCplusplus",
        iconColor: "#00599C",
        name: "C++",
      },
      {
        iconName: "FaPhp",
        iconColor: "#777BB4",
        name: "PHP",
      },
      {
        iconName: "FaLaravel",
        iconColor: "#FF2D20",
        name: "Laravel",
      },
    ],
    program: [
      {
        iconName: "DiVisualstudio",
        iconColor: "#5C2D91",
        name: "Visual Studio",
      },
      {
        iconName: "BiLogoVisualStudio",
        iconColor: "#007ACC",
        name: "Visual Studio Code",
      },
      {
        iconName: "FaWordpress",
        iconColor: "#21759B",
        name: "Wordpress",
      },
      {
        iconName: "FaCloudflare",
        iconColor: "#F38020",
        name: "Cloudflare",
      },
      {
        iconName: "FaGitAlt",
        iconColor: "#F05032",
        name: "Git",
      },
      {
        iconName: "FaGithub",
        iconColor: "#FFFFFF",
        name: "GitHub",
      },
      {
        iconName: "SiPostman",
        iconColor: "#FF6C37",
        name: "Postman",
      },
      {
        iconName: "SiAndroidstudio",
        iconColor: "#3DDC84",
        name: "Android Studio",
      },
    ],
    design: [
      {
        iconName: "SiAdobephotoshop",
        iconColor: "#31A8FF",
        name: "Photoshop",
      },
      {
        iconName: "SiAdobeillustrator",
        iconColor: "#FF9A00",
        name: "Illustrator",
      },
      {
        iconName: "SiAdobeaftereffects",
        iconColor: "#D291FF",
        name: "After Effects",
      },
      {
        iconName: "SiAdobeaudition",
        iconColor: "#FF2F2F",
        name: "Audition",
      },
      {
        iconName: "FaFigma",
        iconColor: "#F24E1E",
        name: "Figma",
      },
    ],
    database: [
      {
        iconName: "DiMsqlServer",
        iconColor: "#CC2927",
        name: "SQL Server",
      },
      {
        iconName: "SiMysql",
        iconColor: "#336791",
        name: "MySQL",
      },
      {
        iconName: "SiMongodb",
        iconColor: "#4DB33D",
        name: "MongoDB",
      },
      {
        iconName: "SiPostgresql",
        iconColor: "#336791",
        name: "PostgreSQL",
      },
    ],
    study: [
      {
        iconName: "SiAndroidstudio",
        iconColor: "#3DDC84",
        name: "Android Studio",
      },
      {
        iconName: "SiFlutter",
        iconColor: "#02569B",
        name: "Flutter",
      },
      {
        iconName: "FaLaravel",
        iconColor: "#FF2D20",
        name: "Laravel",
      },
      {
        iconName: "SiDart",
        iconColor: "#0175C2",
        name: "Dart",
      },
      {
        iconName: "FaFigma",
        iconColor: "#F24E1E",
        name: "Figma",
      },
      {
        iconName: "SiPostman",
        iconColor: "#FF6C37",
        name: "Postman",
      },
      {
        iconName: "FaPython",
        iconColor: "#3776AB",
        name: "Python",
      },
      {
        iconName: "FaReact",
        iconColor: "#61DAFB",
        name: "React",
      },
      {
        iconName: "SiNextdotjs",
        iconColor: "#000000",
        name: "Next.js",
      },
      {
        iconName: "SiTypescript",
        iconColor: "#3178C6",
        name: "TypeScript",
      },
    ],
  },
};

// Render Skills
const renderSkills = (category, title) => {
  // Crear un mapa de componentes de iconos
  const iconMap = {
    FaHtml5: FaHtml5,
    FaCss3: FaCss3,
    FaJs: FaJs,
    FaReact: FaReact,
    FaNodeJs: FaNodeJs,
    FaPhp: FaPhp,
    FaWordpress: FaWordpress,
    FaCloudflare: FaCloudflare,
    FaGitAlt: FaGitAlt,
    FaGithub: FaGithub,
    FaFigma: FaFigma,
    FaPython: FaPython,
    FaLaravel: FaLaravel,
    SiNextdotjs: SiNextdotjs,
    SiTailwindcss: SiTailwindcss,
    SiTypescript: SiTypescript,
    TbBrandCSharp: TbBrandCSharp,
    SiCplusplus: SiCplusplus,
    SiAdobephotoshop: SiAdobephotoshop,
    SiAdobeillustrator: SiAdobeillustrator,
    SiAdobeaftereffects: SiAdobeaftereffects,
    SiAdobeaudition: SiAdobeaudition,
    SiAndroidstudio: SiAndroidstudio,
    SiFlutter: SiFlutter,
    SiDart: SiDart,
    SiPostman: SiPostman,
    BiLogoVisualStudio: BiLogoVisualStudio,
    DiMsqlServer: DiMsqlServer,
    DiVisualstudio: DiVisualstudio,
    SiMysql: SiMysql,
    SiMongodb: SiMongodb,
    SiPostgresql: SiPostgresql,
  };

  return (
    <div className="mb-8">
      <h2 className="text-4xl py-4 font-secondary text-accent">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
        {skills.skillList[category].map((skill, index) => {
          const Icon = iconMap[skill.iconName];
          
          return (
            <div 
              key={index} 
              className="w-full h-[150px] bg-secondary hover:bg-tertiary rounded-xl flex justify-center items-center group transition-all duration-500"
            >
              <div className="text-6xl transition-all duration-300">
                {Icon && <Icon color={skill.iconColor} />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Resume = () => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <RootLayout page="history">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          {isClient ? (
            <Tabs
              defaultValue="about"
              className="flex flex-col xl:flex-row gap-[60px]"
            >
              {/* Tabs */}
              <TabsList className="flex flex-col w-full max-w-[350px] justify-center mx-auto xl:mx-0 gap-6 z-20">
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                  }}
                >
                  <TabsTrigger value="about">Sobre Mi</TabsTrigger>
                </motion.div>
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                  }}
                >
                  <TabsTrigger value="experience">Experiencia</TabsTrigger>
                </motion.div>
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                  }}
                >
                  <TabsTrigger value="education">Educacion</TabsTrigger>
                </motion.div>
                <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                  }}
                >
                  <TabsTrigger value="skills">Habilidades</TabsTrigger>
                </motion.div>
              </TabsList>

              {/* Contenido */}
              <div className="min-h-[70vh] w-full z-20">
                {/* Sobre Mi */}
                <TabsContent
                  value="about"
                  className="w-full text-center xl:text-left"
                >
                  <div className="flex flex-col gap-[30px]">
                    <h1 className="text-4xl font-secondary text-accent">
                      {about.title}
                    </h1>
                    <p className="max-w-[700px] text-white/90 mx-auto xl:mx-0">
                      {about.description}
                    </p>
                    <ul className="grid grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                      {about.info.map((item, index) => {
                        let fieldValueElement;

                        if (item.fieldName === "Email") {
                          fieldValueElement = (
                            <a
                              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${item.fieldValue}`}
                              target="_blank"
                              className="text-xl text-white hover:underline"
                            >
                              {item.fieldValue}
                            </a>
                          );
                        } else if (item.fieldName === "Telefono") {
                          fieldValueElement = (
                            <a
                              href="https://wa.me/message/MC62R3PTOHVDN1"
                              target="_blank"
                              className="text-xl text-white hover:underline"
                            >
                              {item.fieldValue}
                            </a>
                          );
                        } else {
                          fieldValueElement = (
                            <span className="text-xl text-white">
                              {item.fieldValue}
                            </span>
                          );
                        }

                        return (
                          <li
                            key={index}
                            className="flex items-center justify-center xl:justify-start gap-4"
                          >
                            <span className="text-accent-hover font-semibold">
                              {item.fieldName} :
                            </span>
                            {fieldValueElement}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </TabsContent>

                {/* Experiencia */}
                <TabsContent value="experience" className="w-full">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h1 className="text-4xl font-secondary text-accent">
                      {experience.title}
                    </h1>
                    <p className="max-w-[600px] text-white/90 mx-auto xl:mx-0">
                      {experience.description}
                    </p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] pr-4">
                        {experience.items.map((item, index) => {
                          return (
                            <li
                              key={index}
                              className="bg-secondary h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                            >
                              <span className="text-accent">{item.duration}</span>
                              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                {item.position}
                              </h3>
                              <div className="flex items-center gap-3">
                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                <p className="text-white/90">{item.company}</p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>

                {/* Educacion */}
                <TabsContent value="education" className="w-full">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h1 className="text-4xl font-secondary text-accent">
                      {education.title}
                    </h1>
                    <p className="max-w-[600px] text-white/90 mx-auto xl:mx-0">
                      {education.description}
                    </p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] pr-4">
                        {education.items.map((item, index) => {
                          return (
                            <li
                              key={index}
                              className="bg-secondary h-[220px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-4"
                            >
                              <span className="text-accent">{item.duration}</span>
                              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                {item.degree}
                              </h3>
                              <div className="flex items-center gap-3">
                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                <p className="text-white/90">
                                  {item.institution}
                                </p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>

                {/* Habilidades */}
                <TabsContent value="skills" className="w-full">
                  <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                      <h1 className="text-4xl font-secondary text-accent">
                        {skills.title}
                      </h1>
                      <p className="text-white/90 mx-auto xl:mx-0">
                        {skills.description}
                      </p>
                    </div>
                    <ScrollArea className="h-[410px]">
                      <div className="pr-4">
                        {renderSkills("frontend", "FrontEnd")}
                        {renderSkills("backend", "BackEnd")}
                        {renderSkills("program", "Programacion")}
                        {renderSkills("design", "Design")}
                        {renderSkills("database", "Base de Datos")}
                        {renderSkills("study", "Estudio")}
                      </div>
                    </ScrollArea>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          ) : (
            <div className="flex items-center justify-center h-[70vh]">
              <p className="text-xl">Cargando...</p>
            </div>
          )}
        </div>
      </motion.div>
    </RootLayout>
  );
};

export default Resume;
