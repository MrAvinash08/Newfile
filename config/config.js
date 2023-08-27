const dotenv = require("dotenv");
const joi = require("joi");

dotenv.config();
const envVarSchema = joi.object({
  NODE_ENV: Joi.string().valid("production", "Development"),
  PORT: Joi.number().default(5000),
  MONGO.URL:Joi
});
