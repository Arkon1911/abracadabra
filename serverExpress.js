const express = require('express')
const path=require("path")
const app = express()

app.listen(3000, () => {
console.log('El servidor está inicializado en el puerto 3000')
})

app.use(express.static(path.join(__dirname+"/assets")))

app.get("/abracadabra/usuarios", (req, res) => {
res.send("Hola Bienvenido en Abracadabra;")
})

app.get("/abracadabra/juego/:usuario", (req, res) => {
res.send("Hola Bienvenido en Abracadabra;")
})

app.get("/abracadabra/conejo/", (req, res) => {
res.send("Hola Bienvenido en Abracadabra;")
})