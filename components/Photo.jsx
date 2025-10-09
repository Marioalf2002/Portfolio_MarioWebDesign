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
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten overflow-hidden animated">
          <Image
            src="/assets/perfil.webp"
            priority
            fetchPriority="high"
            quality={100}
            width={498}
            height={498}
            sizes="(max-width: 1200px) 298px, 498px"
            alt="Mario Hernández - Desarrollador Web Full-Stack"
            className="object-cover object-top w-full h-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
