const mongoose = require("mongoose");

const mealSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "the name field is required"],
    },
    description: {
      type: String,
      required: [true, "the description field is required"],
    },
    price: {
      type: Number,
      required: [true, "the price field is required"],
    },
    image: {
      type: String,
      required: [true, "the image field is required"],
    },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "restaurants",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categorys",
    },
  },
  { timestamps: true }
);
const meal = mongoose.model("meals", mealSchema);
module.exports = meal;
