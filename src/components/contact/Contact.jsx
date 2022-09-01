import React from 'react'
import './contact.css'
import { useNav } from '../../hooks/useNav'
import { SiReact } from 'react-icons/si'
import {AiFillInstagram, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
  const contactRef = useNav("Contact")
  return (
    <section ref={contactRef} id='contact'>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__text">
          <div className="text">
            <h3>
              If you would like to discuss any opportunities, projects or just say hi,
            </h3>
            <h3>
              feel free to drop a text at any of my socials!
            </h3>
          </div>

        </div>
        <div className="contact__socials">
          <a href='https://linkedin.com/in/man1han' target="_blank" rel='noreferrer'><AiFillLinkedin /></a>
          <a href='https://github.com/man1han' target="_blank" rel='noreferrer'><AiFillGithub /></a>
          <a href='https://instagram.com/manthanbhattt' target="_blank" rel='noreferrer'><AiFillInstagram /></a>
          <a href='mailto: manthanbhatt2509@gmail.com' target="_blank" rel='noreferrer'><MdEmail /></a>
        </div>
      </div>
      <div className="footer">
        <div>
          Made with ReactJS
          <div className="footer__icon">
            <SiReact />
          </div>
        </div>
      </div>
    </section>

  )
}

export default Contact