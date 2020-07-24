function mostrar()
{
	let maximo = 10;
	let minimo = 1;
	let num;

	num = Math.round(Math.random() *  (maximo - minimo) + minimo);

	alert(num);
}