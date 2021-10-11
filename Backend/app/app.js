'use strict'

//Cargar Modulos
var express = require("express");
var multipart = require("connect-multiparty");

//Ejecucion de express (http)
var app = express();

//Carga de ficheros y rutas
var articleRoutes = require("./routes/article");

//Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(multipart({uploadDir: 'app/upload/articles'}))

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Añadir prefijos a rutas / Cargar rutas
app.use("/api", articleRoutes);

//Exportar modulo
module.exports = app;