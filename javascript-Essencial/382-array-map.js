// MAP

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Dobre os números
const dobroDosNumeros = numeros.map((num) => num * 2);
console.log("Números: ", numeros);
console.log("Dobro dos números: ", dobroDosNumeros);

// -
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];
// Para cada elemento:
// - Retorne apenas uma string com o nome da pessoa
const nomePessoas = pessoas.map((pessoa) => pessoa.nome);
console.log("Nome das pessoas: ", nomePessoas);

// - Remova apenas a chave "nome" do objeto
const idades = pessoas.map((pessoa) => ({ idade: pessoa.idade }));
console.log("Idade das pessoas: ", idades);

// - Adicione uma chave id em cada objeto
const novoObjeto = pessoas.map((pessoa, index) => ({
  id: index,
  ...pessoa,
}));
console.log("Adicione uma chave id em cada objeto: ", novoObjeto);
console.log("Array original: ", pessoas);
