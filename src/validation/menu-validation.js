import Joi from "joi";

const createMenuValidation = Joi.object({
    name: Joi.string().max(100).required(),
    description: Joi.string().max(100).required().optional(),
    price: Joi.string().max(100).required(),
    stok: Joi.string().max(100).required(),
    image: Joi.string().max(100).required().optional(),
    category: Joi.string().max(100).required(),
});


export {
    createMenuValidation,
}