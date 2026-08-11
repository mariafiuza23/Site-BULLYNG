/* =========================================================
   VOZ CONTRA O BULLYING
   QUIZ.JS
   ========================================================= */


/* =========================================================
   PERGUNTAS
   ========================================================= */

const perguntas = [

    {
        pergunta: "O que caracteriza o bullying?",

        alternativas: [
            "Uma brincadeira entre amigos",
            "Uma situação agressiva, intencional e repetitiva",
            "Uma discussão que acontece uma única vez",
            "Uma competição entre estudantes"
        ],

        correta: 1
    },


    {
        pergunta: "Qual dessas situações pode ser considerada bullying verbal?",

        alternativas: [
            "Ajudar um colega com uma atividade",
            "Convidar alguém para participar de um grupo",
            "Usar apelidos ofensivos para humilhar alguém",
            "Elogiar uma pessoa"
        ],

        correta: 2
    },


    {
        pergunta: "O que é cyberbullying?",

        alternativas: [
            "Bullying praticado por meio da internet e tecnologias digitais",
            "Uma discussão entre duas pessoas presencialmente",
            "Uma competição realizada pela internet",
            "Uma brincadeira feita em grupos online"
        ],

        correta: 0
    },


    {
        pergunta: "Se você presencia uma situação de bullying, qual é uma atitude adequada?",

        alternativas: [
            "Gravar e compartilhar o acontecimento",
            "Rir para não chamar atenção",
            "Ignorar completamente a situação",
            "Procurar um adulto de confiança e oferecer apoio"
        ],

        correta: 3
    },


    {
        pergunta: "O que devemos fazer quando alguém conta que está sofrendo bullying?",

        alternativas: [
            "Dizer que é apenas uma brincadeira",
            "Escutar, acolher e incentivar a busca por ajuda",
            "Contar para outras pessoas sem autorização",
            "Culpar a pessoa pelo que aconteceu"
        ],

        correta: 1
    },


    {
        pergunta: "Qual dessas atitudes demonstra empatia?",

        alternativas: [
            "Tentar compreender como a outra pessoa está se sentindo",
            "Fazer piadas sobre os sentimentos dela",
            "Ignorar quando alguém pede ajuda",
            "Excluir alguém do grupo"
        ],

        correta: 0
    },


    {
        pergunta: "O bullying pode acontecer apenas dentro da escola?",

        alternativas: [
            "Sim, somente na sala de aula",
            "Sim, porque fora da escola não existe bullying",
            "Não. Ele também pode acontecer em outros ambientes e pela internet",
            "Somente durante o intervalo"
        ],

        correta: 2
    },


    {
        pergunta: "Qual é uma atitude importante para combater o bullying?",

        alternativas: [
            "Incentivar apelidos ofensivos",
            "Espalhar rumores",
            "Excluir quem é diferente",
            "Promover respeito, empatia e inclusão"
        ],

        correta: 3
    },


    {
        pergunta: "Se o bullying estiver acontecendo pela internet, o que pode ser importante fazer?",

        alternativas: [
            "Compartilhar o conteúdo com mais pessoas",
            "Responder com novas ofensas",
            "Guardar registros e procurar um adulto de confiança",
            "Criar uma conta falsa para se vingar"
        ],

        correta: 2
    },


    {
        pergunta: "Pedir ajuda quando estamos sofrendo bullying significa:",

        alternativas: [
            "Ser fraco",
            "Exagerar a situação",
            "Demonstrar coragem e buscar proteção",
            "Desistir de enfrentar os problemas"
        ],

        correta: 2
    }

];


/* =========================================================
   VARIÁVEIS
   ========================================================= */

let perguntaAtual = 0;

let pontuacao = 0;

let respondeu = false;


/* =========================================================
   ELEMENTOS DO HTML
   ========================================================= */

const quizContainer =
    document.getElementById("quizContainer");

const proximaPergunta =
    document.getElementById("proximaPergunta");

const resultadoQuiz =
    document.getElementById("resultadoQuiz");


/* =========================================================
   MOSTRAR PERGUNTA
   ========================================================= */

function mostrarPergunta() {

    respondeu = false;

    const pergunta =
        perguntas[perguntaAtual];


    quizContainer.innerHTML = `

        <div class="quiz-pergunta">

            <div class="quiz-progresso">

                Pergunta ${perguntaAtual + 1}
                de ${perguntas.length}

            </div>


            <h3>
                ${pergunta.pergunta}
            </h3>


            <div class="quiz-alternativas">

                ${pergunta.alternativas
                    .map((alternativa, indice) => `

                        <button
                            class="alternativa"
                            data-indice="${indice}"
                        >

                            <span class="letra">
                                ${String.fromCharCode(65 + indice)}
                            </span>

                            <span>
                                ${alternativa}
                            </span>

                        </button>

                    `)
                    .join("")}

            </div>


            <p
                id="feedbackResposta"
                class="feedback-resposta"
            ></p>

        </div>

    `;


    const alternativas =
        document.querySelectorAll(
            ".alternativa"
        );


    alternativas.forEach(alternativa => {

        alternativa.addEventListener(
            "click",
            selecionarResposta
        );

    });


    proximaPergunta.disabled = true;

    proximaPergunta.innerHTML =
        `Próxima pergunta
        <i class="fa-solid fa-arrow-right"></i>`;


    quizContainer.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}


/* =========================================================
   SELECIONAR RESPOSTA
   ========================================================= */

function selecionarResposta(event) {

    if (respondeu) {
        return;
    }


    respondeu = true;


    const botao =
        event.currentTarget;

    const indiceEscolhido =
        Number(
            botao.dataset.indice
        );


    const respostaCorreta =
        perguntas[perguntaAtual].correta;


    const alternativas =
        document.querySelectorAll(
            ".alternativa"
        );


    alternativas.forEach(alternativa => {

        alternativa.disabled = true;

    });


    /* ---------------------------------------------
       RESPOSTA CORRETA
       --------------------------------------------- */

    if (indiceEscolhido === respostaCorreta) {

        botao.classList.add("correta");

        pontuacao++;


        mostrarFeedback(
            "Muito bem! Você acertou! 💜",
            "correto"
        );


    } else {

        botao.classList.add("incorreta");


        alternativas[
            respostaCorreta
        ].classList.add("correta");


        mostrarFeedback(
            "Quase! A alternativa correta está destacada. 🌷",
            "incorreto"
        );

    }


    proximaPergunta.disabled = false;


    if (
        perguntaAtual ===
        perguntas.length - 1
    ) {

        proximaPergunta.innerHTML =
            `Ver resultado
            <i class="fa-solid fa-trophy"></i>`;

    }

}


/* =========================================================
   FEEDBACK
   ========================================================= */

function mostrarFeedback(
    texto,
    tipo
) {

    const feedback =
        document.getElementById(
            "feedbackResposta"
        );


    if (!feedback) {
        return;
    }


    feedback.textContent =
        texto;


    feedback.className =
        `feedback-resposta ${tipo}`;

}


/* =========================================================
   PRÓXIMA PERGUNTA
   ========================================================= */

if (proximaPergunta) {

    proximaPergunta.addEventListener(
        "click",
        () => {

            if (!respondeu) {
                return;
            }


            perguntaAtual++;


            if (
                perguntaAtual <
                perguntas.length
            ) {

                mostrarPergunta();

            } else {

                mostrarResultado();

            }

        }
    );

}


/* =========================================================
   RESULTADO
   ========================================================= */

function mostrarResultado() {

    quizContainer.style.display =
        "none";

    proximaPergunta.style.display =
        "none";


    let titulo;

    let mensagem;

    let icone;


    const porcentagem =
        (pontuacao / perguntas.length) * 100;


    if (porcentagem === 100) {

        titulo =
            "Excelente! 🏆";

        mensagem =
            "Você demonstrou que entende muito bem a importância do respeito, da empatia e do combate ao bullying.";

        icone =
            "fa-trophy";


    } else if (porcentagem >= 70) {

        titulo =
            "Muito bem! 💜";

        mensagem =
            "Você mostrou um ótimo conhecimento sobre bullying e atitudes que podem ajudar a construir um ambiente mais acolhedor.";

        icone =
            "fa-heart";


    } else if (porcentagem >= 50) {

        titulo =
            "Bom começo! 🌷";

        mensagem =
            "Você já sabe algumas coisas importantes. Continue aprendendo e refletindo sobre respeito e empatia.";

        icone =
            "fa-lightbulb";


    } else {

        titulo =
            "Continue aprendendo! 🌱";

        mensagem =
            "O mais importante não é a pontuação. Use este resultado como uma oportunidade para aprender mais sobre bullying e como ajudar.";

        icone =
            "fa-book-open";

    }


    resultadoQuiz.innerHTML = `

        <div class="resultado-conteudo">

            <div class="resultado-icone">

                <i class="fa-solid ${icone}"></i>

            </div>


            <span>
                RESULTADO FINAL
            </span>


            <h2>
                ${titulo}
            </h2>


            <div class="pontuacao">

                <strong>
                    ${pontuacao}
                </strong>

                <span>
                    / ${perguntas.length}
                </span>

            </div>


            <p>
                ${mensagem}
            </p>


            <div class="resultado-botoes">

                <button
                    id="refazerQuiz"
                    class="btn-principal"
                >

                    <i class="fa-solid fa-rotate-right"></i>

                    Refazer quiz

                </button>


                <a
                    href="escuta.html"
                    class="btn-secundario"
                >

                    <i class="fa-solid fa-heart"></i>

                    Portal de Escuta

                </a>

            </div>

        </div>

    `;


    resultadoQuiz.classList.add(
        "mostrar"
    );


    const refazerQuiz =
        document.getElementById(
            "refazerQuiz"
        );


    if (refazerQuiz) {

        refazerQuiz.addEventListener(
            "click",
            reiniciarQuiz
        );

    }


    resultadoQuiz.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}


/* =========================================================
   REINICIAR
   ========================================================= */

function reiniciarQuiz() {

    perguntaAtual = 0;

    pontuacao = 0;

    respondeu = false;


    quizContainer.style.display =
        "block";

    proximaPergunta.style.display =
        "inline-flex";


    resultadoQuiz.classList.remove(
        "mostrar"
    );


    resultadoQuiz.innerHTML =
        "";


    mostrarPergunta();

}


/* =========================================================
   BOTÃO VOLTAR AO TOPO
   ========================================================= */

const topoBtn =
    document.getElementById("topoBtn");


if (topoBtn) {

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 400) {

                topoBtn.classList.add(
                    "show"
                );

            } else {

                topoBtn.classList.remove(
                    "show"
                );

            }

        }
    );


    topoBtn.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* =========================================================
   BOTÃO DO RODAPÉ
   ========================================================= */

const backToTop =
    document.querySelector(
        ".back-to-top"
    );


if (backToTop) {

    backToTop.addEventListener(
        "click",
        event => {

            event.preventDefault();

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* =========================================================
   MODO ESCURO
   ========================================================= */

const darkModeBtn =
    document.getElementById(
        "darkModeBtn"
    );


function atualizarIconeModo() {

    if (!darkModeBtn) {
        return;
    }


    const icone =
        darkModeBtn.querySelector("i");


    if (
        document.body.classList.contains(
            "dark-mode"
        )
    ) {

        icone.classList.remove(
            "fa-moon"
        );

        icone.classList.add(
            "fa-sun"
        );

    } else {

        icone.classList.remove(
            "fa-sun"
        );

        icone.classList.add(
            "fa-moon"
        );

    }

}


if (darkModeBtn) {

    darkModeBtn.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "dark-mode"
            );


            localStorage.setItem(

                "modoEscuro",

                document.body.classList.contains(
                    "dark-mode"
                )
                    ? "ativado"
                    : "desativado"

            );


            atualizarIconeModo();

        }
    );


    if (
        localStorage.getItem(
            "modoEscuro"
        ) === "ativado"
    ) {

        document.body.classList.add(
            "dark-mode"
        );

    }


    atualizarIconeModo();

}


/* =========================================================
   MENU MOBILE
   ========================================================= */

const navbar =
    document.querySelector(".navbar");

const menu =
    document.querySelector(".menu");


if (navbar && menu) {

    const menuToggle =
        document.createElement("button");


    menuToggle.className =
        "menu-toggle";


    menuToggle.setAttribute(
        "aria-label",
        "Abrir menu"
    );


    menuToggle.innerHTML =
        '<i class="fa-solid fa-bars"></i>';


    navbar.appendChild(
        menuToggle
    );


    menuToggle.addEventListener(
        "click",
        () => {

            menu.classList.toggle(
                "active"
            );


            const icone =
                menuToggle.querySelector("i");


            if (
                menu.classList.contains(
                    "active"
                )
            ) {

                icone.classList.remove(
                    "fa-bars"
                );

                icone.classList.add(
                    "fa-xmark"
                );

            } else {

                icone.classList.remove(
                    "fa-xmark"
                );

                icone.classList.add(
                    "fa-bars"
                );

            }

        }
    );


    const links =
        menu.querySelectorAll("a");


    links.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                menu.classList.remove(
                    "active"
                );


                const icone =
                    menuToggle.querySelector("i");


                icone.classList.remove(
                    "fa-xmark"
                );

                icone.classList.add(
                    "fa-bars"
                );

            }
        );

    });

}


/* =========================================================
   INICIAR QUIZ
   ========================================================= */

if (
    quizContainer &&
    proximaPergunta
) {

    mostrarPergunta();

}


/* =========================================================
   CONSOLE
   ========================================================= */

console.log(
    "🧠 Quiz do Voz Contra o Bullying carregado!"
);