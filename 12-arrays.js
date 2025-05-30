/*    ARREGLOS    */

/* Arreglo: tipo de dato que contiene y permite acceder a diferentes tipos de datos. */

/* Definir arreglo vacío: */
let arr= [];
let arr2= new Array();


/* Difinor arreglo con ocntenido: */
let arr3= [1, 2, 3, "a", "b", "c"];
let arr4= new Array(1, 2, 3, "a", "b", "c");


/* Saber si una variable es un arreglo: */
document.writeln(typeof arr4, '<br>'); // (object)


/* Saber la longitud de un arreglo: */
document.writeln(arr3.length, '<br>');


/* Acceder a un dato de un arreglo segun su indice: */
document.write(arr4[2], '<br>');


/* Modificar un dato por su indice: */
arr3[2]= 9;
document.write(arr3, '<br>');


/* Eliminar el ultimo valor de un arreglo */
arr3.pop();
document.write(arr3+ '<br>');


/* Eliminar el primer valor de un arreglo */
arr3.shift();
document.write(arr3+ '<br>');


/* Agrega al final un valor */
arr3.push('c');
document.write(arr3+ '<br>');


/* Agrega al inicio un valor */
arr3.unshift('1')
document.write(arr3+ '<br>');


/* Devuelve un sub-arreglo a partir del indice q se indica */
document.write(arr3.slice(3), '<br>');


/* Devuelve un sub-arreglo indicando indice de inicio e indice de fin */
document.write(arr3.slice(2, 5), '<br>'); 
// devuelve desde el indice 2 al indice 4


/* Eliminar una cierta cantidad de elementos a partir del indice que se le indique */
arr3.splice(1, 3);
// Se eliminan los elemento que se encuenten en el indice (1, 2, 3)
document.write(arr3, '<br>');

/* Invierte un arreglo */
document.write(arr4.reverse(), "<br>");

/* Ordena un arreglo de forma númerica, alfabetica, o ambas */
document.write(arr4.sort(), "<br>");

/* Devuelve true si un arreglo contiene el elemento que se indica */
document.write(arr4.includes("c"), "<br>");
document.write(arr4.includes("4"), "<br>");

/* Devuelve el indice si el arreglo contiene el elemento que se le indica y -1 si no */
document.write(arr4.indexOf(3), "<br>");
document.write(arr4.indexOf("d"), "<br>");

/* Devuelve el primer elemento que cumpla con la condición */
document.write(arr4.find(x => x >2), "<br>");

/* Devuelve el indice del primer elemento que cumple con la condición */
document.write(arr4.findIndex(x => x >2), "<br>");

/* Convierte una cadena en un arreglo separando los elementos por el caracter que se indica: */
let cadena= "Hola como estás";
let arr5= cadena.split(' ');
document.write(arr5, "<br>");

/* convierte una arreglo en una cadena separando los elementos por el caracter que se le indica: */
document.write(arr5.join("-"), "<br>");

/* Unir dos arreglos */
document.write(["a", "b",].concat(["c", "d"])+ "<br>");

/* Cear un nuevo arreglo pero con modificaciones */
document.write(arr5.map(e => e.toUpperCase())+ '<br>');

/* Crea un nuevo arreglo con los elementos q cumplan la condicion que se especifica */
let arr6= [1, 2, 3, 4, 5, 6];
document.write(arr6.filter(i => i%2 === 0)+ '<br>');
document.write(arr6.filter(i => i%2 !== 0)+ '<br>');

/* Reduce un arreglo a un solo elemento (INVESTIGAR MAS)*/
document.write(arr6.reduce((a, b) => a+b)+ '<br>');

/* Arreglos multidimensionales */
// No se trata nada mas y nada menos que un arreglo dentro de otro arreglo y para acceder a ellos se puede hacer mediante el uso de estructuras condicionales o simplemente indicando los indices.

// (A partir de este concepto se desarrollan las matrices grafos y demas)

let matriz= [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

document.write(matriz[1]+ "<br>");
document.write(matriz[2][1]+ "<br>");