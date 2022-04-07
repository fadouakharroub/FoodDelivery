const mongoose = require("mongoose");

const livreurSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      max: 255,
      min: 5,
    },
   
  },

);

module.exports = mongoose.model("Livreur", livreurSchema);