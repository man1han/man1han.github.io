import React, { useEffect, useState, useCallback, useRef } from "react";
import Carroussel from "./Carousel";
import { v4 as uuidv4 } from "uuid";

const Featured = () => {
  let cards = [
    {
      key: uuidv4(),
      content: <div>1</div>,
    },
    {
      key: uuidv4(),
      content: <div>2</div>,
    },
    {
      key: uuidv4(),
      content: <div>3</div>,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef();

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % cards.length);
  }, [cards.length]);

  useEffect(() => {
    autoplayRef.current = nextSlide;
  }, [nextSlide]);

  useEffect(() => {
    const play = () => {
      autoplayRef.current();
    };

    if (!isPaused) {
      const interval = setInterval(play, 2000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const handleSlideClick = (index) => {
    setCurrentSlide(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000); // Pause autoplay for 10 seconds
  };

  return (
    <div className="">
      <Carroussel
        cards={cards}
        height="20rem"
        width="30%"
        margin="0 auto"
        offset={2}
        showArrows={false}
        goToSlide={currentSlide}
        onSlideClick={handleSlideClick}
      />
    </div>
  );
};

export default Featured;
