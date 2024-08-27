"use client";

import { useEffect, useState } from "react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";
import { motion } from "framer-motion";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();
  const [autoSlide, setAutoSlide] = useState(true);

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        if (swiper.isEnd) {
          swiper.slideTo(0);
        } else {
          swiper.slideNext();
        }
      }, 20000); // 15 seconds

      return () => clearInterval(interval);
    }
  }, [autoSlide, swiper]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        if (swiper.isBeginning) {
          swiper.slideTo(swiper.slides.length - 1);
        } else {
          swiper.slidePrev();
        }
      } else if (event.key === "ArrowRight") {
        if (swiper.isEnd) {
          swiper.slideTo(0);
        } else {
          swiper.slideNext();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [swiper]);

  const handlePrev = () => {
    if (swiper.isBeginning) {
      swiper.slideTo(swiper.slides.length - 1);
    } else {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper.isEnd) {
      swiper.slideTo(0);
    } else {
      swiper.slideNext();
    }
  };

  return (
    <div className={containerStyles}>
      <motion.div
        className="box"
        whileHover={{ scale: 0.9 }}
        whileTap={{ scale: 0.8 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 15,
        }}
      >
        <button
          id="handlePrev"
          className={btnStyles}
          onClick={handlePrev}
          aria-label="Previous"
        >
          <PiCaretLeftBold className={iconsStyles} />
        </button>
      </motion.div>
      <motion.div
        className="box"
        whileHover={{ scale: 0.9 }}
        whileTap={{ scale: 0.8 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 15,
        }}
      >
        <button
          id="handleNext"
          className={btnStyles}
          onClick={handleNext}
          aria-label="Next"
        >
          <PiCaretRightBold className={iconsStyles} />
        </button>
      </motion.div>
    </div>
  );
};

export default WorkSliderBtns;
