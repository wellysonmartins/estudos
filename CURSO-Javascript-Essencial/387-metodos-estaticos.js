class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  // Métodos de instância
  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVolume() {
    this.volume -= 2;
  }

  // Método estático
  static trocaPilha() {
    console.log("Trocando pilha");
  }
}

const controle1 = new ControleRemoto("LG");
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

const controle2 = new ControleRemoto("Samsung");
controle2.aumentarVolume();
controle2.aumentarVolume();
controle2.diminuirVolume();
console.log(controle2);

ControleRemoto.trocaPilha();
