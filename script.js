// Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });

    // Intersection Observer for fade-in animations
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    fadeInElements.forEach(element => {
      observer.observe(element);
    });

    // Service card hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
      });
    });

    const marqueeContent = document.querySelector('.marquee-content');
    if (marqueeContent) {
      marqueeContent.addEventListener('mouseenter', () => {
        marqueeContent.style.animationPlayState = 'paused';
      });
      
      marqueeContent.addEventListener('mouseleave', () => {
        marqueeContent.style.animationPlayState = 'running';
      });
    }

    // Add mobile menu toggle
    const nav = document.querySelector('nav ul');
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('nav').appendChild(menuToggle);

    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      menuToggle.innerHTML = nav.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
    });

    // Handle contact popup
    const contactToggle = document.querySelector('.contact-toggle');
    const contactPopup = document.querySelector('.contact-popup');

    contactToggle.addEventListener('click', () => {
      contactPopup.classList.toggle('active');
    });

    // Close popup when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.floating-contact')) {
        contactPopup.classList.remove('active');
      }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });

    // Add marquee pause functionality
    const marquee = document.querySelector('.marquee');
    if (marquee) {
      marquee.addEventListener('mouseenter', () => {
        marquee.style.animationPlayState = 'paused';
      });
      
      marquee.addEventListener('mouseleave', () => {
        marquee.style.animationPlayState = 'running';
      });
    }
