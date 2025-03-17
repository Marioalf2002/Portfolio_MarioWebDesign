"use client";

// Dependencias
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* Imagen */}
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten flex items-center justify-center">
          <Image
            src="/assets/perfil.webp"
            priority
            quality={100}
            width={450}
            height={450}
            alt="MarioWebDesign"
            className="object-contain rounded-full animated"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
