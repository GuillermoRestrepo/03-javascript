////  CONCATENACIÓN EN JAVASCRIPT  ////
let nombre= "Alejandro."
let edad= 24;

/* Utilizando signo de suma (+) */
console.log("El usuario de nombre ("+nombre+"), tiene "+edad+" años.");

/* Utilizando signo de coma (,) */
console.log("El usuario de nombre (",nombre,"), tiene ",edad," años.");

/* Utilizando signo de suma e igual (+=) */
let saludo= "Hola";
saludo+= ", como estás.";
console.log(saludo);

/* Utilizando template (${}), para esto las comillas deben ser remplazadas por tildes invertidas (`) */
console.log(`Hola ${nombre} como estás.`);

/* usando el metodo .concat() */
console.log("Hola".concat(", como estás!"))


/*
    NOTAS:
 · No Es recomendado utilizar el metodo .concat().
 · La mejor es concatenar usando templates (${}).
 · En caso de ser cosas simples, se uede usar (+) o (,).
*/