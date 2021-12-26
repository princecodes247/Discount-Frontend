
import ItemCard from '../ItemCard'

 // import styles from './ItemCard.module.css'

// import { useState, useEffect } from "react"
  const Highlights = (props) => {
    return   <div className="highlight">
        <h4>Top Selling Items
        </h4>
        <div className="highlight_slider">
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
        </div>
      </div>
  }

  export default Highlights;