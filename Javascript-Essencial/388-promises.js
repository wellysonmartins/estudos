function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("BAD VALUE");
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

espera("Frase 1", aleatorio(1, 3))
  .then((res) => {
    console.log(res);
    return espera("Frase 2", aleatorio(1, 3));
  })
  .then((res) => {
    console.log(res);
    return espera(123, aleatorio(1, 3));
  })
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log("ERRO: ", e);
  });

console.log("Isso aqui será exibido antes de qualquer promisse");
