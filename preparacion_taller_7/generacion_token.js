// Forma parte de la segunda parte del taller

const jwt = require('jsonwebtoken');
const payload = { userId: '321321'}; // Contenido a encryptar?

const secret = 'secre-tito'


// Dejamos este comentado para utilizar la decodificacion del siguiente
//const token = jwt.sign(payload, secret, {
//    algorithm: 'HS256', //Utilizamos este algoritmo para encriptar
//    expiresIn: '4h' 
//});

 const token = jwt.sign({ userId: '12345' }, secret, { expiresIn: '1h' });

const decoded = jwt.decode(token)
console.log('token decodificado: ', token)

try {
    const verified = jwt.verify(token, secret);
    console.log('Payload verificado: ', verified);
} catch(err) {
    console.error('Verificacion fallada: ', err.message)
}