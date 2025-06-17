/*  OBJETOS EN JAVASCRIPT  */
/* Un objeto es una estructura de datos que agrupa información mediante pares clave-valor (propiedad). */


/*  CREAR UN OBJETO  */
/* Objeto vacío: */
let obj1= {};

let obj2= new Object();

/* Objeto con valores: */
let obj3= {
    nombre: "Guillermo",
    apellido: "Restrepo",
};

let obj4= new Object({
    nombre: "Alejandro",
    apellido: "Gomez",
});

/*
También se pueden crear objetos haciendo usos de funciones y clases, esto se verá posteriormente.
*/

/*  OBJETOS DENTRO DE OBJETOS  */
let obj5= {
    user1: obj3,
    user2: obj4,
};


/*  ACCEDER A LOS DATOS  */
/* Usando (.clave): */
//Objeto simple
document.write(`Nombre: ${obj3.nombre}<br>`);
//Objeto Anidado
document.write(`Apellido: ${obj5.user1.apellido}<br>`);
document.write(`<br>`);

/* Usando (["clave"]): útil al recorrer con bucles. */
//Objeto simple
document.write(`Nombre: ${obj4["nombre"]}<br>`);
//Objeto Anidado
document.write(`Apellido: ${obj5["user2"]["apellido"]}<br>`);
document.write(`<br>`);


/* AGREGAR (NO tiene que existir la clave) */
obj3.edad= 24;
document.write(`Edad - User #1: ${obj3.edad}<br>`);

obj4.edad= 25;
document.write(`Edad - User #2: ${obj4.edad}<br>`);
document.write(`<br>`);


/* EDITAR (SI tiene que existir la clave) */
obj4.edad= 24;
document.write(`Edad - User #2: ${obj4.edad}<br>`);
document.write(`<br>`);


/* ELIMINAR (SI tiene que existir la clave) */
delete obj3.edad;
delete obj4.edad;
document.write(`Edad - User #1: ${obj3.edad}<br>`);
document.write(`Edad - User #2: ${obj4["edad"]}<br>`);
document.write(`<br>`);

/* FUNCIONES EN OJETOS */
let obj6= {
    nombre: "Jorge",
    saludo: function () {
        document.write(`Hola, ${this.nombre}`);
    },
};

// Desde ES6
let obj7= {
    nombre: "Ricardo",
    saludo () {
        document.write(`Hola, ${this.nombre}`);
    },
};

/* El metodo (this) permite referenciar al mismo objeto en donde se lo encuentre, es decir. el (this.nombre) en obj7 hace referencia a la propiedad nombre del mismo obj7 */


/* Object.values()*/
/* Devuelve los valores de un objetos en un arreglo, así: [valor1, valor2] */
document.write("Object.values(obj3): "+Object.values(obj3)+"<br>");

/* Object.keys()*/
/* Devuelve las claves de un objetos en un arreglo, así: [clave1, clave2] */
document.write("Object.keys(obj4): "+Object.keys(obj4)+"<br>");
document.write("<br>");

/* Object.entries()*/
/* devuelve las claves y los valores de un objeto en un arreglo, así: [[clave1,valor1], [clave2, valor2]] */
document.write("Object.entries(obj5): "+Object.entries(obj5)+"<br>");
document.write("<br>")

/* Object.entries() */
/* Hace que no se pueda cambiar, agregar ni eliminar propiedades de un objeto */
Object.freeze(obj7);
obj7.nombre= "Ricardo Mendoza";
document.write(obj7.nombre+"<br>")

/* Object.entries() */
/* Hace q no se pueda crear ni eliminar propiedados en un objeto, pero si permite modificarlas las propiedades existentes */
Object.seal(obj6);
obj6.nombre= "Jorge Luna";
delete obj6.nombre;
obj6.edad= 32;
document.write(Object.keys(obj6)+"<br>");
document.write(obj6.nombre+"<br>");


/* TODAVIA HAY MAS FUNCIONALIDADES COMO LA HERENCIA, RECORRER Y COPIAR OBJETOS, QUE SE VERÁ PROXIMAMENTE */