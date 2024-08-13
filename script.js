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
                texto: "Todas as pessoas que você conhece deixam de falar com você ou amizade para sempre com uma só pessoa",
                afirmacao: "af",
            },
            {
                texto: "Você tem o carro mais valioso do mundo mas ninguém da sua família sabe ou você tem o carro mais lento do mundo e todos da sua família sabe",
                afirmacao: "af",
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "Você combate o aquecimento global mas acaba falhando na missão ou você vive em um mundo que o aquecimento global acabou",
                afirmacao: "af",
            },
            {
                texto: "Você morre combatendo o desmatamento ou você vive em um mundo sem florestas",
                afirmacao: "af",
            }
        ],
    },


    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto: "Você constrói o carro mais tecnológico do mundo mas não vai poder usá-lo ou usar um carro problemático",
                afirmacao: "af",
            },
            {
                texto: "Usar alguma tecnologia antiga ou não poder usar uma tecnologia atual",
                afirmacao: "af",
            },
        ],
    }
]




    let atual = 0;
let perguntaAtual;

function mostraPerguntas() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent="";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", function(){
            atual++;
            mostraPerguntas();
        })
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

mostraPerguntas();
