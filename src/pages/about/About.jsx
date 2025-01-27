import React from 'react'
import './about.css'
import { SiPython, SiCsharp, SiC, SiCplusplus, SiJavascript, SiFlutter, SiUnity, SiBlender, SiUnrealengine, SiJekyll, SiCss3, SiJava, SiReact, SiHtml5 } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { workExperience } from '../../assets/data/data'
import { education } from '../../assets/data/data'
import { certifications } from '../../assets/data/data'
import CTA from '../../components/CTA'
const About = () => {
  const techStack = [
    {
      id: 1,
      icon: <SiPython />,
      name: 'Python',
    },
    {
      id: 2,
      icon: <SiJava />,
      name: 'Java',
    },
    {
      id: 3,
      icon: <SiC />,
      name: 'C',
    },
    {
      id: 4,
      icon: <SiCplusplus />,
      name: 'C++',
    },
    {
      id: 5,
      icon: <SiCsharp />,
      name: 'C#',
    },
    {
      id: 6,
      icon: <SiHtml5 />,
      name: 'HTML',
    },
    {
      id: 7,
      icon: <SiCss3 />,
      name: 'CSS',
    },
    {
      id: 8,
      icon: <SiJavascript />,
      name: 'Javascript',
    },
    {
      id: 9,
      icon: <SiReact />,
      name: 'React',
    },
    {
      id: 10,
      icon: <SiJekyll />,
      name: 'Jekyll',
    },
    {
      id: 11,
      icon: <GrMysql />,
      name: 'MySQL',
    },
    {
      id: 12,
      icon: <SiFlutter />,
      name: 'Flutter',
    },
    {
      id: 13,
      icon: <SiUnity />,
      name: 'Unity',
    },
    {
      id: 14,
      icon: <SiUnrealengine />,
      name: 'Unreal',
    },
    {
      id: 15,
      icon: <SiBlender />,
      name: 'Blender',
    },
  ]
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
                  <div className="experience__bar-bottom">
                    <CTA text={'View Certificate'} link={item.link}/>
                  </div>
                  <div className="experience__bar-top">
                    <div className="exp__text">
                      <h6>
                        {item.title}
                      </h6>
                      <div className="exp__location">
                        <p>{item.from}</p>
                      </div>
                    </div>
                    <div className="exp__date">
                      <p>{item.date}</p>
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
          <div className="about__skills">
            <h4>Skills</h4>
          </div>
          <div className="about__deep-lore">
            <h4>Deep Lore</h4>
          </div>

          {/* <a href="#contact" className='btn btn-primary'>Read More</a> */}
        </div>
        {/* <div className='wrapper__skills'>
          <h2>Tech Stack</h2>
          <div className="skills__content">
            {techStack.map((item, index) => (
              <article key={item.id} className='skill__details'>
                <div className='skill__icon'>
                  {item.icon}
                </div>
                <small className='skill__name'>
                  {item.name}
                </small>
              </article>
            ))}
          </div>
        </div> */}
      </div>
    </div>


  )
}

export default About