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
                afirmacao: "Ok, bora mano para a próxima pergunta",
            },
            {
                texto: "Você tem o carro mais valioso do mundo mas ninguém da sua família sabe ou você tem o carro mais lento do mundo e todos da sua família sabe",
                afirmacao: "Haaaaaaaaaaaaaaaaaaaaaaaamilton o motor foi simbora kkkkkkkkkkkkk",
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "Você combate o aquecimento global mas acaba falhando na missão ou você vive em um mundo que o aquecimento global acabou",
                afirmacao: "Muito bom ",
            },
            {
                texto: "Você morre combatendo o desmatamento ou você vive em um mundo sem florestas",
                afirmacao: "Próxima pergunta",
            }
        ],
    },


    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [
            {
                texto: "Você constrói o carro mais tecnológico do mundo mas não vai poder usá-lo ou usar um carro problemático",
                afirmacao: "Aqui é o Brasil",
            },
            {
                texto: "Usar alguma tecnologia antiga ou não poder usar uma tecnologia atual",
                afirmacao: "Boa cara você terminou",
            },
        ],
    }
]




    let atual = 0;
let perguntaAtual;
let historiaFinal = "";

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
        botaoAlternativa.addEventListener("click", ()=> opcaoSelecionada(afirmacao));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}
function respostaSelecionada (opcaoSelecionada){
    const afirmacao = opcaoSelecionada.(afirmacao);
    atual++;
    mostraPerguntas();
}
mostraPerguntas();

