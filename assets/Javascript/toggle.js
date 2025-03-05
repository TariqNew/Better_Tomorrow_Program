document.getElementById("menu-btn").addEventListener("click", function() {
    // Get the navigation menu
    var navLinks = document.getElementById("nav-links");

    // Toggle the 'active' class to show or hide the navigation
    navLinks.classList.toggle("active");
});
