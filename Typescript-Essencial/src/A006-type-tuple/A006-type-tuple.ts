const dadosCliente1: [number, string] = [1, 'Wellyson'];
const dadosCliente2: [number, string, string] = [1, 'Luiz', 'Miranda'];
const dadosCliente3: [number, string, string?] = [1, 'Luiz'];
const dadosCliente4: [number, ...string[]] = [2, 'Mônica'];

dadosCliente1[0] = 100;
dadosCliente1[1] = 'Carlos';

dadosCliente3[2] = 'Miranda';

dadosCliente4[2] = 'Wellyson';
dadosCliente4[3] = 'Martins';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);
