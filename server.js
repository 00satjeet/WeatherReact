var express=require('express');


//Crear la app

var app=express();
const PORT= process.env.PORT || 3000;


app.use(function(req,res,next){
	if(req.headers['x-forwarded-proto']==='http'){
		next();
	}else{
		res.redirect('http://'+req.hostname+req.url);
	}
});
//indico la carpeta que quiero hacer publica
app.use(express.static('public'));


//comenzar el server
app.listen(PORT,function(){
	console.log('subiendo el server exprres en el puerto 3000 o al puerto:'+ PORT);

});
