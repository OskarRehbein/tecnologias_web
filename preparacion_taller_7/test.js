// Script de prueba de conexion de la clas 18
// Utilizar 'npm run test' (test porque el archivo se llama test.js y en package.json, cuando usas test, corre 'node test.js')

const mongoose = require('mongoose')

const server = '127.0.0.1:27017';
const database = 'testdb';

const conectarDB = async () => {
    try {
        await mongoose.connect(`mongodb://${server}/${database}`);

        console.log('MongoDB se ha podido conectar (mensaje personalizado por Oskar)')
        mongoose.disconnect();
    } catch (err) {
        console.log('La conexion ha fallado (Msg. p.)', err)
    }
}

conectarDB()