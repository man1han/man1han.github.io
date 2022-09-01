import React from 'react'
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

const LandingSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://linkedin.com/in/man1han' target="_blank" rel='noreferrer'><AiFillLinkedin /></a>
      <a href='https://github.com/man1han' target="_blank" rel='noreferrer'><AiFillGithub /></a>
      <a href='https://instagram.com/manthanbhattt' target="_blank" rel='noreferrer'><AiFillInstagram /></a>
      <a href='mailto: manthanbhatt2509@gmail.com' target="_blank" rel='noreferrer'><MdEmail /></a>
    </div>
  )
}

export default LandingSocials