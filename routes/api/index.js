const router = require("express").Router();
// const bookRoutes = require("./books");
const client_taskRoutes = require("./client_task");
const clientRoutes = require("./client");
const taskRoutes = require("./task");
const userRoutes = require("./user");

// Book routes
// router.use("/books", bookRoutes);
router.use("/api/client_task", client_taskRoutes);
router.use("/api/client", clientRoutes);
router.use("/api/task", taskRoutes);
router.use("/api/user", userRoutes);

module.exports = router;
