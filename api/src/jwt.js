const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const generateJWT = async user => {
  return await jwt.sign({ id: user._id }, JWT_SECRET);
};

const validateJWT = async token => {
  return await jwt.verify(token, JWT_SECRET);
};

module.exports = {
  generateJWT,
  validateJWT,
};
