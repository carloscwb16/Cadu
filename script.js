const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "No âmbito social, você prefere:",
    alternativas: [
        {
          texto:  "Todas as pessoas que você conhece deixam de falar com você ou amizade para sempre com uma só pessoa", "Você tem o carro mais valioso do mundo mas ninguém da sua família sabe ou você tem o carro mais lento do mundo e todos da sua família sabe"],
          afirmação:"af",
},
{
    enunciado: "No âmbito ambiental, você prefere:",
    alternativas: [
        texto: "Você combate o aquecimento global mas acaba falhando na missão ou você vive em um mundo que o aquecimento global acabou", "Você morre combatendo o desmatamento ou você vive em um mundo sem florestas"],
        afirmação:"af",
},
{
    enunciado: "No âmbito tecnológico, você prefere:",
    alternativas: [
        texto: "Você constrói o carro mais tecnológico do mundo mas não vai poder usá-lo ou usar um carro problemático", "Usar alguma tecnologia antiga ou não poder usar uma tecnologia atual"],
        afirmação:"af",
}

]

let atual = 0;
let perguntaAtual;

function mostraPerguntas (){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

function mostraAlternativas (){
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

mostraPerguntas();
