const Joi = require('joi');

module.exports = {
  user_creation: Joi.object({
    name: Joi.string().trim()
  })
}