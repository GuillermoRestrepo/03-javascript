/* BARRA INVERTIDA (\) PARA USAR CARATERES ESPECIALES EN CADENAS */
let mensaje= "Este es un \"mensaje\" de prueba, y este es un signo de dolar (\$Dollar)";
console.log(mensaje);

/* Utilizando signo de coma (,), no se concatena, solo se imprimen por pantalla varios argumentos*/
console.log("El usuario de nombre (",nombre,"), tiene ",edad," años.");

////  CONCATENACIÓN EN JAVASCRIPT  ////
let nombre= "Alejandro";
let edad= 24;

/* Utilizando signo de suma (+) */
console.log("El usuario de nombre ("+nombre+"), tiene "+edad+" años.");

/* Utilizando signo de suma e igual (+=) */
let saludo= "Hola, ";
let pregunta= "¿cómo estás?";
saludo+= pregunta;
console.log(saludo);

let invitacion= "Te invito ";
invitacion+= "al cine.";
console.log(invitacion);

/* Utilizando template (${}), para esto se reemplazan las comillas por el caracter de tilde invertida (`) */

console.log(`Hola, ${nombre} ${pregunta}`);

/* Usando el metodo .concat() */

console.log("Hola, ".concat(pregunta));


/*
    NOTAS:
 · No Es recomendado utilizar el metodo .concat().
 · La mejor es concatenar usando templates (${}).
 · En caso de ser cosas simples, se puede usar (+).
*/