function mostrar()
{
	let estacion;
	let destino;
	let preciobase;
	let preciofinal;


	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	preciobase = 15000;	


	switch(estacion)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					preciofinal = preciobase*1.2;
					break;
				case "Cataratas":
				case "Cordoba":
					preciofinal = preciobase*0.9;
					break;
				case "Mar del plata":
					preciofinal = preciobase*0.8;
					break;
			}
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					preciofinal = preciobase*0.8;
					break;
				case "Cataratas":
				case "Cordoba":
					preciofinal = preciobase*1.1;
					break;
				case "Mar del plata":
					preciofinal = preciobase*1.2;
					break;
			}
		case "Primavera":
		case "Otoño":
			switch(destino)
			{
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas":
					preciofinal = preciobase*1.1;
					break;
				case "Cordoba":
					preciofinal = preciobase;
					break;
			}
	}
	alert(`La tarifa final del viaje sera de $${preciofinal}`);
}