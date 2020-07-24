function mostrar()
{
	let edad;
	
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad < 13)
	{
		alert("Es niño");
	}
	else if(edad < 18 )
	{
		alert("Es adolescente");
	}
	else if(edad < 65)
	{
		alert("Es mayor");
	}
	else
	{
		alert("Es adulto mayor");
	}
}