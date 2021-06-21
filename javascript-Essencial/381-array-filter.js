//FILTER - Sempre vai retornar um array, com a mes quantidade de elementos ou menos.
// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const maiores10 = numeros.filter((num) => num > 10);
console.log("Maiores que 10: ", maiores10);

// -
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Wallace", idade: 47 },
];
// Retorne as pessoas que tem o nome com 6 letras ou mais
const pessoasComNomeGrande = pessoas.filter(
  (pessoa) => pessoa.nome.length >= 6,
);
console.log(
  "Pessoas com 5 letras ou mais: ",
  pessoasComNomeGrande.map((pessoa) => pessoa.nome),
);

// Retorne as pessoas com mais de 50 anos
const pessoasComMaisDe50Anos = pessoas.filter((pessoa) => pessoa.idade > 50);
console.log(
  "Pessoas com mais de 50 anos: ",
  pessoasComMaisDe50Anos.map((pessoa) => pessoa.nome),
);

// Retorne as pessoas cujo nome termina com A
const nomeTerminaComA = pessoas.filter((pessoa) =>
  pessoa.nome.toLocaleLowerCase().endsWith("a"),
);
console.log(
  "Pessoas com nome que termina com a letra A: ",
  nomeTerminaComA.map((pessoa) => pessoa.nome),
);
