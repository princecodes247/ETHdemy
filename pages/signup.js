import { useRouter } from 'next/router'
import DashboardSection from '../components/dashboardSection'
import { useState, useEffect } from "react"
import AuthService from "../services/auth.service"
import forwardAuth from "../HOC/forwardAuth";

const SignUp = () => {
	const router = useRouter()
	let [fullName, setFullName] = useState("")
	let [userName, setUserName] = useState("")
	let [email, setEmail] = useState("")
	let [phone, setPhone] = useState("")
	let [address, setAddress] = useState("")
	let [zipCode, setZipCode] = useState("")
	let [country, setCountry] = useState("")
	let [password, setPassword] = useState("")
	let [formAlert, setFormAlert] = useState("")
	let [confirmPassword, setConfirmPassword] = useState("")
	let [passwordsMatch, setPasswordsMatch] = useState(0)

	const handleSubmit = e => {
		e.preventDefault()
		let data = {
			fullName,
			userName,
			email,
			phone,
			address,
			zipCode,
			country,
			password,
			confirmPassword,
		}
		console.log("sent")
		AuthService.register(data)
			.then(resp => {
				console.log(resp)
				console.log(resp.data.message)
				if (resp.status == 200) {
					router.replace("/login")
				} else if (resp.data.status == 500) {
					setFormAlert(resp.data.message)
				}
			})
			.catch(err => {
				if (true) {
					console.log(err.message)
					// setFormAlert(err)
				}
			})
	}
	useEffect(()=> {

		if (password.length > 0 ||confirmPassword.length > 0) {
			if (password == confirmPassword) {
				setPasswordsMatch(1)
			} else {
				setPasswordsMatch(2)
			}
		} else {
			setPasswordsMatch(0)
		}

	},[password, confirmPassword])
	
  
  const { pid } = router.query

  return <DashboardSection>
  		<h2>Sign Up</h2>
  		<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
  		<div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="full_name">
        Full Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="full_name" type="text" onChange={e=>setFullName(e.target.value)} value={fullName} placeholder="Enter your Full Name" 
      />
    </div>
   
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" onChange={e=>setUserName(e.target.value)} value={userName} placeholder="Enter Username" required/>
    </div>
		<div className="mb-4">
		      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
		        Email Address
		      </label>
		      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" onChange={e=>setEmail(e.target.value)} value={email} placeholder="Enter Email Address" required/>
		    </div>

	<div className="mb-4">
		      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
		        Phone Number
		      </label>
		      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" onChange={e=>setPhone(e.target.value)} value={phone} placeholder="Enter Phone Number with country code" required/>
		    </div>

    <div className="mb-1">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Enter Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" onChange={e=>setPassword(e.target.value)} value={password} placeholder="Enter Password" required/>
    </div>
    <p className="text-red-400 mb-3 text-xs ">Password must be more than 8 characters</p>
    {
    	password.length < 8 ? (<p className="text-red-400 mb-3 text-xs ">Password must be more than 8 characters</p>) : ""
    }
    <div className="mb-1">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm_password">
        Confirm Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="confirm_password" type="text" onChange={e=>setConfirmPassword(e.target.value)} value={confirmPassword} placeholder="Confirm Password" required/>
    </div>
    {
    	passwordsMatch == 0 ? "" : passwordsMatch == 1 ?
    (<p className="text-green-400 mb-3 text-xs ">Passwords Match</p>)
    :
    (<p className="text-red-400 mb-3 text-xs ">Passwords do not Match</p>)
    }
		<div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
        Address Line
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" onChange={e=>setAddress(e.target.value)} value={address} placeholder="Enter Address Line" required/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zip_code">
        Zip Code
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="zip_code" type="text" onChange={e=>setZipCode(e.target.value)} value={zipCode} placeholder="Enter Zip Code" required/>
    </div> 
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
        Country
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="country" type="text" onChange={e=>setCountry(e.target.value)} value={country} placeholder="Enter your Country name (e.g Albainia)" required/>
    </div> 
    <p className="text-red-400 mb-3 text-xs ">{formAlert}</p> 
     
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"
      >
        Sign Up
      </button>

    	<p className="text-black">Already registered? <a className="text-blue-700" href="/login">Log in here</a></p>
    </div>
  </form>
  </DashboardSection>
}

export default forwardAuth(SignUp)
