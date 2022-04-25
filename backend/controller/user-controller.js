const { userModel } = require("../model");
const bcrypt = require("bcryptjs");

const add = async (req, res, next) => {
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  req.body = { ...req.body, password: hashedPassword };
  next();
};

const addChef = async (req, res) => {
  const Chef = await userModel.create({
    ...req.body,
    role: "chef secteur",
  });
  res.send(Chef);
};
const addLivreur = async (req, res) => {
  const livreur = await userModel.create({
    ...req.body,
    role: "livreur",
  });
  res.send(livreur);
};
async function get(req, res) {
  try {
    const user = await userModel.findById(req.params.id);
    res.send(user);
  } catch (error) {
    res.send(error);
  }
}

async function update(req, res) {
  try {
    const user = await userModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.send(user);
  } catch (error) {
    res.send(error);
  }
}

async function remove(req, res) {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    res.send("is deleted");
  } catch (error) {
    res.send(error);
  }
}

async function getAll(_, res) {
  try {
    const user = await userModel.find();
    res.send(user);
  } catch (error) {
    res.send(error);
  }
}
module.exports = {
  getAll,
  get,
  update,
  remove,
  add,
  addChef,
  addLivreur,
};
