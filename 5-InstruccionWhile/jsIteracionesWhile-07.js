/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador = 0;
	var acumulador = 0;
	var respuesta = 'si';
	let num = 0;

	do
	{
		num= parseInt(prompt("Ingrese un número: "));
		acumulador = acumulador + num;
		contador = contador + 1;

		respuesta = prompt("Quiere ingresar otro número? si/no");

	}while(respuesta == "si");

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/contador;
}