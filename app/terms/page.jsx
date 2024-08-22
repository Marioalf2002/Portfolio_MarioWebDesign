"use client";

import React from "react";
import RootLayout from "../layout";
import { motion } from "framer-motion";

const terms = () => {
  return (
    <RootLayout page="terms">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
      >
        <div className="container mx-auto z-20">
          <div className="gap-4 p-7 bg-secondary rounded-xl">
            <h1 className="text-4xl xl:text-5xl text-white font-secondary flex justify-center">
              Términos y Condiciones<span className="text-accent">!</span>
            </h1>
            <p className="text-white/90 mt-4">
              Al utilizar el formulario de contacto de esta página, aceptas que
              los datos personales que ingreses serán tratados de acuerdo con la
              legislación vigente en materia de protección de datos. La
              información proporcionada será utilizada exclusivamente para
              atender tu solicitud, responder a tus consultas o brindarte la
              información solicitada.
            </p>
            <p className="text-white/90 mt-4">
              Tus datos no serán compartidos con terceros sin tu consentimiento
              previo, a menos que sea requerido por ley. Tienes derecho a
              acceder, rectificar y suprimir tus datos en cualquier momento,
              contactándome a través de los medios proporcionados en esta
              página.
            </p>
          </div>
        </div>
      </motion.section>
    </RootLayout>
  );
};

export default terms;
