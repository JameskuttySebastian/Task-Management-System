const router = require("express").Router();

// const routeNameRoute = require("./routeName");
const userRegister = require("./register");
const userLogin = require("./login");

// const client_taskRoutes = require("./client_task");
// const clientRoutes = require("./client");
// const taskRoutes = require("./task");
// const userRoutes = require("./user");

//register a new user
router.use("/register", userRegister);

// login a auser
router.use("/login", userLogin);
router.use("/", userLogin);

// router.use("/client_task", client_taskRoutes);
// router.use("/client", clientRoutes);
// router.use("/task", taskRoutes);
// router.use("/user", userRoutes);

module.exports = router;
