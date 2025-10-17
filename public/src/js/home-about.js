// About split: simple in-view reveal
(function () {
    const sec = document.querySelector('.hx-about');
    if (!sec) return;

    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { sec.classList.add('in-view'); io.disconnect(); } });
    }, { threshold: 0.25 });

    io.observe(sec);
})();
