// Intento de 'Tarea de hoy' de clase 18 utilizando codigo creado durante la clase
// No se van a importar las funciones de otros codigos para rescribirlas y asi escribir mas codigo (Asumiendo que eso funcionaria)

const mongoose = require('mongoose')
const server = '127.0.0.1:27017' // No es necesario, lo puedo dejar en la funcion de conectar pero es para sacar practica
const database = 'testdb' // Mismo comentario que arriba

// Para la realizacion de esta tarea, se utilizo de apoyo el archivo 'codigo_Alonso.js' el cual es un codigo que me dio al acerle una consulta, se utilizo como forma de estudio y referencia
const jsnComunas = require('./comunas.json') // Codigo sacado de 'codigo_Alonso.js'

const conectarDB = async () => {
    try {
        await mongoose.connect(`mongodb://${server}/${database}`);
        console.log('Se ha conectado en el intento de tarea')
    } catch (err) {
        console.log('No se ha logrado conectar en el intento de tarea', err) 
    } // Se quito un disconect pues se necesita estar conectado para la insercion
}

const comunaSchema = new mongoose.Schema({ //Alonso usa mongoose.Schema en lugar de solo Schema, tengo que preguntar si hay motivo mas que solo ser mas explicito
    com: {type: String, required: true}
})

const Comuna = mongoose.model('comuna', comunaSchema)

// Codigo de alonso interpretado y comentado
const insertComunas = async () => {
    const docs = [] // Arreglo (No es un diccionario)

    for (const region of jsnComunas.regiones) { // El json es un arreglo de diccionarios, regiones es el principal 'componente?'
        for (const comuna of region.comunas) // Cada 'region' del json tiene un listado de 'comunas'
            docs.push({ com: comuna }) // Insertamos todas las comunas en el arreglo 'docs', sin filtro de ningun tipo, las regiones quedan fuera
    }
    console.log('Se ha logrado poblar docs')
    await Comuna.deleteMany({}) // Borramos datos anteriores
    console.log('Se han borrado datos anteriores')
    await Comuna.insertMany(docs) // Insertamos en nuestro documento el arreglo
    console.log('Se ha logrado insertar en el database')
}

const findComunaFiltro = async () => {
    const consulta = await Comuna.find({ com:/^s/i }); // /s/i cosas de busqueda, /s/ busca s, i hace que busque 's' y 'S'
    for (let q of consulta) {
        console.log(q.com)
    }
}

const main = async () => { // Buen uso de main, se ve como una buena practica (Seguramente mandatoria) que tengo que normalizar en mi flujo
    await conectarDB()
    await insertComunas()
    await findComunaFiltro()
    mongoose.disconnect()
}

main ()