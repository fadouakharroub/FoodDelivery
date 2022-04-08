const router = require("express").Router();

const adminController = require("../controllers/Admin/Auth");
const middleware = require("../middlewares/Auth");

const livreurController = require("../controllers/LivreurController");

router.route("/all-livreurs").get(
    middleware.isAdminAuthenticated,
    livreurController.getAll_livreur);
router.route("/one-livreur/:id").get(
        middleware.isAdminAuthenticated,
        livreurController.getOne_livreur);
router.route("/add-livreur").post(
    middleware.isAdminAuthenticated,
    livreurController.add_livreur);
router.route("/delete-livreur/:id").delete(
        middleware.isAdminAuthenticated,
        livreurController.removeOne_livreur);

router.route("/register").post(adminController.register);
router.route("/login").post(adminController.login);
router.route("/logout").post(adminController.logout);


module.exports = router;