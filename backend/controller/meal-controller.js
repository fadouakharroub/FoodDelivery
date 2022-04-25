const { mealModel } = require("../model");

module.exports = {
  get,
  getAll,
  create,
  update,
  remove,
};
async function get(req, res) {
  try {
    const meal = await mealModel.findById(req.params.id);
    res.send(meal);
  } catch (error) {
    res.send(error);
  }
}

async function getAll(_, res) {
  try {
    const meal = await mealModel.find();
    res.send(meal);
  } catch (error) {
    res.send(error);
  }
}

async function create(req, res) {
  try {
    (req.body.image = req.file.filename)
    const meal = await mealModel.create(req.body);
    res.send(meal);
  } catch (error) {
    res.send(error);
  }
}

async function update(req, res) {
  try {
    const meal = await mealModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.send(meal);
  } catch (error) {
    res.send(error);
  }
}

async function remove(req, res) {
  try {
    await mealModel.findByIdAndDelete(req.params.id);
    res.send("is deleted");
  } catch (error) {
    res.send(error);
  }
}
