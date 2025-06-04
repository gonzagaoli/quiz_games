listaPerguntas = [
  {
  pergunta: "Qual o maior ser vivo?",
   opcoes: [
    "Baleia Azul",
    "Fungo de mel",
    "Elefante",
    "Girafa"
      ],
      correta: 1
    },
  {
    pergunta: "Qual a primeira capital do Brasil?",
    opcoes: [
      "Groairas",
      "Taquara",
      "Salvador",
      "Rio de Janeiro"
    ],
    correta: 2
  },
]
pergunta = null
btnIniciar = document.querySelector(".iniciar")
btnIniciar.addEventListener("click", iniciarjogo)

function iniciarjogo() {
  telaInicial = document.querySelector(".tela-inicial")
  telaInicial.style.display = "none"
  
  telaPerg = document.querySelector(".tela-pergunta")
  telaPerg.style.display = "block"
  
  mostrarPergunta()
}

function mostrarPergunta() {
  pergunta = listaPerguntas[0]
  console.log(pergunta.opcoes)
}