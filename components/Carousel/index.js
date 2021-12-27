 import styles from './Carousel.module.css'
import CarouselItem from './carouselItem.js'

import { useState, useEffect } from "react"
  const Carousel = (props) => {
    return <div className={styles.carousel}>
        <div className={styles.carouselSpinner}>
         <CarouselItem/>
         <CarouselItem/>
         
        </div>
      </div>
  }

  export default Carousel;