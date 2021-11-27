
import axios from "axios"
import authHeader from "./authHeader"
const authApiHeaders = {

};
const baseUrl = "http://127.0.0.1:3002/api/user/";

const getUserDetails = (id) => {
  return axios.get(baseUrl + "dashboard/" + id, {
    headers: authHeader()
  })
}
const getHistory = (id) => {
  return axios
      .get(baseUrl + "history" + id, authHeader())
      .then(response => {
        return response.data
      })
      
}

const updateSettings = (id) => {
  return axios
      .post(baseUrl + "updateSettings" + id, authHeader())
      .then(response => {
        return response.data
      })
      
}
const addWithdrawalAccount = (id) => {
  return axios
      .post(baseUrl + "addAccount" + id, authHeader())
      .then(response => {
        return response.data
      })
      
}


const userApi = {
  getUserDetails,
  getHistory,
  updateSettings,
  addWithdrawalAccount,
}

export default userApi;
