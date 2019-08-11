//Cargamos express, y jsonwebtoken
var express = require('express');
var jwt = require('jsonwebtoken');

//Iniciamos express
var app = express();

//Agregamos las rutas con las funciones correspondientes
//ruta raiz para probrar que la api funcione correctamente
app.get('/', (req, res) => {
	res.json({
		text: 'la api funciona'
	});
});

//Ruta para simular un login y generar el Token correspondiente
app.post('/api/login', (req, res) => {
	var user = {id : 3};
	//Genera el token en base al ID del usuario y una palabra clave
	var token = jwt.sign({user}, 'palabra_clave_secreta');
	res.json({
		token
	});
});

//Ruta que solo puede ser accedida si y solo si has enviado el token en el Header
app.get('/api/protect', ensureAuth, (req, res) => {
	//Verificar si el token es valido
	jwt.verify(req.token, 'palabra_clave_secreta', (err, data) => {
		if(err){
			res.sendStatus(403);
		} else {
			res.json({
				text: 'protect',
				data
			});
		}
	});
});

//Funcion para validar que enviaste el Token en el header
function ensureAuth(req, res, next) {
	var bearerHeader = req.headers['authorization'];
	console.log(bearerHeader);
	if(typeof bearerHeader !== 'undefined'){
		var bearer = bearerHeader.split(" ");
		var bearerToken = bearer[1];
		req.token = bearerToken;
		next();
	} else {
		res.sendStatus(403);
	}
}

//Exportamos el modulo para que pueda ser utilizado
module.exports = app;