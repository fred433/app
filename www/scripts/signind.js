function signin(){
  alert("Registro exitoso");
  location.href='logindelivery.html';
}

function signinc(){
  alert("Registro exitoso");
  location.href='loginclient.html';
}

function login(){
  var name = document.getElementById("name").value;
  alert("Bienvenido " + name);
  location.href='delivery.html';
}

function loginc(){
  var name = document.getElementById("name").value;
  alert("Bienvenido " + name);
  location.href='client.html';
}

function acepta(){
	alert("Trabajo aceptado");
	var elements = document.getElementsByClassName('quitar');
  	for(var i=0; i<elements.length; i++){ 
  		elements[i].style.display='none';
  	}
}

function confirma(){
  alert("Solicitud completada exitosamente");
  location.href='client.html';
}

function solicitud(){
  alert("Enviado");
  var form = document.getElementById("formu");
  
  form.style.display='none';
  mapc();
}

function mapc() {

  document.getElementById("titulo").innerHTML ="Solicitud"
  var obj = document.getElementById("objeto").value;
  var ori = document.getElementById("origen").value;
  var des = document.getElementById("destino").value;
  
  var mapCanvas = document.getElementById("mapac");
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();

  var mapOptions = {
    center: new google.maps.LatLng(20.0825056,-98.8268188),
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false,
    zoom: 12
  }

  var map = new google.maps.Map(mapCanvas, mapOptions);

  var request = {
    origin: ori,
    destination: des,
    travelMode: google.maps.TravelMode.DRIVING
  };
     
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById("directionsPanel"));

  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      var km = result.routes[0].legs[0].distance.value;
      var precio = (km/1000) * 6;
      document.getElementById("text").innerHTML = "La solicitud consta de transportar un "+ obj+ " desde "+ ori +" hasta "+ des + ", la distancia calculada fue de "+ result.routes[0].legs[0].distance.text + " y el precio por el viaje es de $" + precio + " pesos";
      directionsDisplay.setDirections(result);
    }
  });

  var boton = document.getElementById("boto");
  
  boton.style.display='block';

}