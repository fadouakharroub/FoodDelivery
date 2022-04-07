const mongoose = require("mongoose");

const categorieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      max: 255,
      min: 5,
    },
    id_repas: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      max: 255,
      min: 6,
    },
   
   
  },

);

module.exports = mongoose.model("Categorie", categorieSchema);