(function () {
    const root = document.getElementById('nhc-footer-root');
    if (!root) return;

    root.innerHTML = `
    <footer class="nhc-footer" aria-labelledby="nhc-footer-heading">
      <h2 id="nhc-footer-heading" style="position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;">Website Footer</h2>

      <div class="nhc-footer-wrap">
        <!-- Brand -->
        <section class="nhc-footer-brand" aria-label="Brand">
          <div class="nhc-footer-brandlogo">
            <img class="nhc-footer-logo" src="../../public/indocon1.ico" alt="NHC INDOCON 2026" decoding="async">
          </div>
          <p class="nhc-footer-tag">
            3rd National Hip Course • Indore • 2026<br>
            Advancing knowledge, collaboration & surgical excellence.
          </p>
          <ul class="nhc-footer-bullets" aria-label="Highlights">
            <li>🎓 50+ Faculties</li>
            <li>📅 3-Day Program</li>
            <li>📍 Indore</li>
          </ul>
          <nav class="nhc-footer-social" aria-label="Social Links">
            <a href="#" class="nhc-footer-sociallink" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12.06C22 6.48 17.52 2 12 2S2 6.48 2 12.06c0 5.01 3.66 9.17 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.77 8.44-4.93 8.44-9.94z"/></svg>
            </a>
            <a href="#" class="nhc-footer-sociallink" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.51 5.51 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm5.75-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z"/></svg>
            </a>
            <a href="#" class="nhc-footer-sociallink" aria-label="X">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3h4.7l4.3 6.1L16.1 3H21l-7.2 9.5L21 21h-4.7l-5-7.1L7.9 21H3l7.5-8.7z"/></svg>
            </a>
            <a href="#" class="nhc-footer-sociallink" aria-label="YouTube">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .6 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.6 15.5v-7l6 3.5z"/></svg>
            </a>
          </nav>
        </section>

        <!-- Links -->
        <nav class="nhc-footer-links" aria-label="Quick Links">
          <div>
            <h3 class="nhc-footer-title">Explore</h3>
            <ul class="nhc-footer-list">
              <li><a class="nhc-footer-link" href="index.html"><span class="nhc-footer-linkicon">&rsaquo;</span> Home</a></li>
              <li><a class="nhc-footer-link" href="about-nhc-indocon.html"><span class="nhc-footer-linkicon">&rsaquo;</span> About NHC IndoCon</a></li>
              <li><a class="nhc-footer-link" href="about-indore.html"><span class="nhc-footer-linkicon">&rsaquo;</span> About Indore</a></li>
              <li><a class="nhc-footer-link" href="venue.html"><span class="nhc-footer-linkicon">&rsaquo;</span> Venue & Travel</a></li>
              <li><a class="nhc-footer-link" href="gallery.html"><span class="nhc-footer-linkicon">&rsaquo;</span> Gallery</a></li>
              <li><a class="nhc-footer-link" href="contact.html"><span class="nhc-footer-linkicon">&rsaquo;</span> Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 class="nhc-footer-title">Committees</h3>
            <ul class="nhc-footer-list">
              <li><a class="nhc-footer-link" href="patrons.html"><span class="nhc-footer-linkicon">&rsaquo;</span> Patrons</a></li>
              <li><a class="nhc-footer-link" href="organising-committee.html"><span class="nhc-footer-linkicon">&rsaquo;</span> Organising Committee</a></li>
              <li><a class="nhc-footer-link" href="proposed-faculties.html"><span class="nhc-footer-linkicon">&rsaquo;</span> Proposed Faculties</a></li>
              <li><a class="nhc-footer-link" href="team-mp.html"><span class="nhc-footer-linkicon">&rsaquo;</span> Team Madhya Pradesh</a></li>
              <li><a class="nhc-footer-link" href="scientific.html"><span class="nhc-footer-linkicon">&rsaquo;</span> Scientific Program</a></li>
              <li><a class="nhc-footer-link" href="schedule.html"><span class="nhc-footer-linkicon">&rsaquo;</span> Schedule</a></li>
            </ul>
          </div>
        </nav>

        <!-- Contact -->
        <section aria-label="Contact">
          <h3 class="nhc-footer-title">Contact Us</h3>
          <ul class="nhc-footer-contactlist">
            <li class="nhc-footer-contactitem">
              <svg class="nhc-footer-contacticon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C8 2 5 5 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-4-3-7-7-7zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5z"/></svg>
              M 9-10, Shekhar Central, AB Road, Manorama Ganj, Indore, MP, 452001
            </li>
            <li class="nhc-footer-contactitem">
              <svg class="nhc-footer-contacticon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8c1.2 2.4 3.2 4.4 5.6 5.6l2-2c.2-.2.6-.3.9-.2 1 .3 2 .5 3 .5.5 0 .9.4.9.9V19c0 .5-.4.9-.9.9C9.9 19.9 4.1 14.1 4.1 6.9c0-.5.4-.9.9-.9H7c.5 0 .9.4.9.9 0 1 .2 2 .5 3 .1.3 0 .7-.2.9l-1.6 2z"/></svg>
              +91 0731 424 5597 &nbsp;|&nbsp; +91 93021 23067
            </li>
            <li class="nhc-footer-contactitem">
              <svg class="nhc-footer-contacticon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5z"/></svg>
              nhc.indocon26@gmail.com
            </li>
          </ul>
          <div class="nhc-footer-cta">
            <a class="nhc-footer-ctalink" href="form.html">Register Now</a>
            <a class="nhc-footer-ctalink" href="contact.html">Contact Secretariat</a>
          </div>
        </section>
      </div>

      <div class="nhc-footer-bottom">
        <div class="nhc-footer-bottomwrap">
          <p>© 2025 3rd National Hip Course INDOCON 2026 (AOSI). All Rights Reserved.</p>
          <p>Developed by <a href="https://mrdigito.com" rel="noopener">CODESHOR.COM</a></p>
        </div>
      </div>
    </footer>
  `;
})();
