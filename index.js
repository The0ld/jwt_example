//Cargamos la configuracion del servidor
var app = require('./app');

//Indicamos el puerto del servidor
var port = 3000;

//Encendemos el servidor
app.listen(port, () => {
	console.log("Servidor corriendo en http://localhost:3000");
});