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
const nome = document.querySelectorAll(".nomes");
const pesquisa = document.getElementById("BarraDePesquisa")