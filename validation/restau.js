const Joi = require("@hapi/joi");

const addRestauValidation = (data) => {
  const schema = Joi.object({
    ville: Joi.string().min(5),
    image: Joi.string().required(),
    description: Joi.string().min(20).required(),
  });
  return schema.validate(data);
};

const updateRestauValidation = (data) => {
  const schema = Joi.object({
    ville: Joi.string().min(5),
    description: Joi.string().min(20).required(),
  });
  return schema.validate(data);
};

module.exports = {
  addRestauValidation: addRestauValidation,
  updateRestauValidation: updateRestauValidation,
};