// Import SEQUELIZE
const Sequelize = require('sequelize');
// Import CONFIGURATION
const db = require('../config/db');

const Proyectos = db.define('proyectos', {
    id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,      
    },
    nombre : Sequelize.STRING,
    url : Sequelize.STRING
});

module.exports = Proyectos;