const Repas = require("../models/RepasModel");
// const Categorie = require("../models/CategorieModel");
const repasValidation = require("../validation/repas");


const getAll_repas = async (req, res) => {
  const repas = await Repas.find();
  if (!repas) {
    return res.status(400).send("😒 Sorry We can't find any repas");
  }
  res.status(200).send(repas);
};


const getOne_repas = async (req, res) => {
  const id = req.params.id;
  const repas = await Repas.findById(id);
  if (!repas) return res.status(400).send(repas);
  res.status(200).send(repas);
};

const add_repas = async (req, res) => {
  const {
    error
  } = repasValidation.addRepasValidation(req.body);
  
  const uploadedImageFiles = req.files;
  let images = [];
  for (const uploadedImageFile of uploadedImageFiles) {
    images.push(uploadedImageFile.filename);
  }
  const {
    name,
    type,
    price,
    categorie_name,
    description
  } = req.body;
  const repas = await Repas.create({
    name,
    type,
    price,
    categorie_name,
    description,
    image: images,
  });
  const result = await repas.save();
  if (!result) return res.status(400).send("Sorry we can't add your repas");
  res.status(200).send(result);
};

const update_repas = async (req, res) => {
  const repasId = req.params.id;
  const repas = await Repas.findById(repasId);
  if (!repas)
    return res.status(400).send("Sorry We Can Not Find Repas With Given Id!");
  if (req.files.length < 1 || req.files.length > 4) {
    const unwantedImage = req.files;
    deleteFile.deleteFile(unwantedImage);
    return res.status(400).send("Please choose between 1 and 4 images");
  }
  const {
    error
  } = repasValidation.updateRepasValidation(req.body);
  if (error) {
    const unwantedImage = req.files;
    deleteFile.deleteFile(unwantedImage);
    return res.status(400).send(error.details[0].message);
  }
  let repasImage = repas.image;
  deleteFile.deleteExistingFile(repasImages);
  const uploadedImageFiles = req.files;
  let images = [];
  for (const uploadedImageFile of uploadedImageFiles) {
    images.push(uploadedImageFile.filename);
  }
  const {
    name,
    type,
    price,
    description
  } = req.body;
  const updateRepas = await Repas.updateOne({
    _id: repasId,
  }, {
    name,
    type,
    price,
    categorie_name,
    description,
    image: images,
  });
  if (updateRepas) return res.status(200).send("Repas Updated Successfully!");
  res.send("Ooops Something Goes Wrong!");
};

const removeOne_repas = async (req, res) => {
  const id = req.params.id;
  const repas = await Repas.deleteOne({
    id,
  });
  res.status(200).send("your repas has been deleted");
};


  

module.exports = {
  getAll_repas,
  getOne_repas,
  add_repas,
  update_repas,
  removeOne_repas,
 
};