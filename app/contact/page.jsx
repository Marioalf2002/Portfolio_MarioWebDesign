"use client";

// Dependencias
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Teléfono",
    description: "+57 302 427 9575",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "email@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Dirección",
    description: "Calle falsa 123",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Formulario */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-secondary rounded-xl">
              <h3 className="text-5xl flex justify-center text-accent font-secondary">
                Trabajemos juntos
              </h3>
              <p className="text-white/60">
                Si tienes un proyecto en mente o una idea que te gustaría llevar
                a cabo, no dudes en contactarme.
              </p>
              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Nombre" />
                <Input type="lastname" placeholder="Apellido" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Celular" />
              </div>
              {/* Select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona un Servicio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup label="Servicios">
                    <SelectLabel>Selecciona un Servicio</SelectLabel>
                    <SelectItem value="web">Desarrollo Web</SelectItem>
                    <SelectItem value="seo">SEO</SelectItem>
                    <SelectItem value="fullstack">Full Stack</SelectItem>
                    <SelectItem value="mantenimiento">Mantenimiento</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* TextArea */}
              <Textarea
                className="h-[200px]"
                placeholder="Escribe tus ideas o dudas."
              />
              {/* Botones */}
              <div className="flex justify-center items-center">
                <Button size="md" className="w-[35%]">
                  ¡Envíame!
                </Button>
              </div>
            </form>
          </div>
          {/* Informacion */}
          <div className="flex-1 flex items-center justify-center order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-secondary text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
