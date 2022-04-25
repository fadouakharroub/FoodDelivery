const router = require("express").Router();

const { userController } = require("../controller");
const { authentication, authorization } = require("../middleware");

router.post(
  "/Add-Chef",
  [authentication, authorization("admin")],
  userController.add,
  userController.addChef
);
router.post(
  "/Add-Livreur",
  [authentication, authorization("admin", "chef secteur")],
  userController.add,
  userController.addLivreur
);
router.get(
  "/",
  [authentication, authorization("admin", "chef secteur")],
  userController.getAll
);
router.get(
  "/:id",
  authentication, 
  userController.get
);
router.patch(
  "/:id",
  authentication, 
  userController.update
);
router.delete(
  "/:id",
  [authentication, authorization("admin", "chef secteur")],
  userController.remove
);

module.exports = router;
