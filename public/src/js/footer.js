// Footer injection and initialization
(function () {
  'use strict';

  // Footer HTML template
  const footerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <!-- Conference Info Section -->
          <div class="footer-section">
            <div class="footer-logo">
              <span style="font-weight: 700; font-size: 18px;">IndoCon</span>
            </div>
            <h3>Conference Secretariat</h3>
            <p style="font-weight: 600; margin-bottom: 8px;">Dr Arjun Jain</p>
            <div class="secretary-info">
              <p><i class="fas fa-map-marker-alt" style="margin-right: 8px;"></i>205, Sahijeevan Nagar Opposite Durgadas Statue, Gopur chouraha, Ahead Annapurna mandir, Indore (M.P.) - 452009</p>
              <p><i class="fas fa-phone" style="margin-right: 8px;"></i>+91 - 0731 424 5597</p>
            </div>
            <div class="social-links">
              <a href="https://www.facebook.com/people/Nhc-Indocon/61581078035124/?mibextid=rS40aB7S9Ucbxw6v" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/nhc.indocon2026?utm_source=qr" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
              <a href="https://x.com/NHC_INDOCON26?t=J-ru3-6_01mgYd-tPtgNAA&s=08" aria-label="Twitter"><i class="fab fa-x-twitter"></i></a>
              <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
            </div>
          </div>

          <!-- Quick Links Section -->
          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul class="quick-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="index.html">About NHC IndoCon</a></li>
              <li><a href="index.html">About Indore</a></li>
              <li><a href="index.html">Venue & Travel</a></li>
              <li><a href="contact.html">Contact Us</a></li>
              <li><a href="form.html">Registration</a></li>
            </ul>
          </div>

          <!-- Contact Section -->
          <div class="footer-section">
            <h3>Contact Us</h3>
            <ul class="contact-info">
              <li>
                <i class="fas fa-map-marker-alt"></i>
                <span>M 9-10, Shekhar Central, AB Road, Manorama Ganj, Indore, Madhya Pradesh, 452001</span>
              </li>
              <li>
                <i class="fas fa-phone"></i>
                <div>
                  <a href="tel:+917314245597">+91 : 0731 424 5597</a><br>
                  <a href="tel:+919302123067">+91 93021 23067</a>
                </div>
              </li>
              <li>
                <i class="fas fa-envelope"></i>
                <a href="mailto:nhc.indocon26@gmail.com">nhc.indocon26@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="container">
          <p>&copy; 2025 3RD NATIONAL HIP COURSE INDOCON 2026,(AOSI) All Rights Reserved | Developed By <a href="https://www.codeshor.com/" target="_blank">CODEHSOR.COM</a></p>
        </div>
      </div>
    </footer>
  `;

  // Function to inject footer into DOM
  function injectFooter() {
    const footerRoot = document.getElementById('nhc-footer-root');
    if (footerRoot) {
      footerRoot.innerHTML = footerHTML;
      initializeFooter();
    } else {
      console.error('Footer root element not found!');
    }
  }

  // Function to initialize footer functionality
  function initializeFooter() {
    // Smooth scroll for navigation links
    const quickLinks = document.querySelectorAll('.quick-links a');
    quickLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });

    // Add animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const footerSections = document.querySelectorAll('.footer-section');
    footerSections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(section);
    });

    // Social media hover effect enhancement
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
      link.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-3px) rotate(5deg)';
      });
      link.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) rotate(0)';
      });
    });
  }

  // Check if FontAwesome is loaded, if not, load it
  function loadFontAwesome() {
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css';
      document.head.appendChild(link);
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      loadFontAwesome();
      injectFooter();
    });
  } else {
    loadFontAwesome();
    injectFooter();
  }
})();