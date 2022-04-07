const mongoose = require("mongoose");

const repasShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        max: 255,
        min: 5,
      },
    type: {
      type: String,
    },
    price: {
      type: Number,
    },
    categorie_name: {
      type: mongoose.Schema.Types.String,
      required: true,
      ref: "Categorie",
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

module.exports = mongoose.model("Repas", repasShema);