import React from 'react'
import './navbar.css'
// import { AiOutlineHome, AiOutlineUser, AiOutlineCode } from 'react-icons/ai'
import { BiPalette, BiPen, BiCodeBlock, BiHome, BiUser } from 'react-icons/bi'
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import LogoWhite from '../../assets/LogoMBWhite.png'

import { NavLink } from "react-router-dom";



const Navbar = () => {
  return (
    <nav>
      <div>
        <div className="logo">
          <img src={LogoWhite} alt="" />
        </div>
        <div className='navlinks'>
          <NavLink to="/" className='navlink'>
            <div className='navLogo'><BiHome /></div>
            Home
          </NavLink>
          <NavLink to="/about" className='navlink'>
            <div className='navLogo'><BiUser /></div>
            About
          </NavLink>
          <NavLink to="/projects" className='navlink'>
            <div className='navLogo'><BiCodeBlock /></div>
            Projects
          </NavLink>
          <NavLink to="/artworks" className='navlink'>
            <div className='navLogo'><BiPalette /></div>
            Artworks
          </NavLink>
          <NavLink to="/writings" className='navlink'>
            <div className='navLogo'><BiPen /></div>
            Writings
          </NavLink>
        </div>
      </div>

      <div className='socials_section'>
        <div className='socials_header'>Socials</div>
        <div className='socials_links'>
          <a href='https://linkedin.com/in/man1han' target="_blank" rel='noreferrer'><AiFillLinkedin /></a>
          <a href='https://github.com/man1han' target="_blank" rel='noreferrer'><AiFillGithub /></a>
          <a href='https://instagram.com/manthanbhattt' target="_blank" rel='noreferrer'><AiFillInstagram /></a>
          <a href='mailto: manthanbhatt2509@gmail.com' target="_blank" rel='noreferrer'><MdEmail /></a>
        </div>

      </div>
    </nav>

  )
}

export default Navbar