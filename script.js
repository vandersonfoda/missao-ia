const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Assim que saiu da escola, você se depara com uma nova tecnologia: um chat que consegue responder a todas as dúvidas que uma pessoa pode ter. Além disso, o chat também gera imagens e áudios hiper-realistas. Qual o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: [
                    "No início, ficou com medo do que essa tecnologia pode fazer.",
                    "Achou assustador pensar na velocidade com que a tecnologia está avançando."
                ]
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: [
                    "Quis saber como usar IA no seu dia a dia.",
                    "Pensou que IA pode ajudar em tarefas da sua vida."
                ]
            }
        ]
    }
];

let atual = 0;

function mostraPergunta() {
    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas(perguntaAtual.alternativas);
}

function mostraAlternativas(alternativas) {
    caixaAlternativas.innerHTML = ''; // Limpa as alternativas anteriores
    alternativas.forEach(alternativa => {
        const botaoAlternativa = document.createElement('button');
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.onclick = () => mostraResultado(alternativa.afirmacao.join(" "));
        caixaAlternativas.appendChild(botaoAlternativa);
    });
}

function mostraResultado(afirmacao) {
    textoResultado.textContent = afirmacao;
}

// Inicializa a primeira pergunta
mostraPergunta();
function aleatorio (lista){
    
    const posicao = math.floor(Math.random()*lista.length);
    return lista[posicao];
    }
    function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
        historiaFinal += afirmacoes + '' ;
        atual++;
        mostraPergunta();
        }