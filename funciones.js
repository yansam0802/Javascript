// - Una función sin parámetros que devuelva siempre "true"
function sinParametro() {
    return true
}

//- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

async function saludo() {
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log("Hola soy una promesa");
        resolve();
      }, 5000);
    });
  }
  
  saludo();

  //- Una función generadora de índices pares automáticos

function* indicePar() {
    let inPar = 0
    while(true) {
        yield inPar;
        inPar += 2 
    }
}
  const gen = indicePar()

  console.log(gen.next().value)
  console.log(gen.next().value)
  console.log(gen.next().value)
  console.log(gen.next().value)

