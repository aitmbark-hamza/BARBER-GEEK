import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Initialize animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {

  // Hero Section Animations
  gsap.from('#hero .heroContent', {
    opacity: 0,
    y: 100,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top 80%',
      end: 'top 30%',
      toggleActions: 'play reverse play reverse'
    }
  });

  gsap.from('#hero .heroTitle', {
    opacity: 0,
    x: -50,
    duration: 1,
    delay: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top 80%',
      end: 'top 30%',
      toggleActions: 'play reverse play reverse'
    }
  });

  gsap.from('#hero .heroSubtitle', {
    opacity: 0,
    x: 50,
    duration: 1,
    delay: 0.4,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top 80%',
      end: 'top 30%',
      toggleActions: 'play reverse play reverse'
    }
  });

  gsap.from('#hero .heroButtons', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.6,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top 80%',
      end: 'top 30%',
      toggleActions: 'play reverse play reverse'
    }
  });

  // Services Section
  gsap.from('#services .header', {
    opacity: 0,
    y: 80,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#services',
      start: 'top 80%',
      end: 'top 30%',
      toggleActions: 'play reverse play reverse'
    }
  });

  gsap.from('#services .serviceItem', {
    opacity: 0,
    y: 60,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#services',
      start: 'top 80%',
      end: 'top 30%',
      toggleActions: 'play reverse play reverse'
    }
  });

  // Portfolio Section
  gsap.from('#portfolio .header', {
    opacity: 0,
    x: -80,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#portfolio',
      start: 'top 80%',
      end: 'top 30%',
      toggleActions: 'play reverse play reverse'
    }
  });

  gsap.from('#portfolio .portfolioItem', {
    opacity: 0,
    scale: 0.8,
    y: 40,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#portfolio',
      start: 'top 80%',
      end: 'top 30%',
      toggleActions: 'play reverse play reverse'
    }
  });

  // Team Section
  gsap.from('#team .header', {
    opacity: 0,
    y: 80,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#team',
      start: 'top 80%',
      end: 'top 30%',
      toggleActions: 'play reverse play reverse'
    }
  });

  gsap.from('#team .teamCard', {
    opacity: 0,
    x: 60,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#team',
      start: 'top 80%',
      end: 'top 30%',
      toggleActions: 'play reverse play reverse'
    }
  });

  // About Section
  gsap.from('#about .header', {
    opacity: 0,
    x: -80,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#about',
      start: 'top 80%',
      end: 'top 30%',
      toggleActions: 'play reverse play reverse'
    }
  });

  gsap.from('#about .textContent', {
    opacity: 0,
    x: -60,
    duration: 1,
    delay: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#about',
      start: 'top 80%',
      end: 'top 30%',
      toggleActions: 'play reverse play reverse'
    }
  });

  gsap.from('#about .imageComplex', {
    opacity: 0,
    x: 60,
    duration: 1,
    delay: 0.4,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#about',
      start: 'top 80%',
      end: 'top 30%',
      toggleActions: 'play reverse play reverse'
    }
  });

  // Contact Section
  gsap.from('#contact .header', {
    opacity: 0,
    y: 80,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#contact',
      start: 'top 80%',
      end: 'top 30%',
      toggleActions: 'play reverse play reverse'
    }
  });

  gsap.from('#contact .infoCard', {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#contact',
      start: 'top 80%',
      end: 'top 30%',
      toggleActions: 'play reverse play reverse'
    }
  });

  // Common section animations
  gsap.utils.toArray('section').forEach(section => {
    gsap.from(section.querySelector('.container'), {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
        end: 'top 40%',
        toggleActions: 'play reverse play reverse'
      }
    });
  });

  // Card/Box animations
  gsap.utils.toArray('.card, .box').forEach((element, index) => {
    gsap.from(element, {
      opacity: 0,
      y: 30,
      scale: 0.95,
      duration: 0.6,
      delay: index * 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        end: 'top 35%',
        toggleActions: 'play reverse play reverse'
      }
    });
  });

  // Text animations
  gsap.utils.toArray('.text, p, .description').forEach(element => {
    gsap.from(element, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        end: 'top 40%',
        toggleActions: 'play reverse play reverse'
      }
    });
  });

  // Image animations
  gsap.utils.toArray('img').forEach(element => {
    gsap.from(element, {
      opacity: 0,
      scale: 1.1,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        end: 'top 35%',
        toggleActions: 'play reverse play reverse'
      }
    });
  });

});
