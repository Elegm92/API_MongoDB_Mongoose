//Configuracion de la base de datos
const mongoose = require('mongoose')

const connectDB = async() => {
const mongoUri = process.env.MONGO_URL//El puerto que nos dejan mas el nombre del servidor
await mongoose.connect(mongoUri)
console.log("Conectado a Mongo")
}

module.exports = connectDB