document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.getElementById('nav-menu');
    const subToggles = document.querySelectorAll('.submenu-toggle');

    // drawer open/close
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            const open = nav.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
    }

    // accordion submenus (mobile)
    subToggles.forEach(btn => {
        btn.addEventListener('click', () => {
            const li = btn.closest('.has-submenu');
            const isOpen = li.classList.toggle('open');
            btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            document.querySelectorAll('.has-submenu.open').forEach(other => {
                if (other !== li) other.classList.remove('open');
            });
        });
    });

    // close drawer after clicking a leaf link
    document.querySelectorAll('.nav a').forEach(a => {
        a.addEventListener('click', () => {
            if (nav.classList.contains('is-open')) nav.classList.remove('is-open');
        });
    });
});
