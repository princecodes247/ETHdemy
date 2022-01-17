import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Showcase from '../components/Showcase'

// import Link from 'next/link'
import { useState, useEffect } from "react"
   
  

export default function Home() {

  
 
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
      <section className={`${styles.sect_hero} mb-10 pb-14 h-full`}>
        <div className={styles.col}>
          <div className={styles.hero__text}>
            <p className={styles.text_sub}>#1 LEARNING PLATFORM ON THE BLOCKCHAIN</p>
            <h1>Learn whatever you want, whenever you want</h1>
            <p className="mb-20">
              Lorem ispum
            </p>
            <a href="/signup" className="bg-primary-accent text-black px-8 py-2 rounded-md mt-3">Discover Courses</a>
          </div>
        
        </div>
      
      </section>

      <section className="showcase">
        <h3>Showcase Title</h3>
        <Showcase/>
      </section>
      <footer className={styles.footer}>
      @2022 Copyright Reserved
       { /*<a
                 href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 Powered by{' '}
                 <span className={styles.logo}>
                   <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                 </span>
               </a>*/}
      </footer>
      </main>

   
  )
}
