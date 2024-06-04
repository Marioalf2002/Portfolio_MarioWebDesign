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
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiCsharp,
  SiCplusplus,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobeaudition,
  SiAndroidstudio,
  SiFlutter,
  SiDart,
  SiPostman,
  SiVisualstudiocode,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { DiMsqlServer, DiVisualstudio } from "react-icons/di";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import RootLayout from "../layout";

const currentYear = new Date().getFullYear();
const years = currentYear - 2020;

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
      fieldValue: "22 años",
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
      company: "Asociación Asorredecol E.S.P.",
      position: "Web Developer",
      duration: "2023 - Presente",
    },
    {
      company: "IC TERRAQUANTUM S.A.S.",
      position: "Web Developer",
      duration: "2021 - 2022",
    },
    {
      company: "Soluciones Globales S.A.S.",
      position: "Developer Backend",
      duration: "2019 - 2020",
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
      institution: "SENA",
      degree: "Técnico en Programación de Software",
      duration: "2020",
    },
    {
      institution: "Institución Universitaria Pascual Bravo",
      degree: "Tecnología en Desarrollo de Software",
      duration: "2022 - En Curso",
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
        icon: <FaHtml5 color="#E44D26" />,
        name: "HTML",
      },
      {
        icon: <FaCss3 color="#264DE4" />,
        name: "CSS",
      },
      {
        icon: <FaJs color="#F0DB4F" />,
        name: "JavaScript",
      },
      {
        icon: <FaReact color="#61DAFB" />,
        name: "React",
      },
      {
        icon: <SiNextdotjs color="#000000" />,
        name: "Next.js",
      },
      {
        icon: <SiTailwindcss color="#38B2AC" />,
        name: "Tailwind CSS",
      },
      {
        icon: <SiTypescript color="#3178C6" />,
        name: "TypeScript",
      },
    ],
    backend: [
      {
        icon: <FaNodeJs color="#68A063" />,
        name: "Node.js",
      },
      {
        icon: <FaJs color="#F0DB4F" />,
        name: "JavaScript",
      },
      {
        icon: <SiTypescript color="#3178C6" />,
        name: "TypeScript",
      },
      {
        icon: <SiCsharp color="#d946ef" />,
        name: "C#",
      },
      {
        icon: <SiCplusplus color="#00599C" />,
        name: "C++",
      },
      {
        icon: <FaPhp color="#777BB4" />,
        name: "PHP",
      },
    ],
    prgoram: [
      {
        icon: <DiVisualstudio color="#5C2D91" />,
        name: "Visual Studio",
      },
      {
        icon: <SiVisualstudiocode color="#007ACC" />,
        name: "Visual Studio Code",
      },
      {
        icon: <FaWordpress color="#21759B" />,
        name: "Wordpress",
      },
      {
        icon: <FaCloudflare color="#F38020" />,
        name: "Cloudflare",
      },
      {
        icon: <FaGitAlt color="#F05032" />,
        name: "Git",
      },
      {
        icon: <FaGithub color="#FFFFFF" />,
        name: "GitHub",
      },
      {
        icon: <SiPostman color="#FF6C37" />,
        name: "Postman",
      },
      {
        icon: <SiAndroidstudio color="#3DDC84" />,
        name: "Android Studio",
      },
    ],
    design: [
      {
        icon: <SiAdobephotoshop color="#31A8FF" />,
        name: "Photoshop",
      },
      {
        icon: <SiAdobeillustrator color="#FF9A00" />,
        name: "Illustrator",
      },
      {
        icon: <SiAdobeaftereffects color="#D291FF" />,
        name: "After Effects",
      },
      {
        icon: <SiAdobeaudition color="#FF2F2F" />,
        name: "Audition",
      },
      {
        icon: <FaFigma color="#F24E1E" />,
        name: "Figma",
      },
    ],
    database: [
      {
        icon: <DiMsqlServer color="#CC2927" />,
        name: "SQL Server",
      },
      {
        icon: <SiMysql color="#336791" />,
        name: "MySQL",
      },
      {
        icon: <SiMongodb color="#4DB33D" />,
        name: "MongoDB",
      },
    ],
    study: [
      {
        icon: <SiAndroidstudio color="#3DDC84" />,
        name: "Android Studio",
      },
      {
        icon: <SiFlutter color="#02569B" />,
        name: "Flutter",
      },
      {
        icon: <SiDart color="#0175C2" />,
        name: "Dart",
      },
      {
        icon: <FaFigma color="#F24E1E" />,
        name: "Figma",
      },
      {
        icon: <SiPostman color="#FF6C37" />,
        name: "Postman",
      },
      {
        icon: <FaPython color="#3776AB" />,
        name: "Python",
      },
      {
        icon: <FaReact color="#61DAFB" />,
        name: "React",
      },
      {
        icon: <SiNextdotjs color="#000000" />,
        name: "Next.js",
      },
      {
        icon: <SiTypescript color="#3178C6" />,
        name: "TypeScript",
      },
    ],
  },
};

// Render Skills
const renderSkills = (category, title) => (
  <>
    <h2 className="text-4xl py-4 font-secondary text-accent">{title}</h2>
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
      {skills.skillList[category].map((skill, index) => (
        <li key={index}>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger className="w-full h-[150px] bg-secondary hover:bg-tertiary rounded-xl flex justify-center items-center group transition-all duration-500">
                <div className="text-6xl transition-all duration-300">
                  {skill.icon}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="capitalize">{skill.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
      ))}
    </ul>
  </>
);

const Resume = () => {
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
          <Tabs
            defaultValue="about"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            {/* Tabs */}
            <TabsList className="flex flex-col w-full max-w-[350px] justify-center mx-auto xl:mx-0 gap-6 z-20">
              <TabsTrigger value="about">Sobre Mi</TabsTrigger>
              <TabsTrigger value="experience">Experiencia</TabsTrigger>
              <TabsTrigger value="education">Educacion</TabsTrigger>
              <TabsTrigger value="skills">Habilidades</TabsTrigger>
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
                  <ScrollArea className="h-[410px] overflow-y-auto">
                    {renderSkills("frontend", "FrontEnd")}
                    {renderSkills("backend", "BackEnd")}
                    {renderSkills("prgoram", "Programacion")}
                    {renderSkills("design", "Design")}
                    {renderSkills("database", "Base de Datos")}
                    {renderSkills("study", "Estudio")}
                  </ScrollArea>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </RootLayout>
  );
};

export default Resume;
