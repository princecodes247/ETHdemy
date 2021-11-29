import axios from "axios"
import TokenService from "./token.service"
const baseURL = "http://127.0.0.1:3002/api";
const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json"
  }
})

instance.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken();
    if (token) {
      config.headers["x-access-token"] = token
    }
    return config;
  },
  (error) => {
    return Promise.reject(error)
  }
  );


instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (originalConfig.url !== "/auth/signup" && err) {
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const rs = await instance.post("/user/refreshToken", {
            refreshToken: TokenService.getLocalRefreshToken()
          })
          const { accessToken } = rs.data;
          TokenService.updateLocalAccessToken(accessToken);

          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error)
        }
      }
    }
    return Promise.reject(err)
  }
  );

export default instance;