// function for the officer cards to open/close depending on id
function openLightbox(lightboxId) {
    document.getElementById(lightboxId).style.display = 'block';
}

function closeLightbox(lightboxId) {
    document.getElementById(lightboxId).style.display = 'none';
}

// close lightbox when clicking outside of the lightbox
window.onclick = function(event) {
    if (event.target.className === 'lightbox') {
        event.target.style.display = 'none';
    }
}

// close lightbox when pressing escape key
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        document.getElementById('lightbox-1').style.display = 'none';
        document.getElementById('lightbox-2').style.display = 'none';
        document.getElementById('lightbox-3').style.display = 'none';
        document.getElementById('lightbox-4').style.display = 'none';
    }
};