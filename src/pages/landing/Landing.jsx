import React from 'react'
import './landing.css'
import '../../components/featured/featured.css'
import CTA from '../../components/CTA';
// import Resume from '../../assets/Resume-Manthan.pdf'
import FeaturedCard from '../../components/featured/FeaturedCard';
import { featuredProjects, featuredArtwork, featuredBlog } from '../../assets/data/data.jsx';
import { NavLink } from "react-router-dom";
import ME from '../../assets/me.png';


const Landing = () => {
  return (
    <div className='container' id='landing'>
      <div className='landing__container'>
        <div className='landing-center'>
          <div className="landing-top">
            <div className="me">
              <img src={ME}></img>
            </div>
          </div>
          <div className="landing-bottom">
            <div className="manthan">Manthan</div>
            <div className="bhatt">Bhatt</div>
            <div className="text">A versatile programmer with a passion for creating innovative solutions.</div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Landing