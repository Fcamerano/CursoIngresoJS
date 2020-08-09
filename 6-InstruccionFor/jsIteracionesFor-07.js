function mostrar()
{
	let num;
	let contador = 0;

	num = parseInt(prompt("Ingrese un número:"));

	for(let i=0; i<=num ; i++)
	{
		if(num%i == 0){
			alert("El numero " + i + " es divisor");
			contador++;
		}
	}
	alert("Se encontraron " + contador + " numeros divisores");
}