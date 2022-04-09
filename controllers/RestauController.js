const Restau = require("../models/RestauModel");
const restauValidation = require("../validation/restau");


const getAll_restau = async (req, res) => {
  const restau = await Restau.find();
  if (!restau) {
    return res.status(400).send("Sorry We can't find any restau");
  }
  res.status(200).send(restau);
};


const getOne_restau = async (req, res) => {
  const id = req.params.id;
  const restau = await Restau.findById(id);
  if (!restau) return res.status(400).send(restau);
  res.status(200).send(restau);
};

const add_restau = async (req, res) => {
  const {
    error 
  } = restauValidation.addRestauValidation(req.body);
  console.log(req.files)
  const uploadedImageFiles = req.files;
  let images = [];
  for (const uploadedImageFile of uploadedImageFiles) {
    images.push(uploadedImageFile.filename);
  }
  const {
    name,
    ville,
    description
  } = req.body;
  console.log(req.files);
  const restau = await Restau.create({
    name,
    ville,
    description,
    image: images,
  });
  const result = await restau.save();
  if (!result) return res.status(400).send("Sorry we can't add your restau");
  res.status(200).send(result);
};

const update_restau = async (req, res) => {
  const restauId = req.params.id;
  const restau = await Restau.findById(restauId);
  if (!restau)
    return res.status(400).send("Sorry We Can Not Find restau With Given Id!");
  if (req.files.length < 1 || req.files.length > 2) {
    const unwantedImage = req.files;
    deleteFile.deleteFile(unwantedImage);
    return res.status(400).send("Please choose between 1 and 2 images");
  }
  const {
    error
  } = restauValidation.updateRestauValidation(req.body);
  if (error) {
    const unwantedImage = req.files;
    deleteFile.deleteFile(unwantedImage);
    return res.status(400).send(error.details[0].message);
  }
  let restauImages = restau.image;
  deleteFile.deleteExistingFile(restauImages);
  const uploadedImageFiles = req.files;
  let images = [];
  for (const uploadedImageFile of uploadedImageFiles) {
    images.push(uploadedImageFile.filename);
  }
  const {
    name,
    ville,
    description
  } = req.body;
  const updateRestau = await Restau.updateOne({
    _id: restauId,
  }, {
    name,
    ville,
    description,
    image: images,
  });
  if (updateRestau) return res.status(200).send("Restau Updated Successfully!");
  res.send("Ooops Something Goes Wrong!");
};

const removeOne_restau = async (req, res) => {
  const id = req.params.id;
  const Restau = await Restau.deleteOne({
    id,
  });
  res.status(200).send("your Restau has been deleted");
};


  

module.exports = {
  getAll_restau,
  getOne_restau,
  add_restau,
  update_restau,
  removeOne_restau,
 
};