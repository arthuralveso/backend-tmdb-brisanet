const { Router } = require('express');
const axios = require('axios');

const routes = new Router();

function logRequest(request, response, next) {
  const { method, url } = request;

  const logLabel = `[${method.toUpperCase()}] ${url}`;
  console.log(logLabel);

  next();
}

routes.get('/listar', logRequest, async (req, res) => {
  const resposta = await axios
    .get(
      'https://api.themoviedb.org/3/movie/76341?api_key=4128b7117a353c53f0e30496fa69220b'
    )
    .then((response) => response);
  const { config } = resposta;

  return res.json(config);
});

module.exports = routes;
