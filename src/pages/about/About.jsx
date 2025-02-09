import React from 'react'
import './about.css'
import { workExperience } from '../../assets/data/data'
import { education } from '../../assets/data/data'
import { certifications } from '../../assets/data/data'
import { languages } from '../../assets/data/data'
import { technologies } from '../../assets/data/data'
import CTA from '../../components/CTA'
const About = () => {

  // const aboutRef = useNav("About")
  return (
    <div className="container" id='about'>
      <div className="about__container">
        <section className='about__title'>
          <h1>About me</h1>
          <p>Read this if you're gathering intel on me</p>
        </section>
        <div className="about__me">
          <div className="about__overview">
            <p>
              I am a passionate software developer experienced in Mobile, Web, Game and AI development. I have turned my sci-fi dream into a reality by pursuing a career in Computer Science. I aim to work on technologies that positively impact people around the world.
            </p>
            <p>
              When I am not coding, I like to stay current with the gaming industry by watching different genres of video games and playing some myself. On weekends, I like making sketches and playing guitar. Random likes: Harry Potter, Snorlax, Iron Man, God of War.
            </p>
          </div>
          <div className="about__skills">
            <h4>Skills</h4>
            <div className="skills__wrapper">
              <div className="half__wrapper">
                <h5>Languages</h5>
                <div className="skills__part">

                  {languages.map((item, index) => (
                    <div className="languages__wrapper" key={item.id}>
                      <div className="language__icon">
                        {item.icon}
                      </div>
                      <div className="language__text">
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="half__wrapper">
                <h5>Technologies</h5>
                <div className="skills__part">
                  {technologies.map((item, index) => (
                    <div className="languages__wrapper" key={item.id}>
                      <div className="language__icon">
                        {item.icon}
                      </div>
                      <div className="language__text">
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>


            </div>

          </div>
          <div className="about__experience">
            <h4>
              Work Experience
            </h4>
            <div className="experience__bars">
              {workExperience.map((item, index) => (
                <div className="experience__bar" key={item.id}>
                  <div className="experience__bar-bottom">
                    {item.description}
                  </div>
                  <div className="experience__bar-top">
                    <div className="exp__text">
                      <h6>
                        {item.title}
                      </h6>
                      <div className="exp__location">
                        <p>{item.company}</p>
                        <p>{item.location}</p>
                      </div>
                    </div>
                    <div className="exp__date">
                      <p>{item.end}</p>
                      <p>{item.start}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about__certifications">
            <h4>Certifications</h4>
            <div className="experience__bars">
              {certifications.map((item, index) => (
                <div className="experience__bar" key={item.id}>
                  {/* <div className="experience__bar-bottom">
                    <CTA text={'View Certificate'} link={item.link} />
                  </div> */}
                  <div className="experience__bar-top">
                    <div className="exp__text">
                      <h6>
                        {item.title}
                      </h6>
                      <div className="exp__location">
                        <p>{item.from}</p>
                      </div>
                    </div>
                    <div className='certification__right'>
                      <CTA text={'View Certificate'} link={item.link} />
                    <div className="exp__date">
                      <p>{item.date}</p>
                    </div>
                    </div>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about__education">
            <h4>Education</h4>
            <div className="experience__bars">
              {education.map((item, index) => (
                <div className="experience__bar" key={item.id}>
                  {/* <div className="experience__bar-bottom">
                    {}
                  </div> */}
                  <div className="experience__bar-top">
                    <div className="exp__text">
                      <h6>
                        {item.school}
                      </h6>
                      <div className="exp__location">
                        <p>{item.degree}</p>
                        <p> | </p>
                        <p>{item.location}</p>
                      </div>
                    </div>
                    <div className="exp__date">
                      <p>{item.end}</p>
                      <p>{item.start}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about__deep-lore">
            <h4>Deep Lore</h4>
            <p>From an early age, I was captivated by the mysteries of technology and the underlying
              mechanisms of video games. This curiosity ignited my journey into the world of programming
              and computer science. Throughout my undergraduate studies at Rutgers University, I immersed
              myself in a myriad of coding disciplines, from systems programming to mobile app
              development, from frontend design to deep learning. Each endeavor revealed a new layer of the
              dynamic and boundless potential that computer science holds.
            </p>
            <p>
              I am drawn to explore intersections between computer science and
              creative disciplines such as music, art, and game development. I am equally enthusiastic about
              collaborations that transcend traditional boundaries, including potential ties to astrophysics and
              space studies. My long-term goal is to leverage AI to democratize creative expression, allowing
              individuals to overcome limitations and achieve their artistic aspirations.
            </p>

          </div>
        </div>

      </div>
    </div>


  )
}

export default About