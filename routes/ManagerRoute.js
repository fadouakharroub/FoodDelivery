const router = require("express").Router();

const managerController = require("../controllers/Manager/Auth");
const middleware = require("../middlewares/auth");

router.route("/register").post(managerController.register);
router.route("/login").post(managerController.login);
router.route("/logout").post(managerController.logout);
router
 
module.exports = router;