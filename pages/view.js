import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/View.module.css'

import Header from '../components/Header'
import Carousel from '../components/Carousel'

import ItemGrid from '../components/ItemGrid'
import Highlights from '../components/Highlights'

import { useState, useEffect } from "react"
  

export default function View() {

  return (

      <main className={styles.main}>
        <Head>
          <title>Discount</title>
          <meta name="description" content="Discount" />
          <link rel="icon" href="/favicon.ico" />
      
        </Head>
        <Header/>
        <section>
          <div className={styles.top}>
            <div className={styles.topImg}>
            
            </div>
          </div>
          <div className={styles.bottom}>
              <h3>Tecno Camon 13</h3>
            <div className={styles.desc}>
            <p>This is a description of what the product is about. It is a short paragraph containing the basic details of the product</p>
            </div>  
            <nav>
              <button>Specs</button>
              <button>Sonething</button>
              <button>About</button>
            </nav>  
            <div className={styles.desc}>
            <ul>
              <li>Battery</li>
              <li>Ram</li>
              <li>Update</li>
            </ul>
            </div>
          </div>
        </section>

      </main>

   
  )
}
