 import styles from './IconGrid.module.css'

// import { useState, useEffect } from "react"
  const IconGridItem = (props) => {
    return <li className={styles.gridItem}>
              <div className={styles.itemImg}></div>
              <p className={styles.itemText}>Smartphones</p>
            </li>
  }

  export default IconGridItem;