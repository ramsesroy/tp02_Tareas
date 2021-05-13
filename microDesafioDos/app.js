const moduloTareas = require('./tareas/funcionesdetareas');
const process = require('process');
const comando = process.argv[2];

switch (comando) { 
    case undefined:
    console.log('Atención - Tienes que pasar una acción');
break;

    case 'listar':
moduloTareas.listarTareas();
break;

default:
    console.log('No entiendo qué quieres hacer');
    break;
}

