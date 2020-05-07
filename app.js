const colors = require('colors');
const { crearArchivo, listarTabla } = require ('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
let comando = argv._[0];


switch(comando){

    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite).then(() => console.log(`tabla del ${argv.base}`))
        .catch(err => {
            console.log(err);
        });
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .catch(err => {
            console.log(err);
        });
        console.log('Archivo Creado');
        break;
    default:
        console.log('comando no reconocido');
        break;    
}


