"use client";

import React, { useEffect, useRef, useState } from "react";

const SpaceLayer = ({ className }) => {
  const canvasRef = useRef(null);
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window !== "undefined");
  }, []);

  useEffect(() => {
    if (!isBrowser) {
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Función para ajustar el tamaño del canvas al tamaño de la ventana
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const stars = [];

    // Función para generar una opacidad aleatoria
    const getRandomOpacity = () => {
      return Math.random() * 0.8 + 0.2; // Opacidad aleatoria entre 0.2 y 1
    };

    // Función para generar una galaxia
    const generateGalaxy = () => {
      stars.length = 0; // Limpiar el array de estrellas
      const numStars = Math.floor(Math.random() * 500) + 100; // Número aleatorio de estrellas entre 100 y 600
      const centerX = canvas.width / 2; // Posición central X de la galaxia
      const centerY = canvas.height / 2; // Posición central Y de la galaxia

      // Inicializar estrellas
      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const z = Math.random() * canvas.width; // Posición Z aleatoria
        const radius = Math.random() * 2; // Tamaño aleatorio de las estrellas
        const brightness = getRandomOpacity(); // Opacidad aleatoria
        const speed = Math.random() * 2 + 0.5; // Velocidad aleatoria entre 0.5 y 2
        stars.push({ x, y, z, radius, brightness, speed });
      }
    };

    // Función para dibujar una estrella
    const drawStar = (star) => {
      // Convertir coordenadas 3D a 2D
      const scale = 1000 / (1000 + star.z); // Factor de escala basado en la posición Z
      const screenX = canvas.width / 2 + (star.x - canvas.width / 2) * scale;
      const screenY = canvas.height / 2 + (star.y - canvas.height / 2) * scale;

      ctx.beginPath();
      ctx.arc(screenX, screenY, star.radius * scale, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
      ctx.fill();
    };

    // Función de animación
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Actualizar la posición Z de las estrellas
      for (let i = 0; i < stars.length; i++) {
        stars[i].z -= stars[i].speed; // Velocidad de movimiento en el eje Z
        // Reiniciar la posición Z si la estrella sale del canvas
        if (stars[i].z <= 0) {
          stars[i].z = canvas.width;
        }
      }

      // Dibujar estrellas
      for (let i = 0; i < stars.length; i++) {
        drawStar(stars[i]);
      }
    };

    // Generar la galaxia al cargar la página
    generateGalaxy();

    // Iniciar la animación
    animate();

    // Redimensionar el canvas cuando la ventana cambie de tamaño
    window.addEventListener("resize", () => {
      resizeCanvas();
      generateGalaxy();
    });

    return () => {
      window.removeEventListener("resize", () => {
        resizeCanvas();
        generateGalaxy();
      });
    };
  }, [isBrowser]);

  return <canvas ref={canvasRef} className={className} />;
};

export default SpaceLayer;
