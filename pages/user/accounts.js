import Link from 'next/link'
import Head from 'next/head'
import { useState, useEffect } from 'react'

import DashboardLayout from '../../components/dashboardLayout'
import DashboardSection from '../../components/dashboardSection'
import AccountsTable from '../../components/accountsTable'

import { useRouter } from 'next/router'
  
import withAuth from "../../HOC/withAuth";
import userService from "../../services/user.service";

const Accounts = ( props ) => {
  const router = useRouter()
  const url = router.asPath
  const [accountList, setAccountList] = useState([
  {
      accountNumber: "",
      accountName: "",
      bankName: "",
      routingNumber: ""
  }
  ])

  const [accountType, setAccountType] = useState("bank")
  const [accountNumber, setAccountNumber] = useState("")
  const [bankName, setBankName] = useState("")
  const [accountName, setAccountName] = useState("")
  const [routingNumber, setRoutingNumber] = useState("")

   const [walletAddress, setWalletAddress] = useState("")
   const [cryptocurrency, setCryptocurrency] = useState("")

  useEffect(()=> {
      userService.getUserDetails(props.id)
        .then(res => {
           if (res.data.user.role > 0) {
            router.replace("/admin/" + props.id)
          }          
          setAccountList(res.data.user.accountDetails)
        })
        .catch(err => {
          console.log(err)
        })
  }, [])

  const handleSubmit = () => {
    let account = {}
    if (accountType === "bank") {
      account = {
        accountNumber,
        bankName,
        accountName,
        routingNumber,
      }
    } else {
      account = {
        accountNumber: walletAddress,
        bankName: cryptocurrency,
        accountName: "Crypto",
        routingNumber: "",
      }
    }
    userService.addWithdrawalAccount(props.id, account)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })

  }

  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <DashboardSection name="Add Accounts">
      
      </DashboardSection>
      <AccountsTable accounts={accountList}/>
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
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account_number" type="text" 
        onChange={e=>{setAccountNumber(e.target.value)}}
         value={accountNumber}
      placeholder="Account Number"/>
    </div>
        <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="account_name">
        Account Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="account_name" type="text" 
        onChange={e=>{setAccountName(e.target.value)}}
        value={accountName}
      placeholder="Account Name"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bank_name">
        Bank Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bank_name" type="text" placeholder="Bank Name"
          onChange={e=>{setBankName(e.target.value)}}
          value={bankName}
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="routing_number">
        Routing Number
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="routing_number" type="text" placeholder="Routing Number"
        onChange={e=>{setRoutingNumber(e.target.value)}}
        value={routingNumber}
      />
    </div>
   </span>
      :
       <span>
    
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="wallet_address">
        Wallet Address
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="wallet_address" type="text" placeholder="Wallet Address"
          onChange={e=>{setWalletAddress(e.target.value)}}
        value={walletAddress}
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cryptocurrency">
        Cryptocurrency
      </label>
      <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cryptocurrency" type="text" placeholder="Cryptocurrency" value={cryptocurrency}
        onChange={e=>{setCryptocurrency(e.target.value)}}
      > 
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
      </select>
    </div>
   </span>
    }
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" 
        onClick={handleSubmit}
        >
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