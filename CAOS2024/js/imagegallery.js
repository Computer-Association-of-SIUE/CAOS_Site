// the following until specified handles gallery display
    let currentIndex = 0;
    const images = document.querySelectorAll('.gallery img');
    const totalImages = images.length;

    // Open the lightbox
    function openLightbox(event) {
        if (event.target.tagName === 'IMG') {
            const clickedIndex = Array.from(images).indexOf(event.target);
            currentIndex = clickedIndex;
            updateLightboxImage();
            document.getElementById('lightbox').style.display = 'flex';
        }
    }

    // Close the lightbox
    function closeLightbox() {
        document.getElementById('lightbox').style.display = 'none';
    }

    // Change the lightbox image based on direction (1 for next, -1 for prev)
    function changeImage(direction) {
        currentIndex += direction;
        if (currentIndex >= totalImages) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = totalImages - 1;
        }
        updateLightboxImage();
    }

    // Update the lightbox image and thumbnails
    function updateLightboxImage() {
        const lightboxImg = document.getElementById('lightbox-img');
        const thumbnailContainer = document.getElementById('thumbnail-container');

        // Update the main lightbox image
        lightboxImg.src = images[currentIndex].src;

        // Clear existing thumbnails
        thumbnailContainer.innerHTML = '';

        // Add new thumbnails
        images.forEach((image, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = image.src;
            thumbnail.alt = `Thumbnail ${index + 1}`;
            thumbnail.classList.add('thumbnail');
            thumbnail.addEventListener('click', () => updateMainImage(index));
            thumbnailContainer.appendChild(thumbnail);
        });

        // Highlight the current thumbnail
        const thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails[currentIndex].classList.add('active-thumbnail');
    }

    // Update the main lightbox image when a thumbnail is clicked
    function updateMainImage(index) {
        currentIndex = index;
        updateLightboxImage();
    }

    // Add initial thumbnails
    updateLightboxImage();

    // To add keyboard navigation (left/right arrow keys)
    document.addEventListener('keydown', function (e) {
        if (document.getElementById('lightbox').style.display === 'flex') {
            if (e.key === 'ArrowLeft') {
                changeImage(-1);
            } else if (e.key === 'ArrowRight') {
                changeImage(1);
            }
        }
    });

    // following functions is for filtering
    
    // by default, shows all based on this
    filterSelection("all")

    // finds photos based on keyword "filter" in class name and shows based off of button selected (c)
    function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("filter");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
            RemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
        }
    }

    // function adds styling "show" which will display based on filterSelection
    function AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
            }
        }
    }

    // when new filter is selected, removes "show" to essentially reset prior filter selected
    function RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }

    // the following is for sensing when button is clicked to register active filter and turn red, then switches when new one is selected
    let btns = Array.from(document.querySelectorAll('.btn'));
    let activeButton = null;
    let allButton = document.querySelector('#All');

    const handleClick = (e) => {
        e.preventDefault();
        e.currentTarget.classList.add('active');

        if (activeButton != null && activeButton != e.currentTarget) {
            activeButton.classList.remove('active');
        }
        activeButton = e.currentTarget;
    }

    btns.forEach(node => {
        node.addEventListener('click', handleClick)
    });