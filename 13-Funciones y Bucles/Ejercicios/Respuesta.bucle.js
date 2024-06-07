//En la resolucion utilice distintos metodos para que puedan tambien ver otras formas de hacerlo con lo que aprendimos al momento.Tenemos los dos tipos de funciones que podemos crear ,uso de distintos condicionales y bucles utilizados.

//Ejercicio 1

function listaSuperPrograma() {
    let listaSuper=[];
    let producto=prompt("para iniciar con la lista ingresa el producto o clickea el boton OK cuanto no quieras agregar mas ");

    for (let contador = 0; producto !== ""; contador++) {
        listaSuper.push(producto)
        producto=prompt("para iniciar con la lista ingresa el producto o la palabra boton OK cuanto no quieras agregar mas ");
    }   
    return listaSuper; 
}

function buscarPrecio(lista) {
    let totalAPagar=0;
    for (item of lista) {
        switch (item) {
            case "pan":
                    totalAPagar+=300
                break;
            case "leche":
                    totalAPagar+=80
                break;
            case "harina":
                    totalAPagar+=51
                break;
            case "cafe":
                    totalAPagar+=380
                break;
            case "fideos":
                    totalAPagar+=62
                break;
            case "galletitas":
                    totalAPagar+=350
                break;
            case "aceite":
                    totalAPagar+=47
                break;
            case "vinagre":
                    totalAPagar+=50
                break;
            case "shampoo":
                    totalAPagar+=200
                break;
            default:
                totalAPagar+=0
                break;
        }
    }
    console.log("Debe pagar"+ totalAPagar)
    
}

//Ejercicio 2

const paisesPrograma=()=>{
    let paises=['Argentina',"Bolivia","Italia","Peru","Australia"];

    let paisPedido=prompt("Ingrese el nombre de un pais pais")

    let busqueda= paises.find((pais)=> pais.toUpperCase() == paisPedido.toUpperCase());

    if(busqueda !== undefined ){
        console.log("ese país ya se encuentra registrado");

        paises.splice(paises.indexOf(paisPedido),1)
    }else{

        console.log(" Pais registrado");
        
        paises.push(paisPedido);

    

    } 
    
}

//Ejercicio 3
let listaNum=[1,2,4,0,-1,20]
function ejercicio3(lista) {
    let valorMenor=lista[0]
    for (numero of lista) {
        if (numero<0) {
            if(numero*(-1) < valorMenor){
                valorMenor=nunero
            }
        }else{
            if(numero < valorMenor){
                valorMenor=numero
            }
        }
    }
    if(valorMenor < 0){
        console.log("El valor mas cercano al 0 es negativo y es :"+ valorMenor)
    }
    if(valorMenor > 0){
        console.log("El valor mas cercano al 0 es positivo y es :"+ valorMenor)
    }
    if(valorMenor == 0){
        console.log("Tenemos en la lista el numero 0 ,por lo que este seria el mas cercano a si mismo")
    }
}

//Ejercicio 4
function listaSuper() {
    let lista=[];

    let consultaMarcelo=prompt("Queres iniciar la lista del super ? coloca si o no ").toLocaleLowerCase();

 
        while (consultaMarcelo !== "no") {
            
            if(consultaMarcelo !== 'si'){
                alert("No comprendo la respuesta, por favor vuelta ingresar .Recuerde que son la palbras si o no ");

                consultaMarcelo=prompt("Queres iniciar la lista del super ? coloca si o no ").toLocaleLowerCase();
            }else{

                let producto=prompt("Ingrese el producto");
                lista.push(producto)
                consultaMarcelo=prompt("Queres iniciar la lista del super ? coloca si o no ").toLocaleLowerCase()
            }
        } 
        console.log(lista)
}

//Ejercicio 5

function coloresPrograma() {
    let colores=["verde","rojo","amarillo","azul","rosa","violeta"]
    for (color of colores) {
        if(color == "azul"){
            colores.splice(colores.indexOf(color),1)
        }
    }
    console.log(colores)
}



//Ejercicio 6
let mascotas=["perro","gato","peces"]
const agregarAnimal=(animal)=>{
    mascotas.push(animal)
    console.log(mascotas[0])
    console.log(mascotas.length)
    console.log("el indice del ultimo valor del a lista es" + mascotas.indexOf(mascotas[mascotas.length-1]))
}
agregarAnimal("canario")


//Ejercicio 7

function sumarLista(lista) {
    let total=0;
    for (item of lista) {
        total+=item //recordemos que en la clase 14 vimos que el total+= era lo mismo que escribir total=total+
    }
    return total
}

//Ejercicio 8
let nombres=["juan","Pedro","Ana","Maria","Wally","Sofia"]
console.log("Wally se encuentra en el indice" + nombres.indexOf("Wally"))

const mostrandoIndices=()=>{
  for (let i = 0; i < nombres.length; i++) { 
    console.log( i)
  }
}

const mostrandoAWally=()=>{
    for (let i = 0; i < nombres.length; i++) { 
        if(nombres[i]=== "Wally"){
            console.log( i)
        }
    }
  }
