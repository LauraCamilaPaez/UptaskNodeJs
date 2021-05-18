// Import SEQUELIZE
const Sequelize = require('sequelize');
// Import CONFIGURATION
const db = require('../config/db');

const Proyectos = db.define('proyectos', {
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIcrement: true
    },
    nombre : Sequelize.STRING,
    url : Sequelize.STRING
});

module.exports = Proyectos;