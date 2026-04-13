const express = require('express') //Importamos express
const app = express() //Hacemos que funcione para que se ejecute
const connectDB = require("./config/db_mongo")

require('dotenv').config()

const PORT = 3000 //Necesitamos un puerto
app.use(express.json()) //Parsea los datos que vengan del body(Colocarlo siempre)

app.get('/',(req, res)=>{ //Es un endpoint
    res.send("funciona")
})

app.use((req,res)=>{
    res.status(404).json({
        error:"la pagina no existe"
    })
})//Para que cuando la url no exista me de un mensaje. Se pone abajo porque lo lee por orden

connectDB() //Con esto conectamos a MongoDB

app.listen(PORT, () => console.log(`El servidor esta escuchando en http:localhost:${PORT}`)) //Ahora escuchamos lo que estamos levantando en el puerto que establecemos