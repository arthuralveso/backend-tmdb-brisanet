const { Router } = require('express');
const LogController = require('./app/controllers/LogController');
const MovieController = require('./app/controllers/MovieController');
const GuestSessionController = require('./app/controllers/GuestSessionController');

const routes = new Router();

routes.get('/movie/:id', MovieController.indexById, LogController.logRequest);
routes.get('/discover/movie', MovieController.index, LogController.logRequest);
routes.get(
  '/search/movie',
  MovieController.indexByName,
  LogController.logRequest
);
routes.post(
  '/movie/:id/rating',
  MovieController.store,
  LogController.logRequest
);

routes.get(
  '/session/new',
  GuestSessionController.index,
  LogController.logRequest
);

module.exports = routes;
