const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const authConfig = require('../../config/auth');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'unauthorized, token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    await promisify(jwt.verify)(token, authConfig.secret);
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }

  return next();
};
