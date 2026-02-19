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

// ─── Global Image Error Handler ───────────────────────────────────────
// When any image fails to load (e.g. Unsplash offline), replace with a
// clean branded SVG placeholder instead of showing a broken grey box.
document.addEventListener('DOMContentLoaded', () => {
    const placeholderSVG = (label) => {
        const encoded = encodeURIComponent(label || 'FortuMars');
        return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect width='400' height='200' fill='%23e8f0fe'/%3E%3Crect x='150' y='60' width='100' height='55' rx='8' fill='%23d2e3fc'/%3E%3Ccircle cx='175' cy='82' r='11' fill='%234285f4' opacity='0.5'/%3E%3Cpolygon points='155,115 185,88 210,108 235,80 245,115' fill='%234285f4' opacity='0.4'/%3E%3Ctext x='200' y='158' font-family='sans-serif' font-size='13' fill='%235f6368' text-anchor='middle'%3E${encoded}%3C/text%3E%3C/svg%3E`;
    };

    document.querySelectorAll('img').forEach(img => {
        // Hide skeleton when image loads successfully
        img.addEventListener('load', function () {
            const wrapper = this.closest('.card-image-wrapper');
            if (wrapper) wrapper.classList.add('img-loaded');
        });

        // Replace with placeholder if image fails
        img.addEventListener('error', function () {
            if (this.src.includes('data:image/svg')) return; // avoid loop
            this.src = placeholderSVG(this.alt);
            this.style.objectFit = 'contain';
            this.style.padding = '12px';
            this.style.background = '#e8f0fe';
            const wrapper = this.closest('.card-image-wrapper');
            if (wrapper) wrapper.classList.add('img-loaded'); // stop skeleton too
        });
    });
});

