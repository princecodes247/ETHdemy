import Link from 'next/link'
import Head from 'next/head'
import { useState, useEffect } from 'react'

import DashboardLayout from '../../components/dashboardLayout'
import DashboardSection from '../../components/dashboardSection'
import AccountsTable from '../../components/accountsTable'

import { useRouter } from 'next/router'
  
import withAuth from "../../HOC/withAuth";
import userService from "../../services/user.service";

const View = ( props ) => {
  const router = useRouter()
  const url = router.asPath


  useEffect(()=> {
  
  }, [])

 

  return (
    <DashboardLayout>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <DashboardSection name="Profile">
        <p>Full Name</p>
        <p>Username</p>
        <p>Phone</p>
        <p>Email</p>
        <p>Country</p>
        <p>Address</p>
        <p>Country</p>
        <p>Country</p>
        <p>Balance</p>
      </DashboardSection>
      <DashboardSection name="Pending Transactions">
        
      </DashboardSection>
     <DashboardSection name="User Settings">
          <p>
            Change Balance
          </p>
          <p>
            Activate Auto Increment
          </p>
          <p>
            Suspend account
          </p>
      </DashboardSection>
    </DashboardLayout>
  )
}

export default View;