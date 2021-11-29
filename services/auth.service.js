import api from "./api"
import TokenService from "./token.service"



  const register = (userDetails) => {
    return api.post("/auth/signup", userDetails)
  }
  const login = (username, password) => {
    return api
        .post("/auth/login", {username, password})
        .then(response => {
          if (response.data.accessToken) {
            TokenService.setUser(response.data)
          }
          return response.data
        })
        
  }



  const logout = () => {
    TokenService.removeUser("user");
  }
 const  getCurrentUser = () => {
    return TokenService.getUser("user");
  }

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser
}

export default AuthService;
