function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

// Handle sticky navbar on scroll
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.topnav');
    var sticky = navbar.offsetTop; // Get the offset position of the navbar
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
});

// Handle dropdown button active state
document.querySelectorAll('.dropbtn').forEach(button => {
    button.addEventListener('hover', function() {
        this.classList.toggle('active');
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
});