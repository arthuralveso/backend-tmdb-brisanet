const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class Log extends Model {
  static init(sequelize) {
    super.init(
      {
        request_method: Sequelize.STRING,
        request_url: Sequelize.STRING,
        request_date: Sequelize.DATE,
      },
      {
        modelName: 'logs',
        timestamps: false,
        freezeTableName: true,
        underscored: false,
        tableName: 'logs',
        sequelize,
      }
    );
  }
}

module.exports = Log;
