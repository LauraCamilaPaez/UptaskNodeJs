//Importar el modelo
const Proyectos = require('../models/Proyectos');
//Importar SLUG
const slug = require('slug');
exports.proyectosHome = (req, res) => {
    res.render('index', {
        nombrePagina : 'Proyectos'
    });
}

exports.formularioProyecto = (req, res) => {
    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto'
    });
}

exports.nuevoProyecto = async (req, res) =>{

    //enviar a la consola lo que el usuario escriba
    //console.log(req.body);

    //validar que tengamos algo en el input
    const { nombre } = req.body;

    let errores = [];

    if(!nombre) {
        errores.push({'texto': 'Agrega un Nombre al Proyecto'})
    } 

    if(errores.length > 0) {
        res.render('nuevoProyecto', {
            nombrePagina : 'Nuevo Proyecto',
            errores
        });
    } else {
        //Si no hay errores, entonces insertar en la DB
        const url = slug(nombre).toLowerCase();
        const proyecto = await Proyectos.create({ nombre, url });
            res.redirect('/');
    }

}