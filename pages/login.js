import { useRouter } from 'next/router'
import DashboardSection from '../components/dashboardSection'
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import AuthService from "../services/auth.service"
import forwardAuth from "../HOC/forwardAuth";


const Login = () => {
  const Router = useRouter()
  
  const initialValues = {
    email: "",
    password: ""
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email is not valid').required("Email is required!"),
    password: Yup.string().required("Password is required"),
      })
  const handleLogin = async (formValue) => {
    const {email, password} = formValue
    console.log(email)
    let res = await AuthService.login(email, password)
    console.log(res)
    Router.replace(`/user/dashboard`)
  }

  return <DashboardSection>
  		<h2>Login</h2>
  	<Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
      validateOnMount
    >
 
             <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 md:w-140 mb-4">
  
    <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Email Address
          </label>
          <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" type="email" placeholder="Enter Email Address"/>

          <ErrorMessage name="email" component="p" className="text-red-400 mb-3 text-xs "/>
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
        Login
      </button>
        <p className="text-black">Not yet registered? <a className="text-blue-700" href="/signup">Sign up here</a></p>
    </div>
 
  </Form>
       
    </Formik>
  </DashboardSection>
}

export default forwardAuth(Login)
