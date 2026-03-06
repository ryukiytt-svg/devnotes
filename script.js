const menuBtn = document.getElementById("menu-btn")
const sidebar = document.querySelector(".sidebar")
const side = document.querySelector(".sidebar-contents")

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open")
    side.classList.toggle("open")
})