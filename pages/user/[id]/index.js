import Link from 'next/link'
import Head from 'next/head'
import DashboardLayout from '../../../components/dashboardLayout'
import DashboardSection from '../../../components/dashboardSection'
import DashboardBalanceSection from '../../../components/dashboardBalanceSection'
import DashboardGraphSection from '../../../components/dashboardGraphSection'

import { useRouter } from 'next/router'
  

export default function Dashboard() {
  const router = useRouter()
  const url = router.asPath


  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <DashboardBalanceSection />
      <DashboardGraphSection></DashboardGraphSection>
      <DashboardSection name="Top 10 Ranking">

      </DashboardSection>
      <DashboardSection name="Referral Link">
        
      </DashboardSection>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </DashboardLayout>
  )
}
