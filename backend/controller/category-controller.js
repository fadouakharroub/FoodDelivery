const { categoryModel } = require("../model");

module.exports = {
  get,
  getAll,
  create,
  update,
  remove,
};

async function get(req, res) {
  try {
    const category = await categoryModel.findById(req.params.id);
    res.send(category);
  } catch (error) {
    res.send(error);
  }
}

async function getAll(_, res) {
  try {
    const category = await categoryModel.find();
    res.send(category);
  } catch (error) {
    res.send(error);
  }
}

async function create(req, res) {
  try {
    const category = await categoryModel.create(req.body);
    res.send(category);
  } catch (error) {
    res.send(error);
  }
}

async function update(req, res) {
  try {
    const category = await categoryModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.send(category);
  } catch (error) {
    res.send(error);
  }
}

async function remove(req, res) {
  try {
    await categoryModel.findByIdAndDelete(req.params.id);
    res.send("is deleted");
  } catch (error) {
    res.send(error);
  }
}
