const { Router } = require('express');
const LogController = require('./app/controllers/LogController');

const routes = new Router();

routes.get('/movie/:id', LogController.findMovieById);
routes.get(
  '/discover/movie',
  LogController.listMovie,
  LogController.logRequest
);

module.exports = routes;
