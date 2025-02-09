import React, { useEffect, useState, useCallback, useRef } from "react";
import Carroussel from "../../components/featured/Carousel";
import FeaturedCard from "../../components/featured/FeaturedCard";
import { v4 as uuidv4 } from "uuid";

// Array of project data
const projects = [
  {
    image: 'https://placehold.co/600x400/000000/FFF',
    title: 'Project One',
    description: 'This is a brief description of Project One.',
    link: 'https://example.com/project-one'
  },
  {
    image: 'https://placehold.co/600x400/000000/FFF',
    title: 'Project Two',
    description: 'This is a brief description of Project Two.',
    link: 'https://example.com/project-two'
  },
  {
    image: 'https://placehold.co/600x400/000000/FFF',
    title: 'Project Three',
    description: 'This is a brief description of Project Three.',
    link: 'https://example.com/project-three'
  },
];

const Featured = () => {
  const cards = projects.map((project) => ({
    key: uuidv4(),
    content: (
      <FeaturedCard
        image={project.image}
        title={project.title}
        description={project.description}
        link={project.link}
      />
    ),
  }));

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
    <div >
      {/* <h3 className="heading">Featured</h3> */}
      {/* <Carroussel
        cards={cards}
        height="50rem"
        width="100%"
        margin="0 auto"
        offset={2}
        showArrows={false}
        goToSlide={currentSlide}
        onSlideClick={handleSlideClick}
      /> */}
    </div>
  );
};

export default Featured;
