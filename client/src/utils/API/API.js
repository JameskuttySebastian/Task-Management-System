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

  // get all ussers
  apiGetUser: function () {
    return axios.get("/api/user");
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

  // get all tasks
  apiGetTask: function () {
    return axios.get("/api/task");
  },

  // get task by ID
  apiGetTaskById: function (id) {
    return axios.get("/api/task/" + id);
  },

  //assign task to user
  apiAssignTask: function (clientTaskList, accessToken) {
    return axios.post("/api/clintTask", clientTaskList, {
      headers: { authorization: "Bearer " + accessToken },
    });
  },

  //update task status
  apiUpdateTaskStatus: function (id, status, accessToken) {
    return axios.put("/api/task/" + id, status, {
      headers: { authorization: "Bearer " + accessToken },
    });
  },

  // get all assigned tasks
  apiGetAssignedTask: function () {
    return axios.get("/api/assignedTask");
  },

  // get task by ID
  apiGetAssignedTaskById: function (id) {
    return axios.get("/api/assignedTask/" + id);
  },

  // get all assigned tasks for the client
  apiGetAssignedTaskToClient: function (clientId) {
    console.log("apiGetAssignedTaskToClient: function (clientId) : " + clientId);
    return axios.get("/api/assignedTaskToClient/" + clientId);
  },


  apiUpdateAssignedTaskStatus: function (id, status, accessToken) {
    return axios.put("/api/assignedTask/" + id, status, {
      headers: { authorization: "Bearer " + accessToken },
    });
  },
};
