//Va servir para la configuración del proyecto.
const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

// Crear la conexión a la base de datos
const db = require('./config/db');

// Importar el modelo
require('./models/Proyectos');

// .sync nos crea toda la estructura en la DB
db.sync()
    .then(() => console.log('Conectado al Servidor'))
    .catch(error => console.log(error));

// Crear una app de express
const app = express();

//Donde cargar los archivos estaticos
app.use(express.static('public'));

//Habilitar PUG
app.set('view engine', 'pug');

//Añadir la carpeta views
app.set('views', path.join(__dirname, './views'));

// Habilitar bodyParser para leer datos del fomulario
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes() );

// Para decirle en que puerto queremos que corra, no puede ser un puerto que ya este en uso
//Para verlo en el navegador usamos
//http://localhost:7000/
app.listen(7000);