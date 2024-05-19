// Dependencias
import { animate, motion } from "framer-motion";
import { exit } from "process";

// Variantes
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// Calculate the reverse index fot staggred delay
const reverseIndex = (index) => {
  const totalSteps = 6; // numbre of steps
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* Render 6 motion divs, each representing a step of stairs.
  
    Each div will have the same animation defined by the stairAnimation object.
    the delay for each div is calculated dynamically based on ir's reversed index,
    creatign a stagger effect with decreasing delay for  each subsequent step.
    
  */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
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
