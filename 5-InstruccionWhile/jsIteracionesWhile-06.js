function mostrar()
{
	let num;
	let suma = 0; //ACUMULADOR
	let i = 0; //CONTADOR
	let promedio = 0;

	while(i < 5)
	{
		num = parseInt(prompt("Ingrese un número: "));
		suma = suma + num;
		i = i + 1; // = i++
	}

	promedio = suma / i;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;
}