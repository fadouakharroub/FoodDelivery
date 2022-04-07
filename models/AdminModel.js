const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      max: 255,
      min: 5,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      max: 255,
      min: 6,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      max: 1024,
      min: 6,
    },
   
  },

);

module.exports = mongoose.model("Admin", adminSchema);