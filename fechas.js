//- La fecha de hoy
const fecha = new Date()
console.log(fecha)

//- La fecha de tu nacimiento
const fechaNacimiento = new Date(1995, 4, 19)
console.log(fechaNacimiento)

//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
console.log( fecha > fechaNacimiento)

//- Una variable que contenga el día de tu nacimiento
console.log(fechaNacimiento.getDate())

//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
console.log(fechaNacimiento.getMonth() + 1)

//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
console.log(fechaNacimiento.getFullYear())