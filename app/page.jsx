// Dependencias
import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa6";
import RootLayout from "./layout";

// Componentes
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <RootLayout page="home">
      <section className="h-full">
        <div className="container h-full mx-auto">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-2 xl:pb-20">
            {/* Texto */}
            <div className="text-center xl:text-left order-2 xl:order-none z-20">
              <span className="text-xl text-white/90 font-secondary">
                Web Developer
              </span>
              <h1 className="h1 mb-5 text-[51px]">
                Hola<span className="text-accent">!</span> Soy
                <br /> <span className="text-accent h1">Mario Hernandez</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/90">
                Un Desarrollador Web Full-Stack con amplia experiencia en
                diversas tecnologías, apasionado por crear soluciones web
                innovadoras y funcionales.
              </p>
              {/* Botones Extra & Redes Sociales */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <a
                  href="/assets/Curriculum-Mario Alfonso Forero Hernandez.pdf"
                  download="Curriculum-Mario Alfonso Forero Hernandez.pdf"
                >
                  <Button
                    size="md"
                    className="uppercase flex items-center gap-3 z-20 transition-all duration-500"
                    aria-label="Descargar CV"
                  >
                    <span className="font-semibold text-white">Descargar CV</span>
                    <FaDownload className="text-xl text-white" />
                  </Button>
                </a>
                <div className="mb-8 xl:mb-0 z-20">
                  <Social
                    containerStyles="flex gap-4"
                    iconStyles="w-12 h-12 mr-2 border border-accent rounded-full flex justify-center items-center text-white text-base hover:bg-accent hover:text-primary transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            {/* Foto */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0 z-20">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>
    </RootLayout>
  );
};

export default Home;
