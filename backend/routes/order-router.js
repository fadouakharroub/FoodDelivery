const route = require("express").Router();

const { orderController } = require("../controller");
const { authentication, authorization } = require("../middleware");

route.get("/", orderController.getAll);
route.get("/:id", orderController.get);
route.post("/", authentication, orderController.create);
route.delete(
  "/:id",
  [authentication, authorization("admin", "chef secteur")],
  orderController.remove
);
route.patch(
  "/:id",
  [authentication, authorization("admin", "chef secteur")],
  orderController.update
);
route.patch(
  "/:id/inProcess",
  [authentication, authorization("admin", "chef secteur")],
  orderController.inProcess
);
route.patch(
  "/:id/pickedUp",
  [authentication, authorization("admin", "chef secteur")],
  orderController.pickedUp
);
route.patch("/:id/done", authentication, orderController.done);
route.patch("/:id/cancel", authentication, orderController.cancel);


module.exports = route;
