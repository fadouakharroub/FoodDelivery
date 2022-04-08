const Joi = require("@hapi/joi");

const addRepasValidation = (data) => {
  const schema = Joi.object({
    type: Joi.string().min(5).required(),
    price: Joi.number().required(),
    categorie_name: Joi.array(),
    image: Joi.string().required(),
    description: Joi.string().min(20).required(),
  });
  return schema.validate(data);
};

const updateRepasValidation = (data) => {
  const schema = Joi.object({
    type: Joi.string().min(5).required(),
    price: Joi.number().required(),
    description: Joi.string().min(20).required(),
  });
  return schema.validate(data);
};

module.exports = {
  addRepasValidation: addRepasValidation,
  updateRepasValidation: updateRepasValidation,
};