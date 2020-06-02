const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class Log extends Model {
  static init(sequelize) {
    super.init(
      {
        request_method: Sequelize.STRING,
        request_url: Sequelize.STRING,
        request_date: Sequelize.DATE,
        api_url: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Log;
