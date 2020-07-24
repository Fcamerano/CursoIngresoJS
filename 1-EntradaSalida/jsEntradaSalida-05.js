/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var Nombre = document.getElementById("txtIdNombre").value;
	var Edad = document.getElementById("txtIdEdad").value;

	alert("Usted se llama " + Nombre + " y tiene " + Edad + " años");
	
	
	/*alert("ok");*/
}