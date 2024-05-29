// Ejercicio 1

    let nombre =prompt("Ingrese su nombre");
    let apellido=prompt("Ingrese su apellido");
    let edad= prompt("Ingrese su edad");
    console.log("Se lama : " + nombre + " ,se apellida: "+ apellido +" y tiene : "+edad+ " años")



// Ejercicio 2

    let usuario=prompt("Ingrese la usuario");
    let password=prompt("Ingrese la contraseña");
    usuario ==="Maria" && password ==="1234"? alert("Puede acceder al sitio"): alert("Alguno o ambos datos ingresados son incorrectos") 




// Ejercicio 3

     let pesos=prompt("Ingrese un valor en pesos")

     let dolares= parseFloat(pesos) / 170; 
      console.log(dolares)
 

// Ejercicio 4

    let numero= prompt("Ingrese un numero");

    numero % 2 === 0 ?  console.log("el numero ingresado es par") : console.log("El numero ingresado es impar");


// Ejercicio 5


    let numero1= parseInt(prompt("Ingrese el primer numero"));
    let numero2= parseInt(prompt("Ingrese el segundo numero"));
    let numero3= parseInt(prompt("Ingrese el tercero numero"));
    let numero4= parseInt(prompt("Ingrese el cuarto numero"));
    let numero5= parseInt(prompt("Ingrese el quinto numero"));

    let promedio = (numero1 +numero2+numero3+numero4+numero5) / 5
   console.log(promedio)


promedio() 

// Ejercicio 6
let usuarioRegistrado= "Juan Perez";
let passwordRegistrada="Usuario123";



let usuarioIngreso =prompt("Ingrese un usuario");
let passwordIngreso =prompt("Ingrese una contraseña");
let admin=" ";

if(usuarioIngreso === usuarioRegistrado && passwordIngreso === passwordRegistrada){
    if(admin=prompt("Es administrador? Ingrese el numero 1 si lo es o 2 si no lo es") === "1"){
        console.log("tiene acceso a todos los campos")
    }else{
         console.log("tiene acceso limitado")
    }
}else{
    console.log("usuario o contraseña incorrecto")
}