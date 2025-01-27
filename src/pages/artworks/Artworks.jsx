import React from "react"
import './artworks.css'
import { artworkCards } from "../../assets/data/data"


const Artworks = () => {
    return (
        <div className='container' id='artworks'>
            <div className="artworks__container">
                <section className='artworks__title'>
                    <h1>Artworks</h1>
                    <p>Look at my hobby that I only remember once every three months</p>
                </section>
                <div className="artworks__layout">
                    {artworkCards.map((item, index) => (
                        <div className="artworks__item">
                            <div className="hover-info">
                                
                                <div className="artwork__title">{item.title}</div>
                                <div className="artwork__medium">{item.medium}</div>
                            </div>
                            <img src={item.image} alt={item.title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Artworks