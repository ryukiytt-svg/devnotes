const menuBtn = document.getElementById("menu-btn")
const sidebar = document.querySelector(".sidebar-contents")

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open")
})

const vistos = document.querySelectorAll(".visto")

let vistosMemoria = JSON.parse(localStorage.getItem("vistosSalvos")) || [];
vistos.forEach((botao, i) => {

    if (vistosMemoria[i] === "cheio") {
        botao.innerHTML = "⬤"
    }
    botao.addEventListener("click", () => {
        if (botao.innerHTML === "⬤") {
            botao.innerHTML = "◯";
            vistosMemoria[i] = "vazio"
        } else {
            botao.innerHTML = "⬤";
            vistosMemoria[i] = "cheio"
        }
        localStorage.setItem("vistosSalvos", JSON.stringify(vistosMemoria));
    });
});

const likes = document.querySelectorAll(".like")

let likesMemoria = JSON.parse(localStorage.getItem("likesSalvos")) || [];
likes.forEach((botao, i) => {

    if (likesMemoria[i] === "cheio") {
        botao.innerHTML = "♥️"
    }
    botao.addEventListener("click", () => {
        if (botao.innerHTML === "♥️") {
            botao.innerHTML = "♡";
            likesMemoria[i] = "vazio"
        } else {
            botao.innerHTML = "♥️";
            likesMemoria[i] = "cheio"
        }
        localStorage.setItem("likesSalvos", JSON.stringify(likesMemoria));
    });
});
const aulas = document.querySelectorAll(".aula_js");
const pesquisa = document.querySelector("#barraDePesquisa");
const itemAula = document.querySelectorAll(".item-aula")

pesquisa.addEventListener("input", () => {

    let valor = pesquisa.value.toLowerCase();

    itemAula.forEach(aula => {

        let titulo = aula.querySelector(".nomes").innerText.toLowerCase();

        if (titulo.includes(valor)) {
            aula.style.display = "flex";
        } else {
            aula.style.display = "none";
        }

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

