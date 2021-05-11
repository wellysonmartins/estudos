interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto: () => string;
}

interface TipoPessoa extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

interface TipoPessoa2 {
  nome: string;
  sobrenome: string;
  nomeCompleto: () => string;
}

export class Pessoa implements TipoPessoa2 {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Wellyson', 'Martins');
console.log(pessoa.nomeCompleto());
