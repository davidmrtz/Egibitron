/**
 * Ejemplo de servicio basado en Node.js para crear contenido dinámico para un bot.
 *
 */

// Puerto en el que escucha el servidor Node.js (lo obtiene de una variable de entorno y si no existe, el 3000)
const PORT = process.env.PORT || 3000;

// Importamos el framework Express y lo inicializamos
var express = require("express");
var app = express();

// El contenido de la carpeta public se muestra en la raíz del servidor
app.use(express.static(__dirname + "/public"));

/*
 GET /plazo/:fecha

 Ruta que calcula el número de días que faltan para una fecha

 Si el servidor se está ejecutando localmente:

 http://localhost:3000/plazo/2017-01-31T23:59:59.000Z

 Devuelve un objeto JSON con el formato:

 [{"text":"Faltan 59 días..."}]
 */
 /*
app.get("/plazo/:fecha", function (req, res) {

    // Obtener la fecha que llega en la URL
    var fecha_entrega = new Date(req.params.fecha);
    var ahora = new Date();

    // Algo no ha ido bien
    if (!fecha_entrega) {
        return res.status(400).send();
    }

    // http://stackoverflow.com/questions/2627473/how-to-calculate-the-number-of-days-between-two-dates-using-javascript
    var oneDay = 24 * 60 * 60 * 1000;
    var dias = Math.round(Math.abs((ahora.getTime() - fecha_entrega.getTime()) / (oneDay)));

    // Crear el objeto con la respuesta
    var respuesta = [
        {
            text: "Faltan " + dias + " días...",
        }
    ];

    // Devolver el objeto en formato JSON
    res.json(respuesta);
});
*/

app.get("/castellano", function (req, res){
	
	var d = new Date();
	var n = d.getHours();
	
	
	if (n >= 0 && n < 6 || n >= 21) {
		var respuesta = [
			{
				text: "¡¡Buenas noches!!",	
			}		
		];
	} else if (n >= 6 && n < 12) {
		var respuesta = [
			{
				text: "¡¡Buenos días!!",
			}
		];
	} else if (n >= 12 && n < 21) {
		var respuesta = [
			{
				text: "¡¡Buenas tardes!!",
			}	
		];
	}
	
	// Devolver el objeto en formato JSON
            res.json(respuesta);
	
});
app.get("/euskara", function (req, res){
	
	var d = new Date();
	var n = d.getHours();
	
	
	if (n >= 0 && n < 6 || n >= 21) {
		var respuesta = [
			{
				text: "Gabon!!",	
			}		
		];
	} else if (n >= 6 && n < 12) {
		var respuesta = [
			{
				text: "Egun on!!",
			}
		];
	} else if (n >= 12 && n < 21) {
		var respuesta = [
			{
				text: "Arratsalde on!!",
			}	
		];
	}
	
	// Devolver el objeto en formato JSON
            res.json(respuesta);
	
});

app.get("/castArriaga", function (req, res){
	
  var now = new Date();
  var hour = now.getHours();
  var day = now.getDay();
  var minutes = now.getMinutes();
  
  if(day == 1 || day == 2 ||day == 3 ||day == 4){
  
    if(hour >= 8 && hour <= 13 || hour == 13 && minutes < 30 || hour >= 16 && hour < 20){
		var respuesta = [
			{
				text: "¡Ahora está abierta!",
			}
		];
    } else {
		var respuesta = [
			{
				text: "Está cerrada ahora mismo...",
			}
		];
    }
  
  } else if (day == 5) {  	  	
    if(hour >= 8 && hour <= 13 || hour == 13 && minutes < 30 || hour >= 16 && hour < 18){
		var respuesta = [
			{
				text: "¡Ahora está abierta!",
			}
		];
    } else {
		var respuesta = [
			{
				text: "Está cerrada ahora mismo...",
			}
		];
    }
  } else if (day == 6 || day == 7) {
		var respuesta = [
			{
				text: "Está cerrada ahora mismo...",
			}
		];
  }
	
	// Devolver el objeto en formato JSON
            res.json(respuesta);
	
});

app.get("/euskArriaga", function (req, res){
	
  var now = new Date();
  var hour = now.getHours();
  var day = now.getDay();
  var minutes = now.getMinutes();
  
  if(day == 1 || day == 2 ||day == 3 ||day == 4){
  
    if(hour >= 8 && hour <= 13 || hour == 13 && minutes < 30 || hour >= 16 && hour < 20){
		var respuesta = [
			{
				text: "Irekita dago oraintxe bertan!",
			}
		];
    } else {
		var respuesta = [
			{
				text: "Oraintxe bertan itxita dago...",
			}
		];
    }
  
  } else if (day == 5) {  	  	
    if(hour >= 8 && hour <= 13 || hour == 13 && minutes < 30 || hour >= 16 && hour < 18){
		var respuesta = [
			{
				text: "Irekita dago oraintxe bertan!",
			}
		];
    } else {
		var respuesta = [
			{
				text: "Oraintxe bertan itxita dago...",
			}
		];
    }
  } else if (day == 6 || day == 7) {
		var respuesta = [
			{
				text: "Oraintxe bertan itxita dago...",
			}
		];
  }
	
	// Devolver el objeto en formato JSON
            res.json(respuesta);
	
});

app.get("/castJO", function (req, res){
	
  var now = new Date();
  var hour = now.getHours();
  var day = now.getDay();
  var minutes = now.getMinutes();
  
  if(day == 1 || day == 2 ||day == 3 ||day == 4){
  
    if(hour >= 8 && hour <= 13 || hour == 13 && minutes < 30 || hour >= 16 && hour < 20){
		var respuesta = [
			{
				text: "¡Ahora está abierta!",
			}
		];
    } else {
		var respuesta = [
			{
				text: "Está cerrada ahora mismo...",
			}
		];
    }
  
  } else if (day == 5) {  	  	
    if(hour >= 8 && hour <= 13 || hour == 13 && minutes < 30 || hour >= 16 && hour < 19){
		var respuesta = [
			{
				text: "¡Ahora está abierta!",
			}
		];
    } else {
		var respuesta = [
			{
				text: "Está cerrada ahora mismo...",
			}
		];
    }
  } else if (day == 6 || day == 7) {
		var respuesta = [
			{
				text: "Está cerrada ahora mismo...",
			}
		];
  }
	
	// Devolver el objeto en formato JSON
            res.json(respuesta);
	
});

app.get("/euskJO", function (req, res){
	
  var now = new Date();
  var hour = now.getHours();
  var day = now.getDay();
  var minutes = now.getMinutes();
  
  if(day == 1 || day == 2 ||day == 3 ||day == 4){
  
    if(hour >= 8 && hour <= 13 || hour == 13 && minutes < 30 || hour >= 16 && hour < 20){
		var respuesta = [
			{
				text: "Irekita dago oraintxe bertan!",
			}
		];
    } else {
		var respuesta = [
			{
				text: "Oraintxe bertan itxita dago...",
			}
		];
    }
  
  } else if (day == 5) {  	  	
    if(hour >= 8 && hour <= 13 || hour == 13 && minutes < 30 || hour >= 16 && hour < 19){
		var respuesta = [
			{
				text: "Irekita dago oraintxe bertan!",
			}
		];
    } else {
		var respuesta = [
			{
				text: "Oraintxe bertan itxita dago...",
			}
		];
    }
  } else if (day == 6 || day == 7) {
		var respuesta = [
			{
				text: "Oraintxe bertan itxita dago...",
			}
		];
  }
	
	// Devolver el objeto en formato JSON
            res.json(respuesta);
	
});

app.get("/castMendi", function (req, res){
	
  var now = new Date();
  var hour = now.getHours();
  var day = now.getDay();
  var minutes = now.getMinutes();
  
  if(day == 1 || day == 2 ||day == 3 ||day == 4 || day == 5){
  
    if(hour >= 8 && hour < 12 || hour == 12 && minutes < 45){
		var respuesta = [
			{
				text: "¡Ahora está abierta!",
			}
		];
    } else {
		var respuesta = [
			{
				text: "Está cerrada ahora mismo...",
			}
		];
    }
  
  } else if (day == 6 || day == 7) {
		var respuesta = [
			{
				text: "Está cerrada ahora mismo...",
			}
		];
  }
	
	// Devolver el objeto en formato JSON
            res.json(respuesta);
	
});

app.get("/eusMendi", function (req, res){
	
  var now = new Date();
  var hour = now.getHours();
  var day = now.getDay();
  var minutes = now.getMinutes();
  
  if(day == 1 || day == 2 ||day == 3 ||day == 4 || day == 5){
  
    if(hour >= 8 && hour < 12 || hour == 12 && minutes < 45){
		var respuesta = [
			{
				text: "Irekita dago oraintxe bertan!",
			}
		];
    } else {
		var respuesta = [
			{
				text: "Oraintxe bertan itxita dago...",
			}
		];
    }
  
  } else if (day == 6 || day == 7) {
		var respuesta = [
			{
				text: "Oraintxe bertan itxita dago...",
			}
		];
  }
	
	// Devolver el objeto en formato JSON
            res.json(respuesta);
	
});

app.get("/castMoliNC", function (req, res){
	
  var now = new Date();
  var hour = now.getHours();
  var day = now.getDay();
  var minutes = now.getMinutes();
  
  if(day == 1 || day == 2 ||day == 3 ||day == 4){
  
    if(hour >= 8 && hour <= 13 || hour == 13 && minutes < 30 || hour >= 16 && hour < 20){
		var respuesta = [
			{
				text: "¡Ahora está abierta!",
			}
		];
    } else {
		var respuesta = [
			{
				text: "Está cerrada ahora mismo...",
			}
		];
    }
  
  } else if (day == 5) {  	  	
    if(hour >= 8 && hour <= 13 || hour == 13 && minutes < 30){
		var respuesta = [
			{
				text: "¡Ahora está abierta!",
			}
		];
    } else {
		var respuesta = [
			{
				text: "Está cerrada ahora mismo...",
			}
		];
    }
  } else if (day == 6 || day == 7) {
		var respuesta = [
			{
				text: "Está cerrada ahora mismo...",
			}
		];
  }
	
	// Devolver el objeto en formato JSON
            res.json(respuesta);
	
});

app.get("/eusMoliNC", function (req, res){
	
  var now = new Date();
  var hour = now.getHours();
  var day = now.getDay();
  var minutes = now.getMinutes();
  
  if(day == 1 || day == 2 ||day == 3 ||day == 4){
  
    if(hour >= 8 && hour <= 13 || hour == 13 && minutes < 30 || hour >= 16 && hour < 20){
		var respuesta = [
			{
				text: "Irekita dago oraintxe bertan!",
			}
		];
    } else {
		var respuesta = [
			{
				text: "Oraintxe bertan itxita dago...",
			}
		];
    }
  
  } else if (day == 5) {  	  	
    if(hour >= 8 && hour <= 13 || hour == 13 && minutes < 30){
		var respuesta = [
			{
				text: "Irekita dago oraintxe bertan!",
			}
		];
    } else {
		var respuesta = [
			{
				text: "Oraintxe bertan itxita dago...",
			}
		];
    }
  } else if (day == 6 || day == 7) {
		var respuesta = [
			{
				text: "Oraintxe bertan itxita dago...",
			}
		];
  }
	
	// Devolver el objeto en formato JSON
            res.json(respuesta);
	
});

// Arrancar el servidor y dejarlo a la espera
app.listen(PORT, function () {
    console.log("Servidor Express escuchando en el puerto " + PORT + "...");
});
