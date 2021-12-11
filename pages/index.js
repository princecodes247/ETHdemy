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
              <div className=" mx-auto sm:mx-0 h-20 w-20 bg-black">
                <i className="icon-lock"></i>
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
                <div className="bg-secondary-bg py-16 px-4 mb-3 rounded-md">
                  <div className="pricing--icon">
                    <img
                      src="assets/images/icons/BitcoinIcon4.png"
                      alt="Bitcoin Icon"
                    />
                  </div>
                  <h4>Starter Crypto Plan</h4>
                  <p className="text-xxl">12<span className="text-md">%</span></p>
                  <div className="mb-8">
                    Enjoy your investment with Bitcoin or Ethereum growing every
                    day.
                  </div>
                   <a href="/signup" className="bg-primary-accent text-black px-8 py-3 rounded-md mt-3">Invest Now!</a>
                </div>

                <div className="pricing--footer">From $1000 to $10000</div>
              </div>
            </div>


  }

export default function Home() {

  
  let whys = [
    {
      title: "Protection & Security",
      desc: "Stop loss and take profit orders will help secure your                       investment. The system will automatically execute trades to realise gains.",
    },
    {
      title:  "Licensed Exchange",
      desc: "Our customers perform transactions not only in cryptocurrency,                  but the major world currencies supported by the system."
    },
    {
      title: "Multi Currency Accounts",
      desc:  "Support major currencies: USD, EUR, GBP, and various Cryptocurrencies. Funds exchanged between currencies at market rate."
    }
  ]
  let processes = [
    {
      title: "Sign Up For Free",
      desc: "Create a digital currency wallet for free, where you can securely store all your digital currency.",
    },
    {
      title:  "Create Your Wallet",
      desc: "Bitcoin is received, stored, and sent using Bitcoin Wallet’.Download official Bitcoin Wallet for free."
    },
    {
      title: " Buy & Invest Digital Currency",
      desc:  " Buy some Bitcoin, Ethereum, or any other Digital Currency to begin using the future of money."
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

            return (<FeatureCard title={why.title} desc={why.desc}/>)
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
             {processes.map(why=>{

            return (<FeatureCard title={why.title} desc={why.desc}/>)
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
          
            
            <PricingCard/>
            <PricingCard/>
            <PricingCard/>
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
      @Copyright
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
