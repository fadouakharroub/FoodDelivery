const route = require("express").Router();

const { restaurantController } = require("../controller");
const { upload, authentication, authorization } = require("../middleware");

route.get("/", restaurantController.getAll);
route.get("/:id", restaurantController.get);
route.post(
  "/",
  [authentication, authorization("admin", "chef secteur")],
  upload.single("image"),
  restaurantController.create
);
route.patch(
  "/:id",
  [authentication, authorization("admin", "chef secteur")],
  restaurantController.update
);
route.delete(
  "/:id",
  [authentication, authorization("admin", "chef secteur")],
  restaurantController.remove
);

module.exports = route;
