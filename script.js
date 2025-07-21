// Enhanced ProKai Landing Page Animations and Interactions

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all animations and interactions
    initLoadingAnimation();
    initScrollAnimations();
    initAnimatedCounters();
    initFAQToggle();
    initSmoothScrolling();
    initScrollToTop();
    initTypewriterEffect();
    initParallaxElements();
    initHoverEffects();
});

// Loading Animation - Optimized for fast loading
function initLoadingAnimation() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    
    // Hide loading overlay faster for better UX
    window.addEventListener('load', function() {
        setTimeout(() => {
            loadingOverlay.style.opacity = '0';
            setTimeout(() => {
                loadingOverlay.style.display = 'none';
            }, 300);
        }, 500); // Reduced from 1000ms to 500ms
    });
}

// Intersection Observer for Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Trigger specific animations based on class
                if (entry.target.classList.contains('problems-grid')) {
                    animateCards(entry.target.querySelectorAll('.problem-card'));
                }
                
                if (entry.target.classList.contains('features-grid')) {
                    animateCards(entry.target.querySelectorAll('.feature-card'));
                }
                
                if (entry.target.classList.contains('testimonials-grid')) {
                    animateTestimonials(entry.target.querySelectorAll('.testimonial-card'));
                }
                
                if (entry.target.classList.contains('comparison-wrapper')) {
                    animateTableRows(entry.target.querySelectorAll('.table-row-animate'));
                }
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    const animatableElements = document.querySelectorAll('.animate-on-scroll');
    animatableElements.forEach(element => {
        observer.observe(element);
    });
}

// Animate cards with staggered delay
function animateCards(cards) {
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            card.style.animation = `slideInUp 0.6s ease forwards`;
        }, index * 100);
    });
}

// Animate testimonials
function animateTestimonials(testimonials) {
    testimonials.forEach((testimonial, index) => {
        setTimeout(() => {
            testimonial.style.opacity = '1';
            testimonial.style.transform = 'translateX(0)';
        }, index * 200);
    });
}

// Animate table rows
function animateTableRows(rows) {
    rows.forEach((row, index) => {
        setTimeout(() => {
            row.style.opacity = '1';
            row.style.transform = 'translateX(0)';
        }, index * 100);
    });
}

// Animated Counters
function initAnimatedCounters() {
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                animateCounter(counter, target);
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const duration = 2000;
    const stepTime = duration / 100;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

// FAQ Toggle Functionality
function initFAQToggle() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current FAQ item
            item.classList.toggle('active');
            
            // Animate the toggle
            const answer = item.querySelector('.faq-answer');
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0px';
            }
        });
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            // Fix: Check if targetId is valid before querying
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Scroll to Top Button
function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Typewriter Effect for Main Title
function initTypewriterEffect() {
    const typewriterElement = document.getElementById('mainTitle');
    if (typewriterElement) {
        const text = typewriterElement.textContent;
        typewriterElement.textContent = '';
        
        setTimeout(() => {
            let index = 0;
            const typeInterval = setInterval(() => {
                typewriterElement.textContent += text[index];
                index++;
                
                if (index >= text.length) {
                    clearInterval(typeInterval);
                    // Remove cursor after typing is complete
                    setTimeout(() => {
                        typewriterElement.style.borderRight = 'none';
                    }, 1000);
                }
            }, 200);
        }, 1500);
    }
}

// Parallax Elements
function initParallaxElements() {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        
        floatingElements.forEach((element, index) => {
            const speed = 0.1 + (index * 0.05);
            element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
        });
    });
}

// Enhanced Hover Effects
function initHoverEffects() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.cta-button, .pulse-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple-effect');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add magnetic effect to cards
    const cards = document.querySelectorAll('.problem-card, .feature-card, .testimonial-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const moveX = x / 20;
            const moveY = y / 20;
            
            this.style.transform = `translateX(${moveX}px) translateY(${moveY}px) rotateX(${moveY / 2}deg) rotateY(${moveX / 2}deg)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) translateY(0) rotateX(0) rotateY(0)';
        });
    });
    
    // Add glow effect to important text
    const highlightElements = document.querySelectorAll('.highlight, .solution-highlight');
    
    highlightElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 20px rgba(233, 30, 99, 0.5)';
            this.style.transform = 'scale(1.05)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
            this.style.transform = 'scale(1)';
        });
    });
}

// Add CSS for ripple effect
const rippleCSS = `
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .cta-button, .pulse-button {
        position: relative;
        overflow: hidden;
    }
`;

// Inject ripple CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = rippleCSS;
document.head.appendChild(styleSheet);

// Performance optimization - Debounce scroll events
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

// Optimize scroll performance
window.addEventListener('scroll', debounce(function() {
    // Scroll-dependent animations go here
}, 16)); // ~60fps

// Intersection Observer for better performance
if ('IntersectionObserver' in window) {
    // Use Intersection Observer for better performance
    console.log('Using Intersection Observer for scroll animations');
} else {
    // Fallback for older browsers
    console.log('Falling back to scroll event listeners');
}

// Prefers reduced motion support
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    document.documentElement.style.setProperty('--bounce-duration', '0.01ms');
}

// Add error handling
window.addEventListener('error', function(e) {
    console.error('Animation error:', e.error);
});

// Optimize for mobile devices
function isMobileDevice() {
    return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
    // Reduce animation intensity on mobile for faster loading
    document.documentElement.style.setProperty('--animation-duration', '0.3s');
    document.documentElement.style.setProperty('--bounce-duration', '0.4s');
    
    // Disable heavy animations on mobile for better performance
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach(element => {
        element.style.display = 'none';
    });
    
    // Disable typewriter effect on mobile
    const typewriterElement = document.getElementById('mainTitle');
    if (typewriterElement) {
        typewriterElement.style.animation = 'none';
        typewriterElement.style.borderRight = 'none';
    }
}

console.log('ProKai Enhanced Landing Page Animations Loaded Successfully! 🚀');
