const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    order_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "clients",
  },
  repas_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "repas",
  },
  payment_type: {
    type: String,
  },

});

module.exports = mongoose.model("orders", orderSchema);