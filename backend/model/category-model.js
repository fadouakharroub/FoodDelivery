const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "the name field is required"],
    },
    description: {
      type: String,
      required: [true, "the description field is required"],
    },
  },
  { timestamps: true }
);
const category = mongoose.model("categorys", categorySchema);
module.exports = category;
