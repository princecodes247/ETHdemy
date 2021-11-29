import api from "./api"
import TokenService from "./token.service"


// REMOVE THIS
const getUser = () => {
    return api
        .get("admin/getuser")
        .then(response => {
          return response.data
        })
}

const getAllUsers = () => {
    return api
        .get("admin/getallusers")
        .then(response => {
          return response.data
        })
}

const changeUserBalance = (newBalance) => {
    return api
        .post("admin/changeuserbalance", {newBalance})
        .then(response => {
          return response.data
        })
}

const deactivateAccount = (userID) => {
    return api
        .post("admin/deactivateaccount", {userID})
        .then(response => {
          return response.data
        })
}

const toggleAutoIncrement = (userID, amount, duration) => {
  // duration in hours
    return api
        .post("admin/deactivateaccount", {userID, amount, duration})
        .then(response => {
          return response.data
        })
}

  const logout = () => {
    TokenService.removeUser("admin");
  }
 const  getCurrentUser = () => {
    return TokenService.getUser("admin");
  }

const AuthService = {
  logout,
  getCurrentUser,
  getUser,
  getAllUsers,
  changeUserBalance,
  deactivateAccount,
  toggleAutoIncrement,
}

export default AuthService;