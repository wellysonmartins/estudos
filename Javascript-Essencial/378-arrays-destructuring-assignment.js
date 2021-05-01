const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const [primeiro, , terceiro] = numeros;

console.log(primeiro, terceiro);

const numeros2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(numeros2[1][2]);

const [, [, , seis]] = numeros2;
console.log(seis);
