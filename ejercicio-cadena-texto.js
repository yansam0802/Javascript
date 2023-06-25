// Una cadena de texto con tu Nombre
let nombre = "Yan";
console.log(nombre)
// - Otra cadena de texto con tu Apellido
let apellido = "Machado"
console.log(apellido)

//- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = nombre + " " + apellido
console.log("Hola soy ".concat(estudiante))

// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
console.log(estudiante.toUpperCase())

//- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
console.log(estudiante.toLowerCase())

//- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
console.log(estudiante.length)

//- Una variable que contenga la primera letra del Nombre
console.log(estudiante.slice(0, 1))

//- Otra variable que contenga la última letra del Apellido
console.log(estudiante.slice(10))

//- Una cadena de texto que elimine los espacios de la variable "estudiante"
console.log(estudiante.replace(" ", ""))

//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
console.log(estudiante.includes(nombre))
