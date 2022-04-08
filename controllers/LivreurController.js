const Livreur = require("../models/LivreurModel");


const getAll_livreur = async (req, res) => {
  const livreur = await Livreur.find();
  if (!livreur) {
    return res.status(400).send("Sorry We can't find any livreurs");
  }
  res.status(200).send(livreur);
};


const getOne_livreur = async (req, res) => {
  const id = req.params.id;
  const livreur = await Livreur.findById(id);
  if (!livreur) return res.status(400).send(livreur);
  res.status(200).send(livreur);
};

const add_livreur = async (req, res) => {
  const {
    name,
   
  } = req.body;
  const livreur = await Livreur.create({
    name,
  
  });
  const result = await livreur.save();
  if (!result) return res.status(400).send("Sorry we can't add your livreur");
  res.status(200).send(result);
};

const removeOne_livreur = async (req, res) => {
  const id = req.params.id;
  const Livreur = await Livreur.deleteOne({
    id,
  });
  res.status(200).send("your livreur has been deleted");
};


module.exports = {
  getAll_livreur,
  getOne_livreur,
  add_livreur,
  removeOne_livreur,
 
};