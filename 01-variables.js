////  COMENTARIOS  ////

//Esto es un comentario de línea.

/*
Esto es
un comentario
de bloque
*/


////  FORMAS DE DEFINIR VARIABLES  ////
/*Existen 3 formas de definir variables en JS.*/

var nombre= "Alejandro";
let edad= 24;
const constante= 3.1416;

/*  NOTAS:
· var: es una forma antigua de definir variables, es preferible evitar su uso.

· let: es la forma actual de definir una variable, la mas segura, versatil y utilizada.

· const: tecnicamente no es una variable, es una constante, de la cual se hablará más posteriormente, sin embargo, en JavaScript la declaración de constantes es igual a la declaración de variables. 
*/

let variable;       // Se crea.
variable= "Hola";    // Se le da valor.

let variable2= "Hola";    // Se crea y se le da valor.


////  TIPOS DE DATOS  ////
/*
    NOTA:
  · (typeof variable): sirve para saber que tipo de dato contiene una variable.
*/

/* string: cadena de textos o caracteres. */
let cadena= "Hola";
let cadena2= 'Como';
let cadena3= `Estás`;

console.log(typeof cadena);
console.log(typeof cadena2);
console.log(typeof cadena3);

/* number: numeros entero y decimales. */
let entero= 1;
let decimal= 0.1;

console.log(typeof entero)
console.log(typeof decimal)

/* boolean: verdadero o falso*/
let verdadero= true;
let falso= false;

console.log(typeof verdadero)
console.log(typeof falso)

/* null: para una variable intencionalmente vacia. */
let nulo= null;
console.log(typeof nulo)
/* NOTA: existe un error en JavaScript que hace que un valor nulo sea de tipo objeto, es por eso que al usar (typeof) en una variable que tenga valor null, se muestra como object. */

/* undefined: para una varable que no se ha definido un valor. */
let indefinido;    // Solo se ha declarado.
console.log(typeof indefinido)


////  CAMBIAR EL TIPO DE DATO DE UNA VARIABLE  ////
/* String(): Cambiar a una cadena. */
console.log(typeof String(entero))

/* Number(): Cambiar a number. */
console.log(typeof Number(entero))

/* Boolean(): Cambiar a booleano. */
console.log(typeof Boolean(entero))

/* parseInt(): cambiar a numero entero. */
console.log(typeof parseInt(entero))

/* parseFloat(): cambiar a numero decimal. */
console.log(typeof parseFloat(entero))

/*
NOTA: EXISTEN OTROS TIPOS DE VARIABLES COMO (OBJECT, ARRAYS, FUNCTION) DE LAS CUALES SE HABLARÁN EN SUS TEMAS CORRESPONDIENTES.
*/