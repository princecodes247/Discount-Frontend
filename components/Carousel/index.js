// import styles from '../../styles/Home.module.css'
import CarouselItem from './carouselItem.js'

import { useState, useEffect } from "react"
  const Carousel = (props) => {
    return <div className="carousel">
        <div className="carousel__spinner">
         <CarouselItem/>
         <CarouselItem/>
         
        </div>
      </div>
  }

  export default Carousel;