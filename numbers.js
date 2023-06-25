//- Una variable que contenga tu altura en centímetros (entero)
let alturaCm = 167;
console.log(parseInt(alturaCm));

//- Una variable que contenga tu altura en metros (número de coma flotante)

let alturaMtr =  1.67;
console.log(parseFloat(alturaMtr));

//- Una variable que contenga tu peso en kilogramos (número de coma flotante)

let pesoKl = 60.7;
console.log(parseFloat(pesoKl));

//- Una variable que contenga tu altura en metros redondeada hacia arriba
console.log(Math.round(alturaMtr))

//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
console.log(Math.floor(pesoKl))

//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let max_valor = Number.MAX_VALUE;
let resultado = (Number.MAX_VALUE + 1) === Number.MAX_VALUE;
console.log(resultado)