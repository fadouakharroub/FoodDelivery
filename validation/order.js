const Joi = require("@hapi/joi");

const orderValidation = (data) => {
  const schema = Joi.object({
    order_id: Joi.string().required(),
    repas_id: Joi.string().required(),
    payment_type: Joi.string().required(),
   
  });
  return schema.validate(data);
};

module.exports = {
  orderValidation: orderValidation,
};