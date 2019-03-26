const Sequelize = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(config.dataBase.db, config.dataBase.username, config.dataBase.password, {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

module.exports = {
  sequelize
} 
