import Link from 'next/link'
import Head from 'next/head'
import DashboardLayout from '../../../components/dashboardLayout'
import DashboardSection from '../../../components/dashboardSection'

import { useRouter } from 'next/router'
import { useState } from 'react'


import withAuth from "../../../HOC/withAuth";

const Withdraw = () => {
  const [accountType, setAccountType] = useState("bank")
   const [balance, setBalance] = useState(300)
   const [amount, setAmount] = useState(0)
   const [carryover, setCarryover] = useState(false)
   

   const handleAmountChange = (num) => {
    num = num.trim()
    if (num == "") {
      // setAmount(0)
      // return
    }
    setAmount(typeof parseInt(num) == "number" && !isNaN(parseInt(num)) ? parseInt(num) : amount) 
    
    if (amount > balance) {

    } 
   }
  const [accountList, setAccountList] = useState(["as","asssa"])
  const router = useRouter()
  const url = router.asPath


  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <DashboardSection>

      <h1>Withdraw </h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
        Select Target Account/Address
      </label>
      <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="type" type="text" 
        
     >

        <option value="none" selected disabled>--None Selected--</option>
        <option value="a">Bank Account</option>
        <option value="b">Crypto Wallet</option>
      </select>
    </div>

       <span>
    
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
        Amount
      </label>
      <p className="text-gray-400 ">Balance: $300</p>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="amount" type="text" value={amount}
        onChange={e=> handleAmountChange(e.target.value)}
       placeholder="Amount"/>
       {
        carryover ? <p className="text-red-400">Balance exceeded!</p> : ""
       }
    </div>
  
   </span>
    
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Make Withdrawal
      </button>
    
    </div>
  </form>
      </DashboardSection>
    </DashboardLayout>
  )
}

export default withAuth(Withdraw)
