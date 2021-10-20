import Link from 'next/link'
import Head from 'next/head'
import DashboardLayout from '../../../components/dashboardLayout'
import DashboardSection from '../../../components/dashboardSection'

import { useRouter } from 'next/router'
  

export default function Dashboard() {
  const router = useRouter()
  const url = router.asPath


  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <h1>First </h1>
      <DashboardSection name="Wallet Details">
          <div className="summary">
               <div className="summary__details">
                <p>Investments: $1399</p>
                <p>Today{`'`}s Profit: $1399</p>
               </div>
                <div className="summary__balance">
                    <p>Your Balance is </p>
                    <p className="big">$140</p>
                </div>
            </div>
      </DashboardSection>
      <DashboardSection name="">
          <div className="graph">
               
            </div>
      </DashboardSection>
      <DashboardSection name="Top 10 Ranking">
          
          

      </DashboardSection>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </DashboardLayout>
  )
}
