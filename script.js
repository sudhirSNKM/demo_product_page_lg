// Preloader Hiding Logic
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 1000);
    }
});

// Offline / Online Detection
const offlineOverlay = document.getElementById('offline-overlay');

function handleOffline() {
    if (offlineOverlay) offlineOverlay.classList.add('active');
}

function handleOnline() {
    if (offlineOverlay) offlineOverlay.classList.remove('active');
}

window.addEventListener('offline', handleOffline);
window.addEventListener('online', handleOnline);

// Check immediately on page load in case already offline
if (!navigator.onLine) handleOffline();


document.addEventListener('DOMContentLoaded', () => {
    // Reveal Animations on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply fade-in animation to products and features
    const animatedElements = document.querySelectorAll('.product-card, .feature-content, .feature-image, .hero-image, .btn-primary, .hero h1, .hero p, .hero-eyebrow, .hover-card');
    animatedElements.forEach(el => {
        // Only add if not already animated by inline styles (like hero elements)
        if (!el.style.animation) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            observer.observe(el);
        }
    });

    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '64px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'white';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                navLinks.style.zIndex = '1001';
            }
        });
    }

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // Hero Parallax
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        window.addEventListener('scroll', () => {
            const scroll = window.scrollY;
            if (scroll < 800) {
                heroImage.style.transform = `perspective(1000px) rotateX(${Math.max(0, 2 - scroll * 0.01)}deg) translateY(${scroll * 0.1}px)`;
            }
        });
    }

    // Counter Animation
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        let counted = false;
        const statObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !counted) {
                counted = true;
                const counters = document.querySelectorAll('.stat-item h3');
                counters.forEach(counter => {
                    const target = counter.innerText;
                    // Extract number and suffix
                    const numberMatch = target.match(/[\d\.]+/);
                    const suffixMatch = target.match(/[^\d\.]+/);

                    if (numberMatch) {
                        const targetNum = parseFloat(numberMatch[0]);
                        const suffix = suffixMatch ? suffixMatch[0] : '';
                        let currentNum = 0;
                        const duration = 2000; // 2 seconds
                        const stepTime = 20;
                        const steps = duration / stepTime;
                        const increment = targetNum / steps;

                        const timer = setInterval(() => {
                            currentNum += increment;
                            if (currentNum >= targetNum) {
                                currentNum = targetNum;
                                clearInterval(timer);
                            }
                            // Format number nicely
                            // If it's an integer, show no decimals. If float, show 1.
                            const displayNum = Number.isInteger(targetNum) ? Math.floor(currentNum) : currentNum.toFixed(1);
                            counter.innerText = displayNum + suffix;
                        }, stepTime);
                    }
                });
            }
        }, { threshold: 0.5 });

        statObserver.observe(statsSection);
    }
});
