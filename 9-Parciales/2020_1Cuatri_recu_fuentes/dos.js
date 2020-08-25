/*
<h2></br>Realizar el algoritmo que permita ingresar los datos de una 
compra de productos de la construccion,
 hasta que el cliente quiera:
<br> Tipo validad("arena";"cal";"cemento") 
<br> Cantidad de bolsas,
<br> Precio por bolsa (más de cero ),
<br> al terminar la compra el cliente accede a un descuento segun las bolsas en total
<br> Si compro más de 10 bolsas en total tenes 15% de 
descuento sobre el total a pagar.
<br> Si compro más de 30 bolsas en total tenes 25% 
de descuento sobre el total a pagar.	
<br>a)
El importe total a pagar , bruto sin descuento y...
<br>b)
el importe total a pagar con descuento(solo si corresponde)
<br>d)
Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.		
<br>f)
El tipo mas caro*/
function mostrar() {
	var tipo;//validad("arena";"cal";"cemento") 
	var cantidadDeBolsas;
	var precioPorBolsa;
	var respuesta = "s";
	var acumuladorDeBolsas = 0;
	var precioBrutoTotal = 0;
	var precioBrutoProducto;
	var porcentaje;
	var descuento;
	var precioConDescuento;
	var acumuladorCal = 0;
	var acumuladorCemento = 0;
	var acumuladorArena = 0;
	var tipoConMasUnidades;
	var banderaDelPrimerProducto = "es el primero";
	var tipoMasCaro;
	var tipoMasCaroPrecio;

	while (respuesta == "s") {

		tipo = prompt("ingrese tipo");
		while (tipo != "arena" && tipo != "cal" && tipo != "cemento") {
			tipo = prompt("error, ingrese tipo");
		}
		cantidadDeBolsas = parseInt(prompt("Ingrese cantidad de bolsas: "));
		
		while (cantidadDeBolsas < 1) {
			cantidadDeBolsas = prompt("error ,ingrese cantidad de bolsas");
			cantidadDeBolsas = parseInt(cantidadDeBolsas);
		}


		precioPorBolsa = prompt("ingrese cantidad de bolsas");
		precioPorBolsa = parseInt(precioPorBolsa);
		while (precioPorBolsa < 1) {
			precioPorBolsa = prompt("error ,ingrese cantidad de bolsas");
			precioPorBolsa = parseInt(precioPorBolsa);
		}

		acumuladorDeBolsas = acumuladorDeBolsas + cantidadDeBolsas;
		precioBrutoProducto = cantidadDeBolsas * precioPorBolsa;
		precioBrutoTotal = precioBrutoTotal + precioBrutoProducto;

		if (banderaDelPrimerProducto == "es el primero") {
			banderaDelPrimerProducto = "ya paso";
			tipoMasCaro = tipo;
			tipoMasCaroPrecio = precioPorBolsa;
		} else {
			if (precioPorBolsa > tipoMasCaroPrecio) {
				tipoMasCaro = tipo;
				tipoMasCaroPrecio = precioPorBolsa;
			}
		}


		switch (tipo) {
			case "arena":
				acumuladorArena = acumuladorArena + cantidadDeBolsas;
				break;
			case "cal":
				acumuladorCal = acumuladorCal + cantidadDeBolsas;
				break;
			case "cemento":
				acumuladorCemento = acumuladorCemento + cantidadDeBolsas;
				break;
		}


		respuesta = prompt("seguir ?")
	}

	if (acumuladorArena > acumuladorCemento && acumuladorArena > acumuladorCal) {
		tipoConMasUnidades = "arena";
	} else {
		if (acumuladorCal > acumuladorCemento) {
			tipoConMasUnidades = "cal";
		} else {
			tipoConMasUnidades = "cemento";
		}
	}


	if (acumuladorDeBolsas > 30) {
		porcentaje = 25;

	} else {
		if (acumuladorDeBolsas > 10) {
			porcentaje = 15;
		} else {
			porcentaje = 0;
		}
	}


	if (porcentaje != 0) {
		descuento = precioBrutoTotal * porcentaje / 100;
		precioConDescuento = precioBrutoTotal - descuento;
		console.log("pagar con descuento: " + precioConDescuento);
	}

	console.log("bruto sin descuento: " + precioBrutoTotal);
	console.log("el tipo mas comprado es: " + tipoConMasUnidades);
	console.log("el tipo mas caro  es: " + tipoMasCaro);
}

/*
function mostrar() {
  let respuesta = "s";
  let tipo; // arena, cal, cemento
  let cantidadBolsas;
  let precioBolsas;
  //A) Precio total de bolsas a pagar
  let totalSinDesc = 0;
  //B) Precio total a pagar con descuento
  let cantidadBolsasTotal = 0;
  let totalConDesc = 0;
  //C) Informar el tipo con mas cantidad de bolsas
  let arenasBolsasTot = 0;
  let calBolsasTot = 0;
  let cementoBolsasTot = 0;
  //D) El tipo mas caro
  let arenaCara = 0;
  let cementoCaro = 0;
  let calCara = 0;

  do {
    do {
      tipo = prompt("Ingrese el tipo de producto");
    } while (!(tipo == "arena" || tipo == "cemento" || tipo == "cal"));

    do {
      cantidadBolsas = parseInt(prompt("Ingrese la cantidad de bolsas"));
    } while (isNaN(cantidadBolsas));

    do {
      precioBolsas = parseInt(prompt("Ingrese el precio de bolsas"));
    } while (!(precioBolsas > 0));

    respuesta = prompt("Quiere ingresar otro producto ?");

    totalSinDesc = totalSinDesc + precioBolsas; //A
    cantidadBolsasTotal = cantidadBolsasTotal + cantidadBolsas; // B

    switch (tipo) { // C
      case "arena":
        arenasBolsasTot = arenasBolsasTot + cantidadBolsas;
        if (precioBolsas > arenaCara) {
          arenaCara = precioBolsas;
        }
        break;
      case "cemento":
        cementoBolsasTot = cementoBolsasTot + cantidadBolsas;
        if (precioBolsas > cementoCaro) {
          cementoCaro = precioBolsas;
        }
        break;
      case "cal":
        calBolsasTot = calBolsasTot + cantidadBolsas;
        if (precioBolsas > calCara) {
          calCara = precioBolsas;
        }
        break;
    }
  } while (respuesta == "s");

  alert(`La cantidad total a pagar (sin descuento) es de ${totalSinDesc}`);

  if (cantidadBolsasTotal >= 15 && cantidadBolsasTotal < 30) {
    totalConDesc = totalSinDesc * 0.85;
    alert(`El total a pagar con descuento es de ${totalConDesc}`);
  }
  else if (cantidadBolsasTotal > 30) {
    totalConDesc = totalSinDesc * 0.75;
    alert(`El total a pagar con descuento es de ${totalConDesc}`);
  }
  else {
    alert(`No hay descuento`);
  }

  if (arenasBolsasTot > cementoBolsasTot && arenasBolsasTot > calBolsasTot) {
    alert(`El tipo con mayor cantidadde bolsas es la arena.`);
  }
  else if (cementoBolsasTot > arenasBolsasTot && cementoBolsasTot > calBolsasTot) {
    alert(`El tipo con mayor cantidadde bolsas es el cemento.`);
  }
  else {
    alert(`El tipo con mayor cantidadde bolsas es la cal.`);
  }

  if (arenaCara > cementoCaro && arenaCara > calCara) {
    alert(`El tipo con mas caro es la arena.`);
  }
  else if (cementoCaro> arenaCara && cementoCaro > calCara) {
    alert(`El tipo mas caro es el cemento.`);
  }
  else {
    alert(`El tipo mas caro es la cal.`);
  }

}
*/