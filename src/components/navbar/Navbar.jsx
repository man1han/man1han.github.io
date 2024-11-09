import React from 'react'
import './navbar.css'
import { NavLink } from "react-router-dom";
import { BiPalette, BiPen, BiCodeBlock, BiHome, BiUser } from 'react-icons/bi'

import Socials from '../Socials';

const Navbar = () => {
  return (
    <nav>
      <Socials />

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
    </nav >

  )
}

export default Navbar