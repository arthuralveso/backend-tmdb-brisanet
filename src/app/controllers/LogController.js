const Log = require('../models/Log');
const api = require('../../services/api');

class LogController {
  async findMovieById(req, res) {
    const { method, url } = req;
    const { id } = req.params;

    const movieResponse = await api
      .get(`movie/${id}`, {
        params: {
          api_key: '4128b7117a353c53f0e30496fa69220b',
          language: 'pt-BR',
        },
      })
      .then((response) => response);

    const { config } = movieResponse;

    const {
      original_title,
      poster_path,
      backdrop_path,
      genres,
      overview,
    } = movieResponse.data;

    const movie = {
      original_title,
      overview,
      poster_path,
      backdrop_path,
      genres,
    };

    await Log.create({
      request_method: method.toUpperCase(),
      request_url: url,
      request_date: new Date(),
      api_url: `${config.baseURL}/${config.url}?api_key=${config.params.api_key}&language=${config.params.language}`,
    });

    return res.json(movie);
  }
}

module.exports = new LogController();
