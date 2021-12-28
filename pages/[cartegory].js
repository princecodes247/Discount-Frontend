import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import Carousel from '../components/Carousel'

import ItemGrid from '../components/ItemGrid'
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
        <ItemGrid />

      </main>

   
  )
}
