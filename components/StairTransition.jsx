"use client";

// Dependencies
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Components
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 0,
      transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
    });
  }, [controls]);

  return (
    <>
      <AnimatePresence mode="wait">
        <div>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stairs />
          </div>

          <motion.div
            key={pathname}
            className="h-full w-full fixed bg-primary top-0 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={controls}
          ></motion.div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
