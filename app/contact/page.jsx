"use client";

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
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
  FaInfoCircle,
  FaTerminal,
} from "react-icons/fa";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Teléfono",
    description: "(+57) 324 777 3515",
    path: "https://wa.me/message/MC62R3PTOHVDN1",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "contacto@mariowebdesigns.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Dirección",
    description: "Colombia, Antioquia, Sabaneta",
  },
];

const Contact = (props) => {
  const [alertData, setAlertData] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const [service, setService] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (alertData) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [alertData]);

  const onSubmit = async (data) => {
    data.service = service;

    const response = await fetch("/api/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    // Mostrar el componente Alert
    setAlertData({
      status: result.status,
      message:
        result.status === "success"
          ? "Nos pondremos en contacto contigo lo más pronto posible. ¡Gracias por contactarnos!"
          : "Error: " + result.message,
    });

    reset();
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] items-center">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-secondary rounded-xl"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h3 className="text-5xl flex justify-center text-accent font-secondary">
                Trabajemos juntos
              </h3>
              <p className="text-white/90">
                Si tienes un proyecto en mente o una idea que te gustaría llevar
                a cabo, no dudes en contactarme.
              </p>
              <TooltipProvider delayDuration={100}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative flex items-center">
                    <Input
                      type="text"
                      placeholder="Nombre"
                      title="Solo se permiten letras y espacios."
                      {...register("firstname", {
                        required: true,
                        pattern: /^[A-Za-z\s]+$/,
                      })}
                      className="w-[100%]"
                    />
                    <Tooltip>
                      <TooltipTrigger className="h-8 hover:text-accent transition-all duration-500">
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <FaInfoCircle />
                        </span>
                      </TooltipTrigger>
                      <TooltipContent className="text-black font-semibold">
                        Ingresa tu nombre. Solo se permiten letras y espacios.
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="relative flex items-center">
                    <Input
                      type="text"
                      placeholder="Apellido"
                      title="Solo se permiten letras y espacios."
                      {...register("lastname", {
                        pattern: /^[A-Za-z\s]+$/,
                      })}
                      className="w-[100%]"
                    />
                    <Tooltip>
                      <TooltipTrigger className="h-8 hover:text-accent transition-all duration-500">
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <FaInfoCircle />
                        </span>
                      </TooltipTrigger>
                      <TooltipContent className="text-black font-semibold">
                        Ingresa tu apellido. Solo se permiten letras y espacios.
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="relative flex items-center">
                    <Input
                      type="email"
                      placeholder="Email"
                      title="Este campo es obligatorio. Debe ser un correo electrónico válido."
                      {...register("email", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                      })}
                      className="w-[100%]"
                    />
                    <Tooltip>
                      <TooltipTrigger className="h-8 hover:text-accent transition-all duration-500">
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <FaInfoCircle />
                        </span>
                      </TooltipTrigger>
                      <TooltipContent className="text-black font-semibold">
                        Ingresa tu dirección de correo electrónico. Debe ser
                        válido.
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="relative flex items-center">
                    <Input
                      type="tel"
                      placeholder="Celular"
                      title="Solo se permiten números, y debe tener entre 10 y 15 dígitos."
                      {...register("phone", {
                        pattern: /^[0-9]{10,15}$/,
                      })}
                      className="w-[100%]"
                    />
                    <Tooltip>
                      <TooltipTrigger className="h-8 hover:text-accent transition-all duration-500">
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <FaInfoCircle />
                        </span>
                      </TooltipTrigger>
                      <TooltipContent className="text-black font-semibold">
                        Ingresa tu número de celular. Debe contener entre 10 y
                        15 dígitos.
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
                <Select onValueChange={setService}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecciona un Servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup label="Servicios">
                      <SelectLabel>Selecciona un Servicio</SelectLabel>
                      <SelectItem value="web">Desarrollo Web</SelectItem>
                      <SelectItem value="seo">SEO</SelectItem>
                      <SelectItem value="fullstack">Full Stack</SelectItem>
                      <SelectItem value="mantenimiento">
                        Mantenimiento
                      </SelectItem>
                      <SelectItem value="dudas">Dudas</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </TooltipProvider>
              <Textarea
                className="max-h-[250px] h-[200px] overflow-auto"
                placeholder="Escribe tus ideas o dudas."
                title="Este campo es obligatorio. Por favor, introduce tu mensaje."
                {...register("message", { required: true })}
              />
              <div className="flex justify-center items-center">
                <Button size="md" className="w-[35%]" type="submit">
                  ¡Envíame!
                </Button>
              </div>
            </form>
          </div>
          <div className="flex-1 flex items-center justify-center order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-secondary text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <a href={item.path} target="_blank">
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-ml lg:text-xl">{item.description}</h3>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Renderizar el componente Alert */}
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
          >
            <Alert
              status={alertData.status === "success" ? "success" : "error"}
              className="z-30"
            >
              <FaTerminal className="h-4 w-4 text-white" />
              <AlertTitle>
                {alertData.status === "success"
                  ? "¡Correo Enviado!"
                  : "Error al enviar el correo!"}
              </AlertTitle>
              <AlertDescription>{alertData.message}</AlertDescription>
            </Alert>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Contact;
