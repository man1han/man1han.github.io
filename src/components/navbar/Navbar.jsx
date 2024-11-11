import React from 'react'
import './navbar.css'
import { NavLink } from "react-router-dom";

import Socials from '../Socials';

const Navbar = () => {
  return (
    <nav>

      <h3>Manthan<br/> Bhatt</h3>
      <p>Software Developer</p>
      <div className='navlinks'>
        <NavLink to="/" className='navlink'>
          <h5>home</h5>
        </NavLink>
        <NavLink to="/about" className='navlink'>
          <h5>about</h5>
        </NavLink>
        <NavLink to="/projects" className='navlink'>
          <h5>projects</h5>
        </NavLink>
        <NavLink to="/artworks" className='navlink'>
          <h5>artwork</h5>
        </NavLink>
        <NavLink to="/writings" className='navlink'>
          <h5>blog</h5>
        </NavLink>
      </div>
      <Socials />
    </nav >

  )
}

export default Navbar