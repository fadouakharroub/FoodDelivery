const User = require("../models/AuthModel");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");

//register
const register = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  })
    res.send(user)
};


//login
const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).send("Email doesn't exist");

  const validation = await bcrypt.compare(req.body.password, user.password);
  if (!validation) return res.status(404).send("password wrong");
  
  
  const token = jwt.sign({
    _id: user.id,
    name: user.firstName,
  },"SECRET");

  res.header("auth-token", token).send(token);
};

module.exports = { login , register};