import Link from 'next/link'
import Head from 'next/head'
import DashboardLayout from '../../components/dashboardLayout'

import HistoryList from '../../components/historyList'
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
  
import withAuth from "../../HOC/withAuth";
import userService from "../../services/user.service";


const History = ( props ) => {

  const router = useRouter()
  const url = router.asPath
  const [transHistory, setTransHistory] = useState([])

  useEffect(()=> {
      userService.getUserDetails(props.id)
        .then(res => {
           if (res.data.user.role > 0) {
            router.replace("/admin/" + props.id)
          }
          setTransHistory(res.data.user.transHistory)
        })
        .catch(err => {
          console.log(err)
        })
  }, [])
  return (
    <DashboardLayout className="justify-start">
      <Head>
        <title>Dashboard: History</title>
      </Head>
      <h1 className="m-0 ml-4 ">History </h1>
      <HistoryList listItems={transHistory}></HistoryList>
     
    </DashboardLayout>
  )
}

export default withAuth(History)
