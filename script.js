const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "No âmbito social, você prefere:",
    alternativas: ["Alternativa 1", "Alternativa 2"]
},
{
    enunciado: "No âmbito ambiental, você prefere:",
    alternativas: ["Alternativa 3", "Alternativa 4"]
},
{
    enunciado: "No âmbito tecnológico, você prefere:",
    alternativas: ["Alternativa 5", "Alternativa 6"]
}

]
const valores = [120, 30, 321, 546, 897];
let soma = 0;
for(const valor of valores){
    soma = soma + valor;
}
let calculo = soma/valores.length;
console.log("A média dos valores foi: " + calculo)
