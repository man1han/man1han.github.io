import React from 'react'
import './projects.css'
// import PI from '../../assets/qr_overlay.png'
import { projectCards } from '../../assets/data/data'
import { AiFillGithub } from 'react-icons/ai'
import CTA from '../../components/CTA'

const Projects = () => {
  return (
    <div className='container' id='projects'>
      <div className="projects__container">
        <section className='projects__title'>
          <h1>Projects</h1>
          <p>See what I have been projecting onto my keyboard</p>
        </section>
        <section className='projects__cards'>
          {projectCards.map((item, index) => (
            <article key={item.id} className='projects__item'>
              <div className="hover-effect">
                <CTA text={"Read more"}></CTA>
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