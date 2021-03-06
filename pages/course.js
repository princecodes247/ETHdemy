import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CourseStyles from '../styles/Course.module.css'
import Header from '../components/Header'
// import Showcase from '../components/Showcase'
import Link from 'next/link'
import { useState, useEffect } from "react"
import ThirdWebService from "../services/thirdWeb"
import { useRouter } from 'next/router'

  

export default function Course() {
  const [courseDetails, setCourseDetails] = useState({})
  const router = useRouter()
  const { id } = router.query
  useEffect(async () => {
    let listing = await ThirdWebService.getListing(id)
    console.log(listing)
    let course = {
            id: listing.asset.id,
            title: listing.asset.name,
            desc: listing.asset.description,
            image: listing.asset.image,
            rating: 5,
            price: listing.buyoutPrice._hex
          }
        
    setCourseDetails(course)
  },[])
 
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
      <section className="preview">
        <div className={CourseStyles.thumbnail}>

        </div>
         <div className={CourseStyles.cardDetails}>
              <h2 className={CourseStyles.cardTitle}>{courseDetails.title}</h2>
              <p className={CourseStyles.cardDesc}>{courseDetails.desc}</p>
              <div className={CourseStyles.cardRating}>{courseDetails.rating} stars</div>
              <ul className={CourseStyles.meta_data}>
                <li>Last Updated</li>
                <li>Language</li> 
                <li>Captions</li>
              </ul>
              <div className={CourseStyles.cardPrice}>{courseDetails.price} ETH</div>
            </div>
            <div className="button_set">
              <Link href={`/user/cart/add?id=${courseDetails.id}`}>
              <button className="btn">Add To Cart</button>
            </Link>
            <Link href="/user/wishlist">
              <button className="btn">Add To Wishlist</button>
            </Link>
            </div>
      </section>
      <section className="course_details">
        <h3>Course Content</h3>
        <ul className="chapters">
          <li>Introduction</li>
          <li>Setup</li>
          <li>Variables</li>
          <li>Loops</li>
        </ul>
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
