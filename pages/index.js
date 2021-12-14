import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import widgetStyles from '../styles/widgets.module.css'
import Header from '../components/Header'
import PopUp from '../components/PopUp'
import ChatSect from '../components/ChatSect'
import {BsCurrencyExchange} from 'react-icons/bs';
import {MdSecurity, MdAccountTree} from 'react-icons/md';
// import Link from 'next/link'
import { useState, useEffect } from "react"
   
  const FeatureCard = (props) => {
    return <div
            className="   wow fadeInUp animated"
            data-wow-delay="100ms"
            style={{
              visibility: "visible",
              animationDelay: '100ms',
              animationName: "fadeInUp" }}
          >
            <div className="text-center sm:text-left">
              <div className=" mx-auto sm:mx-0 h-20 w-20">
                {props.icon}
              </div>
              <div className={widgetStyles.feature_card_content}>
                <h3 className={widgetStyles.feature_card_title}>{props.title}</h3>
                <p className={widgetStyles.feature_card_desc}>
                 {props.desc}
                </p>
              </div>
            </div>
          </div>
  }
  const PricingCard = (props) => {
    return   <div
              className=" wow fadeInUp animated"
              data-wow-delay="100ms"
              style={{
                visibility: "visible",
                animationDelay: '100ms',
                animationName: "fadeInUp" }}
            >
              <div className={widgetStyles.pricing_panel}>
                <div className="bg-secondary-bg pt-8 pb-16 px-4 mb-3 rounded-md">
                  <div className="pricing--icon text-center flex justify-center">
                    <svg class="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                  </div>
                  <h4>{props.title} Pack</h4>
                  <div className="flex justify-center text-center">
                    <p className="text-4xl">{props.growth}</p>
                    <p className="text-md">%</p>
                  </div>
                  <div className="mb-8">
                    {props.desc}
                  </div>
                   <a href="/signup" className="bg-primary-accent text-black px-8 py-3 rounded-md mt-3">Invest Now!</a>
                </div>

                <div className="pricing--footer">From ${props.range[0]} to ${props.range[1]}</div>
              </div>
            </div>


  }

export default function Home() {

  
  let whys = [
    {
      title: "Protection & Security",
      desc: "Stop loss and take profit orders will help secure your                       investment. The system will automatically execute trades to realise gains.",
      icon: <svg class="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
    },
    {
      title:  "Licensed Exchange",
      desc: "Our customers perform transactions not only in cryptocurrency,                  but the major world currencies supported by the system.",
      icon: <svg class="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
    },
    {
      title: "Multi Currency Accounts",
      desc:  "Support major currencies: USD, EUR, GBP, and various Cryptocurrencies. Funds exchanged between currencies at market rate.",
      icon: <svg class="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
    }
  ]
  let processes = [
    {
      title: "Sign Up For Free",
      desc: "Create a digital currency wallet for free, where you can securely store all your digital currency.",
      icon: <svg class="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
    },
    {
      title:  "Create Your Wallet",
      desc: "Bitcoin is received, stored, and sent using Bitcoin Wallet’.Download official Bitcoin Wallet for free.",
      icon: <svg class="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
    },
    {
      title: " Buy & Invest Digital Currency",
      desc:  " Buy some Bitcoin, Ethereum, or any other Digital Currency to begin using the future of money.",
      icon: <svg class="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          }
  ]
    
  return (

      <main className={styles.main}>
        <Head>
          <title>Crypto</title>
          <meta name="description" content="Crypto" />
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
            <p className={styles.text_sub}>#1 INVESTMENT PLATFORM</p>
            <h1>Invest, Buy and Sell Stocks and Crypto</h1>
            <p className="mb-20">
              With Jcrypto, you can buy, sell and invest in stocks and crypto
              without hassle
            </p>
            <a href="/signup" className="bg-primary-accent text-black px-8 py-2 rounded-md mt-3">Sign Up</a>
          </div>
          <div className="hidden">
            <p className={styles.text_sub}>Over 6,000+ trusted companies in the world</p>
            <div className="glide">
              <div className="glide__track" data-glide-el="track">
            <ul className={styles.partners__list}>
             {
               <li className="partners__item glide__slide">
                <Image src="/assets/bitcoin_2.svg" alt="Vercel Logo" width={72} height={16} />
             </li>
             }
            </ul>
            </div>
           
            </div>
          </div>
        </div>
        <div className={styles.col2}>
          <img className="hero__img" src="./stuuf" alt="stuff" />
        </div>
      </section>
      <section className={`${styles.sect_why} mb-10`}>
        <div className={styles.col}>
          <h2 className="text-center sm:text-left">Why Invest in Stocks and Cryptocurrency</h2>
          <p>
            Since 2007, Jcrypto has offered fast and reliable investment
            services and options to many. With its flexible, secure and scalable
            implementations, Jcrypto continues to be one of the best choices for
            investment services.
          </p>
        </div>
        <div className={styles.col}>
          <div className="bitcoin-calculator widget widget--small"></div>
        </div>
      </section>
      <section className="px-16 py-1 mb-10">
        <div className="flex gap-12 flex-col md:flex-row">
        {whys.map(why=>{

            return (<FeatureCard title={why.title} desc={why.desc} icon={why.icon}/>)
        })}
            
        </div>
      </section>
      <section className="px-16 py-1 mb-10">
        <div className={styles.col}>
          <div className="bitcoin-pricing widget"></div>
        </div>
        <div className={styles.col}>
          <div className="bitcoin-chart widget"></div>
        </div>
      </section>

      <section className="px-16 py-1">
        <h2 className="text-center sm:text-left">The Process</h2>
        <div className={styles.row}>
          <div className="flex gap-12 flex-col md:flex-row">
             {processes.map(step=>{

            return (<FeatureCard title={step.title} desc={step.desc} icon={step.icon}/>)
        })}
            
          </div>
        </div>
      </section>
      <section className={styles.sect_pricing}>
        <div className="">
          <div className={styles.row}>
            <div className="   ">
              <div className="heading heading-1 text--center ">
                <p className={styles.heading_subtitle + " italic text-gray-600"}>Invest Now!</p>
                <h2 className="text-center sm:text-left">Our Pricing</h2>
                <p className={styles.heading_desc}>
                  Invest now with us to earn every day and forever in your
                  wallet. We accept Investment from all over the world.
                </p>
              </div>
            </div>
          </div>
          <div className="w-11/12 flex flex-col md:flex-row gap-9 my-16 mx-auto">
          
            <PricingCard title="Premium" growth="57" desc="A package that utilizes our best professionals to get the job done"  range={[3000, 10000]}/>
            <PricingCard title="Basic" growth="23" desc="A package with fundamental tools and investement strategies"  range={[1000, 2800]}/>
            <PricingCard title="Starter" growth="12" desc="Simple bare bone pack to get you up and running on trades" range={[200, 800]}/>
            
            
          </div>
          <div className="{styles.row">
            <div className="   ">
              <div className="text-center ">
                Time until ICO close, ICO is live now. 39 million tokens in
                total, 9 million tokens issued during the ICO period
              </div>
            </div>
          </div>
        </div>
      </section>
      <PopUp/>
      <ChatSect/>
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
