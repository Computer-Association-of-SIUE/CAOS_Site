function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className.indexOf("responsive") === -1) {
        x.className += " responsive";
    } else {
        x.className = x.className.replace(" responsive", "").trim();
    }
}

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