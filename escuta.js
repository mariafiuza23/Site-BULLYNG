/* =========================================================
   PORTAL DE ESCUTA
   ESCUTA.JS
   ========================================================= */


/* =========================================================
   FORMULÁRIO
   ========================================================= */

const formEscuta = document.getElementById("formEscuta");

const mensagemStatus =
    document.getElementById("mensagemStatus");


if (formEscuta) {

    formEscuta.addEventListener("submit", function(event) {

        // Impede o formulário de recarregar a página
        event.preventDefault();


        /* ---------------------------------------------
           PEGAR OS CAMPOS
           --------------------------------------------- */

        const nome =
            document.getElementById("nome").value.trim();

        const assunto =
            document.getElementById("assunto").value;

        const mensagem =
            document.getElementById("mensagem").value.trim();


        /* ---------------------------------------------
           VERIFICAR SE OS CAMPOS IMPORTANTES
           FORAM PREENCHIDOS
           --------------------------------------------- */

        if (!assunto || !mensagem) {

            mensagemStatus.textContent =
                "Por favor, escolha um assunto e escreva sua mensagem. 💜";

            mensagemStatus.className =
                "mensagem-status erro";

            return;

        }


        /* ---------------------------------------------
           MENSAGEM DE ACOLHIMENTO
           --------------------------------------------- */

        const nomeExibicao =
            nome || "Você";


        mensagemStatus.textContent =
            `Obrigada por compartilhar, ${nomeExibicao}. 💜 ` +
            `Sua mensagem foi registrada apenas nesta página. ` +
            `Lembre-se: você merece ser ouvido e não precisa enfrentar tudo sozinho.`;


        mensagemStatus.className =
            "mensagem-status sucesso";


        /* ---------------------------------------------
           LIMPAR O FORMULÁRIO
           --------------------------------------------- */

        formEscuta.reset();


        /* ---------------------------------------------
           LEVAR O USUÁRIO ATÉ A MENSAGEM
           --------------------------------------------- */

        mensagemStatus.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    });

}


/* =========================================================
   BOTÃO VOLTAR AO TOPO
   ========================================================= */

const topoBtn =
    document.getElementById("topoBtn");


if (topoBtn) {

    window.addEventListener("scroll", function() {

        if (window.scrollY > 400) {

            topoBtn.classList.add("show");

        } else {

            topoBtn.classList.remove("show");

        }

    });


    topoBtn.addEventListener("click", function() {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* =========================================================
   BOTÃO "VOLTAR AO TOPO" DO RODAPÉ
   ========================================================= */

const backToTop =
    document.querySelector(".back-to-top");


if (backToTop) {

    backToTop.addEventListener("click", function(event) {

        event.preventDefault();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* =========================================================
   ANIMAÇÃO DOS CARDS
   ========================================================= */

const elementos =
    document.querySelectorAll(
        ".card, .ajuda-card, .tipo-card, .apoio-card"
    );


if ("IntersectionObserver" in window) {

    const observador =
        new IntersectionObserver(

            function(entries) {

                entries.forEach(function(entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "aparecer"
                        );

                        observador.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    elementos.forEach(function(elemento) {

        elemento.classList.add(
            "animacao-escondida"
        );

        observador.observe(elemento);

    });

}


/* =========================================================
   MODO ESCURO
   ========================================================= */

const darkModeBtn =
    document.getElementById("darkModeBtn");


if (darkModeBtn) {

    darkModeBtn.addEventListener("click", function() {

        document.body.classList.toggle(
            "dark-mode"
        );


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

            localStorage.setItem(
                "modoEscuro",
                "ativado"
            );

        } else {

            icone.classList.remove(
                "fa-sun"
            );

            icone.classList.add(
                "fa-moon"
            );

            localStorage.setItem(
                "modoEscuro",
                "desativado"
            );

        }

    });


    /* ---------------------------------------------
       RECUPERAR PREFERÊNCIA
       --------------------------------------------- */

    if (
        localStorage.getItem("modoEscuro")
        === "ativado"
    ) {

        document.body.classList.add(
            "dark-mode"
        );


        const icone =
            darkModeBtn.querySelector("i");


        icone.classList.remove(
            "fa-moon"
        );

        icone.classList.add(
            "fa-sun"
        );

    }

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


    navbar.appendChild(menuToggle);


    menuToggle.addEventListener(
        "click",
        function() {

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


    /* ---------------------------------------------
       FECHAR AO CLICAR EM UM LINK
       --------------------------------------------- */

    const links =
        menu.querySelectorAll("a");


    links.forEach(function(link) {

        link.addEventListener(
            "click",
            function() {

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
   FINAL
   ========================================================= */

console.log(
    "Portal de Escuta carregado com sucesso!"
);