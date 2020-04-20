const router = require("express").Router();
const loginController = require("../../controllers/loginController");

router.route("/").post(loginController.findById);
router.route("/login").post(loginController.findById);

module.exports = router;
