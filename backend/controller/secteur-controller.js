const { secteurModel } = require("../model");

module.exports = {
  get,
  getAll,
  create,
  update,
  remove,
};

async function get(req, res) {
  try {
    const secteur = await secteurModel.findById(req.params.id);
    res.send(secteur);
  } catch (error) {
    res.send(error);
  }
}

async function getAll(_, res) {
  try {
    const secteur = await secteurModel.find();
    res.send(secteur);
  } catch (error) {
    res.send(error);
  }
}

async function create(req, res) {
  try {
    const secteur = await secteurModel.create(req.body);
    res.send(secteur);
  } catch (error) {
    res.send(error);
  }
}

async function update(req, res) {
  try {
    const secteur = await secteurModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.send(secteur);
  } catch (error) {
    res.send(error);
  }
}

async function remove(req, res) {
  try {
    await secteurModel.findByIdAndDelete(req.params.id);
    res.send("is deleted");
  } catch (error) {
    res.send(error);
  }
}
