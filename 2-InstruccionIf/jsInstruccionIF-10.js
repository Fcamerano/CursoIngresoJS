function mostrar()
{
	let maximo = 10;
	let minimo = 1;
	let num;

	num = Math.round(Math.random() *  (maximo - minimo) + minimo);

	if(num >= 9)
	{
		alert("Nota: " + num + ", Excelente.");
	}
	else if(num >= 4)
	{
		alert("Nota: " + num + ", Aprobado.");
	}
	else 
	{
		alert("Nota: " + num + ", Intente la próxima.");
	}
}