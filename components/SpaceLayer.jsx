"use client";

import { useEffect, useRef } from "react";

const SpaceLayer = ({ className }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      if (typeof window !== "undefined") {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    resizeCanvas();

    const stars = [];

    const getRandomOpacity = () => {
      return Math.random() * 0.8 + 0.2;
    };

    const generateGalaxy = () => {
      stars.length = 0;
      const numStars = Math.floor(Math.random() * 500) + 100;

      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const z = Math.random() * canvas.width;
        const radius = Math.random() * 2;
        const brightness = getRandomOpacity();
        const speed = Math.random() * 2 + 0.5;
        stars.push({ x, y, z, radius, brightness, speed });
      }
    };

    const drawStar = (star) => {
      const scale = 1000 / (1000 + star.z);
      const screenX = canvas.width / 2 + (star.x - canvas.width / 2) * scale;
      const screenY = canvas.height / 2 + (star.y - canvas.height / 2) * scale;

      ctx.beginPath();
      ctx.arc(screenX, screenY, star.radius * scale, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
      ctx.fill();
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stars.length; i++) {
        stars[i].z -= stars[i].speed;
        if (stars[i].z <= 0) {
          stars[i].z = canvas.width;
        }
      }

      for (let i = 0; i < stars.length; i++) {
        drawStar(stars[i]);
      }
    };

    generateGalaxy();
    animate();

    const handleResize = () => {
      resizeCanvas();
      generateGalaxy();
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
};

export default SpaceLayer;
