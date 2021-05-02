fetch("index.html")
  .then((res) => {
    if (res.status !== 200) throw new Error("ERRO 404");
    return res.text();
  })
  .then((html) => console.log(html))
  .catch((e) => console.log(e));
