function showNavBar() {
    var x = document.getElementById("myTopnav");
    if (x.className.indexOf("responsive") === -1) {
        x.className += " responsive";
    } else {
        x.className = x.className.replace(" responsive", "");
    }
}

// Ensure nav bar reverts back to desktop view when window is resized up
window.addEventListener('resize', function() {
    var nav = document.querySelector('.nav-links');
    if (window.innerWidth > 768) {
        var topnav = document.getElementById("myTopnav");
        topnav.className = topnav.className.replace(" responsive", "");
    }
});

// Handle sticky navbar on scroll
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.topnav');
    if (window.pageYOffset > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Handle dropdown button active state
document.querySelectorAll('.dropbtn').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('active');
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    OverlayScrollbars(document.querySelectorAll('body'), {
        className: "os-theme-dark",
        sizeAutoCapable: true,
        paddingAbsolute: true,
        scrollbars: {
            visibility: "auto",
            autoHide: "move",
            autoHideDelay: 500,
            dragScrolling: true,
            clickScrolling: true,
            touchSupport: true,
            snapHandle: true
        }
    });
});




