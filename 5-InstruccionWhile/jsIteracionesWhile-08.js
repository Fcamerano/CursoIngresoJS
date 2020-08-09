/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
*/
function mostrar()
{	
	let contador = 0;
	let positivo = 0;
	let negativo = 1;
	let respuesta = 'si';
	let num = 0;

	while(respuesta == "si")
	{

		num= parseInt(prompt("Ingrese un número: "));
		if(num>=0)
		{
			positivo = positivo + num;
		}
		else
		{
			negativo = negativo * num;
		}

		contador = contador + 1;

		respuesta = prompt("Quiere ingresar otro número? si/no");

	}

	document.getElementById("txtIdSuma").value = positivo;
	document.getElementById("txtIdProducto").value = negativo;
}