"use client";

import { useEffect, useState } from "react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";

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
      }, 15000); // 15 seconds

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
      <button
        id="handlePrev"
        className={btnStyles}
        onClick={handlePrev}
        aria-label="Previous"
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button
        id="handleNext"
        className={btnStyles}
        onClick={handleNext}
        aria-label="Next"
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
