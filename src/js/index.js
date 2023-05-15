var trocarTema = document.querySelector(".alterar-tema");
var body = document.querySelector("body");

trocarTema.addEventListener("click", () => {
  var modoEscuroAtivo = body.classList.contains("modo-escuro");

  body.classList.toggle('modo-escuro')

  if (modoEscuroAtivo) {
    trocarTema.innerHTML ='<img class="imagem tema" src="./src/imagens/sun.png" alt="sun"></img>';
}else{
    trocarTema.innerHTML ='<img class="imagem tema" src="./src/imagens/moon.png" alt="lua"></img>';
    }
});
