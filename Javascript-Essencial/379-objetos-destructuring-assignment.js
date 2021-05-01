const pessoa = {
  nome: "Wellyson",
  sobrenome: "Martins",
  idade: 33,
  endereco: {
    rua: "Av Brasil",
    numero: 320,
  },
};

const { nome = "Sem nome", idade } = pessoa;
console.log(nome, idade);

const {
  endereco: { rua: r, numero },
} = pessoa;
console.log(r, numero);

const { sobrenome, ...resto } = pessoa;
console.log(sobrenome, resto);
