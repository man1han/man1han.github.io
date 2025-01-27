import React from 'react'
import './navbar.css'
import { NavLink } from "react-router-dom";
import CTA from '../CTA';
import Resume from '../../assets/Resume-Manthan.pdf'

import Socials from '../Socials';

const Navbar = () => {
  return (
    <nav>
      <h1 className='logo'>MB</h1>
      <div class="logo-line"></div>
      <div className='navlinks'>
        <NavLink to="/" className='navlink'>
          <p>Home</p>
        </NavLink>
        <NavLink to="/about" className='navlink'>
          <p>About</p>
        </NavLink>
        <NavLink to="/projects" className='navlink'>
          <p>Projects</p>
        </NavLink>
        <NavLink to="/artworks" className='navlink'>
          <p>Artwork</p>
        </NavLink>
        <NavLink to="/blog" className='navlink'>
          <p>Blog</p>
        </NavLink>
      </div>
    </nav >
  )
}

export default Navbar