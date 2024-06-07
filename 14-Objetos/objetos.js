let lista = [];

let taza = {
    marca: "pepita",
    material: "ceramica",
    precio: 1000,
    oferta: true,
    colores: ["rosa","azul","blanca"]
}

let pantalon = {
    marca: "levis",
    talles: ["S","M","L","XL"],
    material:"jeans",
    precio:5000,
    stock: 20
}

let remera = {
    marca:"juanita",
    talle:["L","XL"],
    precio:2000,
    stock:20
}

let listaProductos = [taza,pantalon,remera]

console.log(listaProductos)

//* ---- objeto.propiedad -> para acceder al valor de una propiedad del objeto
console.log(pantalon.precio) 

//* ---- objeto.propiedad = nuevoValor -> para modificar el valor de la propiedad
remera.stock=19
remera.stock-=1 // le resta 1 al stock original o -= para restarle 1

//* ---- delete objeto.propiedad -> para eliminar una propiedad
delete pantalon.material

//* ---- objeto.nombreNuevaPropiedad=valor -> para crear una nueva propiedad
pantalon.tela="jeans"
