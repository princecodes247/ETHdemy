import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import widgetStyles from '../styles/widgets.module.css'
// import Link from 'next/link'

export default function Home() {
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
      <header className={styles.header}>
        <div className={styles.nav}>
          <div className={styles.logo}>Grypto</div>
          <ul className={styles.nav_links}>
            <li className={styles.nav_link}>Home</li>
            <li className={styles.nav_link}>Home</li>
            <li className={styles.nav_link}>Home</li>
          </ul>
        </div>
        <div className="cta_btns">
          <button className="btn">Sign In</button>
          <button className="btn">Sign Up</button>
        </div>
      </header>
      <section className={styles.sect_hero}>
        <div className={styles.col}>
          <div className={styles.hero__text}>
            <p className={styles.text_sub}>#1 INVESTMENT PLATFORM</p>
            <h1>Invest, Buy and Sell Stocks and Crypto</h1>
            <p>
              With Jcrypto, you can buy, sell and invest in stocks and crypto
              without hassle
            </p>
            <button className="btn">Sign Up</button>
          </div>
          <div className="partners">
            <p className={styles.text_sub}>Over 6,000+ trusted companies in the world</p>
            <div className="glide">
              <div className="glide__track" data-glide-el="track">
            <ul className={styles.partners__list}>
             
            </ul>
            </div>
           
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <img className="hero__img" src="./stuuf" alt="stuff" />
        </div>
      </section>
      <section className="sect sect--why">
        <div className={styles.col}>
          <h2>Why Invest in Stocks and Cryptocurrency</h2>
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
      <section className={styles.sect_features}>
        <div className={styles.features_list}>
          <div
            className="   wow fadeInUp animated"
            data-wow-delay="100ms"
            style={{
              visibility: "visible",
              animationDelay: '100ms',
              animationName: "fadeInUp" }}
          >
            <div className={widgetStyles.feature_card}>
              <div className={widgetStyles.feature_card_icon}>
                <i className="icon-lock"></i>
              </div>
              <div className={widgetStyles.feature_card_content}>
                <h3 className={widgetStyles.feature_card_title}>Protection &amp; Security</h3>
                <p className={widgetStyles.feature_card_desc}>
                  Stop loss and take profit orders will help secure your
                  investment. The system will automatically execute trades to
                  realise gains.
                </p>
              </div>
            </div>
          </div>
          <div
            className="   wow fadeInUp animated"
            data-wow-delay="200ms"
            style={{
              visibility: "visible",
              animationDelay: "200ms",
              animationName: "fadeInUp" }}
            
          >
            <div className={widgetStyles.feature_card}>
              <div className={widgetStyles.feature_card_icon}>
                <i className="icon-search"></i>
              </div>
              <div className={widgetStyles.feature_card_content}>
                <h3 className={widgetStyles.feature_card_title}>Licensed Exchange</h3>
                <p className={widgetStyles.feature_card_desc}>
                  Our customers perform transactions not only in cryptocurrency,
                  but the major world currencies supported by the system.
                </p>
              </div>
            </div>
          </div>

          <div
            className="   wow fadeInUp animated"
            data-wow-delay="200ms"
            style={{
              visibility: "visible",
              animationDelay: "200ms",
              animationName: "fadeInUp" }}
            
          >
            <div className={widgetStyles.feature_card}>
              <div className={widgetStyles.feature_card_icon}>
                <i className="icon-layers"></i>
              </div>
              <div className={widgetStyles.feature_card_content}>
                <h3 className={widgetStyles.feature_card_title}>Multi Currency Accounts</h3>
                <p className={widgetStyles.feature_card_desc}>
                  Support major currencies: USD, EUR, GBP, and various
                  Cryptocurrencies. Funds exchanged between currencies at market
                  rate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sect sect--charts">
        <div className={styles.col}>
          <div className="bitcoin-pricing widget"></div>
        </div>
        <div className={styles.col}>
          <div className="bitcoin-chart widget"></div>
        </div>
      </section>

      <section className="sect sect--process">
        <h3>The Process</h3>
        <div className="{styles.row">
          <div className="features-list">
            <div
              className="   wow fadeIn animated"
              data-wow-delay="100ms"
              style={{
                visibility: "visible",
                animationDelay: '100ms',
                animationName: "fadeIn" }}
              
            >
              <div className={widgetStyles.feature_card}>
                <div className={widgetStyles.feature_card_icon}>
                  <i className="icon-briefcase"></i>
                </div>
                <div className={widgetStyles.feature_card_content}>
                  <h3 className={widgetStyles.feature_card_title}>Sign Up For Free</h3>
                  <p className={widgetStyles.feature_card_desc}>
                    Create a digital currency wallet for free, where you can
                    securely store all your digital currency.
                  </p>
                  <a href="#" className="read--more"
                    ><i className="fa fa-plus"></i>Read More</a
                  >
                </div>
              </div>
            </div>

            <div
              className="   wow fadeIn animated"
              data-wow-delay="200ms"
              style={{
                visibility: "visible",
                animationDelay: "200ms",
                animationName: "fadeIn" }}
              
            >
              <div className={widgetStyles.feature_card}>
                <div className={widgetStyles.feature_card_icon}>
                  <i className="icon-wallet"></i>
                </div>
                <div className={widgetStyles.feature_card_content}>
                  <h3 className={widgetStyles.feature_card_title}>Create Your Wallet</h3>
                  <p className={widgetStyles.feature_card_desc}>
                    Bitcoin is received, stored, and sent using Bitcoin Wallet’.
                    Download official Bitcoin Wallet for free.
                  </p>
                  <a href="#" className="read--more"
                    ><i className="fa fa-plus"></i>Read More</a
                  >
                </div>
              </div>
            </div>

            <div
              className="   wow fadeIn animated"
              data-wow-delay="300ms"
              style={{
                visibility: "visible",
                animationDelay: "300ms",
                animationName: "fadeIn" }}
              
            >
              <div className={widgetStyles.feature_card}>
                <div className={widgetStyles.feature_card_icon}>
                  <i className="icon-bargraph"></i>
                </div>
                <div className={widgetStyles.feature_card_content}>
                  <h3 className={widgetStyles.feature_card_title}>
                    Buy &amp; Sell Digital Currency
                  </h3>
                  <p className={widgetStyles.feature_card_desc}>
                    Buy some Bitcoin, Ethereum, or any other Digital Currency to
                    begin using the future of money.
                  </p>
                  <a href="#" className="read--more"
                    ><i className="fa fa-plus"></i>Read More</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sect_pricing}>
        <div className="container">
          <div className={styles.row}>
            <div className="   ">
              <div className="heading heading-1 text--center ">
                <p className={styles.heading_subtitle}>Invest Now!</p>
                <h2 className="heading--title">Our Pricing</h2>
                <p className={styles.heading_desc}>
                  Invest now with us to earn every day and forever in your
                  wallet. We accept Investment from all over the world.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div
              className="
                  
                price-table
                wow
                fadeInUp
                animated
              "
              data-wow-delay="100ms"
              style={{
                visibility: "visible",
                animationDelay: '100ms',
                animationName: "fadeInUp" }}
            >
              <div className={widgetStyles.pricing_panel}>
                <div className={widgetStyles.pricing_heading}>
                  <div className="pricing--icon">
                    <img
                      src="assets/images/icons/BitcoinIcon4.png"
                      alt="Bitcoin Icon"
                    />
                  </div>
                  <h4>Starter Crypto Plan</h4>
                  <p>12<span className="currency">%</span></p>
                  <div className="pricing--desc">
                    Enjoy your investment with Bitcoin or Ethereum growing every
                    day.
                  </div>
                  <a
                    className="btn btn--secondary btn--bordered btn--rounded"
                    href="#"
                    >Invest Now</a
                  >
                </div>

                <div className="pricing--footer">From $1000 to $10000</div>
              </div>
            </div>

            <div
              className="
                  
                price-table
                pricing-active
                wow
                fadeInUp
                animated
              "
              data-wow-delay="200ms"
              style={{
                visibility: "visible",
                animationDelay: "200ms",
                animationName: "fadeInUp" }}
              
            >
              <div className={widgetStyles.pricing_panel}>
                <div className="{widgetStyles.pricing_heading text--center">
                  <div className="pricing--icon">
                    <img
                      src="assets/images/icons/BitcoinIcon5.png"
                      alt="Bitcoin Icon"
                    />
                  </div>
                  <h4>Basic Crypto Plan</h4>
                  <p>25<span className="currency">%</span></p>
                  <div className="pricing--desc">
                    Enjoy your investment with Bitcoin or Ethereum growing every
                    day.
                  </div>
                  <a className="btn btn--white btn--bordered btn--rounded" href="#"
                    >Invest Now</a
                  >
                </div>

                <div className="pricing--footer">From $10000 to $20000</div>
              </div>
            </div>

            <div
              className="
                  
                price-table
                wow
                fadeInUp
                animated
              "
              data-wow-delay="300ms"
              style={{
                visibility: "visible",
                animationDelay: "300ms",
                animationName: "fadeInUp" }}
              
            >
              <div className="widgetStyles.pricing_panel">
                <div className="{widgetStyles.pricing_heading text--center">
                  <div className="pricing--icon">
                    <img
                      src="assets/images/icons/BitcoinIcon4.png"
                      alt="Bitcoin Icon"
                    />
                  </div>
                  <h4>Starter Crypto Plan</h4>
                  <p>12<span className="currency">%</span></p>
                  <div className="pricing--desc">
                    Enjoy your investment with Bitcoin or Ethereum growing every
                    day.
                  </div>
                  <a
                    className="btn btn--secondary btn--bordered btn--rounded"
                    href="#"
                    >Invest Now</a
                  >
                </div>

                <div className="pricing--footer">From $1000 to $10000</div>
              </div>
            </div>
          </div>
          <div className="{styles.row">
            <div className="   ">
              <div className="pricing--notes ">
                Time until ICO close, ICO is live now. 39 million tokens in
                total, 9 million tokens issued during the ICO period
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
      </main>

   
  )
}
