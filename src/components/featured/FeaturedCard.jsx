import React from 'react';
import './featured.css';
import { FiArrowUpRight } from "react-icons/fi";
import CTA from '../CTA';

const FeaturedCard = ({ image, title, description, text, link }) => {
  return (
    <div className="featured-card">
      <div className="featured-card__image-container">
        <img src={image} alt={title} className="featured-card__image" />
        <div className="featured-card__overlay">
          <div className="featured-card__content">
            <h4 className="featured-card__title">{title}</h4>
            <p className="featured-card__description">{description}</p>
            {/* <CTA text={text} link={link} /> */}
          </div>
        </div>
      </div>

    </div>
  );
};

export default FeaturedCard;
