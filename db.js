//const { DB_NAME, USER_NAME, PASSWORD } = require('./common/config');

const Sequelize = require('sequelize');
require('dotenv').config();
                                //database username   password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.USER_NAME, process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    port: 5433
});

sequelize.authenticate().then(
    function success() {
        console.log("Connected to DB");
    },

    function fail(err) {
        console.log(`Error: ${err}`);
    }
);


module.exports = sequelize;
