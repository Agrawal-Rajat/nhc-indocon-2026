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

