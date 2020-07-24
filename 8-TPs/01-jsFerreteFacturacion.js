/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let num1;
    let num2;
    let num3;

    num1 = parseInt(document.getElementById("txtIdPrecioUno").value);
	num2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    num3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    alert("La suma da " + (num1 + num2 + num3));
}

function Promedio () 
{
    let num1;
    let num2;
    let num3;

    num1 = parseInt(document.getElementById("txtIdPrecioUno").value);
	num2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    num3 = parseInt(document.getElementById("txtIdPrecioTres").value);

    alert("El promedio da " + ((num1 + num2 + num3)/3).toFixed(2));
}
function PrecioFinal () 

{
    let num1;
    let num2;
    let num3;
    let suma;

    num1 = parseInt(document.getElementById("txtIdPrecioUno").value);
	num2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    num3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    suma = (num1 + num2 + num3); 

    alert("La suma mas el IVA da " + (suma+(suma*0.21)).toFixed(2));
}