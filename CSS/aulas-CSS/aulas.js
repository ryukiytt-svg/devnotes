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
    let aula = document.querySelector(".pagina1")
    let aula1 = document.querySelector(".pagina2")
    aula.classList.toggle("open")
    aula1.classList.toggle("open")
}