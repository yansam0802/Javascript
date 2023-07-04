const logger = require('./logger');


// logger.log("Hola estoy saliendo por pantalla")
logger.info("Hola esto es un mensaje informativo")
logger.debug("Esto es un mensaje de debu")
logger.warn("Esto es un mensaje de advertencia")
logger.error("Esto es un error")


module.exports = logger;

const pruebaError = str => {
    if(typeof str === "string") {
        return "Soy un string"
    }
    throw new Error ( "Deberia ser un string" )
}

try {
    // Este sirve para ejecutar un código que puede fallar
    console.log("Está ejecutándose de manera correcta")
    const doble = pruebaError(numero)
    console.log(doble)
} catch(e) {
    // En caso de fallar, quiero que ejecutes
    console.error("ERROR")
    console.error(`El valor de e es: $(e)`)
 } 