import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import Carousel from '../components/Carousel'
import ItemCard from '../components/ItemCard'
import IconGrid from '../components/IconGrid'
import Highlights from '../components/Highlights'

import { useState, useEffect } from "react"
  

export default function Home() {

  return (

      <main className={styles.main}>
        <Head>
          <title>Crypto</title>
          <meta name="description" content="Crypto" />
          <link rel="icon" href="/favicon.ico" />
      
        </Head>
        <Header/>
        {/* ADD SIDE MENU COMPONENT*/}
        <section className="carousel-sect">
          <Carousel />
        </section>
        <section className="deals-sect">
      
        </section>
          <section className="highlights-sect">
            <Highlights />
            <Highlights />
            
    </section>
    <section className="promo-sect">
      <Carousel />
    </section>
    <section className="ads-sect">
      <Carousel />
    </section>
    <section className="categories">
      <IconGrid />
    </section>

      </main>

   
  )
}
