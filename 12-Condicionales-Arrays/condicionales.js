// Condicionales if-else
// Estructura
// if (condition) {
    // acciones a realizar si se cumple la condicion
// }else{
    // acciones a realizar si NO se cumple la condicion
// }

// Ejemplo
// Clima
// Si llueve, salga con paragua, sino que salga en bici
// let clima = "soleado";

// if (clima === "llueve") {
//     console.log("no te olvides el piloto")
// } else {
//     console.log("mejor anda en bici")
// }

// Anidamiento de condiciones
// let dia = prompt("ingrese el dia");

// if (dia === "domingo") {
//     console.log("mates y medialunas")
// } else {
//     if (dia === "sabado"){
//         console.log("salir de joda")
//     } else {
//         console.log("anda a entrenar")
//     }
// }

// Ejercicio 2
// let usuario = prompt("ingresar usuario");
// let contraseña = parseInt(prompt("ingresa contraseña"));
// // usuario ==="Maria" && password ==="1234"? alert("Puede acceder al sitio"): alert("Alguno o ambos datos ingresados son incorrectos") 
// if (usuario === "Marta" && contraseña === 1234){
//     alert("Puede ingresar")
// } else {
//     alert("Datos incorrectos")
// }

// Ejercicio 6
// Hacer un programa donde compare un usuario y contraseña ingresado por el usuario
// con las siguientes variables de usuario y contraseña registrados.En caso que sean
// correctos ,consultar si es administrador o cliente, en caso que sea administrador devolver
// por consola “tiene acceso a todos campos” si es cliente devolver por consola “tiene
// acceso limitado”.

// let usuarioRegistrado = "juan perez"
// let passwordRegistrada = "usuario123"
// let usuario = prompt("ingresar nombre de usuario")
// let password = prompt("Ingresar contraseña")

// if (usuario === usuarioRegistrado.toLowerCase() && password === passwordRegistrada.toLowerCase()){
//     let esAdmin=prompt("Es administrador ? Ingrese SI o NO");
//     if (esAdmin.toUpperCase() === "SI") {
//         console.log("Tiene acceso a todos los campos")
//     } else {
//         console.log("Tiene acceso limitado")
//     }
// } else{
//     alert("Los datos ingresados son incorrectos")
// }

// funcion nativa de JS para hacer un string todo en mayuscula: toUpperCase()
// funcion nativa de JS para hacer un string todo en minuscula: toLowerCase()

// Switch
// segun el dia de la semana, veo que deporte hago

// let diaDeLaSemana = prompt("Que dia de la semana es hoy ?").toLocaleLowerCase();

// switch (diaDeLaSemana) {
//     case "lunes":
//         console.log("corssfit")
//         break;
//     case "martes":
//         console.log("basket")
//         break;
//     case "miercoles":
//         console.log("crossfit")
//         break;
//     case "jueves":
//         console.log("futbol")
//         break;
//     case "viernes":
//         console.log("crossfit")
//         break;
//     default:
//         console.log("descanso")
//         break;
// }



