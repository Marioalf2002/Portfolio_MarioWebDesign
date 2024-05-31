"use client";

// Dependencias
import { MdDevices, MdWeb, MdDesignServices } from "react-icons/md";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import RootLayout from "../layout";

//
const services = [
  {
    num: "01",
    title: "UI / UX",
    description:
      "Diseño y desarrollo personalizado de interfaces de usuario y experiencias de usuario envolventes, utilizando tecnologías modernas y escalables para sitios web.",
    href: "",
    icon: <MdDesignServices className="text-primary text-3xl" />,
  },
  {
    num: "02",
    title: "Full Stack",
    description:
      "Desarrollo integral de aplicaciones web y de escritorio, desde la creación del frontend hasta la implementación del backend, ofreciendo soluciones completas y adaptadas a las necesidades específicas del cliente.",
    href: "",
    icon: <MdDevices className="text-primary text-3xl" />,
  },
  {
    num: "03",
    title: "SEO",
    description:
      "Optimización de sitios web para mejorar su visibilidad y posicionamiento en los motores de búsqueda, mediante estrategias y técnicas probadas que aumentan el tráfico orgánico y la presencia en línea.",
    href: "",
    icon: <MdWeb className="text-primary text-3xl" />,
  },
  {
    num: "04",
    title: "Mantenimiento",
    description:
      "Servicio de mantenimiento continuo de sitios web, asegurando su funcionamiento óptimo y actualizado en todo momento, con atención especializada para resolver cualquier problema y garantizar la seguridad y estabilidad de la plataforma.",
    href: "",
    icon: <FaCode className="text-primary text-3xl" />,
  },
];

const Services = ({ page }) => {
  return (
    <RootLayout page="services">
      <section className="min-h-[80] flex flex-col justify-center py-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 1, duration: 0.4, ease: "easeIn" },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col justify-center gap-3 group z-20"
                >
                  {/* Top */}
                  <div className="w-full flex justify-between items-center">
                    <div className="text-4xl text-white font-secondary transition-all duration-500">
                      {service.num}
                    </div>
                    <Link
                      href={service.href}
                      aria-label={service.title}
                      className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-12"
                    >
                      {service.icon}
                    </Link>
                  </div>
                  {/* Titulo */}
                  <h2 className="font-secondary text-[42px] leading-none text-accent transition-all duration-500">
                    {service.title}
                  </h2>
                  {/* Descripcion */}
                  <p className="text-white/90">{service.description}</p>
                  {/* Border */}
                  <div className="border-b border-accent/30 w-full"></div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </RootLayout>
  );
};

export default Services;
