function showNavBar() {
    var x = document.getElementById("navLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// ensure nav bar reverts back to desktop view when window is resized up
window.addEventListener('resize', function() {
    var nav = document.querySelector('.nav-links');
    if (window.innerWidth > 768) {
        nav.classList.remove('responsive');
    }
});