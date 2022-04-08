const Categorie = require("../models/CategorieModel");

const getAll_categorie = async (req, res) => {
  const categorie = await Categorie.find();
  if (!categorie) {
    return res.status(400).send("Sorry We can't find any categories");
  }
  res.status(200).send(categorie);
};


const getOne_categorie = async (req, res) => {
  const id = req.params.id;
  const categorie = await Categorie.findById(id);
  if (!categorie) return res.status(400).send(categorie);
  res.status(200).send(categorie);
};

const add_categorie = async (req, res) => {
  const {
    name,
   
  } = req.body;
  const categorie = await Categorie.create({
    name,
  
  });
  const result = await categorie.save();
  if (!result) return res.status(400).send("Sorry we can't add your categorie");
  res.status(200).send(result);
};

const removeOne_categorie = async (req, res) => {
  const id = req.params.id;
  const categorie = await Categorie.deleteOne({
    id,
  });
  res.status(200).send("your categorie has been deleted");
};


module.exports = {
  getAll_categorie,
  getOne_categorie,
  add_categorie,
  removeOne_categorie,
 
};