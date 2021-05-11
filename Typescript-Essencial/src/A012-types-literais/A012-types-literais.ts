const person = {
  nome: 'Luiz' as const,
  sobrenome: 'Miranda',
};

console.log(person);

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Azul'));
