function signin(){
  alert("Registro exitoso");
  location.href='logindelivery.html';
}

function login(){
  var name = document.getElementById("name").value;
  alert("Bienvenido " + name);
  location.href='delivery.html';
}

function acepta(){
	alert("Trabajo aceptado");
	var elements = document.getElementsByClassName('quitar');
  	for(var i=0; i<elements.length; i++){ 
  		elements[i].style.display='none';
  	}
}