
import api from "./api"
 

 const getUserDetails = (id) => {
  return api.get( "/user/dashboard/" + id)
}
 const getHistory = (id) => {
  return api.get( "/user/history/" + id)
}

 const updateSettings = (id) => {
  return api.post( "/user/updateSettings/" + id)
      .then(response => {
        return response.data
      }) 
}
 const addWithdrawalAccount = (id, account) => {
  return api.post( "/user/addAccount/", {userID:id, ...account})
      .then(response => {
        return response.data
      })
      
}
const withdraw = (id, data) => {
  return api.post( "/user/withdraw/", {userID:id, ...data})
      .then(response => {
        return response.data
      })
      
}
const deposit = (id, data) => {
  return api.post( "/user/deposit/", {userID:id, ...data})
      .then(response => {
        return response.data
      })
      
}



 const UserService = {
  getUserDetails,
  getHistory,
  updateSettings,
  addWithdrawalAccount,
  withdraw,
  deposit,
 }



export default UserService;
