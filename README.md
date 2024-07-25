# CAOS_SITE
![CAOS_Logo](/CAOS2024/assets/CAOS_Transparent_Min.png)
This repo holds the files for the Computer Association of SIUE (CAOS) website for the academic year 2024 - 2025. You can find the live version of this site [here](https://caos.cs.siue.edu/).

## Background
This website was constructed as part of a summer project series that aimed to give SIUE CAOS members more experience in bettering their development skills. CAOS did not have a site it actively maintained since 2008. This new site will represent a starting point that CAOS can hopefully take into the future.

## Site Functionality 
### Development Framework
- Instead of using a frontend JS library like React or Angular, we made the decision to construct this website using only HTML, CSS, and JavaScript (at the moment). We feel this is the best way to build our developement skills so that we achieve a solid foundation before utilizing one of the libraries that speed up UI/UX development.

### Styling/Theming
- We went for a dark theming to loosely match the CAOS logo, and a somewhat modernist font called "Chakra Petch" from Google Fonts.

### Navigation Bar (navbar)
- Responsive navbar that collapes/uncollapses links when active window size changes.
    - Although it works well when the navbar is at its normal size, there are some issues that still need to be fixed when it is collapsed (specifically the display of links).


### About Us Page
- Short description of current CAOS officers and their current projects, along with a profile photo.

### Image Gallery
 - Interactive image gallery (located [here](/CAOS2024/js/shownavbar.js) for JS code and [here](/CAOS2024/gallery.html) for HTML code) uses `lightbox` components to draw attention to each image being displayed. 
 - Image thumbnails are generated dynamically using JavaScript and a handful of `document` commands.
 - Filtering option allows for users to view photos that adhere to a certain theme.

### Projects Page
 - Card layout that showcases each CAOS member's summer 2024 projects, along with a small preview image and description of the project. 

### Calendar Page
 - Google Calendar (referenced from CAOS email) that will aim to list club events.

## Future Plans
- Construct a login system using Microsoft authentication.
- Create a forum for SIUE students to converse on topics (using the aforementioned Microsft authentication).
- Fix domain to original CAOS one
- Make navbar so that it's a separate HTML document that can be referenced, allowing each navbar HTML page to be easier to view.
- Organize `assets` folder
- Find better way to update site without needing to login through various terminals.
- Create document to better inform future CAOS officers how to maintain and update site.
- Add pages to help CS students get internships, as well as listing SIUE CS class descriptions.

## Modifying the Site
### The Stylesheets
Currently, we have 4 CSS stylesheets to control the styling of the entire website (along with some miminal styling embedded in HTML).

---
#### bodyandheadings.css
As the name states, this CSS file modifies the body content of each page, as well as the waving hand animation and circling animationin `index.html` (the home page) and a majority of the **About Us** page (`aboutus.html`). The `handwaver.js` JavaScript file that also modifies the handwaving animation will be included here.

---

##### Table of Contents

1. [Default Body and Headings Styling](#default-body-and-headings-styling)
2. [Wave Animation Styling](#wave-animation-styling)
3. [Project Cards Styling](#project-cards-styling)
4. [Bio Sections Styling](#bio-sections-styling)
5. [About Us Page Styling](#about-us-page-styling)
6. [Mobile Styling for About Us Page](#mobile-styling-for-about-us-page)
7. [Ring Animation Styling](#ring-animation-styling)
8. [Home Page Styling](#home-page-styling)

###### Default Body and Headings Styling

The following CSS rules establish the default values for the website, such as padding, font, and color for the body and headings.

```css
.body {
    padding: 20px;
    font-family: "Chakra Petch", Arial, Helvetica, sans-serif;
    font-size: 20px;
}

h1 {
    font-family: "Chakra Petch", Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 40px;
}

h2 {
    font-family: "Chakra Petch", Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 35px;
}

h3 {
    font-family: "Chakra Petch", Arial, Helvetica, sans-serif;
    font-weight: 500;
    font-size: 30px;
}

html, body {
    height: 100%;
    margin: 0;
}

body {
    padding-top: 60px;    
    display: flex;
    flex-direction: column;    
    position: relative;
    min-height: 100vh;
    margin-bottom: 60px;    
    font-family: "Chakra Petch", sans-serif;
    background-color: #3C3C3C; /* Maybe we change this to black later*/
    color: white;
}

hr {
    border: transparent;
    padding: 1%;
}
```

- **.body**: Sets the padding, font family, and font size for the body.
- **h1, h2, h3**: Sets the font family, weight, and size for headings.
- **html, body**: Sets the height to 100% and removes margin.
- **body**: Additional padding, flexbox layout, and background color.
- **hr**: Sets the border to transparent and adds padding.

###### Wave Animation Styling

The following CSS rules define the styling and keyframes for the wave animation on the index page.

```css
.wave {
    animation-name: wave-animation;
    animation-duration: 2.5s;
    animation-iteration-count: 2;
    transform-origin: 70% 70%;
    display: inline-block;
}

.wave:hover {
    animation-name: hover-wave-animation;
    animation-duration: 2.25s;
    animation-iteration-count: infinite;
}

@keyframes wave-animation {
    0% { transform: rotate(0.0deg) }
    10% { transform: rotate(14.0deg) }
    20% { transform: rotate(-8.0deg) }
    30% { transform: rotate(14.0deg) }
    40% { transform: rotate(-4.0deg) }
    50% { transform: rotate(10.0deg) }
    60% { transform: rotate(0.0deg) }
    100% { transform: rotate(0.0deg) }
}

@keyframes hover-wave-animation {
    0% { transform: rotate(0.0deg) }
    10% { transform: rotate(14.0deg) }
    20% { transform: rotate(-8.0deg) }
    30% { transform: rotate(14.0deg) }
    40% { transform: rotate(-4.0deg) }
    50% { transform: rotate(10.0deg) }
    60% { transform: rotate(0.0deg) }
    100% { transform: rotate(0.0deg) }
}
```

- **.wave**: Defines the wave animation properties.
- **.wave:hover**: Changes animation properties on hover.
- **@keyframes wave-animation**: Keyframes for the wave animation.
- **@keyframes hover-wave-animation**: Keyframes for the hover wave animation.

###### Project Cards Styling

The following CSS rules define the styling for project cards in `projects.html`.

```css
.card {
    float: inline-start;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.5s;
    width: 20%;
    min-width: 250px;
    border-radius: 5px;
    background-color: #474747;
    flex:auto;
    margin: 2%;
}
```

- **.card**: Defines the layout, shadow, transition, width, and background color for project cards.

###### Bio Sections Styling

The following CSS rules define the styling for the bio sections in `aboutus.html`.

```css
.bio-div {
    display: flex; 
    margin: auto; 
    height: fit-content;
    padding: 30px;
}

.bio-img {
    max-height: 300px; 
    margin: auto;
    padding: 1%;
    border-radius: 5px;
}

.bio-txt {
    display: flex; 
    flex-direction: column; 
    margin: auto;
    padding: 10px;
}

.bio-header {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, 50%);
}

.bio-subheader {
    position: absolute;
    text-align: center;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -10%);
    min-width: 200px;
}

.bio-headerImg {
    width: 100%;
    height: auto; 
    opacity: .1; 
}
```

- **.bio-div**: Defines the layout for the bio section.
- **.bio-img**: Styles the bio image.
- **.bio-txt**: Styles the bio text.
- **.bio-header, .bio-subheader**: Positions and styles the bio headers.
- **.bio-headerImg**: Styles the header image.

###### About Us Page Styling

The following CSS rules define the overall styling for the about us page.

```css
.container {
    padding: 2px 16px;
}

#header {
    position: relative;
}

#header img {
    width: 100%;
    opacity: .1;
}

#txt h1 {
    margin: 0%;
    text-align: center;
    position: absolute;
    bottom: 60%;
    right: 40%;
    font-size: 4vw; 
}

#txt p {
    padding-left: 10%;
    text-align: center;
    position: absolute;
    bottom: 20%;
    right: 10%;
    font-size: 1.5vw;
}
```

- **.container**: Adds padding to the container.
- **#header**: Positions the header.
- **#header img**: Styles the header image.
- **#txt h1, #txt p**: Positions and styles the text within the header.

###### Mobile Styling for About Us Page

The following CSS rules define the responsive styling for the about us page for mobile devices.

```css
@media screen and (max-width: 768px) {
    #txt h1 {
        margin: 0%;
        text-align: center;
        position: absolute;
        bottom: 70%;
        right: 40%;
        font-size: 5vw;
    }

    #txt p {
        padding-left: 10%;
        text-align: center;
        position: absolute;
        bottom: 10%;
        right: 10%;
        font-size: 2vw;
    }

    .bio-div {
        display: flex; 
        margin: auto; 
        height: fit-content;
        padding: 30px;
        flex-flow: column;
    }
}
```

- **@media screen and (max-width: 768px)**: Adjusts styling for screens with a maximum width of 768px.
- **#txt h1, #txt p**: Adjusts text positioning and size.
- **.bio-div**: Adjusts the layout of the bio section for mobile devices.

###### Ring Animation Styling

The following CSS rules define the styling and keyframes for the ring animation.

```css
.ring {
    position: relative;
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.ring i {
    position: absolute;
    inset: 0;
    border: 2px solid #474747;
    transition: 0.5s;
}

.ring i:nth-child(1) {
    border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
    animation: animate 6s linear infinite;
}

.ring i

:nth-child(2) {
    border-radius: 41% 44% 56% 59%/38% 62% 63% 37%;
    animation: animate 4s linear infinite;
}

.ring i:nth-child(3) {
    border-radius: 41% 44% 56% 59%/38% 62% 63% 37%;
    animation: animate2 10s linear infinite;
}

.ring:hover i {
    border: 6px solid var(--clr);
    filter: drop-shadow(0 0 20px var(--clr));
}

@keyframes animate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes animate2 {
    0% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
```

- **.ring**: Defines the layout and size of the ring.
- **.ring i**: Styles the inner elements of the ring.
- **.ring i:nth-child(1), .ring i:nth-child(2), .ring i:nth-child(3)**: Sets border-radius and animation for the ring elements.
- **.ring:hover i**: Adds hover effects to the ring elements.
- **@keyframes animate, @keyframes animate2**: Defines the keyframes for the animations.

###### Home Page Styling

The following CSS rules define the styling for the home page.

```css
.center {
    text-align: center;
    padding: 2%;
}

.buttonH {
    border-radius: 5px; 
    padding: 15px; 
    position: relative;
    text-decoration: none; 
    background-color: #C43629; 
    margin: 3%;
}

.buttonH:hover {
    background-color: #9b261b;
}

.imageH {
    max-width: 700px; 
    margin: auto; 
    padding: 1%; 
    border-radius: 5px;
}
```

- **.center**: Centers text and adds padding.
- **.buttonH**: Styles the button, adding padding, background color, and border radius.
- **.buttonH:hover**: Changes background color on hover.
- **.imageH**: Styles the images, setting max width, margin, padding, and border radius.

---
#### handwaver.js
This JavaScript file manages the responsive behavior of the navigation bar and the animation for the wave emoji when the page loads and is hovered over.

##### Table of Contents

1. [Event Listeners](#event-listeners)
    - [Window Resize Event](#window-resize-event)
2. [Wave Emoji Animation](#wave-emoji-animation)
    - [Window Load Event](#window-load-event)
    - [Wave Emoji Animation Iteration](#wave-emoji-animation-iteration)

###### Event Listeners

###### Window Resize Event

This event listener ensures that the navigation bar reverts back to its desktop view when the window is resized above 768 pixels.

```javascript
window.addEventListener('resize', function() {
    var nav = document.querySelector('.nav-links');
    if (window.innerWidth > 768) {
        nav.classList.remove('responsive');
    }
});
```

- **Description**: Listens for the `resize` event on the window object.
- **Functionality**: If the window width is greater than 768 pixels, it removes the `responsive` class from the navigation links.

###### Wave Emoji Animation

###### Window Load Event

This event listener handles the initial animation of the wave emoji when the page loads.

```javascript
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
```

- **Description**: Executes when the window has finished loading.
- **Functionality**:
  - **Initial Animation**: 
    - Selects the element with the class `.wave` and sets its `animationIterationCount` to `2` to run the animation twice when the page loads.
  - **Animation End Event**: 
    - Listens for the `animationend` event on the wave emoji and resets the `animationIterationCount` to `1` to ensure it doesn't keep repeating.
  - **Mouse Over Event**:
    - Listens for the `mouseover` event on the wave emoji and sets the `animationIterationCount` to `infinite`, making the animation run continuously while the mouse is over the emoji.
  - **Mouse Out Event**:
    - Listens for the `mouseout` event on the wave emoji and resets the `animationIterationCount` to `1`, stopping the continuous animation when the mouse is no longer over the emoji.
---


#### footer.css
The styling of the footer can be easily modified here and reflected across all pages. 

##### Table of Contents

1. [General Footer Styling](#general-footer-styling)
2. [Footer Logo Styling](#footer-logo-styling)
3. [Footer Home Button Styling](#footer-home-button-styling)

###### General Footer Styling

The following CSS rules define the general styling for the footer element.

```css
footer {
    background-color: #C43629;
    color: white;
    text-align: center;
    padding: 8px;
    font-family: "Chakra Petch", Arial, Helvetica, sans-serif;
    font-weight: 300;
    position: relative;
    margin-top: auto;
    left: 0;
    bottom: 0;
    width: 100%;
}
```

- **background-color**: Sets the background color of the footer to a shade of red (`#C43629`).
- **color**: Sets the text color within the footer to white.
- **text-align**: Centers the text within the footer.
- **padding**: Adds 8 pixels of padding around the footer content.
- **font-family**: Applies the "Chakra Petch" font, with fallbacks to Arial, Helvetica, and sans-serif fonts.
- **font-weight**: Sets the font weight to 300 for a lighter text appearance.
- **position**: Sets the footer to a relative position to allow absolute positioning of its child elements.
- **margin-top**: Ensures the footer is pushed to the bottom of the page.
- **left, bottom, width**: Align the footer to the bottom of the page, stretching it to full width.

###### Footer Logo Styling

The following CSS rules define the styling for the logo within the footer.

```css
#footer-logo {
    position: absolute;
    bottom: 4px;
    right: 10px;
    height: 50px;
    width: 50px;
}
```

- **position**: Positions the logo absolutely within the footer.
- **bottom**: Positions the logo 4 pixels from the bottom of the footer.
- **right**: Positions the logo 10 pixels from the right edge of the footer.
- **height, width**: Sets the height and width of the logo to 50 pixels.

###### Footer Home Button Styling

The following CSS rules define the styling for the home button within the footer, including the icon and its hover effects.

```css
.footer-home {
    position: absolute;
    left: 0px;
    width: 50px;
}

.footer-home i {
    font-size: 38px;
    margin-top: 4px;
    transition: transform 0.3s ease;
}

.footer-home a:hover i {
    text-shadow: 0 0 10px black;
    transform: scale(1.1);
}
```

- **.footer-home**:
  - **position**: Positions the home button absolutely within the footer.
  - **left**: Positions the home button 0 pixels from the left edge of the footer.
  - **width**: Sets the width of the home button to 50 pixels.
  
- **.footer-home i**:
  - **font-size**: Sets the font size of the icon within the home button to 38 pixels.
  - **margin-top**: Adds a 4-pixel margin to the top of the icon.
  - **transition**: Adds a smooth 0.3-second transition effect for scaling the icon.

- **.footer-home a:hover i**:
  - **text-shadow**: Adds a black shadow around the icon when hovered.
  - **transform**: Scales the icon up slightly to 110% when hovered.

---

#### responsive_nav.css
Much like the footer, we can easily modify the navbar running across the top of all HTML pages. However, the navbar sometimes doesn't correctly repopulate links once it has been minimized and remaximized. This will be fixed in a future update. For sake of completion, the JavaScript file that works with this navbar will also be included below this. Also, some parameters in the navbar need to edited in each specific HTML file that contains the `<div>` elements of the navbar.

##### Table of Contents

1. [Global Styles](#global-styles)
2. [Top Navigation Bar Styling](#top-navigation-bar-styling)
3. [Navigation Links Styling](#navigation-links-styling)
4. [Join Button Styling](#join-button-styling)
5. [Dropdown Menu Styling](#dropdown-menu-styling)
6. [Responsive Styling](#responsive-styling)

###### Global Styles

These CSS rules set up global styles used throughout the navigation bar.

```css
* {
    --shadow: rgba(0, 0, 0, 0.05) 0px 6px 10px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;
    box-sizing: border-box;
    --radius: 5px;
}
```

- **\***: Applies box-shadow and border-radius variables to all elements and ensures consistent box-sizing.

###### Top Navigation Bar Styling

The following CSS rules define the main layout and styling of the top navigation bar.

```css
.topnav {
    position: absolute; /* Can use position: relative if we want it to scroll with the page */
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: black;
    justify-content: space-between;
    border-top: 1px solid black;
    z-index: 1;
}
```

- **.topnav**: Positions the navigation bar, sets width, flexbox layout, background color, and z-index.

###### Navigation Links Styling

These CSS rules style the links within the navigation bar, including hover and active states.

```css
/* Style the links inside the navigation bar */
.topnav a {
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    font-family: "Chakra Petch", Arial, Helvetica, sans-serif;
    font-weight: 500;
    line-height: 14px;
    margin-right: 10px;
}

/* Change the color of links on hover */
.topnav a:hover {
    background-color: #C43629;
    color: black;
    border-radius: 5px;
}

/* Add an active class to highlight the current page */
.topnav a.active {
    background-color: #C43629; /* Distinguishing color for the active page */
    color: white;
    border-radius: 5px;
}

/* Specific styles for the logo when it's active */
.topnav a.active.nav-logo {
    padding-top: 1px;
    padding-bottom: 2px;   
}

/* Hide the link that should open and close the topnav on small screens */
.topnav .icon {
    display: none;
}
```

- **.topnav a**: Styles the navigation links with color, padding, font, and alignment.
- **.topnav a:hover**: Changes background and text color on hover.
- **.topnav a.active**: Highlights the active link.
- **.topnav a.active.nav-logo**: Adjusts padding for the active logo link.
- **.topnav .icon**: Initially hides the menu icon for small screens.

###### Join Button Styling

These CSS rules style the join button within the navigation bar, including hover effects.

```css
.topnav a.join-btn {
    background-color: white;
    color: black;
    padding: 15px 16px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 600;
    margin-right: 10px;
    transition: transform 0.3s ease;
}

.topnav a.join-btn:hover {
    background-color: #C43629;
    color: white;
    box-shadow: 0 0 5px #fff;
    transform: scale(1.1);
}
```

- **.topnav a.join-btn**: Styles the join button with background color, padding, and font weight.
- **.topnav a.join-btn:hover**: Changes background color and adds a box shadow on hover.

###### Dropdown Menu Styling

These CSS rules style the dropdown menu and its contents.

```css
/* Flex container for the navigation links */
.nav-links {
    display: flex;
    align-items: center;
}

/* Dropdown container - needed to position the dropdown content */
.dropdown {
    float: left;
    overflow: hidden;
}

/* Style the dropdown button to fit inside the topnav */
.dropdown .dropbtn {
    font-size: 17px;
    border: none;
    outline: none;
    color: white;
    padding: 8px 12px;
    background-color: inherit;
    font-family: inherit;
    margin: 3px;
}

/* Style the dropdown content (hidden by default) */
.dropdown-content {
    display: none;
    position: absolute;
    box-shadow: var(--shadow);
    border-radius: var(--radius);
    background-color: #f9f9f9;
    min-width: 160px;
    z-index: 1;
    margin-top: 0.3rem;
    top: 95%; /* Distance between navbar & dropdown box */
}

/* Style the links inside the dropdown */
.dropdown-content a {
    float: none;
    color: black;
    text-decoration: none;
    display: block;
    text-align: left;
}

/* Add a dark background on topnav links and the dropdown button on hover */
.dropdown:hover .dropbtn {
    background-color: #C43629;
    color: white;
    padding: 8px 12px;
    margin: 3px;
    border-radius: 5px;
}

/* Add a grey background to dropdown links on hover */
.dropdown-content a:hover {
    background-color: #ddd;
    color: black;
    width: 100%;
    border-radius: var(--radius);
}

.dropdown-content a.active {
    background-color: #C43629;
    color: white;
    width: 100%;
    border-radius: var(--radius);
}

/* Show the dropdown menu when the user moves the mouse over the dropdown button */
.dropdown:hover .dropdown-content {
    display: block;
}

.arrow {
    transform: rotate(180deg);
    transition: 0.2s ease;
}

.dropdown:hover::after {
    content: "";
    position: absolute;
    height: 20px; /* Adjust this value to extend the hoverable space */
    width: 100%;
    left: 0;
    bottom: -20px; /* This should be the negative of the height */
}
```

- **.nav-links**: Flex container for navigation links.
- **.dropdown**: Container for dropdown, positions the dropdown content.
- **.dropdown .dropbtn**: Styles the dropdown button.
- **.dropdown-content**: Styles the dropdown content.
- **.dropdown-content a**: Styles the links inside the dropdown.
- **.dropdown:hover .dropbtn**: Changes the background color of the dropdown button on hover.
- **.dropdown-content a:hover**: Styles dropdown links on hover.
- **.dropdown:hover .dropdown-content**: Displays the dropdown content on hover.
- **.arrow**: Styles the arrow within the dropdown.
- **.dropdown:hover::after**: Extends hoverable space for the dropdown.

###### Responsive Styling

These CSS rules adjust the layout and styling of the navigation bar for smaller screens.

```css
/* Responsive styling */
@media screen and (max-width: 768px) {
    .nav-links {
        display: none;
        flex-direction: column;
        width: 100%;
        background-color: #C43629;
    }

    .nav-links a {
        text-align: left;
        padding: 14px;
        border-top: 1px solid #bbb;
    }

    .topnav .icon {
        display: block;
        cursor: pointer;
    }

    .topnav.responsive .nav-links {
        display: flex;
    }
}
```

- **@media screen and (max-width: 768px)**: Applies styles for screens with a maximum width of 768px.
- **.nav-links**: Adjusts the navigation links to be hidden initially, displayed as a column, and given a background color.
- **.nav-links a**: Styles the navigation links within the responsive layout.
- **.topnav .icon**: Displays the menu icon for small screens.
- **.topnav.responsive .nav-links**: Displays the navigation links when the topnav is in the responsive state.

---
#### shownavbar.js
This is the JavaScript file that controls the animations and functionality for the navbar.

##### Table of Contents

1. [showNavBar Function](#showNavBar())
2. [Event Listeners](#event-listeners)
    - [Window Resize Event](#window-resize-event)
    - [Window Scroll Event](#window-scroll-event)

###### showNavBar()

This function toggles the visibility of the navigation links when the navigation icon is clicked on smaller screens.

```javascript
function showNavBar() {
    var x = document.getElementById("navLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
```

- **Description**: Toggles the display style of the element with the ID `navLinks` between `block` and `none`.
- **Usage**: Typically called when the navigation menu icon is clicked.

###### Event Listeners

###### Window Resize Event

This event listener ensures that the navigation bar reverts back to its desktop view when the window is resized above 768 pixels.

```javascript
window.addEventListener('resize', function() {
    var nav = document.querySelector('.nav-links');
    if (window.innerWidth > 768) {
        nav.classList.remove('responsive');
    }
});
```

- **Description**: Listens for the `resize` event on the window object.
- **Functionality**: If the window width is greater than 768 pixels, it removes the `responsive` class from the navigation links.

###### Window Scroll Event

This event listener manages the sticky behavior of the navigation bar when the page is scrolled.

```javascript
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
```

- **Description**: Listens for the `scroll` event on the window object.
- **Functionality**:
  - Selects the navigation bar using the class `.topnav`.
  - If the page is scrolled down (i.e., `window.pageYOffset` is greater than 0), it adds the `sticky` class to the navigation bar.
  - If the page is at the top (i.e., `window.pageYOffset` is 0), it removes the `sticky` class from the navigation bar.

---
#### imagegallery.css
This CSS stylesheet controls the styling for the image gallery/slideshow in `gallery.html`. The JS file driving it can be located at `imagegallery.js` (included after this specific documentation).

##### Table of Contents

1. [Basic Styling for the Gallery](#basic-styling-for-the-gallery)
2. [Lightbox Styles](#lightbox-styles)
3. [Navigation Buttons](#navigation-buttons)
4. [Thumbnails](#thumbnails)
5. [Filtering](#filtering)

###### Basic Styling for the Gallery

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond&family=DM+Mono:wght@400;500&display=swap');

/* Basic styling for the gallery */
.gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
}

.gallery img {
    margin: 10px;
    cursor: pointer;
    max-width: 300px;
    width: 50%;
    height: 50%;
    border-radius: 10px;
    aspect-ratio: 1;
    object-fit: cover;
}
```

- **Description**: Defines the basic layout and appearance of the image gallery.
- **Gallery Container**:
  - **Flexbox Layout**: Uses `display: flex` and `flex-wrap: wrap` to arrange images in a flexible grid.
  - **Center Alignment**: `justify-content: center` centers the images.
  - **Padding**: Adds `20px` padding around the gallery.
- **Gallery Images**:
  - **Spacing**: Adds `10px` margin around each image.
  - **Interactive Cursor**: Changes the cursor to a pointer when hovering over images.
  - **Size and Shape**: Limits the maximum width to `300px`, sets both width and height to `50%`, and gives images a `10px` border radius.
  - **Aspect Ratio**: Ensures images maintain a square aspect ratio and cover the entire area with `object-fit: cover`.

###### Lightbox Styles

```css
/* Lightbox styles */
#lightbox {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
    overflow: hidden;
    flex-direction: column;
    z-index: 1;
}

#lightbox img {
    max-width: 80%;
    max-height: 60vh;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.8);
    border-radius: 10px;
}

#close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    color: #fff;
    cursor: pointer;
    z-index: 2;
}
```

- **Description**: Styles the lightbox that displays images in a larger view when clicked.
- **Lightbox Container**:
  - **Hidden by Default**: `display: none` keeps the lightbox hidden until activated.
  - **Fixed Position**: Covers the entire screen with `position: fixed`, `top: 0`, `left: 0`, `width: 100%`, and `height: 100%`.
  - **Dark Background**: Uses a semi-transparent black background with `background: rgba(0, 0, 0, 0.8)`.
  - **Center Alignment**: Centers the content with `justify-content: center` and `align-items: center`.
  - **Flexbox Layout**: Arranges items in a column with `flex-direction: column`.
  - **High Z-Index**: Ensures the lightbox appears above other content with `z-index: 1`.
- **Lightbox Images**:
  - **Size Constraints**: Limits the maximum width to `80%` and the maximum height to `60vh`.
  - **Shadow and Border Radius**: Adds a shadow and `10px` border radius.
- **Close Button**:
  - **Position and Style**: Positions the close button in the top-right corner with a font size of `24px`, white color, and cursor pointer.

###### Navigation Buttons

```css
/* Style for navigation buttons */
#prev-btn,
#next-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
}

#prev-btn {
    left: 10px;
}

#next-btn {
    right: 10px;
}

#prev-btn:hover,
#next-btn:hover {
    background-color: rgba(0, 0, 0, 0.8);
}
```

- **Description**: Styles the previous and next buttons for navigating through the lightbox images.
- **Common Styles**:
  - **Position and Alignment**: Positions buttons absolutely at the vertical center with `position: absolute` and `top: 50%`, and centers them vertically with `transform: translateY(-50%)`.
  - **Appearance**: Sets the font size to `20px`, color to white, and background color to semi-transparent black.
  - **Padding and Cursor**: Adds padding of `10px` and changes the cursor to a pointer.
  - **Transition**: Smoothens the background color transition with `transition: background-color 0.3s`.
- **Previous Button**: Positions it to the left with `left: 10px`.
- **Next Button**: Positions it to the right with `right: 10px`.
- **Hover Effects**: Changes the background color to a darker shade on hover.

###### Thumbnails

```css
/* Styles for thumbnails */
.thumbnail-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

.thumbnail {
    max-width: 50px;
    width: 100px;
    cursor: pointer;
    margin-top: 40px;
    margin-left: 5px;
    margin-right: 5px;
    border: 2px solid #fff;
    transition: opacity 0.3s;
}

.thumbnail:hover,
.thumbnail.active-thumbnail {
    opacity: 0.7;
}
```

- **Description**: Styles the thumbnail images used for navigating the gallery.
- **Thumbnail Container**:
  - **Flexbox Layout**: Arranges thumbnails in a flexible row with `display: flex` and `flex-direction: row`.
  - **Wrap and Center Alignment**: Wraps the thumbnails and centers them with `flex-wrap: wrap` and `justify-content: center`.
- **Thumbnails**:
  - **Size and Cursor**: Limits the maximum width to `50px`, sets the width to `100px`, and changes the cursor to a pointer.
  - **Margins and Border**: Adds margins and a white border.
  - **Opacity Transition**: Smoothens the opacity transition with `transition: opacity 0.3s`.
  - **Hover and Active States**: Reduces opacity on hover and when active.

###### Filtering

```css
/* The following is for filtering */
.filter {
    display: none;
}

.filter:after {
    content: "";
    display: table;
    clear: both;
}

.show {
    display: block;
}

.btn {
    border: none;
    outline: none;
    padding: 12px 16px;
    background-color: white;
    cursor: pointer;
    border-radius: 5px;
}
    
.btn:hover {
    background-color: #ddd;
}
    
.btn.active {
    background-color: #C43629;
    color: white;
}
```

- **Description**: Styles the filtering options for the image gallery.
- **Filter Container**:
  - **Hidden by Default**: Keeps the filter hidden with `display: none`.
  - **Clearing Floats**: Uses a clearfix with `:after` to clear floated elements.
- **Show Class**: Displays the filter container when the `show` class is added.
- **Buttons**:
  - **Appearance**: Removes borders, sets background color to white, and adds padding and border radius.
  - **Cursor**: Changes the cursor to a pointer.
  - **Hover State**: Changes the background color to light grey on hover.
  - **Active State**: Sets background color to red and text color to white when active.

---
#### imagegallery.js
This JavaScript file handles the display and functionality of an image gallery with lightbox, image navigation, filtering, and button interactions.

##### Table of Contents

1. [Gallery Display](#gallery-display)
   - [Opening the Lightbox](#opening-the-lightbox)
   - [Closing the Lightbox](#closing-the-lightbox)
   - [Changing the Lightbox Image](#changing-the-lightbox-image)
   - [Updating the Lightbox Image and Thumbnails](#updating-the-lightbox-image-and-thumbnails)
   - [Updating the Main Lightbox Image](#updating-the-main-lightbox-image)
   - [Keyboard Navigation](#keyboard-navigation)
2. [Filtering](#filtering)
   - [Filter Selection](#filter-selection)
   - [Adding the Show Class](#adding-the-show-class)
   - [Removing the Show Class](#removing-the-show-class)
3. [Button Interactions](#button-interactions)
   - [Handling Button Clicks](#handling-button-clicks)

###### Gallery Display

###### Opening the Lightbox

```javascript
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
```

- **Description**: Opens the lightbox when an image is clicked.
- **Event Target**: Checks if the clicked element is an image (`IMG` tag).
- **Current Index**: Updates the `currentIndex` to the clicked image's index.
- **Display Lightbox**: Sets the lightbox display style to `flex` to make it visible.

###### Closing the Lightbox

```javascript
// Close the lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
```

- **Description**: Closes the lightbox by setting its display style to `none`.

###### Changing the Lightbox Image

```javascript
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
```

- **Description**: Changes the lightbox image based on the direction parameter.
- **Direction**: `1` for next image, `-1` for previous image.
- **Index Update**: Updates the `currentIndex` and loops it within the bounds of `totalImages`.

###### Updating the Lightbox Image and Thumbnails

```javascript
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
```

- **Description**: Updates the main lightbox image and its thumbnails.
- **Main Image**: Sets the `src` attribute of the lightbox image to the current image's source.
- **Thumbnails**: Clears existing thumbnails, creates new ones, and appends them to the thumbnail container.
- **Highlighting**: Adds an `active-thumbnail` class to the current thumbnail.

###### Updating the Main Lightbox Image

```javascript
// Update the main lightbox image when a thumbnail is clicked
function updateMainImage(index) {
    currentIndex = index;
    updateLightboxImage();
}
```

- **Description**: Updates the main lightbox image to the clicked thumbnail's image.
- **Current Index**: Sets the `currentIndex` to the clicked thumbnail's index.

###### Keyboard Navigation

```javascript
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
```

- **Description**: Adds keyboard navigation for the lightbox.
- **Event Listener**: Listens for `keydown` events.
- **Arrow Keys**: Changes the image based on the left (`ArrowLeft`) or right (`ArrowRight`) arrow keys.

###### Filtering

###### Filter Selection

```javascript
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
```

- **Description**: Filters the displayed images based on the selected category.
- **Initial Display**: Calls `filterSelection("all")` to show all images by default.
- **Class Matching**: Adds the `show` class to elements matching the selected filter (`c`).

###### Adding the Show Class

```javascript
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
```

- **Description**: Adds the `show` class to elements to make them visible.
- **Class Management**: Splits and compares class names, adding new ones as necessary.

###### Removing the Show Class

```javascript
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
```

- **Description**: Removes the `show` class from elements to hide them.
- **Class Management**: Splits and compares class names, removing matches as necessary.

###### Button Interactions

###### Handling Button Clicks

```javascript
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
```

- **Description**: Handles button click events for filtering.
- **Event Listener**: Adds click event listeners to filter buttons.
- **Active State**: Adds the `active` class to the clicked button and removes it from the previously active button.

---
### The HTML Pages
If any pages are added/removed, make sure to include/remove links in the navbar to reflect it. First, this documentation will go through elements native to all HTML files and then specific HTML files.

---

#### `<head>` Content
The head of each HTML document is the same (other than the `<title>` tag). It holds most of links to the CSS stylesheets, the [Boxicon](https://boxicons.com/) CSS reference, CAOS favicon, and the W3Schools reference link. It is very easy to add specific styling elements, just include their reference links inside these tags.

#### Navigation Bar
```html
<body>
    <div class="topnav" id="myTopnav">
        <a href="https://caos2024.cs.siue.edu/">
            <img src="assets/CAOS_Transparent_Min.png" alt="CAOS Logo" style="width: 49px">
        </a>
        <div class="nav-links" id="navLinks">
            <a href="aboutus.html">About Us</a>
            <div class="dropdown">
                <button class="dropbtn">Resources
                    <i class="fa fa-caret-down" id="arrow"></i>
                </button>
                <div class="dropdown-content">
                    <a href="guide.html">
                        <i class='bx bx-book-reader'></i> SIUE Class Guide
                    </a>
                    <a href="internships.html">
                        <i class='bx bx-briefcase'></i> Internships
                    </a>
                    <a href="gallery.html" class="active">
                        <i class='bx bx-image-alt'></i> Gallery
                    </a>
                </div>
            </div>
            <a href="calendar.html">Calendar</a>
            <a href="projects.html">Projects</a>
            <a href="https://discord.gg/fSaXnVGnbv" class="join-btn">Join</a>
        </div>
        <a href="javascript:void(0);" class="icon" onclick="showNavBar()">&#9776;</a>
    </div>
```

- **Description**: The navigation bar at the top of the page.
- **Common Structure**: The `topnav` div structure is the same across all pages, except for the `active` class, which highlights the current page (in this case, "Gallery").
- **Logo**: Links to the CAOS logo, redirecting to the homepage.
- **Navigation Links**: Links to different sections of the website (About Us, Resources with a dropdown, Calendar, Projects, Join).
- **Dropdown Menu**: Contains links to resources with an active state on the Gallery page.
- **Responsive Navigation**: Includes a hamburger menu for smaller screens, toggled by the `showNavBar()` function.

#### Footer Section
Each HTML page also has the same footer, with the exception that the homepage (`index.html`) doesn't include the Boxicon homepage icon in the left.

```html
<footer>
    <div class="footer-home">
        <a href="https://caos2024.cs.siue.edu/">
            <i class='bx bx-home'></i>
        </a>
    </div>
    <small>Built with ❤ by CAOS. <br>© 2024 CAOS. All rights reserved.<br></small>
    <a href="http://www.siue.edu">
        <img id="footer-logo" src="assets/Cougar_Logo_SIUE_Full-color_for-red-background_e5182d.png" alt="SIUE Logo">
    </a>
</footer>
```

- **Description**: The footer at the bottom of the page.
- **Navigation Links**: The home icon is located in the left referencing `index.html` and the SIUE logo in the right references the SIUE university website for quick access.
---
#### aboutus.html
This HTML page is about listing the current officers in CAOS. Each year, this page most likely will need to be updated with any officer turnover.

##### Header Section
```html
<div id="header">
    <img src="assets/loft.png">
    <div id="txt">
        <h1>About Us</h1>
        <p>CAOS (Computer Association of SIUE) is an organization open to any student interested in computer science or technology in general. Our purpose is to create leaders who have the skills, ability, and drive to utilize technology to enact positive change in society, and have a fun time doing it. We proudly strive for collaboration between computer science and all other disciplines in a positive manner. We provide a supportive organization where students can develop and grow academically, professionally, and personally, while pushing the boundaries on what it means to be a Cougar.</p>
    </div>
</div>
```
- **About Us Description**: This is where the CAOS purpose statement can be modified. If the styling of this section needs to be changed, make sure to look at the `#txt` div of `bodyandheadings.css`.

##### Officers Section
```html
<h1 style="text-align: center;">The Officers</h1>

<div class="bio-div">
    <img class="bio-img" src="assets/bio pics/placeholder.jpg">
    <div class="bio-txt">
        <h3>Zakery Hickey - <i>President</i></h3>
        <p>My name is Zakery and I'm a junior majoring in Computer Science! I also have a strong passion for cybersecurity focusing on server based security and vulnerabilities. When not working on class material I am typically working on side projects or practicing cybersecurity skills at hackthebox.</p>
        <a href="mailto:email@siue.edu"><i class='bx bx-envelope bx-lg'></i></a>
    </div>
</div>
```
These bio sections are repeated for other officers with their respective bios and contact information.

---

#### calendar.html
This HTML file shows the CAOS activity calendar (powered by the CAOS Google Calendar).
```html
<div class="body">
    <h1>Calendar</h1>
        <div style="height: 600px; text-align: center;"> <!-- This div allows the calendar to exist w/footer/, might need to make own specifc css -->
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&bgcolor=%23ffffff&showTitle=0&src=c2l1ZS5lZHUuY2Fvc0BnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>        
        </div>
</div>
```
Any sizing/orientation of the calendar can be done in the `iframe src` tag.

---

#### future.html
This HTML page lists CAOS website goals, as well as ongoing maintenance. 
```html
<div class="body">
    <div style="margin: 2% 6%;">
        <h1>Website Goals</h1>
            <p>Our website is designed to be a one-stop shop for all things CAOS. With that being said, there is a lot we have in store. Regardless of what gets done, however, we want to make sure that continued support is seamless between officers. To achieve this, our goal for the project website is to maintain readability and ensure that the code is easy to understand for all contributors. This approach not only facilitates seamless collaboration among team members but also promotes efficient troubleshooting and future maintenance. By adhering to best practices in coding standards, such as clear naming conventions, consistent indentation, and comprehensive commenting, we aim to create a codebase that is intuitive and accessible. This commitment to clarity and simplicity will enhance the overall quality of our website, making it more robust, scalable, and user-friendly.
            <hr>
            <h2>Key Features</h2>
            <ul>
                <li>Microsoft Authentication through SIUE's email</li>
                <li>Forum requiring sign-in for access</li>
                <li>Switch domain from CAOS2024 to CAOS</li>
                <li>Improved mobile support</li>
            </ul>
            <hr>
            <h2>Ongoing Support</h2>
                <ul>
                    <li>Updating Gallery with new pictures</li>
                    <li>Updating Calendar with new events</li>
                    <li>Updating About Us when new officers are elected</li>
                    <li>Improving styling to better reflect current trends</li>
                    <li>Simplifying backend for better readability</li>
                    <li>Documenting changes for new members</li>
                    <li>Have suggestions? Found a bug? Let us know- <a href="siue.edu.caos@gmail.com">Email us!</a></li>
                </ul>
            <hr>
    </div>
</div>
```
---

#### gallery.html
This is the image gallery that allows users to browse SIUE/CAOS photos.

##### Gallery Body

```html
    <div class="body">
        <h1>Image Gallery</h1>

        <div id="myBtnContainer">
            <button class="btn" onclick="filterSelection('all')">Show all</button>
            <button class="btn" onclick="filterSelection('General')">General</button>
            <button class="btn" onclick="filterSelection('eHacks2024')">eHacks 2024</button>
            <button class="btn" onclick="filterSelection('AMAFall2023')">AMA Fall 2023</button>
        </div>

        <div class="gallery" onclick="openLightbox(event)">
            <img class="filter General" src="assets/Engineering.png" alt="School of Engineering (Day)">
            <img class="filter General" src="assets/Engineering_sunset.png" alt="School of Engineering (Sunset)">
            <img class="filter General" src="assets/loft.png" alt="Innovation Loft">
            <img class="filter eHacks2024" src="assets/caos_ehacks.jpg" alt="Ehacks CAOS Presentation">
            <img class="filter AMAFall2023" src="assets/IMG_0366_4.jpg" alt="2 Former Officers of CAOS">
            <img class="filter AMAFall2023" src="assets/IMG_0367_4.jpg" alt="Audience for AMA 2023">
            <img class="filter AMAFall2023" src="assets/IMG_0368_2.jpg" alt="Former Officer">
            <img class="filter AMAFall2023" src="assets/IMG_0370_2.jpg" alt="3 AMA Participants">
            <img class="filter AMAFall2024" src="assets/IMG_0371_2.jpg" alt="Zak, Current President">
            <img class="filter General" src="assets/steak.jpg" alt="Steak Statue">
            <img class="filter eHacks2024" src="assets/eHacks2.jpg" alt="Ehacks audience">
            <img class="filter eHacks2024" src="assets/ehacksGroupPhoto.jpg" alt="Ehacks Participants">
        </div>
    </div>
```

- **Description**: Contains the main content of the gallery page.
- **Header**: Displays the page title "Image Gallery".
- **Filter Buttons**: Buttons to filter images by category (Show all, General, eHacks 2024, AMA Fall 2023).
- **Gallery**: A collection of images with different filter classes (`General`, `eHacks2024`, `AMAFall2023`). Clicking on any image opens the lightbox.

##### Lightbox

```html
    <!-- Lightbox container -->
    <div id="lightbox">
        <!-- Close button -->
        <span id="close-btn" onclick="closeLightbox()"><i class='bx bx-x'></i></span>

        <!-- Main lightbox image -->
        <img id="lightbox-img" src="" alt="lightbox image">

        <!-- Thumbnails container -->
        <div id="thumbnail-container">
            <!-- Thumbnails will be added dynamically using JavaScript -->
        </div>

        <!-- Previous and Next buttons -->
        <button id="prev-btn" onclick="changeImage(-1)"><i class='bx bx-chevron-left'></i></button>
        <button id="next-btn" onclick="changeImage(1)"><i class='bx bx-chevron-right'></i></button>
    </div>
</div>
```

- **Description**: The lightbox component that displays the selected image in a larger view.
- **Close Button**: A button to close the lightbox.
- **Main Lightbox Image**: Displays the currently selected image.
- **Thumbnails Container**: Holds thumbnails of all images in the gallery. Thumbnails are added dynamically using JavaScript.
- **Navigation Buttons**: Buttons to navigate to the previous or next image in the lightbox.

---

#### index.html
This is the homepage for the website, holding many of the links listed in the **Resources** that are not natively seen by the user. 
##### Welcome div/handwaving animation
This is where the welcome statement can be modified, as well as the links to become more involved with CAOS: 
```html
<div class="bio-div">
    <img class="imageH" src="assets\EngineeringCropped.png">
    <div class="bio-txt center">
        <h1>Hello! Welcome to CAOS! <span class="wave">👋</span></h1>
            <p>CAOS welcomes all students passionate about computer science and modern technologies. Our goal is to cultivate leaders proficient in technology, committed to driving positive societal change. Emphasizing interdisciplinary collaboration, we foster a community at SIUE where students can thrive academically, professionally, and personally.</p>
                <div>
                    <a class="buttonH" href="https://discord.gg/fSaXnVGnbv">Discord</a> 
                    <a class="buttonH" href="https://getinvolved.siue.edu/organization/caos">GetInvolved</a>
                </div>
    </div>
</div>
```
##### Ring Animations with Photos
Depending on where the image is placed in relation to the ring, the ring will either be to the left or right of the image. For example, this snippet has the ring animation to the left of the image.
```html
<div class="bio-div">
    <div class="bio-txt ring center">
        <i style="--clr:white;"></i>
        <i style="--clr:black;"></i>
        <i style="--clr:#C43629;"></i>
        <h1>Project Showcase</h1>
        <p>Interested in what our members have created?</p>
        <a class="buttonH" href="projects.html">Projects</a> 
        </div>
            <img class="imageH" src="assets\ehacksGroupPhoto.jpg">
        </div>
    </div>
<div>
```

---

#### internships.html
This HTML file includes links for internship opportunities for CS majors.
```html
<div class="body">
    <div style="margin: 2% 6%;">
        <h1>Internships</h1>
            <p>Internships during university play a crucial role in shaping a student's career and personal development. They provide invaluable hands-on experience, allowing students to apply theoretical knowledge in real-world settings and gain practical skills that are often not covered in academic curricula. Internships also offer insights into specific industries and career paths, helping students make informed decisions about their futures. Additionally, they provide opportunities to build professional networks, receive mentorship, and improve employability. By exposing students to the dynamics of the workplace, internships help bridge the gap between education and employment, making graduates more competitive and prepared for their chosen careers.</p>
            <hr>
            <h2>Internship Opportunities</h2>
            <ul>
                <li><a href="https://www.siue.edu/career-development-center/about/events.shtml">SIUE Career Fair</a></li>
                <li><a href="https://www.siue.edu/arts-and-sciences/papa/student-resources/job-opportunities.shtml">Local Career Options</a></li>
                <li><a href="https://www.siue.edu/student-employment/gradleaders/Student-Login.shtml">On-Campus Employment</a></li>
                <li><a href="https://github.com/SimplifyJobs/Summer2025-Internships"</li>2025 CS Internships through Simplify/PittCSC<a></li>
                <li><a href="https://www.levels.fyi/internships/"</li>CS Internships & Salaries - Levels.fyi<a></li>
                <li><a href="https://docs.google.com/document/d/1x6uVpjK-bDc7_Up9Gofr91-qovdc2eZW_DpI1N9oNfo/edit"</li>CS Internships 101<a></li>
            </ul>
        </div>
    </div>
```
---

#### projects.html
This HTML page will (eventually) list all the amazing projects that CAOS members have worked on using card containers.

```html
<div class="body">
            <h1>Projects</h1>
            <p>This page is a vibrant showcase of computer science projects, from websites to games, highlighting our members' ingenuity and collaboration. It's more than just display; it's a platform for knowledge sharing and inspiration, celebrating achievements and advancing our field through practical applications of computer science concepts.</p>
            <p>Since the website is currently being built, it’s empty- be on the lookout for our member’s achievements!</p>
        
            <div class="card">
                <img src="assets/CAOS_RebornUpscaled2.png" style="width: 100%; border-radius: 5px 5px 0 0;">
                <div class="container">
                    <h3><b>CAOS Website</b></h3>
                    <small><b>Luke Welsh and Sydney Barnett</b><br><i>Summer 2024</i><br>https://caos2024.cs.siue.edu/</small>
                    <p>Created from scratch using HTML/CSS and Javascript with ongoing support.</p>
                </div>
            </div>
        
            <div class="card">
                <img src="assets/CAOS_RebornUpscaled2.png" style="width: 100%; border-radius: 5px 5px 0 0;">
                <div class="container">
                    <h3><b>Sample Card 1</b></h3>
                    <small><b>John Doe and Jane Doe</b><br><i>Summer 2024</i><br>site/repo link</small>
                    <p>Insert summary text here in regards to how project was done, with what languages, etc.</p>
                </div>
            </div>

            <div class="card">
                <img src="assets/CAOS_RebornUpscaled2.png" style="width: 100%; border-radius: 5px 5px 0 0;">
                <div class="container">
                    <h3><b>Sample Card 2</b></h3>
                    <small><b>John Doe and Jane Doe</b><br><i>Summer 2024</i><br>site/repo link</small>
                    <p>Insert summary text here in regards to how project was done, with what languages, etc.</p>
                </div>
            </div>
```
Any project description/photo/link can be easily updated here.


