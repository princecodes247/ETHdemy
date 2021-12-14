import Link from 'next/link'
import Head from 'next/head'
import DashboardLayout from '../../components/dashboardLayout'
import DashboardSection from '../../components/dashboardSection'
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { useRouter } from 'next/router'
  
import withAuth from "../../HOC/withAuth";

const Settings = () => {
  const router = useRouter()
  const url = router.asPath

  const usernameInitialValues = {
    username: "",
    password: ""
  }
  const usernameValidationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
      })
  const handleUpdateUsername = async (formValue) => {
    const {username, password} = formValue
    // console.log(email)
    let res = await UserService.updatePassword(email, password)
    console.log(res)
  }


    const passwordInitialValues = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  }

  const passwordValidationSchema = Yup.object().shape({
    oldPassword: Yup.string().required("This field is required!"),
    newPassword: Yup.string().required("This field is required!"),
  confirmPassword: Yup.string().required("This field is required!"),
      })
  const handleUpdatePassword = async (formValue) => {
    const {oldPassword, newPassword, confirmPassword} = formValue
    // console.log(email)
    let res = await UserService.updatePassword(oldPassword, newPassword)
    console.log(res)
  }


  return (
    <DashboardLayout>
      <Head>
        <title>User Settings</title>
      </Head>
       <DashboardSection>
      <h4>Update Username </h4>
      <Formik
      initialValues={usernameInitialValues}
      validationSchema={usernameValidationSchema}
      onSubmit={handleUpdateUsername}
    >
        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 sm:w-22 mb-4">
  
  
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Update Username
      </label>
      <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="username" type="text" placeholder="Update Username"/>
        <ErrorMessage name="username" component="p" className="text-red-400 mb-3 text-xs "/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Enter Password
      </label>
      <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="password" type="text" placeholder="Enter Password"/>
      <ErrorMessage className="text-red-400 mb-3 text-xs " name="password" component="p"/>
    </div>
 
     
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Update Username
      </button>
    </div>

  </Form>
    </Formik>
     
  </DashboardSection>
      <DashboardSection>
      <h4>Change Password </h4>
      
       <Formik
      initialValues={passwordInitialValues}
      validationSchema={passwordValidationSchema}
      onSubmit={handleUpdatePassword}
    >
        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 sm:w-22 mb-4">
  
  >
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="old_password">
        Old Password
      </label>
      <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="oldPassword" type="text" placeholder="Old Password"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="new_password">
        New Password
      </label>
      <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="newPassword" type="text" placeholder="New Password"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm_new_password">
        Confirm New Password
      </label>
      <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="confirmPassword" type="text" placeholder="Confirm New Password"/>
    </div>
   
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Change Password
      </button>
    
    </div>
    </Form>
    </Formik>
  </DashboardSection>
    </DashboardLayout>
  )
}

export default withAuth(Settings)
