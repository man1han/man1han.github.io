import React from "react";
import './navbar/navbar.css'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillMail } from "react-icons/ai";

const Socials = () => {
  return (
    
    <div className='socials_section'>
      <div className='socials_links'>
        <a href='mailto: manthanbhatt2509@gmail.com' target="_blank" rel='noreferrer'><AiFillMail /></a>
        <a href='https://instagram.com/manthanbhattt' target="_blank" rel='noreferrer'><AiFillInstagram /></a>
        <a href='https://linkedin.com/in/man1han' target="_blank" rel='noreferrer'><AiFillLinkedin /></a>
        <a href='https://github.com/man1han' target="_blank" rel='noreferrer'><AiFillGithub /></a>
      </div>
      <div className='socials_title'>Socials <div class="social-line"></div></div>
    </div>

  );
}

export default Socials;
