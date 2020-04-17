const router = require("express").Router();
const taskController = require("../../controllers/taskController");

// Matches with "/api/books"
router
  .route("/api/task")
  .get(taskController.findAll)
  .post(taskController.create);

// Matches with "/api/books/:id"
router
  .route("/api/task/:id")
  .get(taskController.findById)
  .put(taskController.update)
  .delete(taskController.remove);

module.exports = router;
