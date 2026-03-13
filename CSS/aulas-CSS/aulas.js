const menuBtn = document.getElementById("menu-btn")
const sidebar = document.querySelector(".sidebar-contents")

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open")
})

function executarCodigo() {

    const html = document.getElementById("htmlCode").value
    const css = document.getElementById("cssCode").value
    const js = document.getElementById("jsCode").value

    const frame = document.getElementById("resultado")

    const codigoFinal = `
<html>
<head>
<style>${css}</style>
</head>
<body>

${html}

<script>
${js}
<\/script>

</body>
</html>
`

    frame.srcdoc = codigoFinal

};

function passarPaginas() {
    let aula = document.querySelector(".pagina1");
    let aula1 = document.querySelector(".pagina2");
    let proximo = document.querySelector(".next");
    let voltar = document.querySelector(".voltar")

    aula.classList.toggle("open");
    aula1.classList.toggle("open");

    voltar.classList.toggle("open");
    proximo.classList.toggle("open");
}
const AbrirOverlay = document.querySelector(".exemplos");
const overlay = document.querySelector(".overlay");
const FecharOverlay = document.querySelector(".fecharOverlay");

function overlayOpen() {
    overlay.classList.toggle("open")
}
AbrirOverlay.addEventListener("click",overlayOpen)

function overlayClose() {
    overlay.classList.toggle("open")
}
FecharOverlay.addEventListener("click",overlayClose)