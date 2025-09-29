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
    contactForm.addEventListener('submit', function (e) {
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

        const whatsappUrl = `https://wa.me/7355227127?text=${whatsappMessage}`;
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
    button.addEventListener('click', function (e) {
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



const servicesData = {
    therapies: [
        {
            title: "Weight Management",
            description: "More than weight loss/gain – it’s about balance, energy & long-term health. Personalized plans with diet, exercise, detox & natural therapies to burn fat, boost energy, and prevent lifestyle diseases.",
            icon: "⚖️",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFm9PzHj3d0qbkPi_uyerodjcVRbJphgeJoQ&s"
        },
        {
            title: "Diet & Nutrition Therapy",
            description: "At Kapsveda, we use food as medicine – not strict dieting. Our plans heal the body, balance hormones, boost energy, and prevent lifestyle diseases.",
            icon: "🥗",
            image: "https://www.news-medical.net/images/news/ImageForNews_746923_16830301277682285.jpg"
        },
        {
            title: "Edema & Swelling Treatment",
            description: "Natural care for swelling by targeting fluid retention & poor circulation. With lymphatic drainage, herbs & diet support, we reduce heaviness and restore comfort. Safe, simple & doctor-supervised relief.",
            icon: "💧",
            image: "https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2013/11/15/17/37/ds01005_-ds00223_-ds00256_-ds00590_-ds00429_-ds00997_-ds01035_im01073_mcdc7_compressionstockingsthu_jpg.jpg"
        },
        {
            title: "Pelvic Floor Rehabilitation",
            description: "Specialized therapy to strengthen pelvic muscles, improve bladder control, relieve pain, and restore confidence in both men & women. Safe, natural & doctor-guided care.",
            icon: "🧘",
            image: "https://sportsrehab.ch/assets/images/services/riabilitazione-pavimento-pelvico.jpg?v=20250531"
        },
        {
            title: "Pregnancy Fitness & Garbhsanskar Care",
            description: "More than fitness – a complete wellness journey for mother & baby. Safe yoga, diet, meditation & Garbhsanskar classes for healthy pregnancy. From preconception (Beej Shuddhi) to post-delivery care – holistic & doctor-supervised.",
            icon: "🤰",
            image: "https://www.mumzcareworld.com/wp-content/uploads/2024/09/side-view-pregnant-woman-meditating-with-copy-space-min-scaled-e1726384675925.jpg"
        },
        {
            title: "Infertility Support & Fertility Wellness",
            description: "Holistic & natural solutions to improve fertility in both men & women. ✔ Hormone balance | ✔ Nutrition & Yoga | ✔ Stress-free parenthood. Boost natural conception & IVF/IUI success – 100% safe & doctor-supervised.",
            icon: "🌸",
            image: "https://nyulangone.org/files/wellness-inline.jpg"
        },
        {
            title: "Postnatal Recovery Programs",
            description: "Holistic healing for new mothers – gentle exercises, pelvic floor care, stress relief & nutrition. Restores energy, reduces pain & boosts milk supply naturally. Safe • Doctor-supervised • Mother-focused 💚",
            icon: "👩‍🍼",
            image: "https://media.post.rvohealth.io/wp-content/uploads/2024/01/8144-Postpartum_Recovery_Time-1296x728-Header-1296x728-copy.png"
        },
        {
            title: "Tummy Fat / Visceral Fat Reduction",
            description: "Safe & natural program to burn stubborn belly fat, tone your core, and restore balance. ✅ Detox & diet guidance ✅ Core strengthening & lifestyle correction 👉 100% natural therapy doctor-supervised for a slim, healthy tummy.",
            icon: "🏋️",
            image: "https://www.vucare.com/wp-content/uploads/2023/01/Non-surgical-fat-removal-from-stomach-Blog-600x350-1.png"
        },
        {
            title: "Toning & Tightening Therapies",
            description: "Safe herbal treatments, massages & exercises to firm skin, tone muscles, and enhance body shape. 👉 Natural, effective & doctor-guided care for lasting confidence.",
            icon: "✨",
            image: "https://visagemedicalregina.ca/wp-content/uploads/image-1.jpeg"
        },
        {
            title: "Women’s Wellness – Complete Care Under One Roof",
            description: "Natural and integrative solutions for every stage of a woman’s life.",
            icon: "🌸",
            image: "https://static.wixstatic.com/media/2c31ecb592694dc0bb4b720958e21234.jpg/v1/fill/w_568,h_816,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2c31ecb592694dc0bb4b720958e21234.jpg",
        },
        {
            "title": "Urinary Incontinence Care",
            "description": "Leakage problem in men & women can affect confidence & daily life – but it’s treatable! Pelvic floor rehab, nutrition & safe therapies for natural bladder control.",
            "icon": "💧",
            "image": "https://www.browardurologycenter.com/wp-content/uploads/2022/09/urinary-incontince-3-GettyImages-1333948548.jpg"
        },
        {
            "title": "Constipation & Gut Reset",
            "description": "Kapsveda’s holistic program heals your gut, relieves constipation, lowers cholesterol & boosts metabolism. Safe, natural & doctor-guided care for long-lasting digestive wellness.",
            "icon": "🌿",
            "image": "https://windsordigestivehealth.com/wp-content/uploads/2024/10/Gut-Health.jpeg"
        },
        {
            "title": "Migraine Relief",
            "description": "Natural & non-invasive care to manage migraine at the root. Acupressure, diet & yoga for lasting relief. Live pain-free, focused & stress-free with Kapsveda.",
            "icon": "🌸",
            "image": "https://images.theconversation.com/files/472113/original/file-20220701-26-9o11ui.jpg?ixlib=rb-4.1.0&rect=7%2C22%2C5084%2C3359&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
        },
        {
            "title": "Thyroid Care",
            "description": "Not just medicine — we heal the root cause of thyroid. Balanced hormones, healthy weight & renewed energy — naturally, side-effect free.",
            "icon": "🌀",
            "image": "https://www.uclahealth.org/sites/default/files/styles/portrait_3x4_012000_360x480/public/images/62/thyroid-gland-illustration.png?h=77fcbfdd&f=362fd9d1&itok=6sVAUFp8"
        }
    ]
};



const servicesGrid = document.getElementById("servicesGrid");

// loop through therapies array
servicesData.therapies.forEach((service, index) => {
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
          <div class="service-icon" style="font-size: 2rem;">
            ${service.icon}  
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
        let phoneNumber = "918601969077"; // country code + number
        let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, "_blank");
    } else {
        alert("Please enter your email first.");
    }
});

// When "Call" is clicked → start phone call
document.getElementById("callBtn").addEventListener("click", function () {
    window.location.href = "tel:+918601969077";
});


document.getElementById("know-more-btn").addEventListener("click", function () {
    window.location.href = "about_us.html";
});
