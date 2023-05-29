const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {

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
}};