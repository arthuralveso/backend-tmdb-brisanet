const Log = require('../models/Log');

class LogController {
  async logRequest(request, response, next) {
    const { method, url } = request;

    await Log.sync({ force: true }).then(() => {
      return Log.create({
        request_method: method.toUpperCase(),
        request_url: url,
        request_date: new Date(),
      });
    });
    next();
  }
}

module.exports = new LogController();
