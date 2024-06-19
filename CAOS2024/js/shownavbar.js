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

// Select the navbar
var navbar = document.querySelector('.topnav');

// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
    // If the scroll position is greater than zero
    if (window.pageYOffset > 0) {
        // Add the sticky class to the navbar
        navbar.classList.add('sticky');
    } else {
        // Otherwise, remove it
        navbar.classList.remove('sticky');
    }
});