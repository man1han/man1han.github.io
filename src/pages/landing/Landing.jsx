import React from 'react'
import './landing.css'
import Resume from '../../assets/Resume-Manthan.pdf'
import { AiOutlineDownload } from 'react-icons/ai'
import Featured from './Featured'


const Landing = () => {
  return (
    <div className='landing__container' id='landing'>
      <div className='featured__container'>
        <Featured/>
      </div>
      <div className="intro__container">
        <div className='title'>
          <h1>Hi, I'm Manthan.</h1>
          <h1>A <span className='versatile'>Versatile</span> Programmer.</h1>
          <h3 className='text-light'>With a strong background in various programming languages and technologies.<br />I am passionate about creating creative solutions and learning new skills.</h3>
          <div className="cta">
            <a href={Resume} download className='btn btn-secondary'>Resume <AiOutlineDownload style={{ fontSize: '2rem', display:'flex' }} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing