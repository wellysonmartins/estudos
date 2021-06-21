function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

export const pessoa = {
  nome: 'Wellyson',
  sobrenome: 'Martins',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Luiz', 'Wellyson');
pessoa.exibirNome();
