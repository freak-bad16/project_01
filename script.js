// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navList = document.querySelector('.nav-list');

mobileMenuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Dropdown Menu Functionality
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    const dropdownLink = dropdown.querySelector('a');
    
    // Desktop hover functionality
    dropdown.addEventListener('mouseenter', () => {
        if (window.innerWidth > 768) {
            dropdownMenu.style.opacity = '1';
            dropdownMenu.style.visibility = 'visible';
            dropdownMenu.style.transform = 'translateY(0)';
        }
    });
    
    dropdown.addEventListener('mouseleave', () => {
        if (window.innerWidth > 768) {
            dropdownMenu.style.opacity = '0';
            dropdownMenu.style.visibility = 'hidden';
            dropdownMenu.style.transform = 'translateY(-10px)';
        }
    });
    
    // Mobile click functionality
    dropdownLink.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav') && !e.target.closest('.mobile-menu-btn')) {
        navList.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    }
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = question.querySelector('i');

    question.addEventListener('click', () => {
        // Close all other FAQ items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
                const otherIcon = otherItem.querySelector('.faq-question i');
                otherIcon.className = 'fas fa-chevron-right';
            }
        });

        // Toggle current item
        item.classList.toggle('active');
        
        // Toggle icon
        if (item.classList.contains('active')) {
            icon.className = 'fas fa-chevron-down';
        } else {
            icon.className = 'fas fa-chevron-right';
        }
    });
});

// Testimonials Slider
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

function showSlide(index) {
    testimonialCards.forEach((card, i) => {
        if (i === index) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % testimonialCards.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + testimonialCards.length) % testimonialCards.length;
    showSlide(currentSlide);
}

// Initialize slider
showSlide(0);

// Add event listeners for slider buttons
if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
}

// Auto-slide testimonials
setInterval(nextSlide, 5000);

// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header Background on Scroll
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'white';
        header.style.backdropFilter = 'none';
    }
});

// Form Validation and Submission
// WhatsApp redirect for contact form
const contactForm = document.querySelector('.contact-form-wrapper');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = contactForm.querySelector('input[type="text"]').value.trim();
        const email = contactForm.querySelector('input[type="email"]').value.trim();
        const service = contactForm.querySelector('select').value.trim();
        const message = contactForm.querySelector('textarea').value.trim();

        let whatsappMessage = `Hello, I would like to get in touch!%0A`;
        if (name) whatsappMessage += `Name: ${encodeURIComponent(name)}%0A`;
        if (email) whatsappMessage += `Email: ${encodeURIComponent(email)}%0A`;
        if (service && service !== 'Select Service') whatsappMessage += `Service: ${encodeURIComponent(service)}%0A`;
        if (message) whatsappMessage += `Message: ${encodeURIComponent(message)}%0A`;

        const whatsappUrl = `https://wa.me/918789772081?text=${whatsappMessage}`;
        window.open(whatsappUrl, '_blank');
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Email signup form
const emailSignupForm = document.querySelector('.email-signup');
const emailInput = document.querySelector('.email-input');

if (emailSignupForm && emailInput) {
    const emailSignupBtn = emailSignupForm.querySelector('.contact-btn');
    
    emailSignupBtn.addEventListener('click', () => {
        const email = emailInput.value;
        
        if (!email) {
            alert('Please enter your email address.');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate email signup
        emailSignupBtn.textContent = 'Subscribed!';
        emailSignupBtn.style.background = '#4CAF50';
        
        setTimeout(() => {
            emailInput.value = '';
            emailSignupBtn.textContent = 'Contact us';
            emailSignupBtn.style.background = '#2E7D32';
        }, 3000);
    });
}

// Intersection Observer for Animations
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

// Observe elements for animation
const animatedElements = document.querySelectorAll('.service-card, .team-card, .testimonial-card, .why-choose-card');

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Counter Animation for Trust Indicators
function animateCounters() {
    const counters = document.querySelectorAll('.number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        let current = 0;
        const increment = target / 50;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current).toString().padStart(2, '0');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toString().padStart(2, '0');
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when Why Choose Us section is visible
const whyChooseUsSection = document.querySelector('.why-choose-us');
if (whyChooseUsSection) {
    const whyChooseUsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                
                // Animate FAQ cards with staggered effect
                const faqCards = entry.target.querySelectorAll('.why-choose-card');
                faqCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 200);
                });
                
                whyChooseUsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    whyChooseUsObserver.observe(whyChooseUsSection);
}

// Button Click Effects
const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .contact-btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple effect styles
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .btn-primary, .btn-secondary, .contact-btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Service Card Flip Effects
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    const cardInner = card.querySelector('.service-card-inner');
    let isFlipped = false;
    
    // Desktop hover effect
    card.addEventListener('mouseenter', () => {
        if (window.innerWidth > 768) {
            card.classList.add('flipped');
        }
    });
    
    card.addEventListener('mouseleave', () => {
        if (window.innerWidth > 768) {
            card.classList.remove('flipped');
        }
    });
    
    // Mobile/Tablet click effect
    card.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            isFlipped = !isFlipped;
            if (isFlipped) {
                card.classList.add('flipped');
            } else {
                card.classList.remove('flipped');
            }
        }
    });
    
    // Reset flip on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            isFlipped = false;
            card.classList.remove('flipped');
        }
    });
    
    // Add touch support for mobile devices
    let touchStartY = 0;
    let touchEndY = 0;
    
    card.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    });
    
    card.addEventListener('touchend', (e) => {
        touchEndY = e.changedTouches[0].clientY;
        const touchDiff = Math.abs(touchStartY - touchEndY);
        
        // Only trigger flip if it's a tap (not a scroll)
        if (touchDiff < 10 && window.innerWidth <= 768) {
            isFlipped = !isFlipped;
            if (isFlipped) {
                card.classList.add('flipped');
            } else {
                card.classList.remove('flipped');
            }
        }
    });
    
    // Add keyboard support for accessibility
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (window.innerWidth <= 768) {
                isFlipped = !isFlipped;
                if (isFlipped) {
                    card.classList.add('flipped');
                } else {
                    card.classList.remove('flipped');
                }
            }
        }
    });
    
    // Make cards focusable for accessibility
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'Service card - click or press Enter to flip');
});

// Founder Section Animations
const founderSection = document.querySelector('.founder');
const specItems = document.querySelectorAll('.spec-item');

if (founderSection) {
    const founderObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate spec items with staggered delay
                specItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('animate');
                    }, index * 200);
                });
                
                founderObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    founderObserver.observe(founderSection);
}

// Team Card Hover Effects
const teamCards = document.querySelectorAll('.team-card');

teamCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
});

// Trust Item Hover Effects
const trustItems = document.querySelectorAll('.trust-item');

trustItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const icon = item.querySelector('.trust-icon');
        icon.style.transform = 'scale(1.1)';
        icon.style.background = '#FFEB3B';
    });
    
    item.addEventListener('mouseleave', () => {
        const icon = item.querySelector('.trust-icon');
        icon.style.transform = 'scale(1)';
        icon.style.background = '#FFD700';
    });
});

// Loading Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #2E7D32;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    z-index: 1000;
    transition: all 0.3s ease;
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mobile Menu Styles
const mobileMenuStyles = `
    @media (max-width: 768px) {
        .nav-list {
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            background: white;
            flex-direction: column;
            padding: 2rem;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transform: translateY(-100%);
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 999;
        }
        
        .nav-list.active {
            transform: translateY(0);
            opacity: 1;
        }
        
        .mobile-menu-btn.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-menu-btn.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-btn.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
`;

const mobileStyle = document.createElement('style');
mobileStyle.textContent = mobileMenuStyles;
document.head.appendChild(mobileStyle); 

// Enhanced Animation System
document.addEventListener('DOMContentLoaded', () => {
  // Initial hero animations
  const fadeEls = document.querySelectorAll('.animate-fade-in');
  const slideEls = document.querySelectorAll('.animate-slide-up');
  
  fadeEls.forEach((el, i) => {
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.animationPlayState = 'running';
    }, i * 200);
  });
  
  slideEls.forEach((el, i) => {
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.animationPlayState = 'running';
    }, i * 200 + 200);
  });

  // Scroll-triggered animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        
        // Add staggered animations for child elements
        const children = entry.target.querySelectorAll('.animate-slide-up, .animate-fade-in');
        children.forEach((child, index) => {
          setTimeout(() => {
            child.style.opacity = 1;
            child.style.animationPlayState = 'running';
          }, index * 150);
        });
      }
    });
  }, observerOptions);

  // Observe all scroll-triggered elements
  const scrollElements = document.querySelectorAll('.animate-on-scroll');
  scrollElements.forEach(el => observer.observe(el));

  // Enhanced hover animations
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Trust items hover effects
  const trustItems = document.querySelectorAll('.trust-item');
  trustItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const icon = item.querySelector('.trust-icon i');
      if (icon) {
        icon.style.transform = 'scale(1.2)';
        icon.style.color = '#007F24';
      }
    });
    
    item.addEventListener('mouseleave', () => {
      const icon = item.querySelector('.trust-icon i');
      if (icon) {
        icon.style.transform = 'scale(1)';
        icon.style.color = '';
      }
    });
  });

  // Spec items hover effects
  const specItems = document.querySelectorAll('.spec-item');
  specItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const number = item.querySelector('.spec-number');
      if (number) {
        number.style.transform = 'scale(1.1)';
        number.style.color = '#007F24';
      }
    });
    
    item.addEventListener('mouseleave', () => {
      const number = item.querySelector('.spec-number');
      if (number) {
        number.style.transform = 'scale(1)';
        number.style.color = '';
      }
    });
  });

  // Enhanced button animations
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-2px)';
      button.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0)';
      button.style.boxShadow = '';
    });
  });

  // Image hover effects
  const images = document.querySelectorAll('.about-image img, .founder-image img');
  images.forEach(img => {
    img.addEventListener('mouseenter', () => {
      img.style.transform = 'scale(1.05)';
    });
    
    img.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
    });
  });
});


const servicesData = [
  {
    title: "Pain Management",
    description: "Natural therapies to relieve chronic and acute pain without invasive procedures.",
    fullDetails: "Our Pain Management program uses physiotherapy, manual therapy, stretching, and lifestyle modifications to address the root cause of chronic pain, including joint pain, back pain, frozen shoulder, and muscle stiffness.",
    icon: "fas fa-hand-holding-medical",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    link: "#pain-management"
  },
  {
    title: "Weight Reduction",
    description: "Personalized natural methods for sustainable and healthy weight loss.",
    fullDetails: "We create customized weight loss plans involving natural detox, diet changes, physical activity, and targeted therapies to help you reduce excess weight while maintaining energy levels and overall health.",
    icon: "fas fa-weight",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    link: "#weight-reduction"
  },
  {
    title: "Personalized Nutrition Therapy",
    description: "Diet plans tailored to your health needs, lifestyle, and wellness goals.",
    fullDetails: "Our Personalized Nutrition Therapy focuses on creating a nutrition plan that aligns with your medical conditions, lifestyle, and personal goals. We emphasize whole, natural foods to promote long-term health and vitality.",
    icon: "fas fa-utensils",
    image: "https://www.samudranaturopathy.com/wp-content/uploads/2023/11/Diet-Therapy-at-Samudra-Naturopathy.png",
    link: "#nutrition-therapy"
  },
  {
    title: "Sciatica Care",
    description: "Relief from sciatic nerve pain using non-invasive, natural methods.",
    fullDetails: "Our Sciatica Care program combines physiotherapy, targeted exercises, and posture correction techniques to reduce nerve compression and pain, improving mobility and quality of life.",
    icon: "fas fa-walking",
    image: "https://hssh.health/wp-content/uploads/2023/11/Sciatica-Pain.jpg",
    link: "#sciatica-care"
  },
  {
    title: "Edema & Swelling Treatment",
    description: "Effective natural solutions for fluid retention and swelling in the body.",
    fullDetails: "Our Edema & Swelling Treatment uses lymphatic drainage techniques, herbal remedies, and dietary adjustments to reduce fluid buildup, improve circulation, and restore comfort.",
    icon: "fas fa-water",
    image: "https://www.beebehealthcare.org/sites/default/files/styles/690x350/public/2018-05/1502977424788.jpg.webp?itok=cIcn4Oo5",
    link: "#edema-treatment"
  },
  {
    title: "Pelvic Floor Rehabilitation",
    description: "Specialized therapy for strengthening pelvic muscles and improving function.",
    fullDetails: "Our Pelvic Floor Rehabilitation program is designed for women experiencing urinary incontinence, postnatal weakness, or pelvic pain. We use targeted exercises and lifestyle changes to restore pelvic health.",
    icon: "fas fa-female",
    image: "https://www.fyzical.com/upper-arlington-oh/client/1839/newsmedia/img/16926/pelvic_floor.jpeg",
    link: "#pelvic-rehabilitation"
  },
  {
    title: "Pregnancy Fitness Care",
    description: "Safe and effective prenatal fitness programs for expecting mothers.",
    fullDetails: "We offer prenatal exercises, breathing techniques, and nutritional guidance to support healthy pregnancy, reduce delivery complications, and promote baby’s well-being.",
    icon: "fas fa-baby",
    image: "https://www.prohance.in/wp-content/uploads/2021/08/exercise-in-pregnancy-banner-updated-768x452.jpg",
    link: "#pregnancy-fitness"
  },
  {
    title: "Postnatal Recovery Programs",
    description: "Holistic recovery plans for new mothers to regain strength and vitality.",
    fullDetails: "Our postnatal recovery program includes gentle exercises, core strengthening, emotional support, and nutrition plans to help new mothers restore their health and energy.",
    icon: "fas fa-praying-hands",
    image: "https://media.istockphoto.com/id/1361756860/photo/unrecognizable-female-doctor-gestures-while-advising-new-mom.jpg?s=612x612&w=0&k=20&c=AF8HOtqSN-N8qMojJZ7F6MkJxAQvncTxImUawkbpPrY=",
    link: "#postnatal-recovery"
  },
  {
    title: "Tummy Fat Reduction",
    description: "Targeted therapies to reduce abdominal fat and improve body tone.",
    fullDetails: "We use a combination of natural treatments, dietary guidance, and exercises to specifically target and reduce stubborn tummy fat while improving overall core strength.",
    icon: "fas fa-heartbeat",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5g67OGGS4kvlmUIVUEwFelSK28twgW3IuwA&s",
    link: "#tummy-fat-reduction"
  },
  {
    title: "Toning & Tightening Therapies",
    description: "Natural therapies to improve skin elasticity and muscle tone.",
    fullDetails: "Our toning and tightening programs include herbal treatments, massages, and exercises to enhance muscle definition, skin firmness, and overall body shape.",
    icon: "fas fa-spa",
    image: "https://clinic33.co.uk/wp-content/uploads/2021/08/skin-tightening-treatment-clinic33-005.jpg",
    link: "#toning-therapies"
  },
  {
    title: "Diabetes Care",
    description: "Natural, non-invasive approach to manage and reverse diabetes symptoms.",
    fullDetails: "Our diabetes care program uses diet modifications, herbal support, and lifestyle changes to control blood sugar levels naturally, reducing dependency on medication.",
    icon: "fas fa-syringe",
    image: "https://www.portea.com/static/b8cc42703c6b6613246dc6e0c4e8929b/b728a/Diabetes-Care-Plan.jpg",
    link: "#diabetes-care"
  },
  {
    title: "Thyroid Disorders",
    description: "Holistic methods to balance thyroid function and restore energy levels.",
    fullDetails: "We use dietary corrections, herbal remedies, and stress management to naturally regulate thyroid hormones and improve overall health.",
    icon: "fas fa-balance-scale",
    image: "https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/thyroid-cancer/thyroid-conditions-teaser-image.jpg",
    link: "#thyroid-disorders"
  },
  {
    title: "High Blood Pressure",
    description: "Natural care programs to control and manage hypertension.",
    fullDetails: "Our hypertension management uses lifestyle adjustments, yoga, breathing exercises, and nutrition plans to reduce blood pressure and support heart health.",
    icon: "fas fa-heart",
    image: "https://onlinefirstaid.com/wp-content/uploads/2019/02/blood-pressure-scaled.jpeg",
    link: "#high-blood-pressure"
  },
  {
    title: "Migraine Relief",
    description: "Drug-free migraine management for lasting relief.",
    fullDetails: "We focus on identifying migraine triggers and using natural remedies like acupressure, diet changes, and relaxation techniques to reduce frequency and severity.",
    icon: "fas fa-brain",
    image: "https://drkunalbahrani.com/wp-content/uploads/2024/07/Tips-on-Living-with-Migraine-Headache-Dr-Kunal-Bahrani.jpg",
    link: "#migraine-relief"
  },
  {
    title: "PCOD / PCOS Care",
    description: "Comprehensive natural therapy for hormonal balance and fertility.",
    fullDetails: "We offer lifestyle changes, herbal remedies, and specialized exercises to manage PCOD/PCOS symptoms and improve reproductive health.",
    icon: "fas fa-venus",
    image: "https://www.altiushospital.com/wp-content/uploads/2024/04/PCOD-scaled-e1714104188893-1024x425.webp",
    link: "#pcod-pcos"
  },
  {
    title: "Urinary Incontinence",
    description: "Strengthening pelvic health to control bladder function naturally.",
    fullDetails: "Our urinary incontinence program combines pelvic floor exercises, nutrition, and non-invasive therapies to restore control and comfort.",
    icon: "fas fa-restroom",
    image: "https://www.healthcommunitiesproviderservices.com/wp-content/uploads/2022/09/urinary-incontince-3-GettyImages-1333948548.jpg",
    link: "#urinary-incontinence"
  },
  {
    title: "Infertility Support",
    description: "Natural methods to improve fertility and reproductive health.",
    fullDetails: "We address infertility issues through hormone balancing, nutrition therapy, stress reduction, and natural treatments to improve conception chances.",
    icon: "fas fa-baby-carriage",
    image: "https://jsshospital.in/wp-content/uploads/2025/07/Comprehensive-Infertility-Care-at-JSS-Hospital.png",
    link: "#infertility-support"
  },
  {
    title: "Constipation & High Cholesterol",
    description: "Root-cause solutions for digestive and heart health.",
    fullDetails: "We use diet changes, herbal remedies, and lifestyle adjustments to treat constipation, lower cholesterol, and improve overall well-being.",
    icon: "fas fa-leaf",
    image: "https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/constipation/woman-stomache-diagram-teaser.jpg",
    link: "#constipation-cholesterol"
  }
];



const servicesGrid = document.getElementById("servicesGrid");

servicesData.forEach((service, index) => {
  const cardHTML = `
    <div class="service-card animate-slide-up" style="animation-delay: ${0.2 + index * 0.2}s">
      <div class="service-card-inner">
        <div class="service-card-front">
          <div class="service-image">
            <img src="${service.image}" alt="${service.title}">
          </div>
          <div class="service-title" style="background-color: #2E7032;">
            <h3 style="color: white;">${service.title}</h3>
          </div>
        </div>
        <div class="service-card-back">
          <div class="service-icon">
            <i class="${service.icon}"></i>
          </div>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          <a href="service_details.html?index=${index}" class="service-link">View more details</a>
        </div>
      </div>
    </div>
  `;
  servicesGrid.insertAdjacentHTML("beforeend", cardHTML);
});




 // When "Get started" is clicked → send email to WhatsApp
    document.getElementById("getStartedBtn").addEventListener("click", function () {
        let email = document.getElementById("emailInput").value.trim();
        if (email) {
            let message = `Hello! My email is ${email}`;
            let phoneNumber = "918789772081"; // country code + number
            let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, "_blank");
        } else {
            alert("Please enter your email first.");
        }
    });

    // When "Call" is clicked → start phone call
    document.getElementById("callBtn").addEventListener("click", function () {
        window.location.href = "tel:+917355227127";
    });


    document.getElementById("know-more-btn").addEventListener("click", function () {
    window.location.href = "about_us.html";
});
