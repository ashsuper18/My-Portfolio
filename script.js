// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const navbar = document.querySelector('.navbar');

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    const bars = navToggle.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        if (navMenu.classList.contains('active')) {
            if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) bar.style.opacity = '0';
            if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        }
    });
});

// Close mobile menu when clicking on nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        });
    });
});

// Theme Toggle
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) {
        console.log('Theme toggle element not found');
        return;
    }
    
    let icon = themeToggle.querySelector('i');
    if (!icon) {
        // Create icon if it doesn't exist
        icon = document.createElement('i');
        themeToggle.appendChild(icon);
    }
    
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
        themeToggle.setAttribute('title', 'Switch to light mode');
        // Fallback text if icons don't load
        icon.setAttribute('data-fallback', '☀️');
    } else {
        icon.className = 'fas fa-moon';
        themeToggle.setAttribute('title', 'Switch to dark mode');
        // Fallback text if icons don't load
        icon.setAttribute('data-fallback', '🌙');
    }
    
    // Check if Font Awesome loaded, if not use emoji fallback
    setTimeout(() => {
        const computed = window.getComputedStyle(icon, ':before');
        if (computed.content === 'none' || computed.content === '') {
            icon.innerHTML = icon.getAttribute('data-fallback');
            icon.style.fontFamily = 'inherit';
        }
    }, 100);
}

function handleThemeToggle() {
    console.log('Theme toggle clicked'); // Debug log
    
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    console.log(`Switching from ${currentTheme} to ${newTheme}`); // Debug log
    
    // Add transition class for smooth theme change
    document.documentElement.classList.add('theme-transitioning');
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    // Remove transition class after animation
    setTimeout(() => {
        document.documentElement.classList.remove('theme-transitioning');
    }, 300);
}

// Initialize theme toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        console.log('Theme toggle found, adding event listener'); // Debug log
        themeToggle.addEventListener('click', handleThemeToggle);
        themeToggle.style.cursor = 'pointer'; // Ensure it's clickable
    } else {
        console.log('Theme toggle element not found!'); // Debug log
    }
}

// Initialize theme on page load
initTheme();
initThemeToggle();

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active nav link highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.timeline-item, .project-card, .skill-category, .contact-item, .stat-item'
    );
    elementsToAnimate.forEach(el => observer.observe(el));
});

// Enhanced loading and performance optimizations
document.addEventListener('DOMContentLoaded', function() {
    // No longer need to wait for window load - content is ready
    startEntranceAnimations();
    
    // Performance optimization: Use passive listeners
    window.addEventListener('scroll', debouncedScrollHandler, { passive: true });
    window.addEventListener('resize', debouncedResizeHandler, { passive: true });
});

// Enhanced entrance animations
function startEntranceAnimations() {
    const heroElements = document.querySelectorAll('.hero-content > *');
    const floatingCards = document.querySelectorAll('.floating-card');
    
    // Animate hero elements with stagger
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 150);
    });
    
    // Animate floating cards with stagger
    floatingCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, (index + 1) * 200 + 600);
    });
}

// Enhanced intersection observer with better performance
const enhancedObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll');
            // Unobserve after animation to improve performance
            enhancedObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

// Observe elements for animations with performance optimization
function observeElements() {
    const elementsToAnimate = document.querySelectorAll(
        '.timeline-item, .project-card, .skill-category, .contact-item, .stat-item'
    );
    
    // Use requestAnimationFrame for better performance
    requestAnimationFrame(() => {
        elementsToAnimate.forEach(el => {
            enhancedObserver.observe(el);
        });
    });
}

// Enhanced smooth scrolling with easing
function smoothScrollTo(target, duration = 1000) {
    const targetPosition = target.offsetTop - 80;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutCubic(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
    }

    requestAnimationFrame(animation);
}

// Enhanced scroll progress with throttling
function updateScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress');
    if (!scrollProgress) {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.appendChild(progressBar);
    }
    
    const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = Math.min((window.scrollY / winHeight) * 100, 100);
    
    requestAnimationFrame(() => {
        document.querySelector('.scroll-progress').style.width = scrolled + '%';
    });
}

// Enhanced parallax effect with performance optimization
function updateParallax() {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    const floatingCards = document.querySelectorAll('.floating-card');
    
    if (heroImage && scrolled < window.innerHeight) {
        const speed = scrolled * 0.3;
        requestAnimationFrame(() => {
            heroImage.style.transform = `translateY(${speed}px)`;
        });
    }
    
    // Enhanced floating cards parallax
    floatingCards.forEach((card, index) => {
        if (scrolled < window.innerHeight) {
            const speed = scrolled * (0.1 + index * 0.05);
            requestAnimationFrame(() => {
                card.style.transform = `translateY(${speed}px)`;
            });
        }
    });
}

// Enhanced resize handler
function handleResize() {
    // Close mobile menu on resize
    if (window.innerWidth > 768) {
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        
        if (navMenu) navMenu.classList.remove('active');
        
        if (navToggle) {
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            });
        }
    }
    
    // Recalculate scroll progress
    updateScrollProgress();
}

// Enhanced debounced handlers
const debouncedScrollHandler = debounce(() => {
    updateActiveNavLink();
    updateScrollProgress();
    updateParallax();
}, 5);

const debouncedResizeHandler = debounce(handleResize, 100);

// Enhanced theme toggle with smooth transition
function enhancedThemeToggle() {
    // This function is now handled by handleThemeToggle above
    handleThemeToggle();
}

// Enhanced scroll to section
function scrollToSection(sectionId) {
    const target = document.querySelector(sectionId);
    if (target) {
        smoothScrollTo(target);
    }
}

// Initialize enhanced functionality
document.addEventListener('DOMContentLoaded', () => {
    // Enhanced anchor link handling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            scrollToSection(targetId);
        });
    });
    
    // Initialize observers
    observeElements();
    
    // Add initial loading styles
    const style = document.createElement('style');
    style.textContent = `
        .hero-content > * {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .floating-card {
            opacity: 0;
            transform: translateY(50px);
            transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .theme-transitioning {
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        }
        
        .theme-transitioning * {
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        }
    `;
    document.head.appendChild(style);
});

// Add resize listener for responsive adjustments
window.addEventListener('resize', () => {
    // Close mobile menu on resize
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        });
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
window.addEventListener('scroll', debouncedScrollHandler);
