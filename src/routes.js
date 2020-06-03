const { Router } = require('express');
const LogController = require('./app/controllers/LogController');
const MovieController = require('./app/controllers/MovieController');
const GuestSessionController = require('./app/controllers/GuestSessionController');
const authMiddleware = require('./app/middlewares/auth');

const routes = new Router();

routes.use(LogController.logRequest);
routes.get('/session/new', GuestSessionController.index);

routes.get('/movie/:id', authMiddleware, MovieController.indexById);
routes.get('/discover/movie', authMiddleware, MovieController.index);
routes.get('/search/movie', authMiddleware, MovieController.indexByName);
routes.post('/movie/:id/rating', authMiddleware, MovieController.store);

module.exports = routes;
