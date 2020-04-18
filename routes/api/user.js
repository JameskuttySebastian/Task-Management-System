const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/books"
router
  .route("/api/user")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/books/:id"
router
  .route("/api/user/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
