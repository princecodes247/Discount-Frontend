 import styles from './ItemCard.module.css'

// import { useState, useEffect } from "react"
  const ItemCard = (props) => {
    return   <div className={styles.card}>
            <div className={styles.img}></div>
            <div className={styles.desc}>
              <p className={styles.text}>Phone of dooo</p>
              <p className={styles.text}>30,990</p>
            </div>
          </div>
  }

  export default ItemCard;