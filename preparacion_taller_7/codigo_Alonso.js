// Codigo de mi compañero Alonso, el cual me entrego de manera generosa despues de explicarme como paso el json a la base de datos (Gracias Alonso!!)

const mongoose = require('mongoose')
const jsn = require('./punto.json')

const server = '127.0.0.1:27017'
const database = 'testdb'

const conectarDB = async () => {
  try {
    await mongoose.connect(`mongodb://${server}/${database}`)
    console.log('MongoDB conectado!!')
  } catch (err) {
    console.error('Fallo al conectar a MongoDB', err)
    process.exit(1)
  }
}

const comunaSchema = new mongoose.Schema({
  com: { type: String, required: true }
})

const Comuna = mongoose.model('Comuna', comunaSchema)


const insertComunas = async () => {
  const docs = []

  for (const region of jsn.regiones) {
    for (const comuna of region.comunas) {
        docs.push({ com: comuna })
          }
    }
  await Comuna.insertMany(docs)
}

const findcomunawiths= async() => {
    const query = await Comuna.find({com: /s/i});
    for (let q of query) {
      console.log(q.com)
    }
    
}

const main = async () => {
  await conectarDB()
  await insertComunas()
  await findcomunawiths()
  await mongoose.disconnect()
}

main()
