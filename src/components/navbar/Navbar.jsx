import React from 'react'
import './navbar.css'
// import { AiOutlineHome, AiOutlineUser, AiOutlineCode, AiOutlineMessage } from 'react-icons/ai'
// import { BiBriefcase } from 'react-icons/bi'
// import { NavContext } from '../../context/NavContext'
// import { useContext } from 'react';
// import LogoWhite from '../../assets/LogoMBWhite.png'
import { Nav, NavLink, NavMenu } from "./NavbarElements";



const Navbar = () => {
  // const { activeLinkId } = useContext(NavContext);
  // const handleNavClick = (selectedId) => {
  //   document.getElementById(selectedId).scrollIntoView({ behavior: 'smooth' })

  // }
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/projects" activeStyle>
            Projects
          </NavLink>
          <NavLink to="/artworks" activeStyle>
            Artworks
          </NavLink>
          <NavLink to="/writings" activeStyle>
            Writings
          </NavLink>
        </NavMenu>
      </Nav>
    </>

    // <nav>
    //   <div className="logo"><img src={LogoWhite} alt="" /></div>
    //   <button className={activeLinkId === 'Landing' ? 'activeClass' : ""} onClick={()=> handleNavClick('landing')}><AiOutlineHome/></button>
    //   <button className={activeLinkId === 'About' ? 'activeClass' : ""} onClick={()=> handleNavClick('about')}><AiOutlineUser/></button>
    //   <button className={activeLinkId === 'Blog' ? 'activeClass' : ""} onClick={()=> handleNavClick('blog')}><BiBriefcase/></button>
    //   {/* <button className={activeLinkId === 'Skills' ? 'activeClass' : ""} onClick={()=> handleNavClick('skills')}><AiOutlineTool/></button> */}
    //   <button className={activeLinkId === 'Projects' ? 'activeClass' : ""} onClick={()=> handleNavClick('projects')}><AiOutlineCode/></button>
    //   <button className={activeLinkId === 'Contact' ? 'activeClass' : ""} onClick={()=> handleNavClick('contact')}><AiOutlineMessage/></button>
    // </nav>
  )
}

export default Navbar