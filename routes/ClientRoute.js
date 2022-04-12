const router = require("express").Router();

const clientController = require("../controllers/Client/Auth");
const middleware = require("../middlewares/Auth");

const orderController = require("../controllers/Client/OrderController");

router.route("/create-order").post(
    middleware.isClientAuthenticated,
    orderController.createOrder);
router.route("/delete-order/:id").delete(
        middleware.isClientAuthenticated,
        orderController.deleteOrder);

router.route("/register").post(clientController.register);
router.route("/login").post(clientController.login);
router.route("/logout").post(clientController.logout);

module.exports = router;