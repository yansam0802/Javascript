//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datosPersonales = {
    nombre: "Yan",
    apellido: "Machado",
    edad: 28,
    altura: 1.67,
    isDeveloper: true,
}

//- Una variable que obtenga tu edad a partir del objeto anterior
const edad2 = datosPersonales["edad"]
console.log(edad2) 

//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const datosAmigos1 = {
    nombre: "Samuel",
    apellido: "Machado",
    edad: 15,
    altura: 1.30,
    isDeveloper: false,
}

const datosAmigos2 = {
    nombre: "Danna",
    apellido: "Muñoz",
    edad: 16,
    altura: 1.30,
    isDeveloper: false,
}

const newDatos = [datosPersonales, datosAmigos1, datosAmigos2]
console.log(newDatos)

//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
newDatos.sort((a, b) => b.edad - a.edad)
console.log(newDatos)