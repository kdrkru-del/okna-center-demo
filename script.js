document.addEventListener('DOMContentLoaded', () => {
    
    // 2. Header Scroll Effect (Glassmorphism)
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Intersection Observer for fade-in animations
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // 4. Interactive Tech Section Parallax (Window separating)
    const techSection = document.querySelector('.tech-section');
    const glassLayer = document.querySelector('.glass-layer');
    const profileLayer = document.querySelector('.profile-layer');
    const hardwareLayer = document.querySelector('.hardware-layer');
    
    if (techSection && window.innerWidth > 992) {
        window.addEventListener('scroll', () => {
            const rect = techSection.getBoundingClientRect();
            const viewHeight = window.innerHeight;
            
            // Check if section is in view
            if (rect.top <= viewHeight && rect.bottom >= 0) {
                // Calculate scroll progress (0 to 1)
                const progress = 1 - (rect.bottom / (viewHeight + rect.height));
                
                // Spread the layers based on scroll progress
                // glass: left and up
                // profile: static center
                // hardware: right and down
                const spreadX = progress * 180; 
                const spreadY = progress * 60;
                
                glassLayer.style.transform = `translateX(-${spreadX}px) translateY(-${spreadY}px) translateZ(50px)`;
                profileLayer.style.transform = `translateX(0px) translateY(0px) translateZ(0px)`;
                hardwareLayer.style.transform = `translateX(${spreadX}px) translateY(${spreadY}px) translateZ(-50px)`;
            }
        });
    }
});
