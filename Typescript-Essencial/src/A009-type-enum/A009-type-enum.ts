enum Cores {
  VERMELHO,
  AZUL,
  AMARELO,
}

console.log(Cores.VERMELHO);
console.log(Cores.AZUL);
console.log(Cores[1]);

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(Cores.AZUL);
