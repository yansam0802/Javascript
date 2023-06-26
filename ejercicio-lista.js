//- Una variable que contenga la lista de la compra (mínimo 5 elementos)

const listaCompras = ["Huevo", "Arroz", "Chocolate", "Azúcar", "Pasta", "Frijoles"]
console.log(listaCompras)

//- Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompras.push("Aceite de Girasol")
console.log(listaCompras)

//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompras.pop()
console.log(listaCompras)

//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculasFavoritas = [
    {titulo: "El Padrino", autor: "Francis Ford Coppola", fecha: "1972"},
    {titulo: "El club de la lucha", autor: "David Fincher", fecha: "1999"},
    {titulo: "Origen", autor: "Christopher Nolan", fecha: "2011"},
]

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const nuevaLista = peliculasFavoritas.filter(obj => obj.fecha > "2010")
console.log(nuevaLista)

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const listaDirectores = peliculasFavoritas.map(pelicula => pelicula.autor)
console.log(listaDirectores)

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const listaTitulos = peliculasFavoritas.map(pelicula => pelicula.titulo)
console.log(listaTitulos)

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
console.log(listaTitulos.concat(listaDirectores))

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const listaNueva = [...listaDirectores, ...listaTitulos]
console.log(listaNueva)