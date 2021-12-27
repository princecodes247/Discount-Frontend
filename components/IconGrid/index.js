
 import styles from './IconGrid.module.css'
 import IconGridItem from './IconGridItem'

// import { useState, useEffect } from "react"
  const IconGrid = (props) => {
    return <ul className={styles.grid}>
            <IconGridItem />
            <IconGridItem />
            <IconGridItem />
            <IconGridItem />
            <IconGridItem />
            <IconGridItem />
            <IconGridItem />
          </ul>

  }

  export default IconGrid;