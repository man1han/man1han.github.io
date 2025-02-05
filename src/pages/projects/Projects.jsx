import React from 'react'
import './projects.css'
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
// import PI from '../../assets/qr_overlay.png'
import { projectCards } from '../../assets/data/data'
import CTA from '../../components/CTA'


const Projects = () => {

  const containerRef = useRef(null); // Ref for the scroll container

  useEffect(() => {
    // Restore scroll position if it exists
    const savedPosition = sessionStorage.getItem('scrollPosition');
    if (savedPosition && containerRef.current) {
      containerRef.current.scrollTo(0, parseInt(savedPosition, 10));
    }
  }, []);

  const handleProjectClick = () => {
    if (containerRef.current) {
      sessionStorage.setItem('scrollPosition', containerRef.current.scrollTop);
    }
  };

  return (
    <div className='container' id='projects' ref={containerRef}>
      <div className="projects__container" >
        <section className='projects__title'>
          <h1>Projects</h1>
          <p>See what I have been projecting onto my keyboard</p>
        </section>
        <section className='projects__cards'>
          {projectCards.map((item, index) => (

            <article key={item.id} className='projects__item'>
              <div className="hover-effect">
                <Link key={item.slug} to={`/projects/${item.slug}`} className="projects__item-link"  onClick={handleProjectClick}>
                  <CTA text={"Read more"}></CTA>
                </Link>

              </div>
              <div className="projects__image-container">
                <img src={item.image} alt={item.title} className='projects__item-image' />

                <div className="overlay"></div>
                <div className="project__tag">Mobile App</div>
              </div>
              <div className="project__info">
                <div className="projects__stack-icons">
                  {item.stack.map((stacks, index) => (
                    <div key={index} className="projects__item-stack">
                      {stacks}
                    </div>
                  ))}
                </div>
                <div className="projects__item-title">
                  {item.title}
                </div>
                <div className="desc">{item.description}</div>
              </div>
            </article>


          ))}
        </section>


      </div>

    </div >


  )
}

export default Projects