const jsonServer = require('json-server');
const { DB_PATH } = require('../config');

const { db } = jsonServer.router(DB_PATH);

module.exports = db;