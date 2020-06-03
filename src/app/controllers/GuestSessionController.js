const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');
const api = require('../../services/api');
require('dotenv/config');

class GuestSessionController {
  async index(request, response, next) {
    try {
      const guestSession = await api
        .get('authentication/guest_session/new', {
          params: {
            api_key: process.env.API_KEY,
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
    } catch (error) {
      response.status(401).json({ error: 'Request failed' });
    }
  }
}

module.exports = new GuestSessionController();
