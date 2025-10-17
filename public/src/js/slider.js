(function () {
    const track = document.getElementById('nhcHeroTrack');
    if (!track) return;

    // Create a moving strip inside the fixed-width track
    const strip = document.createElement('div');
    strip.className = 'nhc-hero-strip';
    track.appendChild(strip);

    // Cloudinary helper: fast, responsive transforms
    const cld = (url, w) =>
        url.replace('/upload/', `/upload/f_auto,q_auto,dpr_auto,c_fill,g_auto,w_${w}/`);

    const images = [
        'https://res.cloudinary.com/de0rdsbph/image/upload/v1760641378/8a53fa98-9c0e-4772-a0eb-e09ffd933549.png',
        'https://res.cloudinary.com/de0rdsbph/image/upload/v1760666174/c474cecb-854c-44a6-bb3f-0c7f7b250741.png',
        'https://res.cloudinary.com/de0rdsbph/image/upload/v1760666190/5faaa231-6b7f-4d05-8f1d-685bfc582822.png',
        'https://res.cloudinary.com/de0rdsbph/image/upload/v1760666206/254e3da8-c44b-462a-80b3-cb098567aa99.png'
    ];
    const widths = [480, 768, 1200, 1600];

    // Build slides with responsive srcset
    const makeSlide = (src, i) => {
        const slide = document.createElement('div');
        slide.className = 'nhc-hero-slide' + (i === 0 ? ' is-active' : '');
        slide.setAttribute('role', 'group');
        slide.setAttribute('aria-roledescription', 'slide');
        slide.setAttribute('aria-label', `Slide ${i + 1} of ${images.length}`);

        const picture = document.createElement('picture');
        picture.className = 'nhc-hero-picture';

        const img = document.createElement('img');
        img.className = 'nhc-hero-img';
        img.alt = 'INDOCON highlight';
        img.decoding = 'async';
        img.loading = i === 0 ? 'eager' : 'lazy';
        if (i === 0) img.setAttribute('fetchpriority', 'high');
        img.sizes = '100vw';
        img.src = cld(src, 1200);
        img.srcset = widths.map(w => `${cld(src, w)} ${w}w`).join(', ');

        img.addEventListener('load', () => slide.classList.add('is-ready'), { once: true });

        picture.appendChild(img);
        slide.appendChild(picture);
        return slide;
    };

    images.forEach((src, i) => strip.appendChild(makeSlide(src, i)));

    // Dots
    const dotsWrap = document.getElementById('nhcHeroDots');
    const dots = images.map((_, i) => {
        const b = document.createElement('button');
        b.className = 'nhc-hero-dot' + (i === 0 ? ' is-active' : '');
        b.type = 'button';
        b.setAttribute('role', 'tab');
        b.setAttribute('aria-label', `Go to slide ${i + 1}`);
        b.addEventListener('click', () => go(i, true));
        dotsWrap.appendChild(b);
        return b;
    });

    // Controls
    const prevBtn = document.querySelector('.nhc-hero-prev');
    const nextBtn = document.querySelector('.nhc-hero-next');

    // State + autoplay
    const AUTOPLAY_MS = 2000; // adjust if needed
    let idx = 0;
    let timer = null;

    function updateUI() {
        const slides = Array.from(strip.children);
        slides.forEach((s, i) => s.classList.toggle('is-active', i === idx));
        dots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
        strip.style.transform = `translateX(-${idx * 100}%)`;
    }

    function go(to, user = false) {
        idx = (to + images.length) % images.length;
        updateUI();
        if (user) restart();
    }

    function nextSlide() { go(idx + 1); }
    function prevSlide() { go(idx - 1, true); }

    function start() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        if (timer) return;
        timer = setInterval(nextSlide, AUTOPLAY_MS);
    }

    function stop() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }

    function restart() {
        stop();
        start();
    }

    // Wire controls
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', () => go(idx + 1, true));

    // Pause when hidden or off-screen
    document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
    const io = new IntersectionObserver(
        (entries) => entries.forEach(v => (v.isIntersecting ? start() : stop())),
        { threshold: 0.2 }
    );
    io.observe(track);

    // Pause on hover (desktop)
    const hero = document.querySelector('.nhc-hero-inner');
    if (hero) {
        hero.addEventListener('mouseenter', stop);
        hero.addEventListener('mouseleave', start);
    }

    // Swipe (pointer) for mobile
    let startX = 0, swiping = false, activeId = null;
    strip.addEventListener('pointerdown', (e) => {
        swiping = true;
        startX = e.clientX;
        activeId = e.pointerId;
        strip.setPointerCapture(activeId);
        stop();
    });
    strip.addEventListener('pointerup', (e) => {
        if (!swiping) return;
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 40) go(idx + (dx < 0 ? 1 : -1), true);
        swiping = false; activeId = null; start();
    });
    strip.addEventListener('pointercancel', () => { swiping = false; activeId = null; start(); });

    // Keep alignment on resize
    window.addEventListener('resize', updateUI);

    // Warm-cache remaining images after load
    window.addEventListener('load', () => {
        images.slice(1).forEach(src => {
            const img = new Image();
            img.src = cld(src, 1200);
            img.srcset = widths.map(w => `${cld(src, w)} ${w}w`).join(', ');
            img.sizes = '100vw';
        });
    });

    // Init
    updateUI();
    start();
})();
