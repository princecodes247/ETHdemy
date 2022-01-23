import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import CartStyles from '../../styles/Cart.module.css'
import Header from '../../components/Header'
import CartItem from '../../components/CartItem'
import Link from 'next/link'
import { useState, useEffect } from "react"
   

export default function Cart() {
  const fakeCart = [
    {
      img: "NodeJS",
      title: "NodeJS",
      desc: "sndk",
      rating: "5 stars",
      price: "0.036 ETH",
    },
    {
      img: "React",
      title: "React",
      desc: "snssssdk",
      rating: "5 stars",
      price: "0.036 ETH"
    }
  ]
  const [cart, setCart] = useState(fakeCart)
  const [total, setTotal] = useState(0)

  
 
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
          Total: {cart.reduce((a,b)=>{
            return a+b
          })} ETH <span className="discount">0.0136 ETH 86% off</span>
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
        <h5>{cart.length} items in Cart</h5>  
        <div className={CartStyles.cartList}>
          {cart.map(cartItem => {
                      return <CartItem data={cartItem}/>
                      
                    })}
        </div>
      </section>
      </main>



   
  )
}
