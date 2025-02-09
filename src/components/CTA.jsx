import React from 'react'
import Resume from '../assets/Resume-Manthan.pdf'
import { BsArrowUpRight } from "react-icons/bs";

const CTA = ({text, link}) => {
    return (
        <div className="cta">
            <a href={link} target="_blank" rel='noreferrer' className='btn'>{text} <BsArrowUpRight  /></a>
        </div>
    )
}

export default CTA