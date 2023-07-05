class Estudiante {
    nombre;
   asignaturas =  ["Javascrip", "HTML", "CSS"]

    constructor(nombre) {
        this.nombre = nombre
        this.asignaturas = ["Javascrip", " HTML", " CSS"]
   
    }

    obtenDatos() {
        console.log(`Hola, soy ${this.nombre}, soy estudiante de las asignaturas ${this.asignaturas}.`)
    }
}

const nuevo_estudiante = new Estudiante("Yan",)
console.log(nuevo_estudiante)
nuevo_estudiante.obtenDatos()