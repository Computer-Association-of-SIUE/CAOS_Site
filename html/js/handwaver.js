// ensure nav bar reverts back to desktop view when window is resized up
window.addEventListener('resize', function() {
    var nav = document.querySelector('.topnav-right');
    if (window.innerWidth > 768) {
        nav.classList.remove('responsive');
    }
});

// This function handles wave emoji animation when page loads in and is hovered
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