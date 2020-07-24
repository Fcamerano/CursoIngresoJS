/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let num1;
    let num2;
    let cantidadalambre;

    num1 = parseInt(document.getElementById("txtIdLargo").value);
    num2 = parseInt(document.getElementById("txtIdAncho").value);
    cantidadalambre = (((num1*2)+(num2*2))*3);

    alert("La cantidad de cable a comprar es " + cantidadalambre);
}
function Circulo () 
{
	let radio;
    let cantidadalambre;

    radio = parseInt(document.getElementById("txtIdRadio").value);
    cantidadalambre = ((2*Math.PI*(radio))*3).toFixed(2);

    alert("La cantidad de cable a comprar es " + cantidadalambre).toFixed(2);
}
function Materiales () 
{
	let num1;
    let num2;
    let cantidadcemento;
    let cantidadcal;

    num1 = parseInt(document.getElementById("txtIdLargo").value);
    num2 = parseInt(document.getElementById("txtIdAncho").value);
    cantidadcemento = ((num1*num2)*3);
    cantidadcal = ((num1*num2)*2);


    alert("La cantidad de cemento a comprar es " + cantidadcemento + " y la cantidad de cal es " + cantidadcal);
}