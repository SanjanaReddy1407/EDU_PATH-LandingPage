document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling Functionality (Remains the same)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href').length > 1) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 2. Scroll Animation (Intersection Observer)
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the animation class when the element is visible
                entry.target.classList.add('animate-in');
                // Stop observing after the animation has run once
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Options for the observer
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' 
    });

    // Target elements we want to animate (All major headings and containers)
    const animateTargets = document.querySelectorAll(
        // Hero content is animated immediately via CSS, but including it here won't hurt
        '.hero-content, ' + 
        '#problem h2, .problem-card, ' + 
        '#features h2, .feature-item, ' +
        '#city-coverage h2, #city-coverage p, .city-block, ' + // <-- ENSURE THIS LINE IS PRESENT
        '#testimonials h2, .testimonial-container, ' + 
        '#cta-form h2, #cta-form p, .lead-form'     // Final CTA elements
    );
    
    // Attach the observer to each target
    animateTargets.forEach(target => {
        observer.observe(target);
    });

    
});