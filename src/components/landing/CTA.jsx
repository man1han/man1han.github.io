import React from 'react'
import Resume from '../../assets/Resume-Manthan.pdf'
import {AiOutlineDownload} from 'react-icons/ai'

const CTA = () => {
  const handleNavClick = (selectedId) => {
    document.getElementById(selectedId).scrollIntoView({behavior:'smooth'})

  }
  return (
    <div className="cta">
        <a href={Resume} download className='btn'>Resume <AiOutlineDownload style={{fontSize : '1.5rem'}}/></a>
        <button className='btn btn-primary' onClick={()=> handleNavClick('contact')}>Let's Talk</button>
    </div>
  )
}

export default CTA