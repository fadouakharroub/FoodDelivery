const route = require("express").Router();

const { secteurController } = require("../controller");
const { authentication, authorization } = require("../middleware");

route.get("/", secteurController.getAll);
route.get("/:id", secteurController.get);
route.post(
  "/",
  [authentication, authorization("admin", "chef secteur")],
  secteurController.create
);
route.patch(
  "/:id",
  [authentication, authorization("admin", "chef secteur")],
  secteurController.update
);
route.delete(
  "/:id",
  [authentication, authorization("admin", "chef secteur")],
  secteurController.remove
);

module.exports = route;
