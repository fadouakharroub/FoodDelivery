const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "the name field is required"],
      min: 3,
    },
    email: {
      type: String,
      required: [true, "the email field is required"],
      unique: [true, "this email already exist"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    role: {
      type: String,
      default: "client",
      enum: ["admin", "client", "chef secteur", "livreur"],
    },
    password: {
      type: String,
      required: [true, "the password field is required"],
      min: 8,
    },
    secteur: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "secteurs",
    },
  },
  { timestamps: true }
);
const User = mongoose.model("users", userSchema);
module.exports = User;
