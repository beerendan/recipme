const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.JAWSDB_DATABASE, process.env.JAWSDB_USERNAME, process.env.JAWSDB_PASSWORD, {
    host: process.env.JAWSDB_HOST,
    port: process.env.JAWSDB_PORT,
    dialect: 'mysql',
})

module.exports = {
    HOST: process.env.HOST,
    USER: 'root',
    PASSWORD: process.env.PASSWORD,
    DB: "recipe_db",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};