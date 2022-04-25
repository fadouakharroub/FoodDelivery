const route = require("express").Router();

const { mealController } = require("../controller");
const { upload, authentication, authorization } = require("../middleware");

route.get("/", mealController.getAll);
route.get("/:id", mealController.get);
route.post(
  "/",
  [authentication, authorization("admin", "chef secteur")],
  upload.single("image"),
  mealController.create
);
route.patch(
  "/:id",
  [authentication, authorization("admin", "chef secteur")],
  mealController.update
);
route.delete(
  "/:id",
  [authentication, authorization("admin", "chef secteur")],
  mealController.remove
);

module.exports = route;
