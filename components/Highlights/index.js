
import ItemCard from '../ItemCard'

 import styles from './Highlights.module.css'

// import { useState, useEffect } from "react"
  const Highlights = (props) => {
    return   <div className={styles.carousel}>
        <h4>Top Selling Items
        </h4>
        <div className={styles.carouselSpinner}>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
        </div>
      </div>
  }

  export default Highlights;