import Link from 'next/link'
import Head from 'next/head'
import DashboardLayout from '../../../components/dashboardLayout'

import { useRouter } from 'next/router'
  

export default function Funds() {
  const router = useRouter()
  const url = router.asPath


  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <h1>Withdraw/Deposit </h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </DashboardLayout>
  )
}
