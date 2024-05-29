// 1. Crear una variable con una nota ( que puede valer del 1 al 10) y por medio de un condicional devuelva: 
// ”Sobresaliente” si es entre 9 y10, “Notable” si es 8 
// “Bien” si el valor es 7, 
// ”Suficiente” si es 6 , 
// ”Insuficiente” si es entre 1 y 5. Elige tu aventura! 

// let nota = parseInt(prompt("ingresar nota del 1 al 10"));

// switch (nota) {
//     case 10 || 9:
//         console.log("Sobresaliente")
//         break;
//     case 8:
//         console.log("Notable")
//         break;
//     case 7:
//         console.log("Bien")
//         break;
//     case 6:
//         console.log("Suficiente")
//         break;
//     default:
//         console.log("Insuficiente")
//         break;
// }

// 2. Elige tu aventura!
//  • Solicitar por medio de un prompt que elija entre dos opciones “1- comenzar” o “2- Salir”. 
// • Si elige la opción 1 que elija por medio de un prompt entre “1- Abrir la puerta A” o “2-Abrir la puerta B”, Sí elige 
// la opción 2 mostrarle con un alert “Adiós!” 
// • Si elige la puerta A se va a encontrar con un tigre, por lo que va a tener que elegir entre “1-Darle un pedazo de 
// carne” o “2- Cerrar la puerta e irse corriendo” 
// • Si elige la opción 1 mostrarle un alert que diga “Felicitaciones!! El león se corre y encontramos el tesoro”.Si 
// eligió la opción 2 devolverle un alert de “Adiós!!”  
// • Si eligió la puerta B devolverle un alert que diga “OH! Camino sin salida =( “  

// let opcion = parseInt(prompt("ingresar 1 para comenzar o 2 para salir"));

// if (opcion === 1) {
//     let comienzo = parseInt(prompt("ingrese 1 para abrir la puerta A o 2 para abrir la puerta B"));
//     if (comienzo === 1) {
//         let puertaA = parseInt(prompt("te encontraste un tigre: ingresa 1 para darle un pedazo de carne o 2 para cerrar la puerta y correr"));
//         if (puertaA === 1) {
//             alert("Felicitaciones!! el tigre se corre y encontraste el tesoro")
//         } else {
//             alert("Adios")
//         }
//     }else{
//         console.log("Camino sin salida")
//     }
// } else {
//     console.log("Adios")
// }

// 3. Entrada a un bar - sector VIP: 
// a. Pedirle la edad al usuario 
// b. Si tiene más de 18 años, pedirle la clave 
// c. Si la clave es correcta, dejarlo pasar al sector vip 
// d. Si la clave es incorrecta no puede pasar al sector vip  
// e. Si tiene menos de 18 años no puede pasar.  

// let edadUsuario = parseInt(prompt("ingresar edad"));

// if (edadUsuario >= 18) {
//     let clave = parseInt(prompt("ingresar clave"));
//     if (clave === 101) {
//         alert("Puede pasar al VIP")
//     } else {
//         alert("No puedes ingresar al sector VIP")
//     }
// } else {
//     alert("Sos menor de edad, no podes ingresar")
// }

// 4. Hacer un programa que pregunte al usuario(por medio de un prompt) si está o no registrado en el sitio , y el precio 
// total de su compra. 
// Con estos datos el programa debe calcular el precio total a pagar por el usuario teniendo en cuenta las siguientes 
// ofertas: 
// Si esta registrado :
//  • $10 gratis a partir de los $200 
// • 10% de descuento a partir de los $400 - $150 gratis a partir de los $1100 
// Si no esta registrado : 
// • $10 gratis a partir de los $1100

let precioTotalCompra = parseInt(prompt("Ingrese el precio total de su compra:"));
let registroUsuario = prompt("¿Está registrado en el sitio? Responda Si o No").toLowerCase();

if (registroUsuario === "si") {
    if (precioTotalCompra >= 200 && precioTotalCompra < 400) {
        console.log("Tienes $10 de descuento, tu total es de $" + (precioTotalCompra - 10));
    } else if (precioTotalCompra >= 400 && precioTotalCompra < 1100) {
        console.log("Tienes 10% de descuento en el total de tu compra, tu total es de $" + (precioTotalCompra * 0.90));
    } else if (precioTotalCompra >= 1100) {
        console.log("Tienes $150 de descuento, tu total es de $" + (precioTotalCompra - 150));
    } else {
        console.log("Precio total de la compra: $" + precioTotalCompra);
    }
} else {
    if (precioTotalCompra >= 1100) {
        console.log("Tienes $10 de descuento, tu total es de $" + (precioTotalCompra - 10));
    } else {
        console.log("Precio total de la compra: $" + precioTotalCompra);
    }
}
