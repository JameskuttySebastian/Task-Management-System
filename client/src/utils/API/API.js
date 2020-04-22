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
  apiCreateClient: function (userInfo, accessToken) {
    return axios.post("/api/client", userInfo, {
      headers: { authorization: "Bearer " + accessToken },
    });
  },

  // get all Client
  apiGetClient: function () {
    return axios.get("/api/client");
  },

  // Create new Task
  apiCreateTask: function (userInfo, accessToken) {
    return axios.post("/api/task", userInfo, {
      headers: { authorization: "Bearer " + accessToken },
    });
  },
};
