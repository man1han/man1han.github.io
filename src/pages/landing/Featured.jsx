import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight  } from "react-icons/fa";


const Featured = () => {
    const data = ["1", "2", "3"]
    const [currentIndex, setCurrentIndex] = useState(0)
    const carouselInfiniteScroll = () => {
        if (currentIndex === data.length - 1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex + 1)
    }

    useEffect(() => {
        const interval = setInterval(() => { carouselInfiniteScroll() }, 3000)
        return () => clearInterval(interval)
    })
    return (
        <div className="container">
            <h1 className="heading">Featured</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 10,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                {data.map((item, index) => {
                    return <SwiperSlide key={index}>
                        <div className='featured_card'>{item}</div>
                    </SwiperSlide>
                })}

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <FaArrowLeft/>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <FaArrowRight/>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
        /*  <div className='carousel__container'>
              {data.map((item, index) => {
                  return <h1 className='carousel_item'  style={{ transform: `translate(-${currentIndex*100}%)` }} key={index}>
                      {item}
                  </h1>
              })}
          </div> */
    )
}

export default Featured