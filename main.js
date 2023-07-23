// ************************************************************************
// ************  VARIABLES Y CONSOLA   ************

// Pueden contener "strings" o numbers

// Se declaran con la palabra reservada LET o CONST seguido del signo "=" 

// EJEMPLO :

// ************************  VARIABLE STRING  ************************

// let nombre = "Joaquin";

// console.log (nombre)

// ************************  VARIABLE NUMBER  ************************

// let dni = 43098238;

// console.log (dni)

// CONST NO PUEDE RECIBIR UN NUEVO VALOR EN EL FUTURO DENTRO DEL PROGRAMA

// EJEMPLO 

// const apellido = "Crespo"

// console.log(apellido)

//  SI ESCRIBO apellido = "Soria" ME VA A TIRAR ERROR

// ************************  CONCATENACION  ************************

// Puedo concatenar mis variables para mostrarlar por consola o en un alert de la siguiente manera:

// alert("Hola, bienvenido " + nombre + " " + apellido + " tu número de DNI es " + dni)

// Tambien puedo hacer operaciones matematicas como , suma, resta, multiplicacion y division...

// let precio = 40;
// let descuento = 10;
// let recargo= 5;

// alert((precio - descuento) + recargo)

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************

// ************CONDICIONALES Y OPERADORES LOGICOS************

// ==              Es igual
// ===             Es estrictamente igual
// !=              Es distinto
// !==             Es estrictamente distinto
// < <= > >=       Menor / Menor o igual / Mayor / Mayor o igual


// &&              Operador AND(y)
// ||              Operador OR (o)
// !               Operador NOT (no)

// *****************EJEMPLOS*****************

// let edad = prompt("Ingrese su edad");

// if (edad >= 18) {
//     alert("Sos mayor de edad")
// } else {
//     alert ("Sos menor de edad")
// }

// let hora = prompt ("Ingrese la hora")

// if (hora >= 6 && hora < 12) {
//     alert ("Buenos Dias!")
// }else if(hora >= 12 && hora < 20){
//     alert("Buenas tardes!")
// }else if(hora >= 20 && hora <= 23){
//     alert("Buenas noches!")
// }else if (hora >= 0 && hora < 6){
//     alert("Buenas noches!")
// }else {
//     alert("Ingrese una hora valida")
// }

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************


// ****************CICLOS E ITERACIONES******************


// ************************  FOR, WHILE, DO WHILE Y SWITCH  ************************



// ************************  FOR  ************************

// for (let x = 0; x < 10; x++) {
//     console.log("Ciclo FOR número " + x);
// }

// *********************************************************

// ************************  FOR ANIDADO  ************************

// for (let x = 0; x < 10; x++) {
//     console.log("Ciclo FOR número " + x);

//     for (let y = 0; y < 3; y++) {
//         console.log("Ciclo FOR secundario " + y);
//     }  
// } //POR CADA CICLO FOR EJECUTA TODO EL CICLO FOR ANIDADO ENTERO

// *********************************************************

//************************  WHILE  ************************

// let x = 0;  //VALOR VARIABLE

// while (x < 5) { //CONDICIONES  
//     console.log("Ciclo while número " + x);  //Q VA A HACER MIENTRAS SE CUMPLA LA CONDICION
//     x = x + 1;     //INCREMENTADOR
// }

// *********************************************************

// ************************  DO...WHILE  ************************

// let z = 5; 

//EL DO...WHILE AUNQUE NO SEA CUMPLA LA CONDICION, EJECUTA EL CODGO AUNQUE SEA UNA VEZ, ES DECIR PRIMERO IMPRIME Y LUEGO EVALUA SI LA CONDICION SE CUMPLE. AL REVEZ QUE EL WHILE.

// do {
//     console.log("Ciclo do...while número " + z);
//     z++;
// } while (z < 5);

// *********************************************************

// ************************  SWITCH  ************************

// SWITCH ES COMO UN IF Y ELSE IF ANIDADO, CON UN DEFAULT QUE SE EJECUTA SI NO SE CUMPLE NINGUNA DE LAS CONDICIONES.

// let diaDeLaSemana = parseFloat(prompt("Ingrese día de la semana con números"));

// switch (diaDeLaSemana) {
//     case 1:
//         alert("Lunes");
//         break;
//     case 2:
//         alert("Martes");
//         break;
//     case 3:
//         alert("Miércoles");
//         break;
//     case 4:
//         alert("Jueves");
//         break;
//     case 5:
//         alert("Viernes");
//         break;
//     case 6:
//         alert("Sábado");
//         break;
//     case 7:
//         alert("Domingo");
//         break;
//     default:
//         alert("Ese día no existe");
//         break;
// } 

//SI NO PONGO EL BREAK EJECUTA TODOS LOS CODIGOS DE IGUAL MANERA SIN EVALUAR SI LA CONDICION SE CUMPLE O NO



// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************


// ******************************************************************************************************************

// *******************************************  FUNCIONES  *********************************************


// ************************  FUNCIONES DECLARADAS  ************************

// LAS FUNCIONES DECLARADAS PUEDEN SER LLAMADAS ANTES DE SER DECLARADAS, AL CONTRARIO DE LAS VARIABLES Y CONSTANTES, ESTE EFECTO SOLO LO TIENE LAS FUNCIONES DECLARADAS, LAS FUCIONES FLECHA Y ANONIMAS NO FUNCIONAN ASI.

// function saludar(nombre) {  //EL NOMBRE DE LA FUNCION SUELE SER UN VERBO
//     console.log("Hola " + nombre);
// }
// saludar("Joako");
// saludar("Chubi");   
 
//LAS FUNCIONES SE EJECUTAN UNICAMENTE SI LAS LLAMO POR LE NOMBRE ASIGNADO NO ES SUFICIENTE CON DECLARARLAS.

// *********************************************************

// ************************  FUNCIONES ANÓNIMAS  ************************

// const saludar = function(nombre) {
//     console.log("Hola " + nombre);
// }
// saludar("Joako");

// *********************************************************

// ************************  FUNCIONES FLECHA  ************************

// const saludar = nombre => console.log("Hola " + nombre)

// PODEMOS OMITIR LAS LLAVES Y LOS PARENTESIS PARA APONER TODO EN UNA SOLA LINEA SI TENEMOS UN SOLO PARAMETRO Y UNA SOLA SENTENCIA. CON DOS O MAS SENTENCIAS SE RECOMIENDA UTILIZAR LAS LLAVES Y/O

// saludar("Joako");

// *********************************************************

// ************************  FUNCIONES DECLARADAS CON RETORNO  ************************

// function suma(a, b) {
//     return a + b;
// }
// console.log(suma(2, 3));

// *********************************************************

// ************************  FUNCIONES FLECHA CON RETORNO (RETORNO IMPLÍCITO)  ************************

// const resta = (a, b) => a - b;

// console.log(resta(10, 3));

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************



// ***************************************  OBJETOS  ***************************************

// SE DECLARAN CON LAS LLAVES "{ }"

// const usuario1 = {
//     nombre: "Joako",
//     edad: 25,
//     nacionalidad: "Argentina",
//     actividades: {
//         actividad1: "handball",
//         actividad2: "calistenia",
//         actividad3: "surf",
//     }
// }

// const usuario2 = {
//     nombre: "Alexander",
//     edad: 25,
//     nacionalidad: "EEUU",
//     actividades: {
//         actividad1: "futbol",
//         actividad2: "gimnasio",
//         actividad3: "lectura",
//     }
// }

// const producto1 = {
//     titulo: "Iphone 7",
//     color: "Rojo",
//     precio: 43000
// }

// usuario1.nacionalidad = "Brasilera";

// producto1.precio = 52000, 

// //PUEDO CAMBIAR EL CALOR DE UN PARAMETRO DE LA CONSTANTE EN CUALQUIER MOMENTO

// console.log(usuario1.actividades.actividad3)
// console.log(producto1.precio)

/***************************************************************/
/***************************************************************/

// ***************************************  FUNCION CONSTRUCTORA  ***************************************

// function Producto(nombre, color, precio) {

//     this.nombre = nombre;
//     this.color = color;
//     this.precio = precio;

// }

// const producto1 = new Producto("Iphone 7", "Rojo", 52000);
// const producto2 = new Producto("Iphone 13", "Blanco", 230000);

// console.log(producto2);

/***************************************************************/
/***************************************************************/

// ***************************************  OBJETO CON CLASES  ***************************************

// FORMA RECEINTE DE CONTRUIR UN OBJETO, ES IGUAL A UNA FUNCION CONSTRUCTORA, SOLO CAMBIA UN POCO SU NOMENCLATURA


// class Producto {
//     constructor(titulo, color, precio) {

//         this.titulo = titulo;
//         this.color = color;
//         this.precio = precio;

//     }
// }

// const producto1 = new Producto("Iphone 14 Pro MAX", "Azul", 250000);

// console.log(producto1);
// console.log(producto1.color);

/***************************************************************/
/***************************************************************/

// ***************************************  MÉTODOS  ***************************************

// class Persona {
//     constructor(nombre, edad, nacionalidad) {

//         // PARAMETROS
//         this.nombre = nombre;
//         this.edad = edad;
//         this.nacionalidad = nacionalidad;
//         // METODOS
//         this.saludar = function(){ console.log("Hola, ¿como estas " + this.nombre + "?") };
//         this.cumpleanios = function() { this.edad++ };

//     }
// }

// const persona1 = new Persona("Joako", 25, "Argentina");
// const persona2 = new Persona("Alexander", 24, "Brasilero")

// persona1.saludar(); //FUNCION
// persona1.cumpleanios(); //FUNCION
// console.log(persona1.edad); //MOSTRAR POR CONSOLA EDAD

// persona2.saludar(); //FUNCION
// persona2.cumpleanios(); //FUNCION
// console.log(persona2.edad); //MOSTRAR POR CONSOLA EDAD

// ***************************************  OPERADOR IN  ***************************************

// EL OPERADOR "IN" SOLO DEVUELVE VALORES BOOLEANOS, ES DECIR SIRVE PARA CONFIRMAR SI EXISTE "X" CONDICION EN EL PARAMETRO QUE QUERRAMOS BUSCAR EN UN OBJETO

// EJEMPLO TRUE
// if("nombre" in persona2) {
//     console.log("Hola " + persona2.nombre + " como estas hoy?")
// }else {
//     console.log("No hay un nombre guardado en este parametro")
// }

// // EJEMPLO FALSE
// if ("hobbies" in persona1) {
//     console.log(persona1.hobbies);
// } else {
//     console.log("No hay hobbies");
// }

// ***************************************  OPERADOR FOR...IN  ***************************************

// EL OPERADOR "FOR...IN" DEVUELVE EL NOMBRE DE TODAS LAS PROPIEDADES DENTRO DE UN OBJETO

// EJEMPLO

// for (const propiedad in persona1) {
//     console.log(propiedad);
// }

// ***********************  PROPIEDADES Y MÉTODOS CON VARIABLES Y FUNCIONES EXTERNAS  ****************************

// PODEMOS LLAMAR VARIABLES Y FUNCIONES EXTERNAS DENTRO DE NUESTROS OBJETOS PARA CONVERTIENDO LAS LAS VARIABLES EN PROPIEDADES Y LAS FUNCIONES EN MÉTODOS

// EJEMPLO

// const IVA = 1.21;

// function saludar() {
//     console.log("Hola, este es tu nuevo " + this.nombre + " color " + this.color + " y su precio es $" + this.precio + " sin IVA");
// }

// const producto1 = {
//     nombre: "Iphone 13 PRO",
//     color: "Lila",
//     precio: 210000,
//     iva: IVA,
//     saludar,
// }


// producto1.saludar();

// console.log("El precio del "+producto1.nombre+ " es $"+producto1.precio)

// ****************************************************************************
// ****************************************************************************

// ****************************************   ARRAYS   ***********************************

/**** Declarando nuestros primeros Arrays ****/

// UN ARRAY ES UN TIPO DE DATO, QUE SIRVE PARA ALMACENAR VALORES EN FORMA DE LISTA, NO COMO UN OBJETO QUE TIENE PROPIEDAD/VALOR, SOLAMENTE VALORES.

// SE DECLARAN CON LOS CORCHETES "[ ]"

// const productos = ["Iphone X", "Iphone 11", "Iphone 12", "Iphone 13 PRO"];
// const numeros = [1, 2, 3, 4, 5];
// const booleanos = [true, true, false];
// const mezcla = ["Iphone 14 PRO", 27, 54, true];

// // ARRAY DE OBJETOS
// const usuarios = [    { nombre: "Joako", edad: 25}, {nombre: "Alexander", edad: 24}];

// TAMBIEN SE PUEDE HACER UN ARRAY DE ARRAY

/* Accediendo a nuestro Array */

// console.log(productos);
// console.log(productos[3]);

/* Recorriendo nuestro Array */

// PARA QUE NOS MUESTRE CADA INDICE DE NUESTRO DE ARRAY PODEMOS RECORRERLO CON UN CICLO "FOR" Y QUE NOS LO MUESTRE POR CONSOLA O UN ALERT

// EJEMPLO

// for (let i = 0; i < 4; i++) {
//     console.log(productos[i]);
// }

/*********** MÉTODOS ***********/

/* LENGTH */

// EL METODO LENGTH NO MUESTRA LA CANDITAD DE INDICES QUE CONTIENE NUESTRO ARRAY

// console.log(productos.length);

// for (let i = 0; i < productos.length; i++) {
//     console.log(productos[i]);
// }

/* PUSH: Agregar un elemento al final del Array */

// productos.push("iPhone 14 Mini");
// console.log(productos);

/* UNSHIFT: Agregar un elemento al comienzo del Array */

// productos.unshift("iPhone 8 Plus");
// console.log(productos);

/* SHIFT: Eliminar un elemento al comienzo del Array */

// productos.shift();
// console.log(productos);

/* POP: Eliminar un elemento al final del Array */

// productos.pop();
// console.log(productos);

/* SPLICE: Eliminar uno o varios elementos en nuestro Array */

// EL PRIMER PARAMETRO QUE PONEMOS EN SPLICE ES LA POSICION DEL INDICE QUE QUEREMOS ELIMINAR, Y EL SEGUNDO PARAMETRO ES CUANTO INDICES APARTIR DE ESE QUEREMOS ELIMINAR

// EJEMPLO

// productos.splice(1, 2);
// console.log(productos);

/* JOIN: Generar una string con los elementos del Array */

// console.log(productos.join(", "));
// console.log(productos.join(" / "));

/* CONCAT: Unir dos Arrays en uno */

// const productos1 = ["iPhone 6", "iPhone 6s", "iPhone 6s Plus"];
// const productosFinal = productos.concat(productos1);
// console.log(productosFinal);

/* SLICE: Generar una copia de una parte de nuestro Array */

// EL PRIMER PARAMETRO ES EL INDICE DE DONDE ARRANCA Y EL SEGUNDO PARAMETRO ES DONDE TERMINA SIN INCLUIR EL ULTIMO INDICE, DIFERENTE A COMO SE HACE CON EL METODO SPLICE

// EJEMPLO

// const productosViejos = productos.slice(0, 2);
// console.log(productosViejos);

/* indexOf: Saber el número de índice de nuestro elemento */

// console.log(productos.indexOf("iPhone 11"));

/* INCLUDES: Saber si un elemento existe en nuestro Array */

// NOS DICE SI UN ELEMENTO EXISTE O NO CON UN VALOR BOOLEANO, TRUE O FALSE

// EJEMPLO FALSE

// console.log(productos.includes("iPhone 7"));

// EJEMPLO TRUE CON UN CONDICIONAL IF

// if (productos.includes("iPhone 11")) {
//     console.log(productos.indexOf("iPhone 11"));
// } else {
//     console.log("iPhone 11 no se encuentra en el Array");
// }

/* REVERSE: Invertir el orden de nuestro Array */


// MODIFICA EL ORDEN EL ARRAY ORIGINAL ENTONCES SIEMPRE ES BUENA PRACTICA ES HACER UN REVERSE EN UNA COPIA DEL ARRAY ORIGINAL

// productos.reverse();
// console.log(productos);