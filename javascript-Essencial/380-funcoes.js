// Declaração de função (Function Hoisting)
falaOi();
function falaOi() {
  console.log("Oie");
}

// First-class objects (Objetos de primeira classe)
const souUmDado = function () {
  console.log("Sou um dado.");
};
souUmDado();

// Arrow Function
const arrow = () => {
  console.log("Sou uma arrow function");
};
arrow();

// Dentro de um objeto
const obj = {
  falar: function () {
    console.log("Estou falando...");
  },
};
obj.falar();
