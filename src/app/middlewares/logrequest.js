const Log = require('../models/Log');

module.exports = async (req, res, next) => {
  const { method, url } = req;

  await Log.create({
    request_method: method.toUpperCase(),
    request_url: url,
    request_date: new Date(),
    api_url: 'https://api.themoviedb.org/3',
  });

  next();
};
