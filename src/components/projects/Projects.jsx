import React from 'react'
import './projects.css'
// import PI from '../../assets/qr_overlay.png'
import { useNav } from '../../hooks/useNav'
import { SiCsharp, SiFlutter, SiUnity, SiCss3, SiReact } from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'

const Projects = () => {
  const projectsRef = useNav("Projects")
  const projects = [
    {
      id: 1,
      title: 'Cup Mix Up',
      stack: [<SiUnity />, <SiCsharp />],
      platform: 'Web, Mobile',
      desc: "Under Development - A digital take of the classic cup shuffle game",
      ghLink: '',
    },
    {
      id: 2,
      title: 'OneApp',
      stack: [<SiFlutter />],
      platform: 'Android, iOS, Web',
      desc: 'Mobile App used in Rutgers\' hackathon: HackRU',
      ghLink: 'https://github.com/HackRU/OneAppFlutter',
    },
    {
      id: 3,
      title: 'Webfolio',
      stack: [<SiReact />, <SiCss3 />],
      platform: 'Web',
      desc: 'This webpage developed using React.',
      ghLink: 'https://github.com/man1han/man1han.github.io',
    },
  ]
  return (
    <section ref={projectsRef} id='projects'>
      <h2>Projects</h2>
      <div className="container projects__container">
        {projects.map((item, index) => (
          <article key={item.id} className='projects__item'>
            <h3>{item.title}</h3>
            <div className='desc'>{item.desc}</div>
            <div className="projects__item-cta">
              <div className="projects__stack-icons">
                {item.stack.map((stacks, index) => (
                  <div key={index} className="projects__item-stack">
                    {stacks}
                  </div>
                ))}
              </div>
              { item.ghLink === "" ? "" :<a href={item.ghLink} className='btn btn-primary' target="_blank" rel='noreferrer'>GitHub</a>}
              
            </div>
          </article>
        ))}
      </div>
      <div className="toProjPage">
        <a href="https://github.com/man1han" className='btn btn-primary' target="_blank" rel='noreferrer'>View all< AiFillGithub/></a>
      </div>

    </section>


  )
}

export default Projects