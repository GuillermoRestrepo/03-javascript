document.write(`<h1>FUNCIONES PARA LA CADENAS</h1>`);
document.write(`EN TODAS IMPARTAN LAS MAYUSCULAS Y MINUSCULAS<br>`);

document.write(`<br>LONGITUD DE UNA CADENA<br>`);
document.write(`<code>"aéióu".length --> </code> ${"aéióu".length}<br>`);

document.write(`<br>OBTENER UN CARACTER SEGUN SU INDICE<br>`);
let cadena= "Esto es una cadena";

document.write(`<code>let cadena= "Esto es una cadena";</code><br>`);

document.write(`Con valores positivos: (<code> cadena[1] --> </code> ${cadena[1]})<br>`);

document.write(`Con valores negativos: (<code> cadena[-1] --> </code> ${cadena[-1]})<br>`);

document.write(`Con valores positivos: <code> cadena.charAt(2) --> </code> ${cadena.charAt(2)}<br>`);

document.write(`Con valores negativos: <code> cadena.charAt(-2) --> </code> Devuelve una cadena vacía <br>`);

document.write(`Con valores positivos: <code> cadena.at(3) --> </code> ${cadena.at(3)}<br>`);

document.write(`Con valores negativos: <code> cadena.at(-3) --> </code> ${cadena.at(-3)}<br>`);


document.write(`<br>OBTENER UN INDICE SEGUN UNA SUBCADENA<br>`);
document.write(`<code>"Esto no es PHP, es JavaScript".indexOf("es") --> </code> Devuelve el indice de la primera aparición: (${"Esto no es PHP, es JavaScript".indexOf("es")})<br>`);

document.write(`<code>"Esto no es PHP, es JavaScript".lastIndexOf("es") --> </code> Devuelve el indice de la última aparición: (${"Esto no es PHP, es JavaScript".lastIndexOf("es")})<br>`);


document.write(`<br>EXISTENCIA DE SUBCADENA<br>`);
document.write(`<code>"Esto es JavaScript".includes("es")</code> Devuelve true si la subcadena existe en la cadena principal y false si no: (${"Esto es JavaScript".includes("es")})<br>`);

document.write(`<code>"Esto es JavaScript".startsWith("Es")</code> Devuelve true si la cadena empieza con la subcadena que se indica y false si no: (${"Esto es JavaScript".startsWith("Es")})<br>`);

document.write(`<code>"Esto es JavaScript".endsWith("Script")</code> Devuelve true si la cadena termina con la subcadena que se indica y false si no: (${"Esto es JavaScript".endsWith("Script")})<br>`);


document.write(`<br>MAYÚSCULAS Y MINÚSCULAS<br>`);
document.write(`<code>"aéióu".toUpperCase() --> </code> Convierte a mayúsculas: (${"aéióu".toUpperCase()})<br>`);

document.write(`<code>"AÉIÓU".toLowerCase() --> </code> Convierte a mayúsculas: (${"AÉIÓU".toLowerCase()})<br>`);


document.write(`<br>REEMPLAZAR TEXTO<br>`);
document.write(`<code>"hola, hola".replace("hola", "chao") --> </code> Reemplaza la primera coincidencia: (${"hola, hola".replace("hola", "chao")})<br>`);

document.write(`<code>"hola, hola".replaceAll("hola", "chao") --> </code> Reemplaza todas las coincidencias: (${"hola, hola".replace("hola", "chao")})<br>`);


document.write(`<br>EXTRAER SUBCADENAS POR INDICE<br>`);
document.write(`<code>"Esto es JavaScript".slice(-6)) --> </code> Extrae una subcadena desde el indice que se le indique hasta el final de la cadena: (${"Esto es JavaScript".slice(-6)})<br>`);

document.write(`<code>"Esto es JavaScript".slice(-15, 11)) --> </code> Extrae una subcadena mdependiendo de los indices q se le indiquen: (${"Esto es JavaScript".slice(-15, 12)})<br>`);

document.write(`<code>"Esto es JavaScript".substring(8)) --> </code> Lo mismo que .slice, pero no acepta valores negativos: (${"Esto es JavaScript".substring(8)})<br>`);

document.write(`<code>"Esto es JavaScript".substring(3, 12))</code> --> (${"Esto es JavaScript".substring(3, 12)})<br>`);


document.write(`<br>ELIMINACIÓN / LIMPIEZA<br>`);
document.write(`<code>"  Hola mundo  ".trim() --> </code> Elimina los espacios al inicio y al final de un texto: (${"  Hola mundo  ".trim()})<br>`);

document.write(`<code>"  Hola mundo  ".trimStart() --> </code> Elimina los espacios al inicio de un texto: (${"  Hola mundo  ".trimStart()})<br>`);

document.write(`<code>"  Hola mundo  ".trimEnd() --> </code> Elimina los espacios al final de un texto: (${"  Hola mundo  ".trimEnd()})<br>`);

document.write(`<br>OTROS<br>`);
document.write(`<code> "ha".repeat(3) --> </code> Repite la cadena el numero de veces que se le indique: (${"ha".repeat(3)})<br>`);

document.write(`<code> "ABCD".charCodeAt(2) --> </code> Devuelve el código ascii del caracter que se encuentre en el indice que se le indique: (${"ABCD".charCodeAt(2)})<br>`);

document.write(`<code>"Casa".localeCompare("Carro") --> </code>Devuelve cero si ambas cadenas son iguales y valores diferentes de cero si es diferente: (${"Casa".localeCompare("Carro")})<br>`);

document.write(`<code> INVESTIGAR COMO SE CALCULAN LOS VALORES DIFERENTES DE 0 </code><br>`);
