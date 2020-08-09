/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() 
{
	let numeroIngresado = 0;
	let numeroMaximo = 0;
	let numeroMinimo = 0;
	let banderaprimero = 1;
	let respuesta = "si";

	while (respuesta == "si") {

		numeroIngresado = parseInt(prompt("Ingrese un numero"));

		if(banderaprimero == 1)
		{
			numeroMaximo = numeroIngresado
			numeroMinimo = numeroIngresado
		}
		
		if (numeroIngresado > numeroMaximo) {
			numeroMaximo = numeroIngresado;
		}
		else if (numeroMinimo > numeroIngresado) {
			numeroMinimo = numeroIngresado;
		}
		respuesta = prompt("Quiere ingresar otro numero ?");

		if(respuesta == "si")
		{
			banderaprimero = 0;
		}
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
}

/*
	let numeroIngresado = 0;
	let numeroMaximo = 0;
	let numeroMinimo = 0;
	let banderaprimero = 1;
	let respuesta;

	do
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));

		if(banderaprimero == 1)
		{
			numeroMaximo = numeroIngresado
			numeroMinimo = numeroIngresado
		}
		
		if (numeroIngresado > numeroMaximo) {
			numeroMaximo = numeroIngresado;
		}
		else if (numeroMinimo > numeroIngresado) {
			numeroMinimo = numeroIngresado;
		}
		respuesta = prompt("Quiere ingresar otro numero ?");

		if(respuesta == "si")
		{
			banderaprimero = 0;
		}
	}while (respuesta == "si");

	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
*/