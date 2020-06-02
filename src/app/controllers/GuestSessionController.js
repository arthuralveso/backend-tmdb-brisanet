const api = require('../../services/api');

class GuestSessionController {
  async index(request, response, next) {
    const guestSession = await api
      .get('authentication/guest_session/new', {
        params: {
          api_key: '4128b7117a353c53f0e30496fa69220b',
        },
      })
      .then((res) => res);

    const sessionData = guestSession.data;

    next();

    return response.json(sessionData);
  }
}

module.exports = new GuestSessionController();
