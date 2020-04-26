const router = require("express").Router();

// const routeNameRoute = require("./routeName");
const userRegister = require("./register");
const userLogin = require("./login");
const clientRoutes = require("./client");
const client_taskRoutes = require("./client_task");
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

router.use("/clintTask", client_taskRoutes);
router.use("/assignedTask", client_taskRoutes);

//For all the task related routes
router.use("/task", taskRoutes); ///api/task/:id

module.exports = router;
