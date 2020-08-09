function mostrar()
{
	let repeticiones;
	let contadorpares = 0;

	repeticiones = parseInt(prompt("Ingrese la cantidad de repeticiones:"));

	for(let i=1; i<=repeticiones ; i++)
	{
		if(i%2==0){
			alert("El numero " + i + " es par");
			contadorpares++;
		}
	}
	alert("Se encontraron " + contadorpares + " numeros pares");
}