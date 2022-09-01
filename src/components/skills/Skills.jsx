import React from 'react'
import './skills.css'
import { useNav } from '../../hooks/useNav'
import Typing from '../../assets/typing.png'
import { SiPython, SiDart, SiCsharp, SiC, SiCplusplus, SiJavascript, SiFlutter, SiUnity, SiBlender, SiUnrealengine, SiJekyll, SiCss3, SiJava, SiReact, SiHtml5 } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'


const Skills = () => {
  const skillsRef = useNav("Skills")
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
  return (
    <section ref={skillsRef} id='skills'>
      <h2>My Tech Stack</h2>
      <div className="container skills__container">
        <div className='wrapper__skills'>
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
        <div className="skills__img">
          <img src={Typing} alt="" />
          <h2>... and learning more</h2>
        </div>


      </div>
    </section>

  )
}

export default Skills