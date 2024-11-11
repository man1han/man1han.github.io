import React from 'react'
import './landing.css'
import '../../components/featured/featured.css'
import CTA from '../../components/CTA';
import Resume from '../../assets/Resume-Manthan.pdf'
import FeaturedCard from '../../components/featured/FeaturedCard';
import {featuredProjects, featuredArtwork,featuredBlog} from '../../assets/data/data.jsx';
import { NavLink } from "react-router-dom";


const Landing = () => {
  return (
    <div className='container' id='landing'>
      <div className='landing__container'>
        <section className='bento-section bento-section-projects'>
          <div className='landing-featured-title'>
            <p>Featured Projects</p>
            <span className='landing-featured-title-line'></span>
            
          </div>
          <div className='landing-featured-projects'>
            {featuredProjects.map(item => (
              <FeaturedCard
              
              image={item.image}
              title={item.title}
              description={item.description}
              text={'See this project'}
              link={item.link}
              />
            ))}
          </div>
          <div className='right-align'><NavLink to={"/projects"}><CTA text={'View all projects'}></CTA></NavLink></div>
        </section>
        <section className='bento-section bento-section-artwork'>
          <div className='landing-featured-title'>
            <p>Featured Artwork</p>
            <span className='landing-featured-title-line'></span>
          </div>
          {featuredArtwork.map(item => (
              <FeaturedCard
              
              image={item.image}
              title={item.title}
              description={item.description}
              text={'See this project'}
              link={item.link}
              />
            ))}
            <div className='right-align'><CTA text={'View all artworks'}></CTA></div>
        </section>
        <section className='bento-section bento-section-text'>
          <div className='intro-container'>
            <p className='text-light'>I’m a versatile programmer with a passion for creating innovative solutions. I also like to express my creativity through art and writing.</p>
            <CTA text={'View my resume'} link={Resume} />
          </div>
        </section>
        <section className='bento-section bento-section-blog'>
          <div className='landing-featured-title'>
            <p>Featured Blog</p>
            <span className='landing-featured-title-line'></span>
          </div>
          {featuredBlog.map(item => (
              <FeaturedCard
              
              image={item.image}
              title={item.title}
              description={item.description}
              text={'See this project'}
              link={item.link}
              />
            ))}
            <div className='right-align'><CTA text={'View all blogs'}></CTA></div>
        </section>
      </div>

      {/* <div className="intro__container">
        <div className='title'>
          <h1>Hi, I'm Manthan.</h1>
          <h2>A <span className='versatile'>Versatile</span> Programmer.</h2>
        </div>
        <p className='text-light'>With a strong background in various programming languages and technologies.<br />I am passionate about creating creative solutions and learning new skills.</p>
        <div className="cta">
          <a href={Resume} download className='btn btn-secondary'>Resume <AiOutlineDownload style={{ fontSize: '2rem', display: 'flex' }} /></a>
        </div>

      </div>
      <div className='featured__container'>
        <Featured />
      </div> */}
    </div>
  )
}

export default Landing