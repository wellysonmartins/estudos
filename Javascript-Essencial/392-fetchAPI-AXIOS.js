// FETCH API
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((json) => carregaElementosNaPagina(json));

// AXIOS
axios("https://jsonplaceholder.typicode.com/posts").then((res) =>
  carregaElementosNaPagina(res.data),
);

function carregaElementosNaPagina(json) {
  const table = document.createElement("table");

  json.map((res) => {
    const tr = document.createElement("tr");

    let td = document.createElement("td");
    td.innerHTML = res.id;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = res.title;
    tr.appendChild(td);

    table.appendChild(tr);
  });

  const result = document.getElementById("resultado");
  result.appendChild(table);
}
