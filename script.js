/* =========================================================
   VOZ CONTRA O BULLYING
   SCRIPT.JS
   ========================================================= */


/* =========================================================
   MODO ESCURO
   ========================================================= */

const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {

    darkModeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const icon = darkModeBtn.querySelector("i");

        if (document.body.classList.contains("dark-mode")) {

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

            localStorage.setItem("modoEscuro", "ativado");

        } else {

            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");

            localStorage.setItem("modoEscuro", "desativado");

        }

    });

}


/* =========================================================
   MANTER O MODO ESCURO SALVO
   ========================================================= */

const modoSalvo = localStorage.getItem("modoEscuro");

if (modoSalvo === "ativado") {

    document.body.classList.add("dark-mode");

    if (darkModeBtn) {

        const icon = darkModeBtn.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

        }

    }

}


/* =========================================================
   MENU MOBILE
   ========================================================= */

/*
   O HTML atual não possui um botão específico
   para abrir o menu no celular.

   Por isso, criamos um automaticamente.
*/

const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");

if (navbar && menu) {

    const menuToggle = document.createElement("button");

    menuToggle.className = "menu-toggle";

    menuToggle.setAttribute(
        "aria-label",
        "Abrir menu"
    );

    menuToggle.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

    navbar.appendChild(menuToggle);


    menuToggle.addEventListener("click", () => {

        menu.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (menu.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

            menuToggle.setAttribute(
                "aria-label",
                "Fechar menu"
            );

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

            menuToggle.setAttribute(
                "aria-label",
                "Abrir menu"
            );

        }

    });


    /* ---------------------------------------------
       FECHAR MENU AO CLICAR EM UM LINK
       --------------------------------------------- */

    const linksMenu = menu.querySelectorAll("a");

    linksMenu.forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}


/* =========================================================
   BOTÃO VOLTAR AO TOPO
   ========================================================= */

const topoBtn = document.getElementById("topoBtn");

if (topoBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topoBtn.classList.add("show");

        } else {

            topoBtn.classList.remove("show");

        }

    });


    topoBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* =========================================================
   ANIMAÇÃO DAS SEÇÕES
   ========================================================= */

const elementosAnimados = document.querySelectorAll(
    ".card, .sinal, .tipo-card, .ajuda-card, .apoio-card"
);


const observador = new IntersectionObserver(

    (elementos) => {

        elementos.forEach(elemento => {

            if (elemento.isIntersecting) {

                elemento.target.classList.add(
                    "aparecer"
                );

                observador.unobserve(
                    elemento.target
                );

            }

        });

    },

    {
        threshold: 0.12
    }

);


elementosAnimados.forEach(elemento => {

    elemento.classList.add("animacao-escondida");

    observador.observe(elemento);

});


/* =========================================================
   EFEITO DE DIGITAÇÃO NO TÍTULO
   ========================================================= */

/*
   Mantemos o efeito simples para não atrapalhar
   a leitura do site.
*/

const heroTitle = document.querySelector(
    ".hero h1"
);

if (heroTitle) {

    heroTitle.classList.add(
        "titulo-pronto"
    );

}


/* =========================================================
   FECHAR MENU AO REDIMENSIONAR
   ========================================================= */

window.addEventListener("resize", () => {

    if (window.innerWidth > 900) {

        if (menu) {

            menu.classList.remove("active");

        }

        const menuToggle =
            document.querySelector(".menu-toggle");

        if (menuToggle) {

            const icon =
                menuToggle.querySelector("i");

            if (icon) {

                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }

        }

    }

});


/* =========================================================
   ANO AUTOMÁTICO NO RODAPÉ
   ========================================================= */

const anoAtual = new Date().getFullYear();

const footerTexto =
    document.querySelector(".footer-bottom p");

if (footerTexto) {

    footerTexto.innerHTML =
        `© ${anoAtual} • Voz Contra o Bullying • Projeto Escolar de Conscientização`;

}


/* =========================================================
   ACESSIBILIDADE — TECLADO
   ========================================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        if (menu) {

            menu.classList.remove("active");

        }

        const menuToggle =
            document.querySelector(".menu-toggle");

        if (menuToggle) {

            const icon =
                menuToggle.querySelector("i");

            if (icon) {

                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }

        }

    }

});


/* =========================================================
   MENSAGEM NO CONSOLE
   ========================================================= */

console.log(
    "💜 Voz Contra o Bullying — site carregado com sucesso!"
);