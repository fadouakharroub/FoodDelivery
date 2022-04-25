const { restaurantModel } = require("../model");

module.exports = {
  get,
  getAll,
  create,
  update,
  remove,
};

async function get(req, res) {
  try {
    const restaurant = await restaurantModel.findById(req.params.id);
    res.send(restaurant);
  } catch (error) {
    res.send(error);
  }
}

async function getAll(_, res) {
  try {
    const restaurant = await restaurantModel.find().populate({path:"secteur",select: 'name'});
    res.send(restaurant);
  } catch (error) {
    res.send(error);
  }
}

async function create(req, res) {
  try {
    (req.body.image = req.file.filename)
    const restaurant = await restaurantModel.create(req.body);
    res.send(restaurant);
  } catch (error) {
    res.send(error);
  }
}

async function update(req, res) {
  try {
    const restaurant = await restaurantModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.send(restaurant);
  } catch (error) {
    res.send(error);
  }
}

async function remove(req, res) {
  try {
    await restaurantModel.findByIdAndDelete(req.params.id);
    res.send("is deleted");
  } catch (error) {
    res.send(error);
  }
}
