const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Hamburger ou pizza?",
        alternativas: [
            {
                texto: "Pizza",
                afirmacao: "Comida italiana muito superior. "
            },
            {
                texto: "Hamburguer!",
                afirmacao: "Pizza é coisa de gente sem personalidade."
            }
        ]
    },
    {
        enunciado: "Labubu ou Bobbie Goods?",
        alternativas: [
            {
                texto: "Labubu.",
                afirmacao: "Muito mais lindo, ao contrário desse Bobbie Goods cor de Pistache."
            },
            {
                texto: "Bobbie Goods",
                afirmacao: "Labubu bicho feio."
            }
        ]
    },
    {
        enunciado: "Café ou chá?",
        alternativas: [
            {
                texto: "Café.",
                afirmacao: "Melhor acompanhamento para um cigarrinho."
            },
            {
                texto: "Chá",
                afirmacao: "Sou a velha dos gatos."
            }
        ]
    },
    {
        enunciado: "Pistache ou Morango do Amor?",
        alternativas: [
            {
                texto: "Pistache.",
                afirmacao: "Muito superior"
            },
            {
                texto: "Morango do Amor",
                afirmacao: "Muito mais croc croc!"
            }
        ]
    },
    {
        enunciado: "Manhâ ou tarde?",
        alternativas: [
            {
                texto: "Manhâ",
                afirmacao: "Deus ajuda quem cedo madruga."
            },
            {
                texto: "Tarde",
                afirmacao: "Sou preguiçoso, durmo até meio dia. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();