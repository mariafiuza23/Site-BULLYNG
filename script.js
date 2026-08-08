/* =========================
   VOZ CONTRA O BULLYING
   SCRIPT PRINCIPAL
========================= */


/* =========================
   MODO ESCURO
========================= */

const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {

    const icone = darkModeBtn.querySelector("i");

    // Recupera preferência salva
    if (localStorage.getItem("modoEscuro") === "ativo") {

        document.body.classList.add("dark-mode");

        if (icone) {
            icone.classList.remove("fa-moon");
            icone.classList.add("fa-sun");
        }

    }

    darkModeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const modoAtivo =
            document.body.classList.contains("dark-mode");

        localStorage.setItem(
            "modoEscuro",
            modoAtivo ? "ativo" : "inativo"
        );

        if (icone) {

            if (modoAtivo) {

                icone.classList.remove("fa-moon");
                icone.classList.add("fa-sun");

            } else {

                icone.classList.remove("fa-sun");
                icone.classList.add("fa-moon");

            }

        }

    });

}


/* =========================
   BOTÃO VOLTAR AO TOPO
========================= */

const topoBtn = document.getElementById("topoBtn");

if (topoBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topoBtn.classList.add("mostrar");

        } else {

            topoBtn.classList.remove("mostrar");

        }

    });


    topoBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================
   AUMENTAR / DIMINUIR FONTE
========================= */

const aumentarFonte =
    document.getElementById("aumentarFonte");

const diminuirFonte =
    document.getElementById("diminuirFonte");

const resetarFonte =
    document.getElementById("resetarFonte");

let tamanhoFonte = 100;


function aplicarFonte() {

    document.documentElement.style.fontSize =
        tamanhoFonte + "%";

}


if (aumentarFonte) {

    aumentarFonte.addEventListener("click", () => {

        if (tamanhoFonte < 125) {

            tamanhoFonte += 5;
            aplicarFonte();

        }

    });

}


if (diminuirFonte) {

    diminuirFonte.addEventListener("click", () => {

        if (tamanhoFonte > 90) {

            tamanhoFonte -= 5;
            aplicarFonte();

        }

    });

}


if (resetarFonte) {

    resetarFonte.addEventListener("click", () => {

        tamanhoFonte = 100;
        aplicarFonte();

    });

}


/* =========================
   PORTAL DE ESCUTA
========================= */

const desabafo =
    document.getElementById("desabafo");

const enviarDesabafo =
    document.getElementById("enviarDesabafo");

const mensagemEscuta =
    document.getElementById("mensagemEscuta");


if (
    desabafo &&
    enviarDesabafo &&
    mensagemEscuta
) {

    enviarDesabafo.addEventListener("click", () => {

        if (desabafo.value.trim() === "") {

            mensagemEscuta.innerHTML = `
                <i class="fa-solid fa-circle-exclamation"></i>

                <div>
                    <strong>Você pode escrever.</strong>

                    <p>
                        Coloque seus sentimentos em palavras,
                        do seu jeito e no seu tempo.
                    </p>
                </div>
            `;

            mensagemEscuta.className =
                "mensagem-escuta mostrar aviso";

            return;

        }


        mensagemEscuta.innerHTML = `
            <i class="fa-solid fa-heart"></i>

            <div>
                <strong>Obrigado por compartilhar.</strong>

                <p>
                    Seus sentimentos são importantes.
                    Se algo estiver acontecendo com você,
                    converse também com uma pessoa adulta
                    de confiança.
                </p>
            </div>
        `;

        mensagemEscuta.className =
            "mensagem-escuta mostrar sucesso";

        desabafo.value = "";

    });

}


/* =========================
   ANIMAÇÃO AO APARECER
========================= */

const elementosAnimados =
    document.querySelectorAll(".card, .referencia-card, .frases-desafio > div");


const observador =
    new IntersectionObserver((elementos) => {

        elementos.forEach((elemento) => {

            if (elemento.isIntersecting) {

                elemento.target.classList.add("aparecer");

                observador.unobserve(elemento.target);

            }

        });

    }, {
        threshold: 0.15
    });


elementosAnimados.forEach((elemento) => {

    observador.observe(elemento);

});

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
