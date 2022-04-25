const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    payment: {
        type: String,
        required: [true, "the payment field is required"],
        enum: ["Cash", "Credit cards"],
        validate: {
          validator: (value) =>
            ["Cash", "Credit cards"].includes(value),
          message: "Invalid payment type",
        },
      },
      meal: {
        required: [true, "the meal field is required"],
        type: mongoose.Schema.Types.ObjectId,
        ref: "meals",
      },
      secteur: {
        required: [true, "the secteur field is required"],
        type: mongoose.Schema.Types.ObjectId,
        ref: "secteurs",
      },
      status:{
        type: String,
        default: "pending",
        enum: ["pending", "in process", "picked up", "done" ,"cancel"],
      },
      client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
      livreur: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      }
  },
  { timestamps: true }
);
const order = mongoose.model("orders", orderSchema);
module.exports = order;
