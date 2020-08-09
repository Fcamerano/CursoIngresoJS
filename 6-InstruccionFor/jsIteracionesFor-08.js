function mostrar()
{
	let num;
	let contador = 0;

	do
	{
		num = parseInt(prompt("Ingrese un número:"));

	}while (num <= 1 || isNaN(num));
	
	for(let i=2; i < num ; i++)
	{
		if(num % i == 0)
		{
			contador++;
		}
	}

	if(contador >= 1)
	{
		alert(num + " No es primo");
	}
	else
	{
		alert(num + " Es primo");
	}
}