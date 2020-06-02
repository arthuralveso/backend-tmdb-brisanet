const Log = require('../models/Log');
const api = require('../../services/api');

class LogController {
  async logRequest(req, res, next) {
    const { method, url } = req;

    await Log.create({
      request_method: method.toUpperCase(),
      request_url: url,
      request_date: new Date(),
    });
    next();
  }

  async findMovieById(request, response, next) {
    const { id } = request.params;

    const movieResponse = await api
      .get(`movie/${id}`, {
        params: {
          api_key: '4128b7117a353c53f0e30496fa69220b',
          language: 'pt-BR',
        },
      })
      .then((res) => res);

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
    next();

    return response.json(movie);
  }

  async listMovie(request, response, next) {
    const { genre, actor } = request.query;

    const movieResponse = await api
      .get('discover/movie', {
        params: {
          api_key: '4128b7117a353c53f0e30496fa69220b',
          language: 'pt-BR',
          region: 'BR',
          with_genres: genre,
          with_people: actor,
        },
      })
      .then((res) => res);

    const movieList = movieResponse.data;

    next();

    return response.json(movieList);
  }
}

module.exports = new LogController();
