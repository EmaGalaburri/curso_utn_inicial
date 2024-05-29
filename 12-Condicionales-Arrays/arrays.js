// [] -> todo lo que este dentro de los corchetes forma parte de la lista

let listaAlumnos = ["Ana", "Raul", "Segrio", "Victoria"]

console.log(listaAlumnos);

listaAlumnos[2] //para acceder al alumno Sergio

// Metodos
// para agregar un item al final de la lista -> push()

listaAlumnos.push("Maria", "Jose"); 

// para agregar un item al inicio -> unshift()

listaAlumnos.unshift("Tomas", "Martin");

// para ver el largo de la lista -> length

console.log(listaAlumnos.length);

// saca el ultimo item de la lista -> pop()

listaAlumnos.pop(); // saca el ultimo item de la lista

listaAlumnos.shift(); // saca el primer item de la lista

// para borrar un item que no este ni al inicio ni al final -> splice(indice,cantidad,nuevoItem)

listaAlumnos.slice(2,1) // le indico que se pare en el indice 2 y que borre solo 1

// si quiero borrar mas de 1 item

listaAlumnos.slice(2,2) // a partir del indice 2 va a borrar 2 item, osea indice 2 y 3

// para reemplazar un item x otro

listaAlumnos.splice(5,1,"Muriel") // elimina el indice 5 y suma Muriel
