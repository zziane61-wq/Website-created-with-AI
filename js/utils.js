// Add keyframes animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes counter {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    if (e.key === 'Escape') {
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        }
    }
});

// Page load animation
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// Add fade-in animation on page load
document.addEventListener('DOMContentLoaded', function() {
    const mainSections = document.querySelectorAll('section:not(.hero)');
    mainSections.forEach((section, index) => {
        section.style.opacity = '0.8';
        section.style.transition = 'opacity 0.5s ease';
    });
});

// Console message
console.log('%cمرحباً بك في موقعنا الاحترافي! 👋', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cتم تطويره بعناية فائقة', 'font-size: 14px; color: #764ba2;');
