
listaPerguntas = [
{
  pergunta: "Qual o maior ser vivo?",
  opcoes : [
    "Baleia azul",
    "Fungo de Mel",
    "Elefante",
    "Girafa"
  ],
  correta: 1
}, 
{
  pergunta: "Qual a primeira capital do Brasil",
  opcoes : [
    "Taquara",
    "Brasilia",
    "Salvador",
    "Rio de Janeiro"
  ],
  correta: 2 
},
{
  pergunta: "Em que ano o Brasil ganhou sua segunda Copa do Mundo",
  opcoes : [
    "1974",
    "1970",
    "1966",
    "1962"
  ],
  correta: 3
}
]

objPergunta = null

telaInicial = document.querySelector(".tela-inicial")
telaPergunta = document.querySelector(".tela-pergunta")
telaGanhou = document.querySelector(".tela-ganhou")
telaPerdeu = document.querySelector(".tela-perdeu")
telaFinal = document.querySelector(".tela-final")

btninciar = document.querySelector(".iniciar")
btninciar.addEventListener("click", iniciarJogo)

divPergunta = document.querySelector(".pergunta");

botao0 = document.querySelector(".opcao0")
botao1 = document.querySelector(".opcao1")
botao2 = document.querySelector(".opcao2")
botao3 = document.querySelector(".opcao3")
perguntaAtual = 0

telaGanhou.addEventListener ("click", () => {
  telaGanhou.style.display = "none"
  if (perguntaAtual == 3) {
      mostraFinal()
    }
  else {
    iniciarJogo()
  }
})
telaPerdeu.addEventListener ("click", () => {
  telaPerdeu.style.display = "none"
  telaInicial.style.display = "block"
  perguntaAtual = 0
})
telaFinal.addEventListener ("click", () => {
  telaFinal.style.display = "none"
  telaInicial.style.display = "block"
  perguntaAtual = 0
})

botao0.addEventListener("click", () => {
  if (objPergunta.correta == 0) {
    mostraGanhou()
}
else {
  mostraPerdeu()
  }
})

botao1.addEventListener("click", () => {
  if (objPergunta.correta == 1) {
    mostraGanhou()
  }
  else {
    mostraPerdeu()
  }
})

botao2.addEventListener("click", () => {
  if (objPergunta.correta == 2) {
    mostraGanhou()
  }
    else {
    mostraPerdeu()
  }
})

botao3.addEventListener("click", () => {
  if (objPergunta.correta == 3) {
    mostraGanhou()
  }
  else {
    mostraPerdeu()
  }
  
})

function iniciarJogo() {
  telaInicial.style.display = "none"
  telaPergunta.style.display = "block"

mostraPergunta()
}

function mostraPergunta() {
  objPergunta = listaPerguntas[perguntaAtual];
  textoPergunta = document.createTextNode(objPergunta.pergunta);
  divPergunta.innerHTML = ""
  divPergunta.appendChild(textoPergunta);
  

  txtOpcao1 = document.createTextNode(objPergunta.opcoes[0]);
  botao0 = document.querySelector(".opcao0");
  botao0.innerHTML = ""
  botao0.appendChild(txtOpcao1);

  txtOpcao2 = document.createTextNode(objPergunta.opcoes[1]);
  botao1 = document.querySelector(".opcao1");
  botao1.innerHTML = ""
  botao1.appendChild(txtOpcao2);

  txtOpcao3 = document.createTextNode(objPergunta.opcoes[2]);
  botao2 = document.querySelector(".opcao2");
  botao2.innerHTML = ""
  botao2.appendChild(txtOpcao3);

  txtOpcao4 = document.createTextNode(objPergunta.opcoes[3]);
  botao3 = document.querySelector(".opcao3");
  botao3.innerHTML = ""
  botao3.appendChild(txtOpcao4);
}

function mostraGanhou() {
  telaPergunta.style.display = "none"
  telaGanhou.style.display = "block"
  perguntaAtual++
}

function mostraPerdeu() {
  telaPergunta.style.display = "none"
  telaPerdeu.style.display = "block"
}

function mostraFinal() {
  telaPergunta.style.display = "none"
  telaFinal.style.display = "block"
}