/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let Farenheit;

    Farenheit = parseInt(document.getElementById("txtIdTemperatura").value);

    alert(Farenheit + "° Fahrenheit equivalen a " + ((Farenheit-32)*5/9) + " Centígrados");
}

function CentigradosFahrenheit () 
{
    let Centígrados;

    Centígrados = parseInt(document.getElementById("txtIdTemperatura").value);

    alert(Centígrados + " Centígrados equivalen a " + ((Centígrados*9/5)+32) + " Fahrenheit");
}
