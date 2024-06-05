import React from 'react'
import './projects.css'
// import PI from '../../assets/qr_overlay.png'
import { SiCsharp, SiFlutter, SiUnity, SiCss3, SiReact, SiJavascript, SiHtml5 } from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'

const Projects = () => {
  // const projectsRef = useNav("Projects")
  const projects = [
    {
      id: 1,
      title: 'Cup Mix Up',
      stack: [<SiUnity />, <SiCsharp />],
      platform: 'Web, Mobile',
      desc: "Under Development - A digital take of the classic cup shuffle game",
      ghLink: 'https://man1han.github.io/cmu',
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
    {
      id: 4,
      title: 'Mood Vault',
      stack: [<SiJavascript />, <SiCss3 />, <SiHtml5 />],
      platform: 'Web',
      desc: 'Mood Vault is a powerful Google Chrome extension that provides an intuitive and seamless way for creative minds to create and manage mood boards effortlessly',
      ghLink: 'https://chrome.google.com/webstore/detail/mood-vault/fdnlmnoceadijklmomfedckgjdclacgo',
    },
  ]
  return (
    <section  id='projects'>
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
              { item.ghLink === "" ? "" :<a href={item.ghLink} className='btn btn-primary' target="_blank" rel='noreferrer'>More</a>}
              
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