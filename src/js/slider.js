document.addEventListener('DOMContentLoaded', () => {
    const viewport = document.getElementById('slider');
    if (!viewport) return;

    const slides = Array.from(viewport.children);
    const prev = document.querySelector('.slider-btn.prev');
    const next = document.querySelector('.slider-btn.next');
    const dotsWrap = document.querySelector('.slider-dots');

    // Build dots
    const dots = slides.map((_, i) => {
        const b = document.createElement('button');
        if (i === 0) b.setAttribute('aria-current', 'true');
        b.addEventListener('click', () => {
            viewport.scrollTo({ left: viewport.clientWidth * i, behavior: 'smooth' });
        });
        dotsWrap && dotsWrap.appendChild(b);
        return b;
    });

    const updateDots = () => {
        const idx = Math.round(viewport.scrollLeft / viewport.clientWidth);
        dots.forEach((d, i) => d.toggleAttribute('aria-current', i === idx));
    };

    // Buttons
    prev?.addEventListener('click', () => viewport.scrollBy({ left: -viewport.clientWidth, behavior: 'smooth' }));
    next?.addEventListener('click', () => viewport.scrollBy({ left: viewport.clientWidth, behavior: 'smooth' }));

    // Sync on scroll/resize
    viewport.addEventListener('scroll', () => {
        // throttle via rAF
        if (viewport.__tick) return;
        viewport.__tick = requestAnimationFrame(() => {
            updateDots();
            viewport.__tick = null;
        });
    });
    window.addEventListener('resize', updateDots, { passive: true });
});
