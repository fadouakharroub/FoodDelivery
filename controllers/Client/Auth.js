const bcrypt = require("bcryptjs");

const Client = require("../../models/ClientModel");
const registerValidation = require("../../validation/register");

const result = (status, output) => {
  return {
    status,
    output,
  };
};

const register = async (req, res) => {
  const { error } = registerValidation.register(req.body);
  const { name, email, password, adresse, num_tel } = req.body;
  try {
    if (error) {
      return res.status(400).json(result("error", error.details[0].message));
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const client = new Client({
      name,
      email,
      password: hashedPassword,
      adresse,
      num_tel,
    });
    const savedClient = await client.save();
    if (savedClient) {
      return res.status(200).json(result("success", { savedClient }));
    }
    return res.status(400).json(result("error", "Oops something went wrong!"));
  } catch (error) {
    return res.status(400).json(result("error", error.message));
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingClient = await Client.findOne({ email: email });
    if (!existingClient)
      return res
        .status(401)
        .json(result("error", "Email or Password incorrect!"));
    const checkEmail = await bcrypt.compare(
      password,
      existingClient.password
    );
    if (!checkEmail)
      return res
        .status(401)
        .json(result("error", "Email or Password incorrect!"));
    req.session.client = {
      id: existingClient._id,
      email: existingClient.email,
    };
    req.session.isClientAuthenticated = true;
    req.session.save(() => {
      return res.status(200).json(result("success", "You are logged in!"));
    });
  } catch (error) {
    return res.status(400).json(result("error", error.message));
  }
};

const logout = (req, res) => {
  if (req.session.client === null || !req.session.isClientAuthenticated) {
    return res.status(400).json(result("error", "You are not logged in!"));
  }
  try {
    req.session.client = null;
    req.session.isClientAuthenticated = false;
    res.status(200).json(result("success", "You are logged out!"));
  } catch (error) {
    return res.status(400).json(result("error", error.message));
  }
};



module.exports = {
  register: register,
  login: login,
  logout: logout,
 
};