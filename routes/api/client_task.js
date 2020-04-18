const router = require("express").Router();
const clientTaskController = require("../../controllers/client_taskController");

// Matches with "/api/books"
router
  .route("/api/clientTask")
  .get(clientTaskController.findAll)
  .post(clientTaskController.create);

// Matches with "/api/books/:id"
router
  .route("/api/clientTask/:id")
  .get(clientTaskController.findById)
  .put(clientTaskController.update)
  .delete(clientTaskController.remove);

module.exports = router;
