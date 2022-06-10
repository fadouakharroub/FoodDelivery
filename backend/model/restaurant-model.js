const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "the name field is required"],
    },
    description: {
      type: String,
      required: [true, "the description field is required"],

    },
    image: {
        type: String,
        required: [true, "the image field is required"],
      },
    secteur: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "secteurs",
      },

  },
  { timestamps: true }
);
const restaurant = mongoose.model("restaurants", restaurantSchema);
module.exports = restaurant;
