const router = require("express").Router();
const clientTaskAssignedController = require("../../controllers/client_task_AssignedController");

// Matches with "/api/clientTask"
router
  .route("/:clientId")
  .get(clientTaskAssignedController.findAll)
  .post(clientTaskAssignedController.create);

// Matches with "/api/clientTask/:id"
router
  .route("/:id")
  .get(clientTaskAssignedController.findById)
  .put(clientTaskAssignedController.update)
  .delete(clientTaskAssignedController.remove);

module.exports = router;
