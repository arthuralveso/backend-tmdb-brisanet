module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('log', {
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
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('users');
  },
};
