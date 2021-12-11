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
      <DashboardSection  name="Profile">
      <div className="flex flex-col items-center gap-8 sm:flex-row">
        <div className="userPic mb-3 w-20 h-20 sm:w-40 sm:h-40 bg-black rounded-lg"></div>
       <div className="info flex flex-col items-center sm:items-start">
           <p className="sm:text-xl">Full Name</p>
        <p className="text-sm">Username</p>
        <span className="group pt-8 flex justify-between gap-8">
          <p>Phone</p>
          <p>Email</p>
        </span>
        <span className="group pt-2 flex justify-between gap-8">
          <p>Address</p>
          <p>Country</p>
        </span>
        <span className="group pt-2 flex justify-between gap-8">
          <p>Deposits</p>
          <p>Balance</p>
        </span>
       </div>
      </div>
      </DashboardSection>
      <DashboardSection name="Pending Transactions">
        
      </DashboardSection>
     <DashboardSection name="User Settings">
          <div className="sect">
            <h5>
            Change Balance
          </h5>
          <p className="text-sm italic">Current Balance</p>
          <input className="text-black rounded p-2 mr-2" type="text" />
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Change Balance</button>
          </div>
          <div className="sect">
            <h5>
            Activate Auto Increment
          </h5>
          <p className="text-sm italic mb-3">Coming Soon...</p>
          <input type="text" />
          <button>Change Balance</button>
          </div>
          <div className="sect">
            <h5>
            Suspend account
          </h5>
          <p className="text-sm italic mb-3">Current Status</p>
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Suspend this account</button>
          </div>
      </DashboardSection>
    </DashboardLayout>
  )
}

export default View;