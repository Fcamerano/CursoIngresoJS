function mostrar()
{
	let estacion;
	let destino;
	let preciobase;
	let porcentaje;
	let precioconaumento;
	let preciocondescuento;


	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	preciobase = 15000;
	precioconaumento = preciobase+(preciobase*porcentaje);
	preciocondescuento = preciobase-(preciobase*porcentaje);



	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					porcentaje = 0.2;
					alert("El precio es " + precioconaumento);
					break;
				case "Cataratas":
					porcentaje = 0.1;
					alert("El precio es " + preciocondescuento);
					break;
				case "Cordoba":
					porcentaje = 0.1;
					alert("El precio es " + preciocondescuento);
					break;
				case "Mar del plata":
					porcentaje = 0.2;
					alert("El precio es " + preciocondescuento);
					break;
			}
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					porcentaje = 0.2;
					alert("El precio es " + preciocondescuento);
					break;
				case "Cataratas":
					porcentaje = 0.1;
					alert("El precio es " + precioconaumento);
					break;
				case "Cordoba":
					porcentaje = 0.1;
					alert("El precio es " + precioconaumento);
					break;
				case "Mar del plata":
					porcentaje = 0.2;
					alert("El precio es " + precioconaumento);
					break;
			}
		case "Otoño":
			switch(destino)
			{
				case "Bariloche":
					porcentaje = 0.1;
					alert("El precio es " + precioconaumento);
					break;
				case "Cataratas":
					porcentaje = 0.1;
					alert("El precio es " + precioconaumento);
					break;
				case "Cordoba":
					porcentaje = 0.1;
					alert("El precio es " + precioconaumento);
					break;
				case "Mar del plata":
					porcentaje = 0.2;
					alert("El precio es " + preciobase);
					break;
			}
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
					porcentaje = 0.1;
					alert("El precio es " + precioconaumento);
					break;
				case "Cataratas":
					porcentaje = 0.1;
					alert("El precio es " + precioconaumento);
					break;
				case "Cordoba":
					porcentaje = 0.1;
					alert("El precio es " + precioconaumento);
					break;
				case "Mar del plata":
					porcentaje = 0.2;
					alert("El precio es " + preciobase);
					break;
			}
	}
}