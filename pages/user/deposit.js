import Link from 'next/link'
import Head from 'next/head'
import { useState } from 'react'
import copy from 'copy-to-clipboard'

import DashboardLayout from '../../components/dashboardLayout'
import DashboardSection from '../../components/dashboardSection'
import { useRouter } from 'next/router'
  import userService from "../../services/user.service"; 
import withAuth from "../../HOC/withAuth";

const Deposit = (props) => {
  const router = useRouter()
  const url = router.asPath
    const [accountType, setAccountType] = useState("wallet")
    const [walletAddress, setWalletAddress] = useState("qwerftgh")
    const [amount, setAmount] = useState(0)
    const [alert, setAlert] = useState("")
    const [makingDeposit, setMakingDeposit] = useState(false)
    const [copied, setCopied] = useState(false)
    const copyToClipboard = text => {
      setCopied(true)
      const res = copy(text, {});
      setTimeout(()=> {
        setCopied(false)
      }, 2000)
    }
  const handleSubmit = () => {
    setMakingDeposit(true)
    let data = {
      accountNumber: walletAddress,
      amount
    }
    console.log("Sdf")

       userService.deposit(props.id, data)
        .then(res => {
           if (res.data.user.role > 0) {
            router.replace("/admin/" + props.id)
          }
          setMakingDeposit(false)
          setAlert("Confirmation Request Sent! Will be processed in 24 hours")
  
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
        <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
        Amount
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:outline-none focus:shadow-outline" id="amount" type="text" placeholder="Amount" 
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
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
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:outline-none focus:shadow-outline" id="wallet_address" type="text" placeholder="Wallet Address"
        value={walletAddress}
        readonly
       />
       <button className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
          onClick={()=>{copyToClipboard(walletAddress)}}
       >
        {copied ? "Copied" : "Copy Address"}
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
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
        onClick={handleSubmit}
      >
        {!makingDeposit ? "Confirm Transaction" : "Sending Request"}
      </button>
    
    </div>
    <p className="text-green-400 mb-3 text-xs ">{alert}</p>
  </form>
      </DashboardSection>
    </DashboardLayout>
  )
}

export default withAuth(Deposit)