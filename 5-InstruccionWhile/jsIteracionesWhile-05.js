/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexo;
	sexo = prompt("Ingrese f o m:");

	while(!(sexo == "f" || sexo == "m"))
	{
		alert("El sexo ingresado NO es válido. Intentar nuevamente.")
		sexo = prompt("Ingrese f o m:");
	}

	document.getElementById("textIdSexo").value = sexo;
}