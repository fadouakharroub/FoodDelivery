const repasRouter = require('express').Router()
const multer = require("multer");
const {
    getAll_repas,
    getOne_repas,
    add_repas,
    update_repas,
    removeOne_repas,
    
} = require('../controllers/RepasController')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "repas");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
  const uploadRepas = multer({
    storage: storage,
  });

repasRouter
    .get('/repas', getAll_repas)
    .get('/repas/:id', getOne_repas)
    .post('/add-repas',uploadRepas.array("image", 20), add_repas)
    .put('/repas/:id/update', update_repas)
    .delete('/repas/:id/delete', removeOne_repas)
    

module.exports = repasRouter