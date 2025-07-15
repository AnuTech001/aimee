document.addEventListener("DOMContentLoaded", function () {
  const loadHTML = (id, file) => {
    console.log(`Carregando: ${file}`);
    fetch(file)
      .then((response) => response.text())
      .then((data) => (document.getElementById(id).innerHTML = data))
      .catch((error) => console.error(`Erro ao carregar ${file}:`, error));
  };

  loadHTML("links", "components/links.html");
  loadHTML("cabecalho", "components/cabecalho.html");
  loadHTML("carta", "components/carta.html");
  loadHTML("projeto", "components/projeto.html");
  loadHTML("frase-final", "components/frase-final.html");
  loadHTML("rodape", "components/rodape.html");
});
