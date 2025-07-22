// Enhanced ProKai Landing Page with Purple Theme
// Professional animations and interactions

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initLoadingAnimation();
    initScrollAnimations();
    initAnimatedCounters();
    initFAQToggle();
    initSmoothScrolling();
    initScrollToTop();
    initTypewriterEffect();
    initParallaxElements();
    initHoverEffects();
    initProblemsData();
    initPerformanceOptimizations();
});

// Loading Animation - Fast and smooth
function initLoadingAnimation() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    
    // Hide loading overlay with smooth transition
    window.addEventListener('load', function() {
        setTimeout(() => {
            loadingOverlay.style.opacity = '0';
            loadingOverlay.style.transform = 'scale(1.1)';
            setTimeout(() => {
                loadingOverlay.style.display = 'none';
            }, 300);
        }, 800);
    });
}

// Enhanced Intersection Observer for scroll animations
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Specific animations for different elements
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
                
                if (entry.target.classList.contains('benefits-grid')) {
                    animateCards(entry.target.querySelectorAll('.benefit-card'));
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

// Staggered card animations
function animateCards(cards) {
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
            card.style.animation = `slideInUp 0.8s ease forwards`;
        }, index * 150);
    });
}

// Testimonial animations with slide effect
function animateTestimonials(testimonials) {
    testimonials.forEach((testimonial, index) => {
        setTimeout(() => {
            testimonial.style.opacity = '1';
            testimonial.style.transform = 'translateX(0) scale(1)';
        }, index * 200);
    });
}

// Table row animations
function animateTableRows(rows) {
    rows.forEach((row, index) => {
        setTimeout(() => {
            row.classList.add('animated');
        }, index * 100);
    });
}

// Enhanced animated counters with easing
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
    }, { threshold: 0.7 });

    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 120; // More steps for smoother animation
    const duration = 2500;
    const stepTime = duration / 120;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
            // Add completion effect
            element.style.transform = 'scale(1.1)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 200);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

// Enhanced FAQ functionality
function initFAQToggle() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items with animation
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    otherAnswer.style.maxHeight = '0px';
                }
            });
            
            // Toggle current FAQ item
            item.classList.toggle('active');
            
            const answer = item.querySelector('.faq-answer');
            if (!isActive) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                // Add subtle highlight effect
                question.style.background = 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)';
                setTimeout(() => {
                    question.style.background = '';
                }, 300);
            } else {
                answer.style.maxHeight = '0px';
            }
        });
    });
}

// Smooth scrolling with offset for fixed headers
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Enhanced scroll to top with progress indicator
function initScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', debounce(function() {
        const scrollPercentage = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        
        if (window.pageYOffset > 400) {
            scrollToTopBtn.classList.add('visible');
            // Add progress indicator
            scrollToTopBtn.style.background = `conic-gradient(#FF66C4 ${scrollPercentage}%, rgba(255, 102, 196, 0.2) ${scrollPercentage}%)`;
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    }, 10));
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Enhanced typewriter effect
function initTypewriterEffect() {
    const typewriterElement = document.getElementById('mainTitle');
    if (typewriterElement) {
        const text = typewriterElement.textContent;
        typewriterElement.textContent = '';
        typewriterElement.style.borderRight = '4px solid #FFFFFF';
        
        setTimeout(() => {
            let index = 0;
            const typeInterval = setInterval(() => {
                typewriterElement.textContent += text[index];
                index++;
                
                // Add typing sound effect (visual)
                typewriterElement.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    typewriterElement.style.transform = 'scale(1)';
                }, 50);
                
                if (index >= text.length) {
                    clearInterval(typeInterval);
                    // Blinking cursor effect
                    setTimeout(() => {
                        typewriterElement.style.borderRight = 'none';
                        // Add completion glow
                        typewriterElement.style.textShadow = '0 0 20px rgba(255, 102, 196, 0.8)';
                        setTimeout(() => {
                            typewriterElement.style.textShadow = '';
                        }, 1000);
                    }, 1500);
                }
            }, 180);
        }, 1500);
    }
}

// Enhanced parallax with performance optimization
function initParallaxElements() {
    const floatingElements = document.querySelectorAll('.floating-element');
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        
        floatingElements.forEach((element, index) => {
            const speed = 0.05 + (index * 0.02);
            const rotation = scrolled * 0.05;
            const yPos = scrolled * speed;
            
            element.style.transform = `translate3d(0, ${yPos}px, 0) rotate(${rotation}deg)`;
        });
        
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
}

// Advanced hover effects with magnetic interaction
function initHoverEffects() {
    // Ripple effect for buttons
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
    
    // Enhanced magnetic effect for cards
    const cards = document.querySelectorAll('.problem-card, .feature-card, .testimonial-card, .benefit-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const moveX = x / 25;
            const moveY = y / 25;
            
            this.style.transform = `perspective(1000px) translateX(${moveX}px) translateY(${moveY}px) rotateX(${moveY / 3}deg) rotateY(${moveX / 3}deg)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) translateX(0) translateY(0) rotateX(0) rotateY(0)';
        });
        
        // Add mouse enter effect
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.1s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transition = 'transform 0.5s ease';
        });
    });
    
    // Glow effect for highlight elements
    const highlightElements = document.querySelectorAll('.highlight-cell, .solution-highlight');
    
    highlightElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 25px rgba(139, 92, 246, 0.6)';
            this.style.transform = 'scale(1.02)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
            this.style.transform = 'scale(1)';
        });
    });
}

// Initialize problems data
function initProblemsData() {
    const problemsContainer = document.getElementById('problemsContainer');
    
    const problems = [
        {
            icon: 'fas fa-clock',
            title: 'Time Wasted on Wrong Materials',
            description: 'Students spend months on irrelevant content that never appears in exams.',
            solution: '10-year exam analysis ensures 100% relevant content'
        },
        {
            icon: 'fas fa-rupee-sign',
            title: 'Expensive Coaching & Courses',
            description: 'Thousands spent on coaching classes with generic teaching methods.',
            solution: 'Just ₹250 one-time payment for personalized AI learning'
        },
        {
            icon: 'fas fa-question-circle',
            title: 'No Real-Time Doubt Clearing',
            description: 'Students get stuck on questions with no immediate help available.',
            solution: 'Instant AI explanations for every question, 24/7'
        },
        {
            icon: 'fas fa-book',
            title: 'Overwhelming Study Materials',
            description: 'Too many books, PDFs, and resources causing confusion and stress.',
            solution: 'Smart prompt scripts that work with any AI - no heavy materials needed'
        }
    ];
    
    if (problemsContainer && problemsContainer.children.length === 0) {
        problems.forEach(problem => {
            const problemCard = document.createElement('div');
            problemCard.className = 'problem-card hover-lift';
            problemCard.innerHTML = `
                <div class="problem-icon">
                    <i class="${problem.icon}"></i>
                </div>
                <h4>${problem.title}</h4>
                <p>${problem.description}</p>
                <div class="solution-highlight">
                    <strong>ProKai Solution:</strong> ${problem.solution}
                </div>
            `;
            problemsContainer.appendChild(problemCard);
        });
    }
}

// Performance optimizations
function initPerformanceOptimizations() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Preload critical resources
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
    preloadLink.as = 'style';
    document.head.appendChild(preloadLink);
}

// Debounce function for performance
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

// Add CSS for enhanced animations
const enhancedCSS = `
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .cta-button, .pulse-button {
        position: relative;
        overflow: hidden;
    }
    
    .magnetic-hover {
        transition: transform 0.2s ease;
    }
    
    @keyframes glow-pulse {
        0%, 100% {
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
        }
        50% {
            box-shadow: 0 0 40px rgba(139, 92, 246, 0.6);
        }
    }
    
    .glow-animation {
        animation: glow-pulse 2s infinite;
    }
    
    /* Smooth transitions for all interactive elements */
    .problem-card, .feature-card, .benefit-card, .testimonial-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Enhanced focus states for accessibility */
    .cta-button:focus, .faq-question:focus {
        outline: 3px solid rgba(139, 92, 246, 0.5);
        outline-offset: 2px;
    }
`;

// Inject enhanced CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = enhancedCSS;
document.head.appendChild(styleSheet);

// Error handling and fallbacks
window.addEventListener('error', function(e) {
    console.error('ProKai Animation Error:', e.error);
    // Graceful degradation - remove animations if errors occur
    document.body.style.animation = 'none';
});

// Performance monitoring
let animationFrameId;

function monitorPerformance() {
    const start = performance.now();
    
    animationFrameId = requestAnimationFrame(() => {
        const end = performance.now();
        const frameDuration = end - start;
        
        // If frame takes too long, reduce animation complexity
        if (frameDuration > 16.67) { // 60fps threshold
            document.documentElement.style.setProperty('--animation-duration', '0.3s');
        }
        
        monitorPerformance();
    });
}

// Start performance monitoring
monitorPerformance();

// Accessibility enhancements
function initAccessibility() {
    // Add keyboard navigation for cards
    const interactiveCards = document.querySelectorAll('.problem-card, .feature-card, .benefit-card');
    
    interactiveCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Add ARIA labels for better screen reader support
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const label = stat.nextElementSibling.textContent;
        stat.setAttribute('aria-label', `${stat.textContent} ${label}`);
    });
}

// Initialize accessibility features
initAccessibility();

// Respect user preferences for reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    document.documentElement.style.setProperty('--animation-duration', '0.1s');
    document.documentElement.style.setProperty('--bounce-duration', '0.1s');
    
    // Disable parallax effects
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach(element => {
        element.style.animation = 'none';
    });
}

// Modern browser feature detection
if ('IntersectionObserver' in window) {
    console.log('✅ ProKai: Using modern Intersection Observer for optimal performance');
} else {
    console.log('⚠️ ProKai: Falling back to scroll event listeners for older browsers');
    // Implement fallback for older browsers
}

// Touch device optimizations
function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

if (isTouchDevice()) {
    // Optimize for touch devices
    document.body.classList.add('touch-device');
    
    // Reduce hover effects on touch devices
    const hoverElements = document.querySelectorAll('.hover-lift, .bounce-on-hover');
    hoverElements.forEach(element => {
        element.style.transform = 'none';
    });
}

// Console welcome message
console.log(`
🚀 ProKai Landing Page Loaded Successfully!
🎨 Theme: Red-Pink Gradient with Purple Background
⚡ Animations: Enhanced & Optimized
📱 Responsive: Mobile-First Design
♿ Accessible: WCAG Compliant
🔧 Version: 2.0 Enhanced

Made with ❤️ by ProKai Team
Contact: prokai.team@gmail.com
`);
