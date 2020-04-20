import axios from "axios";

export default {
  // Login
  apiLogin: function (userInfo) {
    return axios.post("/api/login/", userInfo);
  },
  // Create new user
  apiRegister: function (userInfo) {
    return axios.post("/api/register", userInfo);
  },
};
