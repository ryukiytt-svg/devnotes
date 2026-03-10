function executarCodigo(){

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

}