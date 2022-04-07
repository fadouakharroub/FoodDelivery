const router = require("express").Router();

const adminController = require("../controllers/Admin/Auth");
const middleware = require("../middlewares/Auth");

router.route("/register").post(adminController.register);
router.route("/login").post(adminController.login);
router.route("/logout").post(adminController.logout);


module.exports = router;