import React from 'react'
import './landing.css'
import Resume from '../../assets/Resume-Manthan.pdf'
import { AiOutlineDownload } from 'react-icons/ai'
import Featured from './Featured'
import '../../components/featured/featured.css'


const Landing = () => {
  return (
    <div className='container landing__container' id='landing'>
      <div className="intro__container">
        <div className='title'>
          <h1>Hi, I'm Manthan.</h1>
          <h2>A <span className='versatile'>Versatile</span> Programmer.</h2>
        </div>
        <p className='text-light'>With a strong background in various programming languages and technologies.<br />I am passionate about creating creative solutions and learning new skills.</p>
        <div className="cta">
          <a href={Resume} download className='btn btn-secondary'>Resume <AiOutlineDownload style={{ fontSize: '2rem', display: 'flex' }} /></a>
        </div>

      </div>
      <div className='featured__container'>
        <Featured />
      </div>
    </div>
  )
}

export default Landing