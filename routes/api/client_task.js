const router = require("express").Router();
const clientTaskController = require("../../controllers/client_taskController");

// Matches with "/api/clientTask"
router
  .route("/")
  .get(clientTaskController.findAll)
  .post(clientTaskController.create);

// Matches with "/api/clientTask/:id"
router
  .route("/:id")
  .get(clientTaskController.findById)
  .put(clientTaskController.update)
  .delete(clientTaskController.remove);

module.exports = router;
