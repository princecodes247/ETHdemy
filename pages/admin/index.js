import Link from 'next/link'
import Head from 'next/head'

// import withAuth from "../../HOC/withAuth";

import AdminService from "../../services/admin.service";

import Loading from "../../components/Loading";
import UsersList from "../../components/admin/usersList";

import dashboardStyles from '../../styles/dashboardLayout.module.css'
import DashboardLayout from '../../components/dashboardLayout'
import DashboardSection from '../../components/dashboardSection'
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
  

const AdminDashboard = (props) => {
  const router = useRouter()
  const url = router.asPath
  const [users, setUsers] = useState([])
  useEffect(()=> {
      AdminService.getAllUsers()
        .then(res => {
          setUsers(res.users)
        })
        .catch(err => {
          console.log(err)
        })
  }, [])
 
  return (
    <DashboardLayout admin={true}>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
     
      <DashboardSection name="Statistics">
        <div>
          User Count
        </div>
        <div>
          Graph Showing days with most usage
        </div>  
      </DashboardSection>
      <DashboardSection name="Statistics">
      <UsersList usersList={users}/>
      </DashboardSection>
      
    </DashboardLayout>
  )
}

export default AdminDashboard
