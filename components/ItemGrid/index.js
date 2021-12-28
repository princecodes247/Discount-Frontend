import styles from './ItemGrid.module.css'
import ItemCard from '../ItemCard'

// import { useState, useEffect } from "react"
  const ItemGrid = (props) => {
    return <ul className={styles.grid}>
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </ul>

  }

  export default ItemGrid;