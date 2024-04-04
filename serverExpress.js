// importar express
const express=require("express");

//Instanciar express
const app=express();

//levantar el servidor en el puerto 3000
app.listen(3000,  () => {
    console.log("servidor escuchando por el puerto 3000");
});

app.use(express.static("assets"));

const nombres=["Diego", "Juan", "Mario", "Sebastian"];

//creacion de la primera ruta

app.get("/abracadabra/usuarios", (req, res)=> {
    res.send({nombres})
});

// creacion del middleware de la segunda ruta
app.use("/abracadabra/juego/:usuario", (req, res, next)=> {
    nombres.includes(req.params.usuario)? next():res.redirect("/who.jpeg")
});

// creacion tercera ruta que devuelve un archivo
app.get("/abracadabra/juego/:usuario", (req, res,)=> {
    res.sendFile(__dirname + '/index.html')
});

//ruta generica que no existe
app.get("*", (rteq, res)=> {
    res.send("Esta pagina no existe")
});




































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