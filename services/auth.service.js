
import axios from "axios"
import authHeader from "./authHeader"
const authApiHeaders = {

};
const baseUrl = "http://127.0.0.1:3002/api/auth/";

const register = (userDetails) => {
  return axios.post(baseUrl + "signup", userDetails)
}
const login = (username, password) => {
  return axios
      .post(baseUrl + "login", {username, password})
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data))
        }
        return response.data
      })
      
}

const logOut = () => {
  return axios
      .delete(baseUrl + "logout",{headers: authHeader()})
      .then(response => {
        localStorage.removeItem("user")
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
      .then(response => {
          localStorage.removeItem("user")
      })
}

const authApi2 = {
  register,
  login,
  logOut
}

export default authApi2;
