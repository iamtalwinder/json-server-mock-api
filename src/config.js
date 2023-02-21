const path = require('path');

require('dotenv').config();

const env = process.env;

module.exports = {
  JWT_SECRET_KEY: env.JWT_SECRET_KEY,
  DB_PATH: path.join(__dirname, './db/db.json'),
  PORT: env.PORT || 3000
};
  