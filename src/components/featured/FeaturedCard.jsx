import React from 'react';
import './featured.css';
import { FiArrowUpRight } from "react-icons/fi";

const FeaturedCard = ({ image, title, description, link }) => {
  return (
    <div className="featured-card">
      <div className="featured-card__image-container">
        <img src={image} alt={title} className="featured-card__image" />
        <div className="featured-card__overlay"></div>
      </div>
      <div className="featured-card__content">
        <h3 className="featured-card__title">{title}</h3>
        <p className="featured-card__description">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="featured-card__link">
          Check this out <FiArrowUpRight/>
        </a>
      </div>
    </div>
  );
};

export default FeaturedCard;
