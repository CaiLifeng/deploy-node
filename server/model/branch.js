const { sequelize } = require('./db');
const Sequelize = require('sequelize');

const Branch = sequelize.define('branch', {
    name: {
        type: Sequelize.STRING
    },
    host_id: {
        type: Sequelize.STRING
    }
});

module.exports = {
    Branch
}
