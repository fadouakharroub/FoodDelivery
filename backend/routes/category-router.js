const route = require("express").Router();

const { categoryController } = require("../controller");
const { authentication, authorization } = require("../middleware");

route.get("/", categoryController.getAll);
route.get("/:id", categoryController.get);
route.post(
  "/",
  [authentication, authorization("admin", "chef secteur")],
  categoryController.create
);
route.patch(
  "/:id",
  [authentication, authorization("admin", "chef secteur")],
  categoryController.update
);
route.delete(
  "/:id",
  [authentication, authorization("admin", "chef secteur")],
  categoryController.remove
);

module.exports = route;
