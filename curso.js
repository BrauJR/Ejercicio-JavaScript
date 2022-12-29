// TIPOS DE DATOS

// VARIABLES Y CONSTANTES
/*
var miNombre = "BrauJR";
console.log(miNombre);
var miVariable = 18;
console.log(miVariable);
*/

// OPERADOR DE ASIGNACIÓN
/*
var a;
var b = 2;
console.log(a); // undefined
console.log(b); // Tiene un valor
a = 10;
console.log(a); // Tiene un valor
*/

// ASIGNACIÓN DE UNA VARIABLE A OTRA
/*
var a = 5;
var b = a;
console.log(a);
console.log(b);
var a = 5;
var b;
b = a;
console.log(a);
console.log(b);
*/

// INICIALIZAR VARIABLES
/*
var x = 9;
var miIdioma = "Español";
*/

// VARIABLE NO INICIALIZADA
/*
var a;
a = 56;
console.log(a);
*/

// MAYÚSCULAS Y MINÚSCULAS
/*
var miVariable = 500;
console.log(miVAriable);
*/

// SUMA / RESTA / MULTIPLICACIÓN / DIVISIÓN
/*
var operacion = 7 + 12;
console.log(operacion);
*/

// NÚMEROS DECIMALES. SUMA / RESTA / MULTIPLICACIÓN / DIVISIÓN
/*
var operacionDecimal = 4.9 / 3.1;
console.log(operacionDecimal)
*/

// INCREMENTAR / REDUCIR EL VALOR DE UNA VARIABLE EN 1
/*
var librosComprados = 105;
console.log(librosComprados);
librosComprados++; // librosComprados--;
console.log(librosComprados);
*/

// ASIGNACIÓN. SUMA / RESTA / MULTIPLICACIÓN / DIVISIÓN
/*
var a = 23;
console.log(a);
a += 5;
console.log(a);
*/

// VARIABLES CON CADENAS DE CARACTERES
/*
var nombre = "Juan";
*/

//ESCAPAR COMILLAS EN CADENAS DE CARACTERES
/*
var miCadena = "Soy una cadena de caracteres con \"comillas\"";
console.log(miCadena);
*/

// CADENAS DE CARÁCTERES CON COMILLAS SIMPLES
/*
var miMeta;
miMeta = 'Aprender a programar "JavaScript"';
console.log(miMeta);
*/

// SECUENCIAS DE ESCAPE
/*
console.log("Estoy aprendiendo: \n Javascript");
console.log("");
*/

// CONCATENAR CADENAS DE CARÁCTERES
/*
var nombreCompleto = "Aldo" + " Farfan";
console.log(nombreCompleto)
*/

// CONSTRUIR CADENAS CON VARIABLES
/*
var verbo = "programar";
var mensaje = "Estoy aprendiendo a " + verbo + " JavaScript";
console.log(mensaje);
*/

// AGREGAR VARIABLES A CADENA DE CARÁCTERES
/*
var mensajeCompleto = "Estoy aprendiendo a programar ";
var parteFinal = "JavaScript";

console.log(mensajeCompleto)
mensajeCompleto += parteFinal;
console.log(mensajeCompleto);
*/

// LONGITUD DE UNA CADENA DE CARACTERES
/*
var miCadena = "Javascript";
console.log(miCadena.length);
*/

// NOTACIÓN DE CORCHETES. PRIMER CARÁCTER
/*
var lenguajeProgramacion = "JavaScript";
console.log(lenguajeProgramacion[0]);
*/

// INMUTABILIDAD DE CADENA DE CARACTERES
/*
var miCadena = "Jola Mundo";
console.log(miCadena);
miCadena[0] = "H";
console.log(miCadena);
*/

// NOTACIÓN DE CORCHETES. ÚLTIMO CARÁCTER
/*
var miCadena = "Que onda banda!";
console.log(miCadena[miCadena.length - 1]);
*/

// PALABRAS EN BLANCO
var miSustantivo = "perro";
var miAdjetivo = "negro";
var miVerbo = "corrió";
var miAdverbio = "rápidamente";
/* Concatena las cadenas para crear una cadena que muestre un mensaje.
Puedes cambiar los valores de las variables.

Por ejemplo: El perro coriio rápidamente a la tienda.
*/
/*
var palabrasEnBlanco = "El " + miSustantivo + " " + miAdjetivo + " " + miVerbo + " " + miAdverbio + " a la tienda.";
console.log(palabrasEnBlanco);
*/

// ARREGLOS (ARRAYS)
/*
var miArreglo = ["John", 24];
var estudiantes = ["Luis, Pedro, Juan"];
console.log(miArreglo);
console.log(estudiantes)
*/

// ARREGLOS ANIDADOS
/*
var listaEstudiantes = [["Luis", 19], ["Javi", 21]];
console.log(listaEstudiantes);
*/

// ACCEDER A LOS ELEMENTOS DE UN ARREGLO
/*
var miArreglo = [10, 20, 30];
// console.log(miArreglo[1]);

var suma = miArreglo[0] +  miArreglo[1] + miArreglo[2];
console.log(suma);
*/

// MODIFICAR ELEMENTOS DE UN ARREGLO
/*
var miArreglo = [10, 20, 30];
miArreglo[1] = [1, 2, 3];
console.log(miArreglo);
*/

// ACCEDER A ARREGLOS MULTIDIMENSIONALES
/*
var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(miArreglo[0]);
console.log(miArreglo[1]);
console.log(miArreglo[2]);
console.log("El número en la posición (2,0) es: " + miArreglo[2][0]);
*/

// .PUSH() Agrega al final
/*
var estaciones = ["Invierno", "Otoño", "Primavera"];
estaciones.push("Verano");
console.log(estaciones);

// .POP() Elimina al final
var estaciones;
var estacion;
estaciones = ["Invierno", "Otoño", "Primavera", "Verano"];
estacion = estaciones.pop();
console.log(estaciones);
console.log(estacion);


// .SHIFT() Elimina al principio
var estaciones = ["Invierno", "Otoño", "Primavera", "Verano"];
estaciones.shift();
console.log(estaciones);

// .UNSHIFT Agrega al principio
var estaciones = ["Invierno", "Otoño", "Primavera"];
estaciones.unshift("Verano");
console.log(estaciones);
*/

// LISTA DE COMPRAS
/*
var miListaDeCompras = [["Cereal", 3],
                        ["Leche", 2],
                        ["Galletas", 4],
                        ["Pan", 5],
                        ["Refresco", 7],
                        ["Pollo", 8]];
// Cereal
console.log("Voy a comprar " + miListaDeCompras[0][1] + " unidades de " + miListaDeCompras[0][0]);
// Leche
console.log("Voy a comprar " + miListaDeCompras[4][1] + " unidades de " + miListaDeCompras[4][0]);
// Galletas
console.log("Voy a comprar " + miListaDeCompras[2][1] + " unidades de " + miListaDeCompras[2][0]);
*/

// FUNCIONES
/*
function mostrarMensaje() {
  console.log("¡Hola, Mundo!");
}
mostrarMensaje();

// ARGUMENTOS
function sumar(a, b) {
  var suma = a + b;  
  console.log("El resultado de " +  a + " + " + b + " es: " + suma);
}
var x = 9;
var y = 1;
sumar(x, y);

function concatenarCadena(c1, c2, c3) {
  console.log(c1 + " " + c2 + " " + c3);
}
concatenarCadena("Estoy", "aprendiendo", "JavaScript");
*/

// ÁMBITO GLOBAL
/*
var miVariableGlobal = 5;
console.log(miVariableGlobal);
function miFuncion() {
  console.log(miVariableGlobal);
}
miFuncion();
console.log(miVariableGlobal);
*/

// ÁMBITO LOCAL
/*
function miFuncion() {
  var miVariableLocal = 4;
  console.log(miVariableLocal);
}
miFuncion();
console.log(miVariableLocal);
*/

// ÁMBITO GLOBAL VS LOCAL
/*
var miNombre = "Lupe";
function mostrarNombre() {
  var miNombre = "Gina";
  console.log(miNombre);
}
mostrarNombre();
console.log(miNombre);
*/

// RETORNAR UN VALOR
/*
function sumar(a, b) {
  return a + b;
}
console.log(sumar(3, 2));
*/

// UNDEFINED
/*
function sumar(a, b) {
  console.log(a + b);
  // return a + b;
}
console.log(sumar(1, 2));
*/

// ASIGNAR UN VALOR RETORNADO
/*
function sumar(a, b) {
  return a + b;
}
var resultado = sumar(4, 3);
console.log(resultado);

function crearCadenaConMeta(lenguajeP) {
  return "Mi meta es aprender" + lenguajeP;
}
var miMeta = crearCadenaConMeta("JavaScript");
console.log(miMeta);
*/

// PERMANECE EN FILA
// Define una función proximoEnLaFila que tome un arreglo (arreglo) y un número (elemento)
//   como argumentos. Agrega un número al final del arreglo y luego elimina el primer elemento del 
//   arreglo. La función proximoEnLaFila debe retornar el elemento que fue removido
/*
function proximoEnLaFila(arreglo, elemento) {
  arreglo.push(elemento); // Agregar al final del arreglo
  return arreglo.shift(); // Remover el primer elemento
}
var miArreglo = [1, 2, 3, 4, 5];
console.log("Antes: " + JSON.stringify(miArreglo));
console.log(proximoEnLaFila(miArreglo, 6));
console.log("Después: " + JSON.stringify(miArreglo));
*/

// VALORES BOOLEANOS
/*
console.log(true);
//console.log(True);
console.log(false);
*/

// OPERADOR DE IGUALDAD
/*
console.log(2 == 3);
*/

// OPERADOR DE IGUALDAD ESTRICTA
/*
console.log(9 == 9) // true
console.log(9 == "9") // true
console.log(9 === "9") // false
*/

// PRÁCTICA COMO COMPARAR VALORES
/*
var a;
var b;
a = 5;
b = 5;
console.log(a == b);
console.log(a === b);
b = 8;
console.log(a == b);
console.log(a === b);
b = "5";
console.log(a == b);
console.log(a === b);
a = "Hola";
b = "Hola";
console.log(a == b);
console.log(a === b);
*/

// OPERADOR DE DESIGUALDAD
/*
console.log(9 != 6);
console.log(9 != 9);
*/

// OPERADOR DE DESIGUALDAD ESTRICTA
/*
console.log(1 != "1");
console.log(1 !== "1");
*/

// OPERADOR >, <, >=, <=
/*
console.log(4 > 3)
console.log("B" > "A")
console.log("ACB" > "ABC")
console.log("AB" > "A")
var a = 15;
var b = 2;
console.log(a > b);
*/

// OPERADORES LÓGICOS && , || , !
/*
var a = 15;
console.log((a > 5) && (a < 10));
*/

// CONDICIONALES if, else if, else
/*
var x = 5;
if((x > 2) && (x < 10)) {
  console.log("La condición es verdadera");
}

function clasificarValor(valor) {
  if(valor % 2 === 0) {
    console.log("Divisible entre 2");
  } else if(valor % 3 === 0) {
    console.log("Divisible entre 3")
  } else {
    console.log("No es divisible entre las opciones");
  }
}
clasificarValor(15);
*/

// SWITCH

// RETORNAR VALORES BOOLEANOS
/*
function esMenorQue(a, b) {
  return a < b;
}
console.log(esMenorQue(6, 3));
*/

// PATRÓN DE RETORNO ANTICIPADO
/*
function miFuncion() {
  console.log("Hola");
  return "Mundo";
  console.log("Adiós");
}
console.log(miFuncion());

function calcularRaizCuadrada(num) {
  if(num < 0) {
    return undefined;
  }
  return Math.sqrt(num);
}
console.log(calcularRaizCuadrada(-9))
*/

// CONTEO DE CARTAS
/* Descripción:
En el juego de casino Blackjack el jugador puede sacarle 
ventaja a la casa llevando un registro del número relativo
de cartas altas y bajas que quedan en la baraja. 
Esto se llama "conteo de cartas".
Tener más cartas altas en la baraja es una ventaja para el 
jugador. Se le asigna un valor a cada carta de acuerdo a 
la siguiente tabla. 
- Cuando el conteo es positivo, el jugador debería apostar alto. 
- Cuando el conteo es 0 o negativo, el jugador debería apostar bajo.
Cambio del conteo	     Cartas
---------------------------------------------
+1	                  2, 3, 4, 5, 6
0	                  7, 8, 9
-1	                  10, 'J', 'Q', 'K', 'A'
Nuestra meta es definir una función para contar cartas. 
La función debe tomar un parámetro carta que puede ser 
un número o una cadena de caracteres y luego aumentar 
o reducir el valor de la variable global conteo 
de acuerdo al valor de la carta (observa la tabla). 
La función debe retornar una cadena de caracteres con el 
conteo actual y la cadena:
- "Apostar" si el conteo es positivo.
- "Esperar" si el conteo es cero o negativo. 
El conteo actual y la decisión del jugador 
("Apostar" o "Esperar") deben estar separados por un espacio.
*/

/*
var conteo = 0;

function contarCartas(carta) {
  var decision;

  switch (carta) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        conteo++;
        break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
        conteo--;
        break;
  }

  if (conteo > 0) {
    decision = "Apostar";
  } else {
    decision = "Esperar";
  }

  return conteo + " " + decision;
}

contarCartas(2);
contarCartas(3);
contarCartas(7);
contarCartas("K");
contarCartas("A");
*/

// OBJETOS
/*
var miPerro = {
  "nombre": "Gym",
  "edad": 5,
  "peso": 89,
  "raza": "Chihuahua"
}
*/

// ACCEDER A PROPIEDADES. NOTACIÓN DE PUNTO
/*
var miPerro = {
  "nombre": "Gym",
  "edad": 5,
  "peso": 89,
  "raza": "Chihuahua"
}
console.log(miPerro.nombre);
console.log(miPerro.raza);
console.log(miPerro.peso);
*/

// ACCEDER A PROPIEDADES. NOTACIÓN DE CORCHETE
/*
var miCuaderno = {
  "color": "azul",
  "categoria": 8,
  "numero de paginas": 400,
  "numero de hojas": 100
}
console.log(miCuaderno["numero de paginas"]);
*/

// ACCEDER A PROPIEDADES VARIABLES
/*
var resultados = {
  1: "Luis09",
  2: "Pepe12",
  3: "Juan123",
  4: "Saul09"
}
var posicion = 3;
console.log(resultados[posicion]);
*/

// ACTUALIZAR PROPIEDADES
/*
var mochila = {
  color: "blanco",
  tamanio: "mediano",
  contenido: ["botella de agua", "cuaderno"]
}
console.log(mochila.color);
mochila.color = "Rojo";
console.log(mochila.color);

console.log(mochila.contenido);
mochila.contenido.push("Goma");
console.log(mochila.contenido);

mochila.contenido = ["atlas", "botella"];
console.log(mochila.contenido);
*/

// AGREGAR PROPIEDADES
/*
var curso = {
  titulo: "Aprendiendo JavaScript",
  idioma: "español",
  duracion: 30
}
console.log(curso.vistas);
curso.vistas = 32123;
console.log(curso.vistas);
*/

// ELIMINAR PROPIEDADES
/*
var curso = {
  titulo: "Aprendiendo JavaScript",
  idioma: "español",
  duracion: 30
}
console.log(curso.duracion);
delete curso.duracion;
console.log(curso.duracion);
console.log(curso);
*/

// OBJETOS PARA BÚSQUEDAS
/*
function buscarElementoQuimico(simbolo) {
  var elementoQuimico = "";
  switch(simbolo) {
    case "Al":
      elementoQuimico = "Aluminio";
      break;
    case "S":
      elementoQuimico = "Azufre";
      break;
    case "Cl":
      elementoQuimico = "Cloro";
      break;
    case "He":
      elementoQuimico = "Helio";
      break;
    case "B":
      elementoQuimico = "Boro";
      break;
    case "Li":
      elementoQuimico = "Litio";
      break;
  }
  return elementoQuimico;
}
console.log(buscarElementoQuimico("Li"));
*/

/*
function buscarElementoQuimico(simbolo) {
  var elementoQuimico = "";
  var simbolosQuimicos = {
    Al: "Aluminio",
    S: "Azufre",
    Cl: "Cloro",
    He: "Helio",
    B: "Boro",
    Li: "Litio"
  };
  return simbolosQuimicos[simbolo];
}
console.log(buscarElementoQuimico("Li"));
*/

// VERIFICAR PROPIEDADES
/*
var miCuaderno = {
  color: "amarillo",
  categoria: 4,
  precio: 8.90
}
console.log(miCuaderno.hasOwnProperty("categoria"));
console.log(miCuaderno.hasOwnProperty("origen"));
*/
/*
function verificarPropiedad(obj, propiedad) {
  if(obj.hasOwnProperty(propiedad)) {
    return "Propiedad: " + obj[propiedad];
  } else {
    return "El objeto no tiene esta propiedad";
  }
}
var miCuaderno = {
  color: "amarillo",
  categoria: 4,
  precio: 8.90
}
console.log(verificarPropiedad(miCuaderno, "color"))
*/

// OBJETOS COMPLEJOS
/*
var ordenesDePizzas = [
  {
    tipo: "margarita",
    tamanio: "individual",
    precio: 298.1,
    toppings:[
      "extra queso",
      "champiñones",
      "piña"
    ],
    paraLllevar: true
  },
  {
    tipo: "cuatro quesos",
    tamanio: "familiar",
    precio: 300.89,
    toppings:[
      "extra queso",
      "pimentón",
    ],
     paraLllevar: false
  },
  {
    tipo: "Hawaiana",
    tamanio: "individual",
    precio: 500.22,
    toppings: [] ,
    paraLlevar: true 
  }
];
console.log(ordenesDePizzas[0].tipo);
console.log(ordenesDePizzas[0]["tipo"]);
console.log(ordenesDePizzas[0].toppings);
console.log(ordenesDePizzas[2].tipo);
*/

// OBJETOS ANIDADOS
/*
var miReceta = {
  descripcion: "Mi postre",
  costo: 637.21,
  ingredientes: {
    masa: {
      harina: "100grs",
      sal: "1 cucharadita",
      agua: "1 taza"
    },
    cobertura: {
      azucar: "120grs",
      chocolate: "4 cucharadas",
      mantequilla: "200grs"
    }
  }
};
// console.log(miReceta.descripcion)
// console.log(miReceta.costo)
console.log(miReceta.ingredientes.masa.harina);
console.log(miReceta.ingredientes.masa["harina"]);
console.log(miReceta.ingredientes.masa.sal);
console.log(miReceta.ingredientes.masa.agua);
*/

// ARREGLOS ANIDADOS
/*
var misPlantas = [
  {
    tipo: "Flores",
    lista: [
      "rosas",
      "tulipanes",
      "diente de león"
    ]
  },
  {
    tipo: "Arboles",
    lista: [
      "abeto",
      "pino", 
      "abedul"
    ]
  }
];
var primeraFlor = misPlantas[0].lista[0];
console.log(primeraFlor)
var segundoArbol = misPlantas[1].lista[1];
console.log(segundoArbol);
*/

// COLECCIÓN DE DISCOS
/*
Tenemos un objeto que representa parte de una colección
de álbumes músicales.
Cada albúm tiene un número de identificación única (id)
asociado a otras propiedades.
No todos los álbumes tienen la información completa
*/

/*
var coleccionDeDiscos = {
  7823: {
    tituloAlbum: "Bee Gees Meeting",
    artista: "Bee Gees",
    canciones: ["Stayin", "Alive"]
  }, 
  5432: {
    tituloAlbum: "ABBA Gold"
  }
}
*/

/*
Define una función actualizarDiscos que tome los siguientes parámetros
- discos (el objeto que representa la coleccuon de discos)
- id
- propiedad ("artista o "canciones")
- valor

Tu meta es completar la función implementando las siguientes reglas
para modificar el objeto pasado a la función:

° Si "valor" es una cadena vacía, elimina la propiedad del álbum correspondiente

° Si "propiedad" es igual a la cadena de caracteres "canciones"  pero el álbum no tiene una propiedad llamada "canciones", crea un arreglo vacío y agrega "valor" a ese arreglo

° Si "propiedad es igual a la cadena de caracteres "canciones" y 
"valor" no es una cadena vacía, agrega "valor" al final del arreglo 
de canciones del álbum correspondiente.

° Si "valor" no es una cadena vacía y "propiedad"  no es igual a "canciones", asigna el valor del parámetro "valor" a la propiedad.
Si la propiedad no existe, debes crearla y asignar este valor.
*/

/*
function actualizarDiscos(discos, id, propiedad, valor) {
  if(valor === "") {
    delete discos[id][propiedad];
  } else if(propiedad === "canciones") {
    discos[id][propiedad] = discos[id][propiedad] || [];
    discos[id][propiedad].push(valor);
  } else {
    discos[id][propiedad] = valor;
  }
}
console.log(coleccionDeDiscos[7823].tituloAlbum);
actualizarDiscos(coleccionDeDiscos, 7823, "tituloAlbum", "");
console.log(coleccionDeDiscos[7823].tituloAlbum);

console.log(coleccionDeDiscos[5432].canciones);
actualizarDiscos(coleccionDeDiscos, 5432, "canciones", "Mamma Mia");
console.log(coleccionDeDiscos[5432].canciones);

console.log(coleccionDeDiscos[5432].artista);
actualizarDiscos(coleccionDeDiscos, 5432, "artista", "ABAAA");
console.log(coleccionDeDiscos[5432].artista);
*/


// CICLO WHILE
/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Ciclo "while" en JavaScript.
*/

// Ejemplo 1
/*
var i = 0;

while (i <= 3) {
  console.log("Hola, Mundo");
  i++;
}

// Ejemplo 2

var miArreglo = [];
var i;

console.log(miArreglo);

while (i < 10) {
  miArreglo.push(i);
  i++;
}

console.log(miArreglo);

// Ejemplo 3

var numeros = [2, 3, 4, 5, 6, 8, 9, 34];

while (numeros.length > 4) {
  numeros.pop(); // Remover el último número.
}

console.log(numeros);
*/

// CICLO FOR
/*
// Ejemplo 1

var miArreglo = [];

for (var i = 0; i < 10; i++) {
  miArreglo.push(i);
}

console.log(miArreglo);

// Ejemplo 2

var miArreglo = [];

for (var i = 0; i < 10; i += 2) {
  miArreglo.push("A");
}

console.log(miArreglo);
*/

// NÚMEROS IMPARES
/*
miArreglo = [];

for (var i = 1; i < 20; i += 2) {
  miArreglo.push(i);
}

console.log(miArreglo);
*/

// FOR. CONTAR HACIA ATRAS
/*
// Ejemplo 1

for (var i = 15; i >= 10; i--) {
    console.log(i);
}

// Ejemplo 2

var miArreglo = [];

for (var i = 10; i > 0; i -= 2) {
    miArreglo.push(i);
}

console.log(miArreglo);
*/

// ITERAR SOBRE UN ARREGLO CON UN CICLO FOR
/*
// Ejemplo 1

var miArreglo = [4, 6, 8, 2];
var total = 0;

for (var i = 0; i < miArreglo.length; i++) {
    total += miArreglo[i];
}

console.log(total);

// Ejemplo

var lenguajes = ["JavaScript", "Python", "Java", "C++"];

for (var i = 0; i < lenguajes.length; i++) {
    console.log(lenguajes[i].toUpperCase());
}

// Ejemplo

function contarNumerosPares(arreglo) {
    var total = 0;
    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 == 0) {
            total++;
        }
    }
    return total;
}

console.log(contarNumerosPares([5, 3, 1]));
console.log(contarNumerosPares([5, 3, 1, 2]));
console.log(contarNumerosPares([5, 3, 1, 2, 4, 8]));
console.log(contarNumerosPares([5, 2, 6, 3, 7, 5, 6, 3]));
*/

// FOR ANIDADOS
/*
var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// Por cada arreglo anidado
for (var i = 0; i < arreglo.length; i++) {
  var arregloAnidado = miArreglo[i];
  // Por cada elemento del arreglo anidado
  for (var j = 0; j < fila.length; j++) {
    console.log(arregloAnidado[j]);
  }
}
*/

// DO WHILE
/*
var x = 16;

do {
  console.log(x);
  x++;
} while (x < 10);

x = 16;

while (x < 10) {
  console.log(x);
  x++;
}
*/

// BÚSQUEDA DE PERFIL
/*
var contactos = [
  {
    "nombre": "Nora",
    "apellido": "Nav",
    "numero": "0543236543",
    "gustos": ["Pizza", "Programación"]
  },
  {
    "nombre": "Harry",
    "apellido": "Potter",
    "numero": "0994372684",
    "gustos": ["Hogwarts", "Magia"]
  },
  {
    "nombre": "Sherlock",
    "apellido": "Holmes",
    "numero": "0487345643",
    "gustos": ["Casos interesantes", "Violín"]
  }
];

function buscarPerfil(nombre, propiedad) {
  for (var i = 0; i < contactos.length; i++) {
    if (contactos[i].nombre === nombre) {
        return contactos[i][propiedad] || "La propiedad no existe";
    }
  }
  return "El contacto no está en la lista";
}
  
buscarPerfil("Nora", "gustos");
buscarPerfil("Harry", "apellido");
buscarPerfil("Sherlock", "apellido");

buscarPerfil("Nora", "dirección"); // La propiedad no existe.
buscarPerfil("Bob", "numero");     // El contacto no existe.
*/

//NÚMEROS ALEATORIOS
/*
function generarFraccionAleatoria() {
  return Math.random(); // Entre 0 y 1 [0, 1)
}
console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());
console.log(Math.random());
*/

// NÚMEROS ENTEROS ALEATORIOS
/*
var numeroAleatorioEntre0y19 = Math.floor(Math.random() * 20);
console.log(numeroAleatorioEntre0y19);

function generarEnteroAleatorio(limiteSuperior) {
  return Math.floor(Math.random() * limiteSuperior);
}
for(var i = 0; i < 3; i++) {
  console.log(generarEnteroAleatorio(30));
}
*/

// NÚMEROS ENTEROS ALEATORIOS EN UN RANGO
/*
function rangoAleatorio(limiteInferior, limiteSuperior) {
  return Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1) + limiteInferior);
}
for(var i = 0; i < 4; i++) {
  console.log(rangoAleatorio(1, 15));
}
*/

// FUNCIÓN PARSEINT()
/*
console.log(parseInt("4"));
var a = parseInt("5");
var b = parseInt("98");
console.log(a + b);
*/

// FUNCIÓN PARSEINT CON UNA BASE()
/*
console.log(parseInt("110111", 2));
console.log(parseInt("3E0A", 16));
*/

// OPERADOR CONDICIONAL TERNARIO
/*
function retornarMinimo(x , y) {
  return x < y ? x : y;
}
console.log(retornarMinimo(9, 3));

var a = 5;
var b = 9;
console.log(a > b ? a + 2 : b * 3 );
*/

// MÚLTIPLES OPERADORES CONDICIONALES
/*
function compararNumeros(a, b) {
  return a == b ? "a y b son iguales" 
       : a > b ? "a es mayor que b" 
       : "b es mayor que a";
}
console.log(compararNumeros(11, 27));
console.log(compararNumeros(11, 11));
console.log(compararNumeros(90, 27));
*/

// VAR VS LET
/*
let campista = "James";
let campista = "Davis";
console.log(campista);
*/

// ÁMBITO VAR VS LET
/*
var miVariableGlobal = 4;
console.log(miVariableGlobal);

function miFuncion() {
  console.log(miVariableGlobal)

  var miVariableLocal = 8;
  console.log(miVariableLocal);
}
miFuncion()
console.log(miVariableGlobal)
console.log(miVariableLocal);

for (let i = 0; i < 3; i++) {
  console.log(i);
}
console.log("Variable: " + i);

var mostrarColor = true;
if(mostrarColor) {
  var color = "verde";
  console.log("Mi color favorito es: " + color);
}
console.log(color);
*/

// CONST
/*
const MI_CONSTANTE = 23;
console.log(MI_CONSTANTE)

miConstante = 12;
console.log(MI_CONSTANTE);
*/
/*
function calcularAreaCirculo(radio) {
  const PI = 3.14;
  if(radio < 0) {
    return undefined
  }
  return PI * (radio ** 2);
}
console.log(calcularAreaCirculo(10));
*/

// MUTAR ARREGLO DECLARADO CON CONST
/*
const MI_ARREGLO = [1, 2, 3, 4];
MI_ARREGLO[0] = 9;
MI_ARREGLO[3] = 99;
console.log(MI_ARREGLO);
*/

// CREAR UN OBJETO INMUTABLE
/*
let colores = {
  verde: "#10e04b",
  azul: "#1b50e0",
  negro: "#000000",
  blanco: "#ffffff"
};
Object.freeze(colores);
colores.verde = "#fff200"; // change yellow
console.log(colores)
*/

// FUNCIONES FLECHA. FUNCIÓN ANÓNIMA
/*
const fecha = function() {
  return new Date();
};
const fecha = () => new Date();
*/

// FUNCIONES FLECHA CON PARÁMETROS
/*
const sumarTres = (x) => x + 3;
console.log(sumarTres(7));

const concatenarArreglos = function(arr1, arr2) {
  return arr1.concat(arr2);
};
const concatenarArreglos1 = (arr1, arr2) => arr1.concat(arr2);

console.log(concatenarArreglos([1, 2, 3], [4, 5, 6]));
console.log(concatenarArreglos1([1, 2, 3], [4, 5, 6]));

const sumar = (a, b) => {
  let num = 6
  return a + b + num;
};
console.log(sumar(1, 1));
*/

// VALORES POR DEFECTO PARA PARÁMETROS
/*
const incrementar = (num, valor = 1) => num + valor;
console.log(incrementar(5));
*/

// OPERADOR REST
/*
function miFuncion(...args) {
  console.log(args.length);
}
miFuncion(1);
miFuncion([1, 2, 3], [4 , 5, 6]);
miFuncion(1, 2, 3, 4, 5, 6);
*/
/*
const sumar = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sumar(9, 1, 10, 50, 30));
*/

// OPERADOR SPREAD
/*
const numeros = [1, 2, 3];
function sumar(x, y, z) {
  console.log(x);
  console.log(y);
  console.log(z);
  return x + y + z;
}
console.log(sumar(...numeros));
*/

// SINTAXIS DE DESESTRUCTURACIÓN
// asignar propiedades de un objeto a variables
/*
const usuario = {
  nombre: "Juan Perez",
  edad: 34
};
const nombre1 = usuario.nombre;
const edad1 = usuario.edad;

const{nombre, edad} = usuario;
console.log(nombre, edad);
*/

/*
var coordenadas = {
  x: 4,
  y: 6,
  z: 15
}
const {x, y, z} = coordenadas;
console.log(x);
console.log(y);
console.log(z);
*/

// SINTAXIS DE DESESTRUCTURACIÓN PARA OBJETOS ANIDADOS
/*
const usuario = {
  john: {
    edad: 21,
    correo: "john@gmail.com"
  }
};
const {john: {edad: edadUsuario, correo}} = usuario
console.log(edadUsuario);
console.log(correo);
*/

/*
const PRONOSTICO_LOCAL = {
  ayer: {
    minima: 61,
    maxima: 75
  },
  hoy: {
    minima: 64,
    maxima: 77
  },
  manana: {
    minima: 68,
    maxima: 80
  }
};

const minimaHoy = PRONOSTICO_LOCAL.hoy.minima;
const maximaHoy = PRONOSTICO_LOCAL.hoy.maxima;

// desestructuracion
const {hoy: {minima: minHoy}} = PRONOSTICO_LOCAL; // const {hoy: {minima: minHoy, maxima: maxHoy}}
const {hoy: {maxima: maxHoy}} = PRONOSTICO_LOCAL;

console.log(minimaHoy, maximaHoy);
console.log(maximaHoy);
console.log("*** Desestructuración ***")
console.log(minHoy);
console.log(maxHoy);
*/

// SINTAXIS DE DESESTRUCTURACIÓN DE ARREGLOS
/*
var a;
var b;
var c;

[a , b,,, c] = [1, 2, 3, 4, 5];
console.log(a);
console.log(b);
console.log(c);
*/
/*
var a = 8;
var b = 6;
[b, a] = [a, b];
console.log(a);
console.log(b);
*/

// SINTAXIS DE DESUSTRUCTURACIÓN CON EL OPERADOR REST
/*
var a;
var b;
var arr;

[a, b, ...arr] = [1, 2, 3, 4, 5, 6, 7];
console.log(a);
console.log(b);
console.log(arr);
*/
/*
const arregloInicial = [1, 2, 3, 4, 5, 6, 7, 8];
function removerTresPrimerosElementos(arreglo) {
  const [ , , , ...nuevoArreglo] = arreglo;
  return nuevoArreglo;
}
const arregloFinal = removerTresPrimerosElementos(arregloInicial);
console.log(arregloFinal);
*/

// SINTAXIS DE DESESTRUCTURACIÓN: PASAR OBJETO COMO ARGUMENTO
/*
var nuevoPerfilCliente = {
  nombre: "Juan",
  edad: 23,
  nacionalidad: "Mexicana",
  ubicacion: "Mexico City"
}

// 1ra Forma
const actualizarPerfil = ({nombre, edad, nacionalidad, ubicacion}) => {
  console.log(nombre);
  console.log(edad);
  console.log(nacionalidad);
  console.log(ubicacion);
}

// 2da Forma
const actualizarPerfil = (informacionDePerfil) => {
  const {nombre, edad, nacionalidad, ubicacion} = informacionDePerfil;
  console.log(informacionDePerfil);
  console.log(nombre);
  console.log(edad);
  console.log(nacionalidad);
  console.log(ubicacion);
}

actualizarPerfil(nuevoPerfilCliente);
*/

/*
const estadistica = {
  max: 56.78,
  desviacionEstandar: 4.23,
  mediana: 34.54,
  moda: 23.87,
  min: -0.75,
  promedio: 29.32
}

// const puntoMedio = (e) => (e.max + e.min) / 2.0;
const mitad = ({max, min}) => (max + min) / 2.0;

console.log(mitad(estadistica));
*/

// PLANTILLAS LITERALES O PLANTILLAS DE CADENAS
/*
var a = 6;
console.log(`El valor de a es ${a}`);

var nombre = "Luis";
var edad = 9;
console.log(`Mi nombre es ${nombre} y tengo ${edad} años.`)

var miArreglo = [1, 2, 3, 4];
console.log(`El arreglos es ${JSON.stringify(miArreglo)}`);

var persona = {
  nombre: "Armando Casas",
  edad: 19
};
const SALUDO = `¡Hola! Mi nombre es ${persona.nombre} y tengo ${persona.edad} años`; 
console.log(SALUDO);
*/

// CREAR OBJETOS DE FORMA CONCISA
/*
const crearPersona = (nombre, edad, idioma) => {
  return {
    nombre: nombre,
    edad: edad,
    idioma: idioma
  };
};
*/
/*
const crearPersona = (nombre, edad, idioma) => ({nombre, edad, idioma});
console.log(crearPersona("Paco", 12, "Inglés"));
*/

// MÉTODOS
/*
const persona = {
  nombre: "Isabel",
  presentarse: function() {
    return `¡Hola! Mi nombre es ${this.nombre}`;
  }
}
console.log(persona.presentarse());
*/
/*
const persona = {
  nombre: "Isabel",
  presentarse() {
    return `¡Hola! Mi nombre es ${this.nombre}`;
  }
}
console.log(persona.presentarse());
*/

// DEFINIR UNA CLASE
/*
class TransbordadorEspacial {
  constructor(planeta) {
    this.planeta = planeta;
  }
}

var zeus = new TransbordadorEspacial("Marte");
console.log(zeus.planeta);

var apolo = new TransbordadorEspacial("Venus");
console.log(apolo.planeta);
*/

/*
class Mascota {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

var miMascota = new Mascota("Lili", 5);
console.log(miMascota.nombre);
console.log(miMascota.edad);
var tuMascota = new Mascota("Gigi", 9);
console.log(tuMascota.nombre);
console.log(tuMascota.edad);
*/

// GETTERS Y SETTERS
/*
class Libro {
  constructor(autor) {
    this._autor = autor;
  }
  get autor() {
    // console.log("Getter");
    return this._autor;
  }
  set autor(nuevoAutor) {
    console.log("Setter")
    this._autor = nuevoAutor;
  }
}
// GETTER
const libro = new Libro("anónimo");
console.log(libro.autor);

// SETTER
libro.autor = "Jaka";
console.log(libro.autor);
*/

