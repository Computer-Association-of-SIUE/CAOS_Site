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

window.onload = function() {
    var wave = document.querySelector('.wave');
    wave.style.animationIterationCount = "2";

    wave.addEventListener('animationend', function() {
        this.style.animationIterationCount = "1";
    });

    wave.addEventListener('mouseover', function() {
        this.style.animationIterationCount = "infinite";
    });

    wave.addEventListener('mouseout', function() {
        this.style.animationIterationCount = "1";
    });
};