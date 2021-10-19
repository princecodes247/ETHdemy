import Link from 'next/link'
import Head from 'next/head'
import DashboardLayout from '../../../components/dashboardLayout'

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </DashboardLayout>
  )
}
