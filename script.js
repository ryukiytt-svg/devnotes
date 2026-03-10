const menuBtn = document.getElementById("menu-btn");
const sidebar = document.querySelector(".sidebar-contents");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});

const paginaId = document.querySelector(".topoText").innerText.trim().toLowerCase();
const CHAVE_VISTOS = `vistos_${paginaId}`;
const CHAVE_LIKES = `likes_${paginaId}`;

// --- LÓGICA DE VISTOS ---
const vistos = document.querySelectorAll(".visto, .visto_html, .visto_css"); // Pega qualquer uma das classes
let vistosMemoria = JSON.parse(localStorage.getItem(CHAVE_VISTOS)) || [];

vistos.forEach((botao, i) => {
    if (vistosMemoria[i] === "cheio") {
        botao.innerHTML = "⬤";
    }

    botao.addEventListener("click", () => {
        if (botao.innerHTML === "⬤") {
            botao.innerHTML = "◯";
            vistosMemoria[i] = "vazio";
        } else {
            botao.innerHTML = "⬤";
            vistosMemoria[i] = "cheio";
        }
        localStorage.setItem(CHAVE_VISTOS, JSON.stringify(vistosMemoria));
    });
});

// --- LÓGICA DE LIKES ---
const likes = document.querySelectorAll(".like, .like_html, .like_css");
let likesMemoria = JSON.parse(localStorage.getItem(CHAVE_LIKES)) || [];

likes.forEach((botao, i) => {
    if (likesMemoria[i] === "cheio") {
        botao.innerHTML = "♥️";
    }

    botao.addEventListener("click", () => {
        if (botao.innerHTML === "♥️") {
            botao.innerHTML = "♡";
            likesMemoria[i] = "vazio";
        } else {
            botao.innerHTML = "♥️";
            likesMemoria[i] = "cheio";
        }
        localStorage.setItem(CHAVE_LIKES, JSON.stringify(likesMemoria));
    });
});

// --- PESQUISA ---
const pesquisa = document.querySelector("#barraDePesquisa");
const itemAula = document.querySelectorAll(".item-aula");

pesquisa.addEventListener("input", () => {
    let valor = pesquisa.value.toLowerCase();
    itemAula.forEach(aula => {
        let titulo = aula.querySelector(".nomes").innerText.toLowerCase();
        aula.style.display = titulo.includes(valor) ? "flex" : "none";
    });
    likeFiltro.innerHTML = "♡"
    vistoFiltro.innerHTML = "◯"
});


const likeFiltro = document.getElementById("filtroL")
const vistoFiltro = document.getElementById("filtroV")

function verificarFiltroVisto() {

    if (vistoFiltro.innerHTML === "⬤") {
        vistoFiltro.innerHTML = "◯"

        itemAula.forEach((aula) => {
            aula.style.display = "flex"
        })

    } else {
        vistoFiltro.innerHTML = "⬤"

        itemAula.forEach((aula, i) => {
            if (vistosMemoria[i] === "cheio") {
                aula.style.display = "flex"
            } else {
                aula.style.display = "none"
            }
        })
    }
}
vistoFiltro.addEventListener("click", verificarFiltroVisto)

function verificarFiltroLike() {

    if (likeFiltro.innerHTML === "♥️") {
        likeFiltro.innerHTML = "♡"

        itemAula.forEach((aula) => {
            aula.style.display = "flex"
        })

    } else {
        likeFiltro.innerHTML = "♥️"

        itemAula.forEach((aula, i) => {
            if (likesMemoria[i] === "cheio") {
                aula.style.display = "flex"
            } else {
                aula.style.display = "none"
            }
        })
    }
}
likeFiltro.addEventListener("click", verificarFiltroLike)
