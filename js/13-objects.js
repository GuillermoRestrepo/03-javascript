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
/*
    Pasa de esto: {clave1: valor1, clave2: valor2}
    A esto: [[clave1, valor1], [clave2, valor2]]
*/
let objeto= {clave1: "valor1", clave2: "valor2"};
let arreglo= Object.entries(objeto);
document.write(`${arreglo[0]}<br>${arreglo[1]}<br>`);
document.write("<br>");

/* Object.fromEntries()*/
/*
    Pasa de esto: [[clave1, valor1], [clave2, valor2]]
    A esto: {clave1: valor1, clave2: valor2}
*/
let objeto2= Object.fromEntries(arreglo);
document.write(`clave1: ${objeto2["clave1"]}<br>clave2: ${objeto2["clave2"]}<br>`);
document.write("<br>");

/* Object.freeze() */
/* Hace que no se pueda cambiar, agregar ni eliminar propiedades de un objeto */
Object.freeze(obj7);
obj7.nombre= "Ricardo Mendoza";
document.write(obj7.nombre+"<br>")
document.write("<br>")

/* Object.seal() */
/* Hace q no se pueda crear ni eliminar propiedados en un objeto, pero si permite modificarlas las propiedades existentes */
Object.seal(obj6);
obj6.nombre= "Jorge Luna";
delete obj6.nombre;
obj6.edad= 32;
document.write(Object.keys(obj6)+"<br>");
document.write(obj6.nombre+"<br>");
document.write("<br>")

/* Object.assign(receptor, emisor1, emisor2, ...) */
/* Sirve para copiar, fusionar, sobreescribir o agregar propiedades de uno o varios objetos emisores hacia un objeto receptor. */

// COPIAR (El receptor debe ser un objeto)
// Forma #1:
let emisor= {x: "a", y: "b", z:"c"};
let receptor= {};
Object.assign(receptor, emisor);
document.write(Object.values(receptor)+"<br>");
// Forma #2:
let receptor2= Object.assign({}, emisor);
document.write(Object.values(receptor2)+"<br>");
document.write("<br>")

// FUSIONAR (UNIR)
let object_1= {w: "a", x: "b"};
let object_2= {y: "c", z: "d"};
let union= Object.assign(object_1, object_2);
document.write(Object.values(union)+ "<br>");
document.write("<br>")

// SOBREESCRIBIR (REEMPLAZAR)
/* Esto pasa cuando almenos 2 objetos tienen una propiedad con la misma clave y prevalecerá el valor del untimo objeto emisor. */
let object_3= {x: "a", y: "b"};
let object_4= {y: "c", z: "e"};
let object_5= {y: "d"};
let reemplazar= Object.assign(object_3, object_4);
document.write(Object.values(reemplazar)+ "<br>");
let reemplazar2= Object.assign(object_3, object_4, object_5);
document.write(Object.values(reemplazar2)+ "<br>");
document.write("<br>")

/* AGREGAR */
Object.assign(object_3, {z: "c"});
document.write(Object.values(object_3)+"<br>");
document.write("<br>")

/* NOTA: Si son Objetos anidados, ASSIGN copia fielmente cada objeto que se encuentre dentro, es decir al realizar un cambio dentro de dicho objeto, tambien se cambiará el original. */
let original= {direccion: {
        ciudad: "Durán",
        provincia: "Guayas",
        Región: "Costa",
    }
};
let copia= Object.assign({}, original);
// Cambiando valor de ciudad en objeto copia
copia.direccion.ciudad= "Guayaquil";

//imprimiendo ciudad de objeto original
document.write(original.direccion.ciudad); // ahora tambien es guayaquil, cuidado con eso.


/* EXISTEN MAS METODOS QUE SE VERÄN DESPUES */
/*
    Object.hasOwn(obj, "clave")
    hasOwnProperty()
    Object.defineProperty(obj, "clave", descriptor)
*/