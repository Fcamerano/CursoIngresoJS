/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let sueldo;
	let aumento;

	sueldo = parseInt(document.getElementById("txtIdImporte").value);
	aumento = sueldo*0.75;

	document.getElementById("txtIdResultado").value = aumento;
}
