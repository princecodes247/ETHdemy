import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react'


import DashboardLayout from '../../../components/dashboardLayout'
import DashboardSection from '../../../components/dashboardSection'
import { useRouter } from 'next/router'
  
import withAuth from "../../../HOC/withAuth";

const Deposit = () => {
  const router = useRouter()
  const url = router.asPath
    const [accountType, setAccountType] = useState("wallet")

  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <DashboardSection>
        <h1>Deposit </h1>
   <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
        Type
      </label>
      <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="type" type="text" 
        onChange={e=>setAccountType(e.target.value)}
      placeholder="Type">
        <option value="bank">Bank Deposit</option>
        <option selected value="wallet">Crypto Wallet</option>
      </select>
    </div>
    {
      accountType === 'bank' ? 
       <span>
        <p className="text-red-500">Bank Deposits are currently not available, please use Cryptocurrency instead</p>
   </span>
      :
       <span>
      <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cryptocurrency">
        Cryptocurrency
      </label>
      <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cryptocurrency" type="text" placeholder="Cryptocurrency"> 
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
      </select>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="wallet_address">
        Wallet Address
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:outline-none focus:shadow-outline" id="wallet_address" type="text" placeholder="Wallet Address" />
       <button className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Copy Address
      </button>
    </div>
     <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        QR Code
      </label>
      <p className="text-red-500">Generated QR Code</p>
    </div>

  
   </span>
    }
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Confirm Transaction
      </button>
    
    </div>
  </form>
      </DashboardSection>
    </DashboardLayout>
  )
}

export default withAuth(Deposit)