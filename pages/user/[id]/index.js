import Link from 'next/link'
import Head from 'next/head'
import DashboardLayout from '../../../components/dashboardLayout'
import DashboardSection from '../../../components/dashboardSection'
import DashboardBalanceSection from '../../../components/dashboardBalanceSection'
import DashboardGraphSection from '../../../components/dashboardGraphSection'
import SubNav from '../../../components/subNav'
import DashboardOl from '../../../components/dashboardOl'

import { useRouter } from 'next/router'
  

export default function Dashboard() {
  const router = useRouter()
  const url = router.asPath

  let mockAssets = [{name: "BTC", marketCap: "$44933043"},{name: "ETH", marketCap: "$3928409043"}]

  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <DashboardBalanceSection />
      <DashboardGraphSection></DashboardGraphSection>
      <DashboardSection name="Top 10 Ranking">
          <SubNav items={[{name: "Crypto"}, {name: "Stocks"}]}/>
          
          <DashboardOl listItems={mockAssets}/>
          <button>Sign Up</button>
      </DashboardSection>
      <DashboardSection name="Referral Link">
        
      </DashboardSection>
    </DashboardLayout>
  )
}



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