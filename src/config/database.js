module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'logrequest',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
