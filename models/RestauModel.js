const mongoose = require("mongoose");

const restauShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        max: 255,
        min: 5,
      },
    ville: {
        type: String,
        required: true,
      },
   
    image: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
   
   
  })
;

module.exports = mongoose.model("Restau", restauShema);