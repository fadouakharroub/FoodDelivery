const Order = require("../../models/OrderModel");
const Repas = require("../../models/RepasModel");

const orderValidation = require("../../validation/order");

const createOrder = async (req, res) => {
  const { error } = orderValidation.orderValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  console.log(req.body)
  const { order_id, repas_id, payment_type } = req.body;
  const order = new Order({
    order_id,
    repas_id,
    payment_type,
  
  });
  try {
    if (payment_type !== "card" && payment_type !== "cash") {
      return res.send('"type" should be "card" or "cash"!');
    }
    await order.save();
    const repas = await Repas.findByIdAndUpdate(repas_id, {
      status: "disponible",
      availableDate: date_to,
    });
    if (!repas) return res.status(500).send("Repas status does not change!");
    return res.status(200).send(order);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteOrder = async (req, res) => {
  const orderId = req.body.order_id;
  const repasId = req.body.repas_id;
  try {
    const updateRepas = await Repas.findByIdAndUpdate(repasId, {
      status: " pas  disponible",
    });
    if (!updateRepas)
      return res.status(400).send("Repas status does not change!");
    const deleted = await Repas.findByIdAndDelete(
      repasId
    );
    if (!deletedOrder)
      return res.status(400).send("Order does not deleted!");
    res.status(200).send("Order deleted successfully!");
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  createOrder: createOrder,
  deleteOrder: deleteOrder,
};