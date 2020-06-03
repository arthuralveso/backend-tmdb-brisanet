const api = require('../../services/api');

class MovieController {
  async indexById(request, response, next) {
    try {
      const { id } = request.params;

      const movieResponse = await api
        .get(`movie/${id}`, {
          params: {
            api_key: process.env.API_KEY,
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

      return response.json(movie);
    } catch (error) {
      response.status(401).json({ error: 'Request failed' });
    }
  }

  async index(request, response, next) {
    try {
      const { genre, actor } = request.query;

      const movieResponse = await api
        .get('discover/movie', {
          params: {
            api_key: process.env.API_KEY,
            language: 'pt-BR',
            region: 'BR',
            with_genres: genre,
            with_people: actor,
          },
        })
        .then((res) => res);

      const movieList = movieResponse.data;

      return response.json(movieList);
    } catch (error) {
      response.status(401).json({ error: 'Request failed' });
    }
  }

  async indexByName(request, response, next) {
    try {
      const { name } = request.query;

      const movieResponse = await api
        .get('search/movie', {
          params: {
            api_key: process.env.API_KEY,
            language: 'pt-BR',
            query: name,
            region: 'BR',
          },
        })
        .then((res) => res);

      const movie = movieResponse.data;

      return response.json(movie);
    } catch (error) {
      response.status(401).json({ error: 'Request failed' });
    }
  }

  async store(request, response, next) {
    try {
      const { rate } = request.body;
      const { id } = request.params;
      const { session_id } = request.query;

      const movieResponse = await api
        .post(
          `/movie/${id}/rating`,
          { value: rate },
          {
            params: {
              api_key: process.env.API_KEY,
              guest_session_id: session_id,
            },
          }
        )
        .then((res) => res);

      const movie = movieResponse.data;

      return response.json(movie);
    } catch (error) {
      response.status(401).json({ error: 'Request failed' });
    }
  }
}

module.exports = new MovieController();
