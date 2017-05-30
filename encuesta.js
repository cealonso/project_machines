var votos = [];

votos.push("1");
votos.push("1");
votos.push("2");
votos.push("1");
votos.push("3");
votos.push("2");
votos.push("3");
votos.push("3");

var longVotos=votos.length;

var total1 = 0;
var total2 = 0;
var total3 = 0;

function cantidadVotos(votos) {
    
	var elem=votos.shift();
	
    if (elem == 1)

		total1++;

	else if (elem == 2)

		total2++;

	else

		total3++;

}

var i=1;
while (i<=longVotos) {
	
	cantidadVotos(votos);
	i++;
    
	
}


document.write("<h3>Resultados de la Encuesta 2017</h3>");
document.write("Cantidad de votos: " + longVotos);
document.write("<br>");
document.write("Total de votos Real Madrid: "
		+ ((total1 / longVotos) * 100).toFixed(2) + "%");
document.write("<br>");
document.write("Total de votos Barcelona: "
		+ ((total2 / longVotos) * 100).toFixed(2) + "%");
document.write("<br>");
document.write("Total de votos Manchester United: "
		+ ((total3 / longVotos) * 100).toFixed(2) + "%");
