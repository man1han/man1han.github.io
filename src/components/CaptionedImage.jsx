import React from 'react'

const CaptionedImage = ({text, link}) => {
    return (
        <div className="captionedImage">
            <img src={link}/>
            <p>{text}</p>
        </div>
    )
}

export default CaptionedImage