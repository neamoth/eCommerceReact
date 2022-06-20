import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, {useState} from 'react'
import './slide.css'
import {ApiSlides} from '../api/Sliderapi'
function Slide() {
  // slideapi
  const[slides] = useState(ApiSlides)
  const[activeSlide, setActiveSlide] = useState(0)
  // style
  const arrowStyle = "arrowStyle rounded-full  item-center justify-center hover:cursor-pointer"
  // next slide
  const nextSlide = ()=>{
    if(activeSlide === slides.length - 1){
      setActiveSlide(0)
    }
    else{
      setActiveSlide(activeSlide + 1)
    }
  }
  return (
    <div className='parentDiv items-center justify-between'>
      {/* leftArrow div*/}
      <div className={arrowStyle} >
        <ArrowLeftOutlined style={{ fontSize: '3.125em' }} onClick = {nextSlide} />
      </div>
      {/* slideshow div */}
      {slides.map((slide, index) => {
        if(index === activeSlide){
          return(
            <div className={`wrapper flex w-full h-[500px] justify-center items-center shadow-2xl rounded-lg border-white border-10px overflow-hidden relative` + slide.background}>
        <div className={`slide flex items-center justify-center h-full`}>
          <div className={`forImage flex flex-1 items-center justify-center h-full`}>
            <img src={slide.src} alt="Slider-pic" className={`h-full object-cover`} />
          </div>
          <div className={`des flex flex-col flex-1 place-items-start justify-center ml-11`}>
            <h2 className={`text-[3.4375em]`}>
              {slide.content.h2}
            </h2>
            <p className={`text-[1.3em]`}>
              {slide.content.p}
            </p>
            <button className={`btn`}>
              Shop Now
            </button>
          </div>
        </div>
      </div>
          )
        }
      })}
      {/* rightArrow div*/}
      <div className={arrowStyle} >
        <ArrowRightOutlined style={{ fontSize: '3.125em' }} onClick = {nextSlide} />

      </div>
      
    </div>
  )
}

export default Slide