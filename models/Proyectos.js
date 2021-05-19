// Import SEQUELIZE
const Sequelize = require('sequelize');
// Import CONFIGURATION
const db = require('../config/db');
//Importar SLUG
const slug = require('slug');
const shortid = require('short-id');

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