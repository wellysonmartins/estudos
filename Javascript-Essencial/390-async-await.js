function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject("BAD VALUE");
      return;
    }
    setTimeout(() => {
      resolve(msg.toUpperCase() + " - Passei na promise");
    }, tempo);
  });
}

// Promise
espera("Fase 1", rand())
  .then((res) => {
    console.log(res);
    return espera("Fase 2", rand());
  })
  .then((res) => {
    console.log(res);
    return espera("Fase 3", rand());
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

// Async / Await
async function executa() {
  try {
    const fase1 = await espera("Fase 1", rand());
    console.log(fase1);
    const fase2 = await espera(123, rand());
    console.log(fase2);
    const fase3 = await espera("Fase 3", rand());
    console.log(fase3);
  } catch (e) {
    console.log(e);
  }
}
executa();
