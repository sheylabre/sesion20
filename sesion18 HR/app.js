/* CICLO FOR
var i;
for ( i = 0; i < 10; i= i+1) {  // para que sea de 10 a 1 se pone (i=10; i>1; i--)
	document.write("hola" + i + "<br>");
}
document.write("Fuera del for");
 */

 /*
var consicion = true;
var i = 1;
 while(condicion){
 	document.write("hola" + i + "<br>");
 	if (i>=10)
 		condicion = false;
 	i++;
 }
 document.write("Fuera del for");
*/


/*
//CICLO DO WHILE
var condicion=true;
do{
	var opcion = parseInt(prompt("Elija uno\n"
		"1. opcion1" +
		"2. opcion2" +
		"0. salir"))
	switch(opcion){
		case 1:
			alert("opcion1");
			break;
		case 2:
			alert("opcion2");
			break
		case 0:
			condicion = false;
		default
			alert("Ingresa una opcion valida -.-");
			break;
	}
}

*/
/*
// PRACTICA 1 HR 
var limit=10;
var total=0;
 	for (var i = 1; i <=limit; i++ )
 	total+=1;
console.log(total);
*/
//
var total = 0;
for (var i = 0; i <=0; i+=2) {
	total += i;
}
