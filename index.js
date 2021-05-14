//Va servir para la configuración del proyecto.

const express = require('express');

// Crear una app de express

const app = express();

// Ruta para el home
// req = request & res = response
app.use('',(req, res) => {
    res.send('Hola Lauris, SI SE PUEDE!');
});

// Para decirle en que puerto queremos que corra, no puede ser un puerto que ya este en uso
//Para verlo en el navegador usamos
//http://localhost:7000/
app.listen(7000);