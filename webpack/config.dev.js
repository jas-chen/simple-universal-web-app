'use strict';

const server = require('./config.server.dev.js');
const client = require('./config.client.dev.js');

module.exports = [
  server,
  client
];
