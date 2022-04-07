const router = require("express").Router();

const clientController = require("../controllers/Client/Auth");
const middleware = require("../middlewares/Auth");

router.route("/register").post(clientController.register);
router.route("/login").post(clientController.login);
router.route("/logout").post(clientController.logout);

module.exports = router;