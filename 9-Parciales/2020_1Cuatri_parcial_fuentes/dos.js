/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, 
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/

function mostrar() {
  let respuesta;
  let tipo;
  let cantidad;
  let precioBolsa;
  let acumuladorBolsas = 0;
  let acumuladorArena = 0;
  let acumuladorCal = 0;
  let acumuladorCemento = 0;
  let importe = 1;
  let importeTotal = 0;
  let importeConDescuento = 1;
  let flag = 0;
  let tipoMasCaro;
  do {

    do {
      tipo = prompt("Ingrese el tipo: arena/cal/cemento");
    } while (tipo != "arena" && tipo != "cal" && tipo != "cemento");

    do {
      cantidad = parseInt(prompt("Ingrese la cantidad: "));
    } while (cantidad <= 0);

    do {
      precioBolsa = parseInt(prompt("Ingrese el precio de la bolsa: "));
    } while (isNaN(precioBolsa) || (precioBolsa <= 0));

    acumuladorBolsas += cantidad;
    importe = precioBolsa * cantidad;
    importeTotal += importe;

    switch (tipo) {
      case "arena":
        acumuladorArena += cantidad;
        break;
      case "cal":
        acumuladorCal += cantidad;
        break;
      case "cemento":
        acumuladorCemento += cantidad;
        break;
    }

    if (flag == 0 || precioBolsa > tipoMasCaroPrecio) {
      tipoMasCaro = tipo;
      tipoMasCaroPrecio = precioBolsa;
      flag = 1;
    }

    respuesta = prompt("¿Quiere seguir ingresando productos? si/no")
  } while (respuesta == "si");

  // A)
  alert("El importe total a pagar, bruto sin descuento, es de: " + importeTotal)

  // B)
  if (acumuladorBolsas > 30) {
    importeConDescuento = importeTotal * 0.75;
    alert("El importe total a pagar con descuento es: " + importeConDescuento);
  }
  else if (acumuladorBolsas > 10) {
    importeConDescuento = importeTotal * 0.85;
    alert("El importe total a pagar con descuento es: " + importeConDescuento);
  }

  // C)
  if (acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento) {
    alert("El tipo con mas cantidad de bolsas es arena");
  }
  else if (acumuladorCal > acumuladorArena && acumuladorCal > acumuladorCemento) {
    alert("El tipo con mas cantidad de bolsas es cal");
  }
  else {
    alert("El tipo con mas cantidad de bolsas es cemento");
  }

  // D)
  alert("El tipo mas caro es: " + tipoMasCaro);
}