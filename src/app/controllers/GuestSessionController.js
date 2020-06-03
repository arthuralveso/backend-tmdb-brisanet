const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');
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
    const id = sessionData.guest_session_id;

    return response.json({
      sessionData,
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

module.exports = new GuestSessionController();
