const { Router } = require('express');
const LogController = require('./app/controllers/LogController');

const routes = new Router();

routes.get('/', LogController.store);

module.exports = routes;
