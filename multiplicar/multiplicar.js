const colors = require('colors');
let fs = require('fs');

let crearArchivo = async (base, limite = 10) => {

    if (!Number(base) || !Number(limite) ){
        throw new Error ('La base y/o el limite no es numerico');
        return;
    }   
        
        let data = '';
        for (let i = 1; i <= limite; i++){
            data += `${base} x ${i} = ${base*i} \n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if(err) throw err;
            console.log('Archivo', colors.green(`tabla-${base}.txt`), 'creado');
        });
    
};

let listarTabla = async (base, limite = 10) => {

    if (!Number(base) || !Number(limite) ){
        throw new Error ('La base y/o el limite no es numerico');
        return;
    }       
    let tabla = '';
    for (let i = 1; i <= limite; i++){
            tabla += `${base} x ${i} = ${base*i} \n`;
        }
        console.log('***********************************************'.yellow);
        console.log(`*****Tabla del ${base} desde el 1 hasta el ${limite}*****`.green);
        console.log('***********************************************'.yellow);
        console.log(tabla.red);
        
    };
    

module.exports = {
    crearArchivo,
    listarTabla
};