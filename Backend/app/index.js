'use strinct'

var mongoose = require('mongoose');
var app = require("./app");
var port = 3900;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/api_rest_blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    //Creacion del server
    app.listen(port, () => {
        console.log("¡Conexion exitosa!")
    })
});