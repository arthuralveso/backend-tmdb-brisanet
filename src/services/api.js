const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

module.exports = api;
