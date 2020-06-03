module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('logs', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      request_method: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      request_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      request_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        timestamps: true,
        underscored: true,
        underscoredAll: true,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        timestamps: true,
        underscored: true,
        underscoredAll: true,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('logs');
  },
};
