import Link from 'next/link'
import Head from 'next/head'
import DashboardLayout from '../../components/dashboardLayout'
import DashboardSection from '../../components/dashboardSection'

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import userService from "../../services/user.service";

import withAuth from "../../HOC/withAuth";

const Withdraw = (props) => {
  const [accountType, setAccountType] = useState("bank")
   const [balance, setBalance] = useState(0)
   const [amount, setAmount] = useState(0)
   const [carryover, setCarryover] = useState(false)
    const [accountList, setAccountList] = useState([])
    const [selectedAccount, setSelectedAccount] = useState("")
  useEffect(()=> {
     userService.getUserDetails(props.id)
        .then(res => {
           if (res.data.user.role > 0) {
            router.replace("/admin/" + props.id)
          }
          setBalance(res.data.user.balance.currBalance)
          setAccountList(res.data.user.accountDetails)
        })
        .catch(err => {
          console.log(err)
        })
  }, [])
useEffect(()=> {
    
      if (amount > balance) {
        setCarryover(true)
    } else {
        setCarryover(false)
    }
  }, [amount, balance])
  
  const handleAmountChange = (num) => {
    num = num.trim()
    if (num == "") {
      setAmount(0)
      return
    }
    setAmount(typeof parseInt(num) == "number" && !isNaN(parseInt(num)) ? parseInt(num) : parseInt(amount)) 
    
  
   }

   const handleSubmit = () => {
    let data = {
      accountNumber: selectedAccount,
      amount
    }
    console.log("Sdf")
       userService.withdraw(props.id, data)
        .then(res => {
          console.log(props.id)
          console.log(res.data.user)
          setBalance(res.data.user.balance.currBalance)
  
        })
        .catch(err => {
          console.log(err)
        })
   }
 
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
        onChange={e=> setSelectedAccount(e.target.value)}
        value={selectedAccount}
     >

        <option value="" selected disabled>--None Selected--</option>
        {accountList.map(account =>{
         return ( <option value={account.accountNumber}>{`${account.accountNumber} - ${account.accountName.substring(0,10)} - ${account.bankName.substring(0,3)}`}</option>)
        })}
     
      </select>
    </div>

       <span>
    
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
        Amount
      </label>
      <p className="text-gray-400 ">Balance: ${balance}</p>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="amount" type="text" value={amount}
        onChange={e => handleAmountChange(e.target.value)}
       placeholder="Amount"/>
       {
        carryover ? <p className="text-red-400">Balance exceeded!</p> : ""
       }
    </div>
  
   </span>
    
    <div className="flex items-center justify-between">
      <button className={`text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${selectedAccount !== "" ? "bg-blue-500 hover:bg-blue-700": "bg-grey-400"}`} 
        disabled={selectedAccount === "" ? true : false}
      type="button"
        onClick={handleSubmit}
      >
        Make Withdrawal
      </button>
    
    </div>
  </form>
      </DashboardSection>
    </DashboardLayout>
  )
}

export default withAuth(Withdraw)
