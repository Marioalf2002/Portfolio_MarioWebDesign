// Dependencias
import { motion } from "framer-motion";

// Variantes
const waveAnimation = {
  initial: {
    y: "100%",
  },
  animate: {
    y: ["100%", "0%", "100%"],
  },
  transition: {
    duration: 1,
    ease: "easeInOut",
    loop: Infinity,
  },
};

const steps = 7; // number of steps

// Calculate the reverse index for staggered delay
const reverseIndex = (index) => {
  const totalSteps = steps; // number of steps
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(steps)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={waveAnimation}
            animate="animate"
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-accent relative"
          ></motion.div>
        );
      })}
    </>
  );
};

export default Stairs;
