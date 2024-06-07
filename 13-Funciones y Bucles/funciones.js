// 1) se crean / definen
// 2) se ejecutan

// Creando Fx

// Fx tradicional
// La defino
// function saludo(){
//     let nombre = prompt("ingrese su nombre");
//     console.log("Hola " + nombre)
// }
// La ejecuto
// saludo()

// function sumar(){
//     console.log(20+40)
// }

// function sumar1(numero1,numero2){
//     console.log(numero1+numero2)
// }
// sumar1(20,40)

let numeros = [10,30,50,70,90];
let total=0;

// function sumarArray(){
//     let total=0;
//     for (num of numeros) {
//         total=total+num
//     }
//     console.log(total)
// }
// sumarArray()

// Orden para definir y ejecutar fx
// variables globales
// let nombre = "juan";
// const apellido = "Perez";
// // funciones
// function suma(num1,num2){
//     return num1+num2
// }
// // ejecucion
// suma(30,40)
// suma(nombre,apellido)

// Arrow Function -> fx flecha
// const color=()=>{
//     console.log("Rojo")
// }
// color()

// forEach
// array.forEach((itemDelArray)=>{})
numeros.forEach((num)=>{
    total=total+num
})

// filter()
const resultadoFiltro=numeros.filter((num)=>{
    return num < 50
});

// find()
console.log(numeros.find((num)=>{return num < 50}))

// map()
console.log(numeros.map((num)=>{return num * 0.5})) // para hacer un 50% de descuento