function secFibonacci(num) {
    let fibonacci = [1, 1];
     for (let i = 2; i < num; i++) {
          const secuNum = fibonacci[i - 1] + fibonacci[i - 2];
          fibonacci.push(secuNum)
     }

     return fibonacci;
}

const num = 6
const secuencia = secFibonacci(num)
console.log(secuencia)