// --- Hamburger Menu Logic ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});


// --- Intersection Observer for Scroll Animations ---
const revealElements = document.querySelectorAll('.section-padding .container > *, .projects-grid > *, .skills-grid > *, .portfolio-gallery > *');

revealElements.forEach(el => {
    el.classList.add('reveal');
});

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
    });
}, revealOptions);

revealElements.forEach(el => {
    revealObserver.observe(el);
});


// Particle background animation removed as per request

// --- Navbar Scroll Effect ---
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 5, 8, 0.8)';
        navbar.style.boxShadow = '0 4px 30px rgba(255, 42, 133, 0.2)';
    } else {
        navbar.style.background = 'rgba(15, 8, 12, 0.5)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
    }
});
