import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import CartStyles from '../../styles/Cart.module.css'
import Header from '../../components/Header'
import CourseDetail from '../../components/CourseDetail'
import Link from 'next/link'
import { useState, useEffect } from "react"
   
  

export default function Cart() {

  
 
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
      <section class="p-3 summary">
        <div className="total">
          Total: 0.0036 ETH <span className="discount">0.0136 ETH 86% off</span>
        </div>
        <div className="button_set">
              <Link href="/user/checkout">
              <button className="btn">Checkout</button>
            </Link>
            
            </div>
        <div className="coupons">
          <ul className="active">
            <li>EARLYACCESS</li>
          </ul>
          <div className="addcoupon">
            <input type="text" />
            <button>Apply</button>
          </div>
        </div>
      </section>
      <section className="p-3 cart">
        <h5>Cart Count</h5>  
        <div className={CartStyles.cartList}>
          <CourseDetail/>
          <CourseDetail/>
          <CourseDetail/>
        </div>
      </section>
      </main>



   
  )
}
