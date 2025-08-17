/*  OPERADORES LOGICOS  */
// Operador AND (&&)
document.write(`1. El operador AND, se representa con dos signos de ampersand juntos (&&).<br><br>`);

// Operador OR (||)
document.write(`2. El operador OR, se representa con dos barras verticales juntas (||).<br><br>`);

// Operador NOT (!)
document.write(`3. El operador NOT, se representa con el simbono de admiración de cierre (!).<br><br>`);

// Converit a booleano (!!)
document.write(`4. (!!): sirven para convertir el tipo de dato de una variable a booleano.<br><br>`);

// Operador Nullish (??)
document.write(`5. El operador Nullish (var1 ?? var2), devuelve la primera expresón si NO es nula o indefinida, en caso de que SI lo sea, devuelve la segunda expresión. (Más información en condicionales.)<br><br>`);


/*  VALORES QUE PUEDEN SER CONVERTIDOS A BOOLEANOS  */
document.writeln(`Cadenas vacías = falso<br>`);
let falso1= "";
document.write(`<code>!!""= ${!!falso1}</code><br><br>`);

document.writeln(`Cadenas NO vacías = verdadero<br>`);
let verdadero1= "rgrgajgpf";
document.write(`<code>!!"rgrgajgpf"= ${!!verdadero1}</code><br><br>`);

document.writeln(`Valores nulos o indefinidos = falso<br>`);
let falso2= null;
document.write(`<code>!!null= ${!!falso2}</code><br>`);
let falso3;
document.write(`<code>!!undefined= ${!!falso3}</code><br><br>`);

document.writeln(`El número cero o menos cero = falso<br>`);
let falso4= 0;
document.write(`<code>!!0= ${!!falso4}</code><br>`);
let falso5= -0;
document.write(`<code>!!-0= ${!!falso5}</code><br><br>`);

document.writeln(`Cualquier número diferente de cero = verdadero<br>`);
let falso6= -3;
let falso7= 5.3;
document.write(`<code>!!-3= ${!!falso6}</code><br>`);
document.write(`<code>!!5.3= ${!!falso7}</code><br>`);