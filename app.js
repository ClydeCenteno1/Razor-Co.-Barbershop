const mobileNav = document.querySelector("#mobileNav")
const hamburgerIcon = document.querySelector("#hamburgerIcon")

hamburgerIcon.addEventListener("click", () => {
    mobileNav.classList.toggle("max-h-0")
    mobileNav.classList.toggle("opacity-0")
    mobileNav.classList.toggle("max-h-96")
    hamburgerIcon.classList.toggle("rotate-90")
})