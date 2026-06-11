const mongoose =require('mongoose')
const { Users } = require('./schema')

const agregarUsuario = async () => {
    try{
        await mongoose.connect(`mongodb://127.0.0.1:27017/testdb`);
        await Users.create({ name: 'Oskar', lastname: 'Rehbein', rut: '11111111-1'});
        mongoose.disconnect()
        console.log('Es usuario se ha insertado correctamente')
    } catch (err) {
        console.log('No se pudo insertar el usuario', err);
    }
};

agregarUsuario()