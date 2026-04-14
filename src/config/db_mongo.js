const mongoose = require('mongoose')

const connectDB = async() => {
    const mongoUri = process.env.MONGO_URI
    await mongoose.connect(mongoUri)
    console.log("Conectado a Mongo")
}

module.exports = connectDB