import React from "react"
import './blog.css'
import { blogCards } from "../../assets/data/data"
import CTA from "../../components/CTA"


const Blog = () => {
    return (
        <div className='container' id='blog'>
            <div className="blog__container">
                <section className='blog__title'>
                    <h1>Blog</h1>
                    <p>Something else my fingers can do apart from code and art</p>
                </section>
                <div className="blog__layout">
                    {blogCards.map((item, index) => (
                        <article key={item.id} className='blog__item'>
                            <img src={item.image} alt={item.title} className="blog__img" />
                            <div className="blog__text">

                                <div className="blog__time">{item.time} read</div>
                                <h4>{item.title}</h4>
                                <div className="topics">
                                   {
                                    item.tags.map((tags, index) => (
                                    <div className="topic">{tags}</div>))
                                   } 
                                </div>
                                <div className='blog__desc'>{item.description}</div>
                                <div className="right-align check">
                                    <CTA  text={"Check this out"}></CTA>
                                </div>
                                
                            </div>

                                   
                        </article>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Blog