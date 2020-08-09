/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let num;
	
	num = parseInt(prompt("ingrese un número entre 0 y 10."));
	
	while(num < 0 || num > 10)
	{
		num = prompt("ingrese un número entre 0 y 10.");
	}

	alert("Correcto bro");
}