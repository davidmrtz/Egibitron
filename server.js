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



app.get("/castellano", function (req, res){
	
	var d = new Date();
	var n = d.getHours();
	
	
	if (n < 5 || n >= 20) {
		var respuesta = [
			{
				text: "¡¡Buenas noches!!",	
			}		
		];
	} else if (n >= 5 && n < 11) {
		var respuesta = [
			{
				text: "¡¡Buenos días!!",
			}
		];
	} else if (n >= 11 && n < 20) {
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
	
	
	if (n < 5 || n >= 20) {
		var respuesta = [
			{
				text: "Gabon!!",	
			}		
		];
	} else if (n >= 5 && n < 11) {
		var respuesta = [
			{
				text: "Egun on!!",
			}
		];
	} else if (n >= 11 && n < 20) {
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
  
    if(hour >= 8 && hour < 13 || hour == 13 && minutes < 30 || hour >= 16 && hour < 20){
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
    if(hour >= 8 && hour < 13 || hour == 13 && minutes < 30 || hour >= 16 && hour < 18){
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

app.get("/eusArriaga", function (req, res){
	
  var now = new Date();
  var hour = now.getHours();
  var day = now.getDay();
  var minutes = now.getMinutes();
  
  if(day == 1 || day == 2 ||day == 3 ||day == 4){
  
    if(hour >= 8 && hour < 13 || hour == 13 && minutes < 30 || hour >= 16 && hour < 20){
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
    if(hour >= 8 && hour < 13 || hour == 13 && minutes < 30 || hour >= 16 && hour < 18){
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
  
    if(hour >= 8 && hour < 13 || hour == 13 && minutes < 30 || hour >= 16 && hour < 20){
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
    if(hour >= 8 && hour < 13 || hour == 13 && minutes < 30 || hour >= 16 && hour < 19){
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

app.get("/eusJO", function (req, res){
	
  var now = new Date();
  var hour = now.getHours();
  var day = now.getDay();
  var minutes = now.getMinutes();
  
  if(day == 1 || day == 2 ||day == 3 ||day == 4){
  
    if(hour >= 8 && hour < 13 || hour == 13 && minutes < 30 || hour >= 16 && hour < 20){
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
    if(hour >= 8 && hour < 13 || hour == 13 && minutes < 30 || hour >= 16 && hour < 19){
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
  
    if(hour >= 8 && hour < 13 || hour == 13 && minutes < 30 || hour >= 16 && hour < 20){
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
    if(hour >= 8 && hour < 13 || hour == 13 && minutes < 30){
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
  
    if(hour >= 8 && hour < 13 || hour == 13 && minutes < 30 || hour >= 16 && hour < 20){
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
    if(hour >= 8 && hour < 13 || hour == 13 && minutes < 30){
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
