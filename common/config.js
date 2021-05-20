const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.join(__dirname, '../../.env')
});

module.exports = {
  DB_NAME: process.env.DB_NAME,
  USER_NAME: process.env.USER_NAME,
  PASSWORD: process.env.PASSWORD
};