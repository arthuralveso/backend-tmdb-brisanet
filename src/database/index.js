const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');
const Log = require('../app/models/Log');

const models = [Log];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

module.exports = new Database();
