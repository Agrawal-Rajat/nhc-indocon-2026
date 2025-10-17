(function () {
  const root = document.getElementById('nhc-footer-root');
  if (!root) return;

  root.innerHTML = `
    <footer class="nhc-footer" aria-labelledby="nhc-footer-heading">
      <h2 id="nhc-footer-heading" style="position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;">Website Footer</h2>

      <!-- Animated background elements -->
      <div class="nhc-footer-bg">
        <div class="nhc-footer-circle nhc-footer-circle1"></div>
        <div class="nhc-footer-circle nhc-footer-circle2"></div>
        <div class="nhc-footer-circle nhc-footer-circle3"></div>
      </div>

      <div class="nhc-footer-main">
        <div class="nhc-footer-container">

          <!-- Hero Section -->
          <div class="nhc-footer-hero">
            <div class="nhc-footer-logo-wrap">
              <img class="nhc-footer-logo" src="indocon1.ico" alt="NHC INDOCON 2026">
              <div class="nhc-footer-logo-glow"></div>
            </div>
            <h3 class="nhc-footer-hero-title">3rd National Hip Course</h3>
            <p class="nhc-footer-hero-subtitle">INDOCON 2026 • Indore, Madhya Pradesh</p>
            <p class="nhc-footer-hero-desc">Join leading orthopedic surgeons for three days of advancing knowledge, collaboration, and surgical excellence in hip arthroplasty.</p>

            <div class="nhc-footer-stats">
              <div class="nhc-footer-stat">
                <div class="nhc-footer-stat-num">50+</div>
                <div class="nhc-footer-stat-label">Expert Faculties</div>
              </div>
              <div class="nhc-footer-stat">
                <div class="nhc-footer-stat-num">3</div>
                <div class="nhc-footer-stat-label">Day Program</div>
              </div>
              <div class="nhc-footer-stat">
                <div class="nhc-footer-stat-num">500+</div>
                <div class="nhc-footer-stat-label">Participants</div>
              </div>
            </div>

            <div class="nhc-footer-cta-primary">
              <a href="form.html" class="nhc-footer-btn nhc-footer-btn-primary">
                <span>Register Now</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <a href="contact.html" class="nhc-footer-btn nhc-footer-btn-secondary">
                Contact Us
              </a>
            </div>
          </div>

          <!-- Navigation Grid -->
          <div class="nhc-footer-nav-grid">

            <!-- Quick Links -->
            <div class="nhc-footer-nav-section">
              <h4 class="nhc-footer-nav-title">Quick Links</h4>
              <ul class="nhc-footer-nav-list">
                <li><a href="index.html" class="nhc-footer-nav-link">Home</a></li>
                <li><a href="index.html" class="nhc-footer-nav-link">About NHC IndoCon</a></li>
                <li><a href="index.html" class="nhc-footer-nav-link">About Indore</a></li>
                <li><a href="index.html" class="nhc-footer-nav-link">Venue & Travel</a></li>
                <li><a href="gallery.html" class="nhc-footer-nav-link">Gallery</a></li>
              </ul>
            </div>

            <!-- Program -->
            <div class="nhc-footer-nav-section">
              <h4 class="nhc-footer-nav-title">Program</h4>
              <ul class="nhc-footer-nav-list">
                <li><a href="index.html" class="nhc-footer-nav-link">Scientific Program</a></li>
                <li><a href="index.html" class="nhc-footer-nav-link">Schedule</a></li>
              </ul>
            </div>

            <!-- Committees -->
            <div class="nhc-footer-nav-section">
              <h4 class="nhc-footer-nav-title">Committees</h4>
              <ul class="nhc-footer-nav-list">
                <li><a href="organising-committee.html" class="nhc-footer-nav-link">Organising Committee</a></li>
                <li><a href="team-mp.html" class="nhc-footer-nav-link">Team Madhya Pradesh</a></li>
                <li><a href="patrons.html" class="nhc-footer-nav-link">Patrons</a></li>
                <li><a href="proposed-faculties.html" class="nhc-footer-nav-link">Proposed Faculties</a></li>

              </ul>
            </div>

            <!-- Contact Info -->
            <div class="nhc-footer-nav-section">
              <h4 class="nhc-footer-nav-title">Get in Touch</h4>
              <div class="nhc-footer-contact-grid">
                <div class="nhc-footer-contact-item">
                  <svg class="nhc-footer-contact-icon" viewBox="0 0 24 24">
                    <path d="M12 2C8 2 5 5 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-4-3-7-7-7zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5z"/>
                  </svg>
                  <div>
                    <div class="nhc-footer-contact-label">Address</div>
                    <div class="nhc-footer-contact-text">M 9-10, Shekhar Central, AB Road, Manorama Ganj, Indore, Madhya Pradesh, 452001
</div>
                  </div>
                </div>
                <div class="nhc-footer-contact-item">
                  <svg class="nhc-footer-contact-icon" viewBox="0 0 24 24">
                    <path d="M6.6 10.8c1.2 2.4 3.2 4.4 5.6 5.6l2-2c.2-.2.6-.3.9-.2 1 .3 2 .5 3 .5.5 0 .9.4.9.9V19c0 .5-.4.9-.9.9C9.9 19.9 4.1 14.1 4.1 6.9c0-.5.4-.9.9-.9H7c.5 0 .9.4.9.9 0 1 .2 2 .5 3 .1.3 0 .7-.2.9l-1.6 2z"/>
                  </svg>
                  <div>
                    <div class="nhc-footer-contact-label">Phone</div>
                    <div class="nhc-footer-contact-text">+91 : 0731 424 5597 <br> +91 93021 23067</div>
                  </div>
                </div>
                <div class="nhc-footer-contact-item">
                  <svg class="nhc-footer-contact-icon" viewBox="0 0 24 24">
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5z"/>
                  </svg>
                  <div>
                    <div class="nhc-footer-contact-label">Email</div>
                    <div class="nhc-footer-contact-text">nhc.indocon26@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="nhc-footer-bottom">
        <div class="nhc-footer-container">
          <div class="nhc-footer-bottom-content">
            <div class="nhc-footer-bottom-left">
              <p>© 2025 3rd National Hip Course INDOCON 2026 (AOSI). All Rights Reserved.</p>
            </div>
            <div class="nhc-footer-bottom-center">
              <nav class="nhc-footer-social" aria-label="Social Media">
                <a href="https://www.facebook.com/people/Nhc-Indocon/61581078035124/?mibextid=rS40aB7S9Ucbxw6v" class="nhc-footer-social-link" aria-label="Facebook">
                  <svg viewBox="0 0 24 24"><path d="M22 12.06C22 6.48 17.52 2 12 2S2 6.48 2 12.06c0 5.01 3.66 9.17 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.77 8.44-4.93 8.44-9.94z"/></svg>
                </a>
                <a href="https://www.instagram.com/nhc.indocon2026?utm_source=qr" class="nhc-footer-social-link" aria-label="Instagram">
                  <svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.51 5.51 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm5.75-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z"/></svg>
                </a>
                <a href="https://x.com/NHC_INDOCON26?t=J-ru3-6_01mgYd-tPtgNAA&s=08" class="nhc-footer-social-link" aria-label="X">
                  <svg viewBox="0 0 24 24"><path d="M3 3h4.7l4.3 6.1L16.1 3H21l-7.2 9.5L21 21h-4.7l-5-7.1L7.9 21H3l7.5-8.7z"/></svg>
                </a>
                <a href="#" class="nhc-footer-social-link" aria-label="YouTube">
                  <svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .6 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.6 15.5v-7l6 3.5z"/></svg>
                </a>
              </nav>
            </div>
            <div class="nhc-footer-bottom-right">
              <p>Developed by <a href="https://codeshor.com" target="_blank" rel="noopener">CODESHOR.COM</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;
})();


// (function () {
//   const root = document.getElementById('nhc-footer-root');
//   if (!root) return;

//   root.innerHTML = `
//     <footer class="nhc-footer" aria-labelledby="nhc-footer-heading">
//       <h2 id="nhc-footer-heading" style="position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;">Website Footer</h2>

//       <!-- Animated background elements -->
//       <div class="nhc-footer-bg">
//         <div class="nhc-footer-circle nhc-footer-circle1"></div>
//         <div class="nhc-footer-circle nhc-footer-circle2"></div>
//         <div class="nhc-footer-circle nhc-footer-circle3"></div>
//       </div>

//       <div class="nhc-footer-main">
//         <div class="nhc-footer-container">
          
//           <!-- Hero Section -->
//           <div class="nhc-footer-hero">
//             <div class="nhc-footer-logo-wrap">
//               <img class="nhc-footer-logo" src="../../public/indocon1.ico" alt="NHC INDOCON 2026">
//               <div class="nhc-footer-logo-glow"></div>
//             </div>
//             <h3 class="nhc-footer-hero-title">3rd National Hip Course</h3>
//             <p class="nhc-footer-hero-subtitle">INDOCON 2026 • Indore, Madhya Pradesh</p>
//             <p class="nhc-footer-hero-desc">Join leading orthopedic surgeons for three days of advancing knowledge, collaboration, and surgical excellence in hip arthroplasty.</p>
            
//             <div class="nhc-footer-stats">
//               <div class="nhc-footer-stat">
//                 <div class="nhc-footer-stat-num">50+</div>
//                 <div class="nhc-footer-stat-label">Expert Faculties</div>
//               </div>
//               <div class="nhc-footer-stat">
//                 <div class="nhc-footer-stat-num">3</div>
//                 <div class="nhc-footer-stat-label">Day Program</div>
//               </div>
//               <div class="nhc-footer-stat">
//                 <div class="nhc-footer-stat-num">500+</div>
//                 <div class="nhc-footer-stat-label">Participants</div>
//               </div>
//             </div>

//             <div class="nhc-footer-cta-primary">
//               <a href="form.html" class="nhc-footer-btn nhc-footer-btn-primary">
//                 <span>Register Now</span>
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                   <path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                 </svg>
//               </a>
//               <a href="contact.html" class="nhc-footer-btn nhc-footer-btn-secondary">
//                 Contact Us
//               </a>
//             </div>
//           </div>

//           <!-- Navigation Grid -->
//           <div class="nhc-footer-nav-grid">
            
//             <!-- Quick Links -->
//             <div class="nhc-footer-nav-section">
//               <h4 class="nhc-footer-nav-title">Quick Links</h4>
//               <ul class="nhc-footer-nav-list">
//                 <li><a href="index.html" class="nhc-footer-nav-link">Home</a></li>
//                 <li><a href="about-nhc-indocon.html" class="nhc-footer-nav-link">About NHC IndoCon</a></li>
//                 <li><a href="about-indore.html" class="nhc-footer-nav-link">About Indore</a></li>
//                 <li><a href="venue.html" class="nhc-footer-nav-link">Venue & Travel</a></li>
//                 <li><a href="gallery.html" class="nhc-footer-nav-link">Gallery</a></li>
//                 <li><a href="contact.html" class="nhc-footer-nav-link">Contact Us</a></li>
//               </ul>
//             </div>

//             <!-- Program -->
//             <div class="nhc-footer-nav-section">
//               <h4 class="nhc-footer-nav-title">Program</h4>
//               <ul class="nhc-footer-nav-list">
//                 <li><a href="scientific.html" class="nhc-footer-nav-link">Scientific Program</a></li>
//                 <li><a href="schedule.html" class="nhc-footer-nav-link">Schedule</a></li>
//                 <li><a href="proposed-faculties.html" class="nhc-footer-nav-link">Proposed Faculties</a></li>
//                 <li><a href="patrons.html" class="nhc-footer-nav-link">Patrons</a></li>
//                 <li><a href="form.html" class="nhc-footer-nav-link">Registration</a></li>
//               </ul>
//             </div>

//             <!-- Committees -->
//             <div class="nhc-footer-nav-section">
//               <h4 class="nhc-footer-nav-title">Committees</h4>
//               <ul class="nhc-footer-nav-list">
//                 <li><a href="organising-committee.html" class="nhc-footer-nav-link">Organising Committee</a></li>
//                 <li><a href="team-mp.html" class="nhc-footer-nav-link">Team Madhya Pradesh</a></li>
//                 <li><a href="patrons.html" class="nhc-footer-nav-link">Patrons</a></li>
//                 <li><a href="proposed-faculties.html" class="nhc-footer-nav-link">Proposed Faculties</a></li>
//               </ul>
//             </div>

//             <!-- Contact Info -->
//             <div class="nhc-footer-nav-section">
//               <h4 class="nhc-footer-nav-title">Get in Touch</h4>
//               <div class="nhc-footer-contact-grid">
//                 <div class="nhc-footer-contact-item">
//                   <svg class="nhc-footer-contact-icon" viewBox="0 0 24 24">
//                     <path d="M12 2C8 2 5 5 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-4-3-7-7-7zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5z"/>
//                   </svg>
//                   <div>
//                     <div class="nhc-footer-contact-label">Address</div>
//                     <div class="nhc-footer-contact-text">M 9-10, Shekhar Central, AB Road, Manorama Ganj, Indore, MP</div>
//                   </div>
//                 </div>
//                 <div class="nhc-footer-contact-item">
//                   <svg class="nhc-footer-contact-icon" viewBox="0 0 24 24">
//                     <path d="M6.6 10.8c1.2 2.4 3.2 4.4 5.6 5.6l2-2c.2-.2.6-.3.9-.2 1 .3 2 .5 3 .5.5 0 .9.4.9.9V19c0 .5-.4.9-.9.9C9.9 19.9 4.1 14.1 4.1 6.9c0-.5.4-.9.9-.9H7c.5 0 .9.4.9.9 0 1 .2 2 .5 3 .1.3 0 .7-.2.9l-1.6 2z"/>
//                   </svg>
//                   <div>
//                     <div class="nhc-footer-contact-label">Phone</div>
//                     <div class="nhc-footer-contact-text">+91 0731 424 5597<br>+91 93021 23067</div>
//                   </div>
//                 </div>
//                 <div class="nhc-footer-contact-item">
//                   <svg class="nhc-footer-contact-icon" viewBox="0 0 24 24">
//                     <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5z"/>
//                   </svg>
//                   <div>
//                     <div class="nhc-footer-contact-label">Email</div>
//                     <div class="nhc-footer-contact-text">nhc.indocon26@gmail.com</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       <!-- Bottom Bar -->
//       <div class="nhc-footer-bottom">
//         <div class="nhc-footer-container">
//           <div class="nhc-footer-bottom-content">
//             <div class="nhc-footer-bottom-left">
//               <p>© 2025 3rd National Hip Course INDOCON 2026 (AOSI). All Rights Reserved.</p>
//             </div>
//             <div class="nhc-footer-bottom-center">
//               <nav class="nhc-footer-social" aria-label="Social Media">
//                 <a href="#" class="nhc-footer-social-link" aria-label="Facebook">
//                   <svg viewBox="0 0 24 24"><path d="M22 12.06C22 6.48 17.52 2 12 2S2 6.48 2 12.06c0 5.01 3.66 9.17 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.77 8.44-4.93 8.44-9.94z"/></svg>
//                 </a>
//                 <a href="#" class="nhc-footer-social-link" aria-label="Instagram">
//                   <svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.51 5.51 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm5.75-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z"/></svg>
//                 </a>
//                 <a href="#" class="nhc-footer-social-link" aria-label="X">
//                   <svg viewBox="0 0 24 24"><path d="M3 3h4.7l4.3 6.1L16.1 3H21l-7.2 9.5L21 21h-4.7l-5-7.1L7.9 21H3l7.5-8.7z"/></svg>
//                 </a>
//                 <a href="#" class="nhc-footer-social-link" aria-label="YouTube">
//                   <svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .6 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.6 15.5v-7l6 3.5z"/></svg>
//                 </a>
//               </nav>
//             </div>
//             <div class="nhc-footer-bottom-right">
//               <p>Developed by <a href="https://codeshor.com" target="_blank" rel="noopener">CODESHOR.COM</a></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   `;
// })();