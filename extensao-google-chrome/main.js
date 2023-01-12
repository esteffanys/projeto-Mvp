var ingredient1 = document.querySelector("#ingredient1");
var ingredient2 = document.querySelector("#ingredient2");
var ingredient3 = document.querySelector("#ingredient3");
var ingredient4 = document.querySelector("#ingredient4");
var ingredient5 = document.querySelector("#ingredient5");
var ingredient6 = document.querySelector("#ingredient6");
var ingredient7 = document.querySelector("#ingredient7");
var ingredient8 = document.querySelector("#ingredient8");
var ingredient9 = document.querySelector("#ingredient9");
var ingredient10 = document.querySelector("#ingredient10");


function trazerRepositorios() {
  axios
    .get(`https://api.github.com/users/${nomeUsuario.value}/repos`)
    .then((response) => {
      const repos = response.data;
      console.log(repos);

      var lista = document.querySelector("#repos");

      for (i in repos) {
        console.log(repos[i]);
        var elemento = document.createElement("li");
        elemento.innerHTML = JSON.stringify(repos[i].url);

        lista.appendChild(elemento);
      }
    })
    .catch((error) => console.error(error));
}