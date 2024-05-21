"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

const SpaceLayerTop = () => {
  useEffect(() => {
    const colors = ["#fff2", "#fff6", "#fff9", "#fffc", "#ffff"];

    const size = `${Math.floor(Math.random() * 3) + 1}px`; // Tamaño aleatorio entre 2px y 5px
    const totalStars = Math.floor(Math.random() * 175) + 25; // Cantidad de estrellas aleatoria entre 25 y 200
    const duration = `${Math.floor(Math.random() * 40) + 10}s`; // Duración aleatoria entre 10s y 25s

    const generateSpaceLayer = (size, selector, totalStars, duration) => {
      const layer = [];
      for (let i = 0; i < totalStars; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y - 100}vh 0 ${color}`);
      }
      const container = document.querySelector(selector);
      container.style.setProperty("--space-layer", layer.join(", "));
      container.style.setProperty("--size", size);
      container.style.setProperty("--duration", duration);
    };

    generateSpaceLayer(size, ".space-1", totalStars, duration);
    generateSpaceLayer(size, ".space-2", totalStars, duration);
    generateSpaceLayer(size, ".space-3", totalStars, duration);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="space space-1"></div>
      <div className="space space-2"></div>
      <div className="space space-3"></div>
    </motion.div>
  );
};

export default SpaceLayerTop;
