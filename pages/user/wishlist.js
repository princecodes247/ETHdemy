import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import CartStyles from '../../styles/Cart.module.css'
import Header from '../../components/Header'
import CartItem from '../../components/CartItem'
import Link from 'next/link'
import { useState, useEffect } from "react"
   

export default function WishList() {
  const fakeWishlist = [
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
  const [wishlist, setWishlist] = useState(fakeWishlist)
  

  
 
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
   
      <section className="p-3 cart">
        <h5>{wishlist.length} items in wishlist</h5>  
        <div className={CartStyles.cartList}>
          {wishlist.map(wishlistItem => {
                      return <CartItem data={wishlistItem}/>
                      
                    })}
        </div>
      </section>
      </main>



   
  )
}
