function divisaoComResto(dividendo, divisor) {
    let resultado = Math.floor(dividendo / divisor);
    let resto = dividendo % divisor;
    console.log("Resultado da divisão:", resultado);
    console.log("Resto da divisão:", resto);
  }
  
  divisaoComResto(10, 3);
  