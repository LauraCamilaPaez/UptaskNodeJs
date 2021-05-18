//Va servir para la configuración del proyecto.
const express = require('express');
const routes = require('./routes');
const path = require('path');


// Crear una app de express
const app = express();

//Donde cargar los archivos estaticos
app.use(express.static('public'));

//Habilitar PUG
app.set('view engine', 'pug');

//Añadir la carpeta views
app.set('views', path.join(__dirname, './views'));

app.use('/', routes() );

// Para decirle en que puerto queremos que corra, no puede ser un puerto que ya este en uso
//Para verlo en el navegador usamos
//http://localhost:7000/
app.listen(7000);