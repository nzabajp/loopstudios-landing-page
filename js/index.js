const openNavMenu = document.getElementById("open-nav")
const closeNavMenu = document.getElementById("close-nav")
const navList = document.getElementById("nav-list")

openNavMenu.addEventListener("click", openNav)
closeNavMenu.addEventListener("click", closeNav)

function openNav() {
    navList.style.display = "block"
    navList.style.animation = "fade .25s"
}

function closeNav() {
    navList.style.display = "none"   
}