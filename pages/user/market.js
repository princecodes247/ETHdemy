import Link from 'next/link'
import Head from 'next/head'
import DashboardLayout from '../../components/dashboardLayout'
import DashboardSection from '../../components/dashboardSection'

import { useRouter } from 'next/router'
  
import withAuth from "../../HOC/withAuth";

const Market = () => {

  const router = useRouter()
  const url = router.asPath


  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <DashboardSection>
        <h1>Buy Bitcoins </h1>
      <p>Don't know where to get your bitcoins? Here are some options</p>
      </DashboardSection>
    </DashboardLayout>
  )
}

export default withAuth(Market)
