import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillMail } from "react-icons/ai";

const Socials = () => {
  return (
    <div className='socials_section'>
      <p className='socials_title'>Socials</p>
      <div className='socials_links'>
        <a href='https://linkedin.com/in/man1han' target="_blank" rel='noreferrer'><AiFillLinkedin /></a>
        <a href='https://github.com/man1han' target="_blank" rel='noreferrer'><AiFillGithub /></a>
        <a href='https://instagram.com/manthanbhattt' target="_blank" rel='noreferrer'><AiFillInstagram /></a>
        <a href='mailto: manthanbhatt2509@gmail.com' target="_blank" rel='noreferrer'><AiFillMail /></a>
      </div>
    </div>

  );
}

export default Socials;
