const Sequelize = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const db = new Sequelize('uptasknode', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306',
    // operatorAliases: false, -> Es muy antiguo para esta versión
    operatorsAliases: 0,
    define: {
        timestamps: 0
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
module.exports = db;