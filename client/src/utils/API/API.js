import axios from "axios";

export default {
  // Login
  apiLogin: function (userInfo) {
    return axios.post("/api/login", userInfo);
  },
  // Create new user
  apiRegister: function (userInfo, accessToken) {
    return axios.post("/api/register", userInfo, {
      headers: { authorization: "Bearer " + accessToken },
    });
  },
  // Create new Client
  apiCreateUser: function (userInfo, accessToken) {
    return axios.post("/api/client", userInfo, {
      headers: { authorization: "Bearer " + accessToken },
    });
  },
};
