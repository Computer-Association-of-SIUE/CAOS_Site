# CAOS_SITE
![CAOS_Logo](/CAOS2024/assets/CAOS_Transparent_Min.png)
This repo holds the files for the Computer Association of SIUE (CAOS) website for the academic year 2024 - 2025. You can find the live version of this site [here](caos2024.cs.siue.edu).

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
 - Image thumbnails are generated dynamically using JavaScript and a handful `document` commands.
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
