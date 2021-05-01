class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando...`);
  }

  comer() {
    console.log(`${this.nome} está comendo...`);
  }
}

const p1 = new Pessoa("Wellyson", "Martins");
console.log(p1);
p1.falar();
p1.comer();

const p2 = new Pessoa("Mônica", "Martins");
console.log(p2);
p2.falar();
