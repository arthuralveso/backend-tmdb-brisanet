const Sequelize = require('sequelize');
// const databaseConfig = require('../config/database');
const Log = require('../app/models/Log');
require('dotenv/config');

const models = [Log];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(process.env.DATABASE_URL, {
      define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
      },
    });

    models.map((model) => model.init(this.connection));
  }
}

module.exports = new Database();
