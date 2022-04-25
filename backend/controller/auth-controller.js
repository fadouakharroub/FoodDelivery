const { userModel } = require("../model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = await userModel.create({
      ...req.body,
      password: hashedPassword,
    });
    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.SECRET
    );

    res
      .cookie("access", token, {
        secure: process.env.NODE_ENV == "development" ? false : true,
        httpOnly: false,
        sameSite: "lax",
      })
      .status(200)
      .send("you are logged in");
  } catch (error) {
    res.send(error);
  }
};

const login = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) return res.status(404).send("Email doesn't exist");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) return res.status(404).send("password wrong");

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.SECRET
    );

    res
      .cookie("access", token, {
        secure: process.env.NODE_ENV == "development" ? false : true,
        httpOnly: false,
        sameSite: "lax",
      })
      .status(200)
      .send("you are logged in");
  } catch (error) {
    res.send(error);
  }
};

const logout = (req, res) => {
  try {
    res.clearCookie("access");
    res.status(200).send("you are logged out");
  } catch (err) {
    return res.status(404).send({ message: err });
  }
};

module.exports = {
  register,
  login,
  logout,
};
