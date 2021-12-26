 import styles from './ItemCard.module.css'

// import { useState, useEffect } from "react"
  const ItemCard = (props) => {
    return   <div className="highlight_item">
            <div className={styles.img}></div>
            <div className="highlight_item__desc">
              <p>Phone of dooo</p>
              <p>30,990</p>
            </div>
          </div>
  }

  export default ItemCard;