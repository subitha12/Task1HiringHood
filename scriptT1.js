document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    // Animation for features section
    const features = document.querySelectorAll(".slide-up");

    function revealOnScroll() {
        features.forEach((feature) => {
            const windowHeight = window.innerHeight;
            const featureTop = feature.getBoundingClientRect().top;
            if (featureTop < windowHeight - 50) {
                feature.classList.add("fade-in");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run on page load
});
