/**
 * Created by eduarte on 19-01-15.
 */
var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/'));

app.listen(8080, function(){
    console.log("App escuchando en el puerto 8080");
});