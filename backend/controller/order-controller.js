const { orderModel } = require("../model");

module.exports = {
  get,
  getAll,
  create,
  update,
  remove,
  inProcess,
  pickedUp,
  done,
  cancel
};

async function get(req, res) {
  try {
    const order = await orderModel.findById(req.params.id);
    res.send(order);
  } catch (error) {
    res.send(error);
  }
}

async function getAll(_, res) {
  try {
    const order = await orderModel.find();
    res.send(order);
  } catch (error) {
    res.send(error);
  }
}

async function create(req, res) {
  try {
    const order = await orderModel.create(req.body);
    res.send(order);
  } catch (error) {
    res.send(error);
  }
}

async function update(req, res) {
  try {
    const order = await orderModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.send(order);
  } catch (error) {
    res.send(error);
  }
}
async function remove(req, res) {
  try {
    await orderModel.findByIdAndDelete(req.params.id);
    res.send("is deleted");
  } catch (error) {
    res.send(error);
  }
}

async function inProcess(req, res) {
  try {
    const order = await orderModel.findOneAndUpdate(
      { _id: req.params.id },
      {status : "in process"},
      { new: true }
    );
    res.send(order);
  } catch (error) {
    res.send(error);
  }
}
async function pickedUp(req, res) {
  try {
    const order = await orderModel.findOneAndUpdate(
      { _id: req.params.id },
      {status : "picked up"},
      { new: true }
    );
    res.send(order);
  } catch (error) {
    res.send(error);
  }
}
async function done(req, res) {
  try {
    const order = await orderModel.findOneAndUpdate(
      { _id: req.params.id },
      {status : "done"},
      { new: true }
    );
    res.send(order);
  } catch (error) {
    res.send(error);
  }
}
async function cancel(req, res) {
  try {
    const order = await orderModel.findOneAndUpdate(
      { _id: req.params.id },
      {status : "cancel"},
      { new: true }
    );
    res.send(order);
  } catch (error) {
    res.send(error);
  }
}

