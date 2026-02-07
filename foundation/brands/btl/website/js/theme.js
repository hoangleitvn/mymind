// BTL Website - Theme Toggle
(function() {
  'use strict';

  // Initialize theme from localStorage or system preference
  function initTheme() {
    const saved = localStorage.getItem('btl-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (systemPrefersDark ? 'dark' : 'light');

    document.documentElement.setAttribute('data-theme', theme);
  }

  // Toggle theme
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('btl-theme', next);
  }

  // Set up event listeners
  function setupListeners() {
    // Theme toggle button
    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleTheme);
    }

    // Keyboard shortcut: 't' to toggle theme
    document.addEventListener('keydown', function(e) {
      if (e.key === 't' && !['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
        toggleTheme();
      }
    });

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
      if (!localStorage.getItem('btl-theme')) {
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      }
    });
  }

  // Smooth scroll for anchor links
  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // TOC scroll tracking - highlight current section
  function setupTocTracking() {
    const toc = document.querySelector('.blog-toc');
    if (!toc) return;

    const tocLinks = toc.querySelectorAll('a[href^="#"]');
    if (!tocLinks.length) return;

    // Get all section headings that TOC links to
    const sections = [];
    tocLinks.forEach(function(link) {
      const id = link.getAttribute('href').slice(1);
      const section = document.getElementById(id);
      if (section) {
        sections.push({ id: id, element: section, link: link });
      }
    });

    if (!sections.length) return;

    // Offset for fixed header
    const headerOffset = 100;

    function updateActiveLink() {
      const scrollPos = window.scrollY + headerOffset;

      // Find the current section
      let currentSection = sections[0];
      for (var i = 0; i < sections.length; i++) {
        if (sections[i].element.offsetTop <= scrollPos) {
          currentSection = sections[i];
        }
      }

      // Update active class
      tocLinks.forEach(function(link) {
        link.classList.remove('active');
      });
      if (currentSection) {
        currentSection.link.classList.add('active');
      }
    }

    // Throttle scroll events
    var ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          updateActiveLink();
          ticking = false;
        });
        ticking = true;
      }
    });

    // Initial update
    updateActiveLink();
  }

  // Initialize
  initTheme();

  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setupListeners();
      setupSmoothScroll();
      setupTocTracking();
    });
  } else {
    setupListeners();
    setupSmoothScroll();
    setupTocTracking();
  }
})();
