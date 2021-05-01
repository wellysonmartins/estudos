// REDUCE

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
console.log("Números: ", numeros);
// Some todos os números (reduce)
const soma = numeros.reduce((acumulador, num) => (acumulador += num), 0);
console.log("Soma de todos os números: ", soma);

// Retorne um array com os pares (Filter)
const pares = numeros.filter((num) => num % 2 == 0);
console.log("Números pares: ", pares);

// Retorne um array com o dobro dos valores (Map)
const dobro = numeros.map((num) => num * 2);
console.log("Dobro dos números: ", dobro);

// -
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

// Retorne a pessoa mais velha
const maisVelha = pessoas.reduce((acumulador, pessoa) => {
  if (acumulador.idade > pessoa.idade) return acumulador;
});
console.log("Pessoa mais velha: ", maisVelha);
