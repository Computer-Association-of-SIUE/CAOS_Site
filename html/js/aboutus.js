// function for the officer cards to open/close depending on id
function openLightbox(lightboxId) {
    document.getElementById(lightboxId).style.display = 'block';
}

// function closeLightbox(lightboxId) {
//     document.getElementById(lightboxId).style.display = 'none';
// }

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
// Function to close lightbox with animation
function closeLightbox(lightboxIdOrElement) {
    let lightbox;
    if (typeof lightboxIdOrElement === 'string') {
        lightbox = document.getElementById(lightboxIdOrElement);
        if (!lightbox) {
            console.error(`Element with id ${lightboxIdOrElement} not found.`);
            return;
        }
    } else if (lightboxIdOrElement instanceof HTMLElement) {
        lightbox = lightboxIdOrElement;
    } else {
        console.error('Invalid lightbox element:', lightboxIdOrElement);
        return;
    }

    const lightboxContent = lightbox.querySelector('.lightbox-content');
    if (!lightboxContent) {
        console.error('Lightbox content not found in:', lightbox);
        return;
    }

    lightboxContent.classList.add('bounceOut');
    
    lightboxContent.addEventListener('animationend', function() {
        lightbox.style.display = 'none';
        lightboxContent.classList.remove('bounceOut');
    }, { once: true });
}


// Close lightbox when clicking outside of the lightbox
window.onclick = function(event) {
    if (event.target.classList.contains('lightbox')) {
        closeLightbox(event.target);
    }
}

// Close lightbox when pressing escape key
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        document.querySelectorAll('.lightbox').forEach(lightbox => {
            if (lightbox.style.display === 'block') {
                closeLightbox(lightbox);
            }
        });
    }
};

// Close lightbox when clicking the close button
document.querySelectorAll('.close').forEach(closeButton => {
    closeButton.addEventListener('click', function() {
        const lightbox = closeButton.closest('.lightbox');
        closeLightbox(lightbox);
    });
});
