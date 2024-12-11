// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission (example only)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you for reaching out! I'll get back to you soon.");
    this.reset();
});
