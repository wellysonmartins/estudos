// FILTER - MAP - REDUCE

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Retorne a soma do dobro de todos os pares
const result = numeros
  .filter((num) => num % 2 == 0)
  .map((num) => num * 2)
  .reduce((ac, num) => (ac += num));

console.log("Números: ", numeros);
console.log("A soma do dobro de todos os pares: ", result);
