const { Router } = require('express');
const LogController = require('./app/controllers/LogController');

const routes = new Router();

routes.get('/movie', LogController.store);

module.exports = routes;
