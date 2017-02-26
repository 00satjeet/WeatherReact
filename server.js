var express=require('express');


//Crear la app

var app=express();

//indico la carpeta que quiero hacer publica
app.use(express.static('public'));


//comenzar el server
app.listen(3000,function(){
	console.log('subiendo el server exprres en el puerto 3000');

});