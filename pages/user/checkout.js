import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../../components/Header'


// import Link from 'next/link'
import { useState, useEffect } from "react"
   
  

export default function Checkout() {

  
 
  return (

      <main className={styles.main}>
        <Head>
          <title>ETHdemy</title>
          <meta name="description" content="ETHdemy is an online learning marketplace for students and teachers" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
        </Head>
        <Header/>
     
      </main>

   
  )
}
