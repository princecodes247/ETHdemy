import Link from 'next/link'
import Head from 'next/head'
import DashboardLayout from '../../../components/dashboardLayout'

import DashboardOL from '../../../components/dashboardOl'

import { useRouter } from 'next/router'
  
import withAuth from "../../../HOC/withAuth";

const History = () => {

  const router = useRouter()
  const url = router.asPath


  return (
    <DashboardLayout className="justify-start">
      <Head>
        <title>Dashboard: History</title>
      </Head>
      <h1 className="m-0 ml-4 ">History </h1>
      <DashboardOL listItems={["asd","sd"]}></DashboardOL>
     
    </DashboardLayout>
  )
}

export default withAuth(History)
