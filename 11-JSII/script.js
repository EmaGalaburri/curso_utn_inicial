// ECMA --> Entidad que regula los estandares de JS

var nombreUsuario = "Juan Perez";
var edad = 27;
let nombre = "Emanuel"
let numero2 = 23

// Para utilizar una variable ya definida, solo  tenemos que nombrarla

console.log(nombreUsuario, edad)

// Modificamos el contenido de la variable
nombreUsuario = "Ana"

// Concatenacion variable + strings
console.log(nombreUsuario + ", buenos dias!!")

console.log(numero2 + " " + nombre);

// numero1++ -> numero1 + 1 
// numero1-- -> numero1 - 1

console.log("Bienvenido " + (prompt("ingresar nombre")));

// Condicionales
let edadUsuario=parseInt(prompt("Ingrese su edad"));

if(edadUsuario>=18){
    console.log("Sos mayor de edad, podes ingresar")
}else {
    console.log("Sos menor de edad, no podes ingresar")
}