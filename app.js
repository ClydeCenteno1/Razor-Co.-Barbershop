const mobileNav = document.querySelector("#mobileNav")
const hamburgerIcon = document.querySelector("#hamburgerIcon")

hamburgerIcon.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden")
})