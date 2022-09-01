import React from 'react'
import './about.css'
import { useNav } from '../../hooks/useNav'
import { SiPython, SiCsharp, SiC, SiCplusplus, SiJavascript, SiFlutter, SiUnity, SiBlender, SiUnrealengine, SiJekyll, SiCss3, SiJava, SiReact, SiHtml5 } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'

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
  const aboutRef = useNav("About")
  return (
    <section ref={aboutRef} id='about'>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <p>
            I am a passionate software developer experienced in Mobile, Web, Game and AI development. I have turned my sci-fi dream into a reality by pursuing a career in Computer Science. I aim to work on technologies that positively impact people around the world.
          </p>
          <p>
            When I am not coding, I like to stay current with the gaming industry by watching different genres of video games and playing some myself. On weekends, I like making sketches and playing guitar. Random likes: Harry Potter, Snorlax, Iron Man, God of War (2018).
          </p>
          {/* <a href="#contact" className='btn btn-primary'>Read More</a> */}
        </div>
        <div className='wrapper__skills'>
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
        </div>
      </div>
    </section>
  )
}

export default About