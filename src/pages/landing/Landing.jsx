import React from 'react'
import './landing.css'
import CTA from './CTA'
import LandingSocials from './LandingSocials'
import Devices from './Devices'
import { useNav } from '../../hooks/useNav'

const Landing = () => {
  // const landingRef = useNav("Landing")
  return (
    <header  id='landing'>
      <div className="container header__container">
        <div className='title'>
          <h1>Manthan Bhatt</h1>
          <div className="subtitle">
            <h3 className='text-light'>Software Developer</h3>
            <Devices />
          </div>
          <CTA />
        </div>
        <div className="me">
        </div>
        <LandingSocials />
      </div>
    </header>
  )
}

export default Landing