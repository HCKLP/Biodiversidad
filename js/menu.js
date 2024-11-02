window.addEventListener('scroll', function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) { // Ajusta la posición de scroll si es necesario
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});