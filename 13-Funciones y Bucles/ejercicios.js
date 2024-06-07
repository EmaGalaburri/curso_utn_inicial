// Ejercicio 4
// Marcelo esta armando la lista para el super. Crear un bucle para que Marcelo pueda 
// ingresar los productos que necesite y muestre por consola la lista completa.

// function listaSuper() {
//     let lista = [];

//     let consultaMarcelo = prompt("Quiere iniciar la lista de productos ? Responda si o no").toLowerCase();

//     while (consultaMarcelo === "si"){

//         let producto = prompt("Ingresa el producto");
//         lista.push(producto)

//         consultaMarcelo = prompt("Queres agregar mas productos ? Responda si o no").toLowerCase();

//         if (consultaMarcelo !== "si" && consultaMarcelo !== "no"){
//             alert("el valor ingresado no es correcto, ingrese si o no")
//             consultaMarcelo = prompt("Queres agregar mas productos ? Responda si o no").toLowerCase();
//         }
//     }
//     console.log(lista)
// }
// listaSuper()

// Ejercicio 1
// En un supermercado tenemos una maquina registradora que ingresa los productos que compra 
// cada cliente.
// Hacer un programa que tome los productos que registra la maquina y los agregue  a un 
// array .(se puede simular el ingreso de los productos por medio de un prompt).Tengamos 
// en cuenta que esta funcion tiene que funcionar tanto para un cliente que lleve 2 
// productos como para un cliente que lleve 50 productos.
// Teniendo la siguiente lista de precios, hacer una segunda funcion que busque el precio 
// de cada producto y lo sume, mostrando en la consola la suma total a pagar.
// pan -> $300 - leche->$80 - harina-> $51 - cafe->$380 - fideos->$62 - galletitas->$350 - aceite->$47 - vinagre->$50 - shampoo ->$20

// function listaSuper() {
//     let listaSup = [];

//     alert("Estos son los productos que tenemos en stock: Pan, Leche, Harina, Cafe, Fideos, Galletitas, Aceite, Vinagre, Shampoo")

//     let consulta = prompt("¿Quiere iniciar la lista de productos? Responda si o no").toLowerCase();

//     while (consulta === "si"){

//         let producto = prompt("Ingrese el producto").toLowerCase();
//         listaSup.push(producto)

//         consulta = prompt("¿Quiere agregar más productos? Responda si o no").toLowerCase();

//         if (consulta !== "si" && consulta !== "no"){
//             alert("El valor ingresado no es correcto, ingrese si o no")
//             consulta = prompt("¿Quiere agregar más productos? Responda si o no").toLowerCase();
//         }

//     }
//     console.log(listaSup);
//     listaPrecios(listaSup); // Llama a listaPrecios con listaSup
// }
// listaSuper();

// function listaPrecios(lista){
//     let totalAPagar = 0;
//     for (let item of lista) {
//         switch (item) {
//             case "pan":
//                 totalAPagar += 300;
//                 break;
//             case "leche":
//                 totalAPagar += 80;
//                 break;
//             case "harina":
//                 totalAPagar += 51;
//                 break;
//             case "cafe":
//                 totalAPagar += 380;
//                 break;
//             case "fideos":
//                 totalAPagar += 62;
//                 break;
//             case "galletitas":
//                 totalAPagar += 350;
//                 break;
//             case "aceite":
//                 totalAPagar += 47;
//                 break;
//             case "vinagre":
//                 totalAPagar += 50;
//                 break;
//             case "shampoo":
//                 totalAPagar += 200;
//                 break;
//             default:
//                 break;
//         }
//     }
//     console.log("Debe pagar " + totalAPagar);
// }

// Ejercicio 2
// Dado el siguiente array de países, crear un programa que le pida al usuario ingresar un 
// nombre de país. 
// Luego,la funcion deberá fijarse si el país ingresado se encuentra en la lista creada a 
// continuacion, ;  - En caso que se encuentre, devolver un alert que diga “Pais ya registrado, se elimina del 
// registro” y  sacarlo de la lista; - En caso que no se encuentre en la lista, deberá devolver un alert que indique “Pais 
// registrado” y agregue dicho país a la lista. 

let paises = ["argentina", "peru", "bolivia", "italia", "australia"];

let paisUsuario = prompt("ingresar un pais").toLowerCase();

function listaPaises(){
    if (paisUsuario === "argentina" && paisUsuario === "peru" && paisUsuario === "bolivia" && paisUsuario === "italia" && paisUsuario === "australia") {
    alert("pais ya registrado, se elimina del registro")
    paises.shift(paisUsuario)
    } else{
        paises.push(paisUsuario)
    }
}
listaPaises()
console.log(paises)


// Ejercicio Harry Potter


