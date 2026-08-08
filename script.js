/* =========================
   DESAFIO INTERATIVO
========================= */

const perguntas = [

    {
        pergunta:
        "Você percebe que um colega está sendo excluído pelos outros. O que você faria?",

        opcoes: [

            [
                "Ignoraria, pois não é problema meu.",
                "errada"
            ],

            [
                "Me aproximaria, ofereceria apoio e procuraria ajuda se necessário.",
                "certa"
            ],

            [
                "Faria uma brincadeira para tentar chamar a atenção.",
                "errada"
            ]

        ],

        explicacao:
        "Apoiar quem está sendo excluído e procurar ajuda de uma pessoa de confiança é uma atitude de empatia e respeito."
    },


    {
        pergunta:
        "Um colega conta para você que está sofrendo bullying. Como você reage?",

        opcoes: [

            [
                "Digo que é melhor esquecer e não falar sobre isso.",
                "errada"
            ],

            [
                "Escuto, acolho e incentivo a pessoa a procurar alguém de confiança.",
                "certa"
            ],

            [
                "Conto para outras pessoas para descobrir o que aconteceu.",
                "errada"
            ]

        ],

        explicacao:
        "Ouvir sem julgamentos e incentivar a busca por ajuda pode fazer a pessoa se sentir acolhida e protegida."
    },


    {
        pergunta:
        "Você recebe uma mensagem ofensiva sobre um colega em um grupo. O que faz?",

        opcoes: [

            [
                "Compartilho com outras pessoas porque achei engraçado.",
                "errada"
            ],

            [
                "Respondo com outra ofensa para defender meu colega.",
                "errada"
            ],

            [
                "Não compartilho a mensagem e procuro ajuda se a situação continuar.",
                "certa"
            ]

        ],

        explicacao:
        "Não espalhar ofensas ajuda a interromper o ciclo de violência. Quando necessário, procure um adulto ou responsável de confiança."
    }

];


const pergunta =
document.getElementById("pergunta");

const opcoes =
document.querySelectorAll(".opcao");

const feedback =
document.getElementById("feedback");

const proximaPergunta =
document.getElementById("proximaPergunta");

const numeroPergunta =
document.getElementById("numeroPergunta");

const progresso =
document.getElementById("progresso");

const perguntaContainer =
document.getElementById("pergunta-container");

const resultado =
document.getElementById("resultado");

const pontuacaoTexto =
document.getElementById("pontuacao");

const mensagemResultado =
document.getElementById("mensagemResultado");

const reiniciarDesafio =
document.getElementById("reiniciarDesafio");


let perguntaAtual = 0;
let pontuacao = 0;
let respondeu = false;


/* CARREGAR PERGUNTA */

function carregarPergunta() {

    if (!pergunta || opcoes.length === 0) {
        return;
    }

    respondeu = false;

    const atual =
        perguntas[perguntaAtual];


    pergunta.textContent =
        atual.pergunta;


    if (numeroPergunta) {

        numeroPergunta.textContent =
            perguntaAtual + 1;

    }


    if (progresso) {

        progresso.style.width =
            ((perguntaAtual + 1) / perguntas.length) * 100 + "%";

    }


    if (feedback) {

        feedback.className = "feedback";
        feedback.innerHTML = "";

    }


    if (proximaPergunta) {

        proximaPergunta.style.display = "none";

    }


    opcoes.forEach((opcao, index) => {

        opcao.disabled = false;

        opcao.classList.remove(
            "certa",
            "errada"
        );


        const texto =
            opcao.querySelector("span");


        if (texto) {

            texto.textContent =
                atual.opcoes[index][0];

        }


        opcao.dataset.resposta =
            atual.opcoes[index][1];

    });

}


/* ESCOLHER RESPOSTA */

opcoes.forEach((opcao) => {

    opcao.addEventListener("click", () => {

        if (respondeu) {
            return;
        }


        respondeu = true;


        const acertou =
            opcao.dataset.resposta === "certa";


        opcoes.forEach((item) => {

            item.disabled = true;

        });


        if (acertou) {

            pontuacao++;

            opcao.classList.add("certa");


            if (feedback) {

                feedback.className =
                    "feedback mostrar certo";


                feedback.innerHTML = `
                    <i class="fa-solid fa-circle-check"></i>

                    <div>
                        <strong>Boa escolha!</strong>

                        <p>
                            ${perguntas[perguntaAtual].explicacao}
                        </p>
                    </div>
                `;

            }

        } else {

            opcao.classList.add("errada");


            if (feedback) {

                feedback.className =
                    "feedback mostrar errado";


                feedback.innerHTML = `
                    <i class="fa-solid fa-circle-xmark"></i>

                    <div>
                        <strong>Quase!</strong>

                        <p>
                            ${perguntas[perguntaAtual].explicacao}
                        </p>
                    </div>
                `;

            }

        }


        if (proximaPergunta) {

            proximaPergunta.style.display =
                "inline-flex";

        }

    });

});


/* PRÓXIMA PERGUNTA */

if (proximaPergunta) {

    proximaPergunta.addEventListener("click", () => {

        perguntaAtual++;


        if (perguntaAtual < perguntas.length) {

            carregarPergunta();

        } else {

            mostrarResultado();

        }

    });

}


/* RESULTADO */

function mostrarResultado() {

    if (!perguntaContainer || !resultado) {
        return;
    }


    perguntaContainer.style.display =
        "none";


    resultado.classList.add("mostrar");


    if (pontuacaoTexto) {

        pontuacaoTexto.textContent =
            `Você acertou ${pontuacao} de ${perguntas.length} situações!`;

    }


    if (mensagemResultado) {

        if (pontuacao === 3) {

            mensagemResultado.textContent =
                "Você está pronto para ser uma voz contra o bullying! 💜";

        } else if (pontuacao === 2) {

            mensagemResultado.textContent =
                "Mandou bem! Você já sabe como contribuir para um ambiente mais respeitoso.";

        } else {

            mensagemResultado.textContent =
                "Você pode aprender ainda mais sobre como agir e ajudar. Cada atitude conta!";

        }

    }

}


/* REINICIAR DESAFIO */

if (reiniciarDesafio) {

    reiniciarDesafio.addEventListener("click", () => {

        perguntaAtual = 0;

        pontuacao = 0;


        resultado.classList.remove(
            "mostrar"
        );


        if (perguntaContainer) {

            perguntaContainer.style.display =
                "block";

        }


        carregarPergunta();

    });

}


/* INICIAR DESAFIO */

if (pergunta && opcoes.length > 0) {

    carregarPergunta();

}
