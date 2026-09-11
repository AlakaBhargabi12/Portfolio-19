/**
 * Main Application Orchestrator
 * Controls navigation, scroll effects, intersection observer, email copy, form validation
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // 1. Elements
  const navbar = document.querySelector('.navbar');
  const navToggle = document.getElementById('nav-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-drawer .nav-link');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('back-to-top');
  const copyEmailBtn = document.getElementById('btn-copy-email');
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast-feedback');

  // 2. Navbar Scroll Visual Change & Back to Top Toggle
  function handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset;

    if (navbar) {
      if (scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }

    // Scroll spy for active navigation item
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // 3. Mobile Navigation Drawer
  if (navToggle && mobileDrawer) {
    navToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      navToggle.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', false);
      });
    });
  }

  // 4. Back to Top Smooth Scroll
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 5. Copy Email to Clipboard
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = 'alakabhargabisahu@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        const originalText = copyEmailBtn.innerText;
        copyEmailBtn.innerText = 'Copied!';
        copyEmailBtn.style.color = 'var(--accent-cyan)';
        showToast('Email address copied to clipboard!');

        setTimeout(() => {
          copyEmailBtn.innerText = originalText;
          copyEmailBtn.style.color = '';
        }, 2500);
      } catch (err) {
        window.location.href = `mailto:${email}`;
      }
    });
  }

  // 6. Interactive Contact Form Submission & Toast
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const messageInput = document.getElementById('contact-message');

      if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        showToast('Please complete all required fields.');
        return;
      }

      // Simple email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        showToast('Please enter a valid email address.');
        return;
      }

      const submitBtn = contactForm.querySelector('.btn-submit-message');
      const originalBtnText = submitBtn.innerText;
      submitBtn.innerText = 'Transmitting...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerText = 'Message Transmitted!';
        showToast('Thank you! Your message has been received.');
        contactForm.reset();

        setTimeout(() => {
          submitBtn.innerText = originalBtnText;
          submitBtn.disabled = false;
        }, 3000);
      }, 900);
    });
  }

  function showToast(message) {
    if (!toast) return;
    const toastText = document.getElementById('toast-text');
    if (toastText) toastText.innerText = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  // 7. Scroll Reveal via Intersection Observer
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }
});
