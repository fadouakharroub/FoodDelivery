const router = require("express").Router();
const multer = require("multer");

const managerController = require("../controllers/Manager/Auth");
const middleware = require("../middlewares/auth");

const categorieController = require("../controllers/CategorieController");
const repasController = require("../controllers/RepasController");



router.route("/all-categories").get(
    middleware.isManagerAuthenticated,
    categorieController.getAll_categorie);
router.route("/one-categorie/:id").get(
        middleware.isManagerAuthenticated,
        categorieController.getOne_categorie);
router.route("/add-categorie").post(
    middleware.isManagerAuthenticated,
    categorieController.add_categorie);
router.route("/delete-categorie/:id").delete(
        middleware.isManagerAuthenticated,
        categorieController.removeOne_categorie);



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "repas");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});
const uploadRepas = multer({
    storage: storage,
});

router.route("/all-repas").get(
    middleware.isManagerAuthenticated,
    repasController.getAll_repas);
router.route("/one-repas/:id").get(
        middleware.isManagerAuthenticated,
        repasController.getOne_repas);
router.route("/add-repas",uploadRepas.array("image", 20)).post(
    middleware.isManagerAuthenticated,
    repasController.add_repas);
router.route("/update-repas/:id").put(
        middleware.isManagerAuthenticated,
        repasController.update_repas);
router.route("/delete-repas/:id").delete(
        middleware.isManagerAuthenticated,
        repasController.removeOne_repas);



router.route("/register").post(managerController.register);
router.route("/login").post(managerController.login);
router.route("/logout").post(managerController.logout);
router
 
module.exports = router;