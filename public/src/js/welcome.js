(function () {
    const sec = document.querySelector('.wm2');
    if (!sec) return;
    const io = new IntersectionObserver((es) => {
        es.forEach(e => { if (e.isIntersecting) { sec.classList.add('in-view'); io.disconnect(); } });
    }, { threshold: 0.25 });
    io.observe(sec);
})();