let bars = document.querySelector(".bars");
bars.onclick = function() {
    let barraNav = document.querySelector(".barra-nav");
    barraNav.classList.toggle("active");
}

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) { // Cambia al color sólido después de 50px
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});