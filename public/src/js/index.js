// Reveal helper for Leadership Duo
(function () {
    const sec = document.querySelector('.duo');
    if (!sec) return;
    const io = new IntersectionObserver((es) => {
        es.forEach(e => { if (e.isIntersecting) { sec.classList.add('in-view'); io.disconnect(); } });
    }, { threshold: 0.2 });
    io.observe(sec);
})();


// Reveal for Organising Team Message
(function () {
    const sec = document.querySelector('.msg');
    if (!sec) return;
    const io = new IntersectionObserver((es) => {
        es.forEach(e => { if (e.isIntersecting) { sec.classList.add('in-view'); io.disconnect(); } });
    }, { threshold: 0.25 });
    io.observe(sec);
})();


// Reveal for modern schedule section
// Reveal for Wave+Timeline section
(function () {
    const sec = document.querySelector('.sched-tl');
    if (!sec) return;
    const io = new IntersectionObserver((es) => {
        es.forEach(e => { if (e.isIntersecting) { sec.classList.add('in-view'); io.disconnect(); } });
    }, { threshold: 0.2 });
    io.observe(sec);
})();


// Reveal for Key Features
// In-view reveal for Key Features v2
// Reveal for Key Features – Icon Rail
(function () {
    const sec = document.querySelector('.kf-rail');
    if (!sec) return;
    const io = new IntersectionObserver((es) => {
        es.forEach(e => { if (e.isIntersecting) { sec.classList.add('in-view'); io.disconnect(); } });
    }, { threshold: 0.18 });
    io.observe(sec);
})();

// Organising Committee slider (native scroll-snap + Cloudinary)
(function () {
    const data = [
        { name: 'Dr. Arvind Rawal', image: 'https://res.cloudinary.com/de0rdsbph/image/upload/v1760643950/49884ffd-e61c-4c7b-8b0c-be46b70a8dc5.png' },
        { name: 'Dr. Kundan Kushwah', image: 'https://res.cloudinary.com/de0rdsbph/image/upload/v1760643960/161dc591-895f-4838-a33e-fcaca9dea13d.png' },
        { name: 'Dr. Akshay Jain', image: 'https://res.cloudinary.com/de0rdsbph/image/upload/v1760797185/169ddd9e-9a2c-4b55-ae99-b7ac2e82bc7c.png' },
        { name: 'Dr. Anurag Panvel', image: 'https://res.cloudinary.com/de0rdsbph/image/upload/v1760643974/4502bf0f-d15b-47a9-a4a0-a7390dd7513a.png' },
        { name: 'Dr. Rahul Mehta', image: 'https://res.cloudinary.com/de0rdsbph/image/upload/v1760643982/c02d221f-bbf7-4784-beb9-b27411a4fab1.png' },
        { name: 'Dr. Vishal Yadav', image: 'https://res.cloudinary.com/de0rdsbph/image/upload/v1760643979/1ce3e3e6-0642-4f60-ae8c-7dee6469b570.png' },
        { name: 'Dr. Anil Pandey', image: 'https://res.cloudinary.com/de0rdsbph/image/upload/v1760643992/f756662c-1b45-44be-ac8e-11e8c97dcf1c.png' },
        { name: 'Dr. Vaibhav Goyal', image: 'https://res.cloudinary.com/de0rdsbph/image/upload/v1760643985/775ace98-53fc-4553-84d1-34c0aa81ed84.png' },
        { name: 'Dr. Mohit Mahoviya', image: 'https://res.cloudinary.com/de0rdsbph/image/upload/v1760795885/94703f2d-9943-4904-91fd-ca6c1f21f7f8.png' },
        { name: 'Dr. Pushpwardhan Mandlecha', image: 'https://res.cloudinary.com/de0rdsbph/image/upload/v1760795879/caad0c9e-42ff-4c45-bfc3-6f83a2cbb002.png' },
        { name: 'Dr. Divyanshu Goyal', image: 'https://res.cloudinary.com/de0rdsbph/image/upload/v1760680033/248b539d-a0e9-4e9b-9242-745313d0bd23.png' }
    ];

    // Cloudinary helper (face-aware portrait)
    const cld = (url, w) =>
        url.replace('/upload/', `/upload/f_auto,q_auto,dpr_auto,c_fill,g_face,w_${w},h_${Math.round(w * 1.33)}/`);

    const track = document.getElementById('ocTrack');
    const viewport = document.getElementById('ocViewport');
    if (!track || !viewport) return;

    // Build cards
    data.forEach((p, i) => {
        const li = document.createElement('li');
        li.className = 'oc-card';
        li.innerHTML = `
      <div class="oc-img">
        <img alt="${p.name}" loading="${i < 3 ? 'eager' : 'lazy'}" decoding="async"
             sizes="(max-width:800px) 60vw, 300px"
             src="${cld(p.image, 480)}"
             srcset="${cld(p.image, 320)} 320w, ${cld(p.image, 480)} 480w, ${cld(p.image, 640)} 640w">
      </div>
      <div class="oc-meta">
        <h3 class="oc-name">${p.name}</h3>
      </div>
    `;
        track.appendChild(li);
    });

    // Prev / Next buttons scroll by viewport width
    const prev = document.querySelector('.oc-prev');
    const next = document.querySelector('.oc-next');

    const scrollByPage = (dir = 1) => {
        viewport.scrollBy({ left: dir * viewport.clientWidth, behavior: 'smooth' });
    };
    if (prev) prev.addEventListener('click', () => scrollByPage(-1));
    if (next) next.addEventListener('click', () => scrollByPage(1));

    // Keyboard support when focused
    viewport.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') scrollByPage(1);
        else if (e.key === 'ArrowLeft') scrollByPage(-1);
    });

    // Optional: drag to scroll (desktop)
    let isDown = false, startX = 0, startLeft = 0;
    viewport.addEventListener('mousedown', (e) => { isDown = true; startX = e.pageX; startLeft = viewport.scrollLeft; viewport.classList.add('grabbing'); });
    window.addEventListener('mouseup', () => { isDown = false; viewport.classList.remove('grabbing'); });
    window.addEventListener('mousemove', (e) => { if (!isDown) return; viewport.scrollLeft = startLeft - (e.pageX - startX); });

})();

(function () {
    const slider = document.querySelector('.cityshow-slider');
    if (!slider) return;

    const viewport = slider.querySelector('.cityshow-viewport');
    const track = slider.querySelector('.cityshow-track');
    const slides = Array.from(track.children);
    const prevBtn = slider.querySelector('.cityshow-prev');
    const nextBtn = slider.querySelector('.cityshow-next');
    const dotsWrap = slider.querySelector('.cityshow-dots');

    let index = 0;                // current first-visible slide
    let slidesPerView = 1;        // 1 / 2 / 3
    let slideW = 0;               // px
    let gapPx = 0;                // px
    let maxIndex = 0;             // last valid position
    let autoplayTimer = null;
    const interval = +slider.dataset.interval || 3500;
    const autoplay = slider.dataset.autoplay === 'true' &&
        !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function buildDots() {
        dotsWrap.innerHTML = '';
        const positions = maxIndex + 1; // each click position has its own dot
        for (let i = 0; i < positions; i++) {
            const b = document.createElement('button');
            b.type = 'button';
            b.setAttribute('role', 'tab');
            b.addEventListener('click', () => { stop(); goTo(i); start(); });
            dotsWrap.appendChild(b);
        }
    }

    function measure() {
        const vw = viewport.clientWidth;
        slidesPerView = vw >= 1024 ? 3 : (vw >= 640 ? 2 : 1);
        const style = getComputedStyle(track);
        gapPx = parseFloat(style.gap) || 0;

        // width of one slide (accounting for gap between visible slides)
        slideW = (vw - gapPx * (slidesPerView - 1)) / slidesPerView;
        track.style.setProperty('--slide-w', slideW + 'px');

        // last valid index so we never scroll into empty space
        maxIndex = Math.max(0, slides.length - slidesPerView);

        // rebuild dots for the new number of positions
        buildDots();

        // ensure current index is valid after resize
        if (index > maxIndex) index = maxIndex;
        update();
    }

    function translateFor(i) {
        // move exactly one slide width + gap each step
        return -(i * (slideW + gapPx));
    }

    function goTo(i) {
        index = Math.min(Math.max(i, 0), maxIndex);
        update();
    }

    function update() {
        track.style.transform = `translateX(${translateFor(index)}px)`;
        const dots = Array.from(dotsWrap.children);
        dots.forEach((d, di) => d.setAttribute('aria-selected', di === index ? 'true' : 'false'));
    }

    function next() {
        goTo(index >= maxIndex ? 0 : index + 1);
    }
    function prev() {
        goTo(index <= 0 ? maxIndex : index - 1);
    }

    // autoplay
    function start() { if (autoplay && !autoplayTimer) autoplayTimer = setInterval(next, interval); }
    function stop() { if (autoplayTimer) { clearInterval(autoplayTimer); autoplayTimer = null; } }

    // events
    nextBtn.addEventListener('click', () => { stop(); next(); start(); });
    prevBtn.addEventListener('click', () => { stop(); prev(); start(); });
    slider.addEventListener('mouseenter', stop);
    slider.addEventListener('mouseleave', start);
    document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());

    // swipe
    let startX = 0, dragging = false;
    viewport.addEventListener('pointerdown', e => { dragging = true; startX = e.clientX; viewport.setPointerCapture(e.pointerId); stop(); });
    viewport.addEventListener('pointerup', e => { if (!dragging) return; dragging = false; const dx = e.clientX - startX; if (Math.abs(dx) > 40) (dx < 0 ? next() : prev()); start(); });
    viewport.addEventListener('pointercancel', () => { dragging = false; start(); });

    // resize observer
    const ro = new ResizeObserver(measure);
    ro.observe(viewport);

    // init
    measure(); start();
})();