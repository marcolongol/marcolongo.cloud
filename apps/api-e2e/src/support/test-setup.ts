import axios from 'axios';

// eslint-disable-next-line unicorn/prefer-module, unicorn/no-anonymous-default-export
module.exports = async function () {
  // Configure axios for tests to use.
  const host = process.env.HOST ?? 'localhost';
  const port = process.env.PORT ?? '3000';
  axios.defaults.baseURL = `http://${host}:${port}`;
};
