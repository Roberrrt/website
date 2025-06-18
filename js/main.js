// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header-banner');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    const body = document.body;

    // Open sidebar menu
    menuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        navLinks.classList.add('active');
        body.style.overflow = 'hidden';
    });

    // Close sidebar menu
    closeMenuBtn.addEventListener('click', function() {
        navLinks.classList.remove('active');
        body.style.overflow = '';
    });

    // Close menu when clicking outside (mobile)
    document.addEventListener('click', function(e) {
        if (navLinks.classList.contains('active') &&
            !e.target.closest('.nav-links') &&
            !e.target.closest('.menu-btn')) {
            navLinks.classList.remove('active');
            body.style.overflow = '';
        }
    });

    // Close menu on menu item click (mobile)
    document.querySelectorAll('.nav-links a').forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 900) {
                navLinks.classList.remove('active');
                body.style.overflow = '';
            }
        });
    });
});
// Form validation and submission
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Basic form validation
        const name = contactForm.querySelector('[name="name"]').value.trim();
        const email = contactForm.querySelector('[name="email"]').value.trim();
        const phone = contactForm.querySelector('[name="phone"]').value.trim();
        const message = contactForm.querySelector('[name="message"]').value.trim();
        
        if (!name || !email || !message) {
            alert('Vă rugăm să completați toate câmpurile obligatorii.');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Vă rugăm să introduceți o adresă de email validă.');
            return;
        }
        
        // Here you would typically send the form data to your server
        // For now, we'll just show a success message
        alert('Mulțumim pentru mesaj! Vă vom contacta în curând.');
        contactForm.reset();
    });
}

// Email validation helper
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Animate services cards on scroll
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
    observer.observe(card);
}); 
