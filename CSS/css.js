const menuBtn = document.getElementById("menu-btn")
const sidebar = document.querySelector(".sidebar-contents")

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open")
})

const vistos = document.querySelectorAll(".visto")

let vistosMemoria = JSON.parse(localStorage.getItem("vistosSalvos")) || [];
vistos.forEach((botao,i) => {

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
likes.forEach((botao,i) => {

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
const aulas = document.querySelectorAll(".aula");
const pesquisa = document.querySelector("#barraDePesquisa");
const itemAula = document.querySelectorAll(".item-aula")

pesquisa.addEventListener("input", () => {
    let valor = pesquisa.value.toLowerCase();

    itemAula.forEach(aula => {
        // Busca o h2, independente da classe que ele tenha
        const h2 = aula.querySelector("h2");
        
        if (h2) {
            let titulo = h2.innerText.toLowerCase();
            if (titulo.includes(valor)) {
                aula.style.display = "flex";
            } else {
                aula.style.display = "none";
            }
        }
    });
});