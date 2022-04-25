const mongoose = require("mongoose");

const secteurSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "the name field is required"],
    },
    city: {
      type: String,
      required: [true, "the city field is required"],

    },
    address: {
      type: String,
      required: [true, "the address field is required"],
    },

  },
  { timestamps: true }
);
const secteur = mongoose.model("secteurs", secteurSchema);
module.exports = secteur;
