import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillMail } from "react-icons/ai";
import Profile from '../assets/dp.png'

const Socials = () => {
  return (
    <div className='navprofile'>
      <div className="logo">
        <img src={Profile} alt="Manthan Bhatt" />
      </div>
      <div className='socials_section'>
        <div className='socials_links'>
          <a href='https://linkedin.com/in/man1han' target="_blank" rel='noreferrer'><AiFillLinkedin /></a>
          <a href='https://github.com/man1han' target="_blank" rel='noreferrer'><AiFillGithub /></a>
          <a href='https://instagram.com/manthanbhattt' target="_blank" rel='noreferrer'><AiFillInstagram /></a>
          <a href='mailto: manthanbhatt2509@gmail.com' target="_blank" rel='noreferrer'><AiFillMail /></a>
        </div>
      </div>
    </div>
  );
}

export default Socials;
