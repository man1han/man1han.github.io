import React, { useEffect, useState, useCallback } from "react";
// import Carousel from "react-spring-3d-carousel";
import Carroussel from "./Carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import Card from "./Card";

const Featured = () => {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <div>1</div>
      )
    },
    {
      key: uuidv4(),
      content: (
        <div>2</div>
      )
    },
    {
      key: uuidv4(),
      content: (
        <div>3</div>
      )
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % cards.length);
  }, [cards.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 2000); // Change slide every 2 seconds
    return () => {
      clearInterval(timer);
    };
  }, [nextSlide]);

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
      />
    </div>
  );
}

export default Featured;
