//Importar el modelo
const Proyectos = require('../models/Proyectos');

exports.proyectosHome = async (req, res) => {
    const proyectos = await Proyectos.findAll();
    res.render('index', {
        nombrePagina : 'Proyectos ' + res.locals.year,
        proyectos
    });
}

exports.formularioProyecto = (req, res) => {
    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto',
    });
}

exports.nuevoProyecto = async (req, res) =>{

    //enviar a la consola lo que el usuario escriba
    //console.log(req.body);

    //validar que tengamos algo en el input
    const { nombre } = req.body.nombre;

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
        const proyecto = await Proyectos.create({ nombre});
        res.redirect('/');
    }
}

exports.proyectoPorUrl = async (req, res) => {
    const proyecto = await Proyectos.findOne({
        where: {
            url: req.params.url
        }
    });

    if(!proyecto) return next();

    console.log(proyecto);

    res.send('OK')
}