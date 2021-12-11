import Link from 'next/link'
import Head from 'next/head'

import withAuth from "../../HOC/withAuth";

import { useGetCoinsQuery } from "../../services/cryptoApi";
import userService from "../../services/user.service";

import millify from "millify";
import Coins from "../../components/Coins";
import Fiats from "../../components/Fiats";
import News from "../../components/News";
import Loading from "../../components/Loading";
import Stat from "../../components/Stat";

import dashboardStyles from '../../styles/dashboardLayout.module.css'
import DashboardLayout from '../../components/dashboardLayout'
import DashboardSection from '../../components/dashboardSection'
import DashboardBalanceSection from '../../components/dashboardBalanceSection'
import DashboardGraphSection from '../../components/dashboardGraphSection'
import SubNav from '../../components/subNav'
import DashboardOl from '../../components/dashboardOl'

import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
  

const Dashboard = (props) => {
  const router = useRouter()
  const url = router.asPath
  // const {id} = router.query
 const { data, isCoinsFetching } = useGetCoinsQuery(10);
  const [user, setUser] = useState({
      userName: "",
      balance: {
        prevBalance: 0,
        currBalance: 0,
      }
  })
  useEffect(()=> {
      userService.getUserDetails(props.id)
        .then(res => {
          if (res.data.user.role > 0) {
            router.replace("/admin/" + props.id)
          }
          setUser(res.data.user)
        })
        .catch(err => {
          console.log(err)
        })
  }, [])
 
  const globbalStats = data?.data?.stats;
  let globalStats ={
    total: 1,
    totalExchanges: 2,
    total24hVolume: 3,
    totalMarkets: 4,
    totalMarketCap: 5
  }
  typeof globalStats === "undefined" ? mockGlobalStats : globalStats
  if (isCoinsFetching) return <Loading />;
  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <DashboardBalanceSection user={user} />
      <DashboardGraphSection></DashboardGraphSection>
      <DashboardSection name="Statistics">
          <SubNav items={[{name: "Crypto"}, {name: "Fiats"}]}/>
          <Fiats/>
          <div className={dashboardStyles.container}>
        <div className={dashboardStyles.globalStat}>
          <h5>Global Statistics</h5>
          <div className={dashboardStyles.statRow}>
            <Stat
              title="Total Crytocurrencies"
              value={millify(globalStats.total)}
              icon="https://img.icons8.com/emoji/48/000000/coin-emoji.png"
            />
            <Stat
              title="Total Exchanges"
              value={millify(globalStats.totalExchanges)}
              icon="https://img.icons8.com/fluency/48/000000/exchange-bitcoin.png"
            />

            <Stat
              title="Total Market Cap"
              value={millify(globalStats.totalMarketCap)}
              icon="https://img.icons8.com/color-glass/48/000000/graph.png"
            />
            <Stat
              title="Total 24h Volume"
              value={millify(globalStats.total24hVolume)}
              icon="https://img.icons8.com/external-itim2101-flat-itim2101/64/000000/external-open-24-hours-time-management-itim2101-flat-itim2101.png"
            />
            <Stat
              title="Total Markets"
              value={millify(globalStats.totalMarkets)}
              icon="https://img.icons8.com/nolan/64/total-sales-1.png"
            />
          </div>
        </div>
        <div className={dashboardStyles.topCoins}>
          <h5>Top 10 Cryptocurrencies</h5>
          <Coins simplified />
        </div>
        <div className={dashboardStyles.topNews}>
          <h5>Top Cryptocurrency News</h5>
          <News simplified />
        </div>
      </div>
          <button>Sign Up</button>
      </DashboardSection>
      <DashboardSection name="Referral Link">
        
      </DashboardSection>
    </DashboardLayout>
  )
}

export default withAuth(Dashboard)

{/*
<section class="sect sect--market">
<h3>Top 10 Ranking</h3>
<nav class="sub_nav">
    <div class="sub_nav__item crypto">Crypto</div>
    <div class="sub_nav__item stocks">Stocks</div>
</nav>

<button class="waves-effect waves-light btn">Check out market</button>
</section>
<section class="sect sect--referrals">
<h3>Referral Link</h3>
<input type="text" value="http://shiahdiads">
<button class="waves-effect waves-light btn">Copy</button>
<h3>Referral History</h3>
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>
</section> */}