import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react'

import DashboardLayout from '../../../components/dashboardLayout'
import DashboardSection from '../../../components/dashboardSection'
import AccountsTable from '../../../components/accountsTable'

import { useRouter } from 'next/router'
  
import withAuth from "../../../HOC/withAuth";

const Accounts = () => {
  const router = useRouter()
  const url = router.asPath
  const [accountType, setAccountType] = useState("bank")

  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <DashboardSection name="Add Accounts">
      
      </DashboardSection>
      <AccountsTable/>
      <DashboardSection name="Add Bank Account or Crypto Wallet">
      <div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
        Type
      </label>
      <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="type" type="text" 
        onChange={e=>setAccountType(e.target.value)}
      placeholder="Type">
        <option value="bank">Bank Account</option>
        <option value="wallet">Crypto Wallet</option>
      </select>
    </div>
    {
      accountType === 'bank' ? 
       <span>
    
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="account_number">
        Account Number
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account_number" type="text" placeholder="Account Number"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bank_name">
        Bank Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bank_name" type="text" placeholder="Bank Name"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="routing_number">
        Routing Number
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="routing_number" type="text" placeholder="Routing Number"/>
    </div>
   </span>
      :
       <span>
    
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="wallet_address">
        Wallet Address
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="wallet_address" type="text" placeholder="Wallet Address"/>
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cryptocurrency">
        Cryptocurrency
      </label>
      <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cryptocurrency" type="text" placeholder="Cryptocurrency"> 
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
      </select>
    </div>
   </span>
    }
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Add Account
      </button>
    
    </div>
  </form>
  </div>
      </DashboardSection>
    </DashboardLayout>
  )
}

export default withAuth(Accounts)