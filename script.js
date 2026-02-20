document.addEventListener('DOMContentLoaded', () => {
    // Loading Screen
    const loader = document.getElementById('loader');

    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';

        // Trigger Hero Animations
        const heroContent = document.querySelector('.hero-content');
        heroContent.classList.add('visible');
    }, 2500); // 2.5s simulated load time

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for Reveal Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate
    const animatedElements = document.querySelectorAll('.section-header, .collection-item, .bespoke-text, .product-card, .footer-col');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // Custom Animation Class Helper
    // We add a class that resets the inline styles we just set, or we define the 'in-view' class in JS or CSS.
    // Let's inject a style tag for the 'in-view' class or handle it via inline styles in the observer.
    // Ideally, this should be in CSS, but for simplicity/robustness here:

    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        .in-view {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        /* Mobile Menu Styles (Injected here for safety if missed in CSS) */
        @media (max-width: 768px) {
            .nav-links.active {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 70px; /* Adjust based on navbar height */
                left: 0;
                width: 100%;
                background-color: #fff8f0;
                padding: 20px 0;
                text-align: center;
                box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                animation: slideDown 0.3s ease forwards;
            }
            
            .nav-links.active li a {
                color: #1a1a1a;
            }
            
            @keyframes slideDown {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            .hamburger.toggle span:nth-child(1) {
                transform: rotate(45deg);
                top: 9px;
            }
            .hamburger.toggle span:nth-child(2) {
                opacity: 0;
            }
            .hamburger.toggle span:nth-child(3) {
                transform: rotate(-45deg);
                top: 9px;
            }
        }
    `;
    document.head.appendChild(styleSheet);
});
