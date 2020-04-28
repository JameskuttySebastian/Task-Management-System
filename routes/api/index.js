const router = require("express").Router();

// const routeNameRoute = require("./routeName");
const userRegister = require("./register");
const userLogin = require("./login");
const clientRoutes = require("./client");
const client_taskRoutes = require("./client_task");
const client_task_assignedRoutes = require("./client_task_assigned");
const taskRoutes = require("./task");
const userRoutes = require("./user");

//register a new user
router.use("/register", userRegister);

// login a a user
router.use("/", userLogin);

// create user
router.use("/user", userRoutes);

//create new client
router.use("/client", clientRoutes);

//admin routes for clint and assigned tasks
router.use("/clintTask", client_taskRoutes);
router.use("/assignedTask", client_taskRoutes);

//client routes for assigned tasks
router.use("/assignedTaskToClient", client_task_assignedRoutes);

//For all the task related routes
router.use("/task", taskRoutes); ///api/task/:id

module.exports = router;
