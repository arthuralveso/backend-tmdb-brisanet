const axios = require('axios');
const Log = require('../models/Log');

class LogController {
  async store(req, res) {
    const resposta = await axios
      .get(
        'https://api.themoviedb.org/3/movie/76341?api_key=4128b7117a353c53f0e30496fa69220b&language=pt-br'
      )
      .then((response) => response);

    const { method, url } = req;
    const {
      original_title,
      poster_path,
      backdrop_path,
      genres,
    } = resposta.data;

    const movie = {
      original_title,
      poster_path,
      backdrop_path,
      genres,
    };

    await Log.create({
      request_method: method.toUpperCase(),
      request_url: url,
      api_url: 'https://api.themoviedb.org/3',
    });

    return res.json(movie);
  }
}

module.exports = new LogController();
