const api = require('../../services/api');

class MovieController {
  async indexById(request, response, next) {
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
      release_date,
    } = movieResponse.data;

    const movie = {
      original_title,
      overview,
      poster_path,
      backdrop_path,
      release_date,
      genres,
    };
    next();

    return response.json(movie);
  }

  async index(request, response, next) {
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

  async indexByName(request, response, next) {
    const { name } = request.query;

    const movieResponse = await api
      .get('search/movie', {
        params: {
          api_key: '4128b7117a353c53f0e30496fa69220b',
          language: 'pt-BR',
          query: name,
          region: 'BR',
        },
      })
      .then((res) => res);

    const movie = movieResponse.data;

    next();

    return response.json(movie);
  }

  async store(request, response, next) {
    const { rate } = request.body;
    const { id } = request.params;
    const { session_id } = request.query;

    const movieResponse = await api
      .post(
        `/movie/${id}/rating`,
        { value: rate },
        {
          params: {
            api_key: '4128b7117a353c53f0e30496fa69220b',
            guest_session_id: session_id,
          },
        }
      )
      .then((res) => res);

    const movie = movieResponse.data;

    next();

    return response.json(movie);
  }
}

module.exports = new MovieController();
