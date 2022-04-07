const bcrypt = require("bcryptjs");

const Manager = require("../../models/ManagerModel");
const registerValidation = require("../../validation/register");

const result = (status, output) => {
  return {
    status,
    output,
  };
};

const register = async (req, res) => {
  const { error } = registerValidation.register(req.body);
  const { name, email, password } = req.body;
  try {
    if (error) {
      return res.status(400).json(result("error", error.details[0].message));
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const manager = new Manager({
      name,
      email,
      password: hashedPassword,
    });
    const savedManager = await manager.save();
    if (savedManager) {
      return res.status(200).json(result("success", { savedManager }));
    }
    return res.status(400).json(result("error", "Oops something went wrong!"));
  } catch (error) {
    return res.status(400).json(result("error", error.message));
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingManager = await Manager.findOne({ email: email });
    if (!existingManager)
      return res
        .status(401)
        .json(result("error", "Email or Password incorrect!"));
    const checkEmail = await bcrypt.compare(password, existingManager.password);
    if (!checkEmail)
      return res
        .status(401)
        .json(result("error", "Email or Password incorrect!"));
    req.session.manager = { id: existingManager._id, email: existingManager.email };
    req.session.isManagerAuthenticated = true;
    req.session.save(() => {
      return res.status(200).json(result("success", "You are logged in!"));
    });
  } catch (error) {
    return res.status(400).json(result("error", error.message));
  }
};

const logout = (req, res) => {
  if (req.session.manager === null || !req.session.isManagerAuthenticated) {
    return res.status(400).json(result("error", "You are not logged in!"));
  }
  try {
    req.session.manager = null;
    req.session.isManagerAuthenticated = false;
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