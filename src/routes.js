const { Router } = require('express');
const axios = require('axios');

const routes = new Router();

const data = axios
  .get(
    'https://api.themoviedb.org/3/movie/76341?api_key=4128b7117a353c53f0e30496fa69220b'
  )
  .then((response) => response.data);

routes.get('/listar', async (req, res) => {
  await console.log(data);

  return res.json({ message: 'ok' });
});

module.exports = routes;
