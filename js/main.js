const menuButtonRef = document.querySelector(".menu-button")
const menuListRef = document.querySelectorAll(".menu-list")

menuButtonRef.addEventListener('click', toggleNavMenu)

function toggleNavMenu(e) {
    e.preventDefault()
    menuListRef.classList.toggle('menu-visible')
    menuListRef.classList.toggle('menu-button')
}