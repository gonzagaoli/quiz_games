
btnIniciar = document.querySelector(".iniciar")
btnIniciar.addEventListener("click", iniciarjogo)

function iniciarjogo() {
  telaInicial = document.querySelector(".tela-inicial")
  telaInicial.style.display = "none"
  
  telaPerg = document.querySelector(".tela-pergunta")
  telaPerg.style.display = "block"
}