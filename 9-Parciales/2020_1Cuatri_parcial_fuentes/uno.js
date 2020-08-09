
function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let acumBarbijo = 0;
	let acumAlcohol = 0;
	let acumJabon = 0;
	let contBarbijo = 0;
	let contAlcohol = 0;
	let contJabon = 0;
	let precioAlcoholbarato = 0;
	let contAlcoholBarato = 0;
	let fabricaAlcoholbarato = "";
	let promCompra;
	let flagAlcohol = 0;
	let mayortipo;


	for(let i=1 ; i<=5 ; i++)
	{
	
		do
		{
			tipo = prompt("Ingrese el tipo : barbijo / jabon / alcohol");
		}while(tipo == "barbijo" || tipo == "jabon" || tipo == "alcohol");
		do
		{
			precio = parseInt(prompt("Ingrese un precio entre 100 y 300:"));
		}while(precio > 100 && precio < 300);
		do
		{
			cantidad = parseInt(prompt("Ingrese una cantidad entre 0 y 1000:"));
		}while(cantidad > 0 && cantidad <= 1000);
		
		marca = prompt("Ingrese la marca:");
		fabricante = prompt("Ingrese el fabricante:");

		switch(tipo)
		{
			case "alcohol":
				acumAlcohol = acumAlcohol + cantidad;
				contAlcohol++;

				if(flagAlcohol == 0 || precioAlcoholbarato > precio)
				{
					precioAlcoholbarato = precio;
					contAlcoholBarato = cantidad;
					fabricaAlcoholbarato = fabricante;
					flagAlcohol = 1;
				}
				break;
			case "barbijo":
				acumBarbijo = acumBarbijo + cantidad;
				contBarbijo++;
				break;
			case "jabon":
				acumJabon = acumJabon + cantidad;
				contJabon++;
				break;
		}
	}

	if(acumAlcohol > acumBarbijo && acumAlcohol > acumJabon)
	{
		mayortipo = "alcohol";
		promCompra = acumJabon
	}
	else if(acumBarbijo > acumJabon && acumBarbijo >= acumAlcohol)
	{
		mayortipo = "barbijo";
		promCompra = acumBarbijo / contBarbijo;
	}
	else
	{
		mayortipo = "jabon";
		promCompra = acumJabon / contJabon;
	}

	alert

}
