const servicesData = [
  {
    title: "Garbhsanskar Therapy (गर्भसंस्कार थेरेपी)",
    description: "Holistic program for baby brain development and values enrichment during pregnancy, ensuring a healthy start for both mother and child.",
    fullDetails: "Our Garbhsanskar Therapy is a specialized prenatal program that focuses on the physical, emotional, and spiritual well-being of both the mother and child. It includes meditation, music therapy, yoga, and dietary recommendations to promote healthy brain development and instill positive values even before birth.",
    icon: "fas fa-baby",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    link: "#garbhsanskar-therapy"
  },
  {
    title: "Prenatal & Postnatal Yoga (गर्भपूर्व व प्रसवोत्तर योग)",
    description: "Safe and gentle yoga routines designed to promote a healthy pregnancy, aid in delivery, and support faster postnatal recovery.",
    fullDetails: "Our Prenatal & Postnatal Yoga sessions are tailored to support women before and after childbirth. Prenatal yoga improves flexibility, strengthens pelvic muscles, and reduces stress. Postnatal yoga helps in regaining core strength, reducing back pain, and restoring energy levels for new mothers.",
    icon: "fas fa-praying-hands",
    image: "https://images.unsplash.com/photo-1603381445086-4ee2d5d9c77d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    link: "#prenatal-postnatal-yoga"
  },
  {
    title: "Migraine & Thyroid Natural Management",
    description: "Natural healing methods to manage migraine headaches and thyroid issues without medication, improving energy and hormonal balance.",
    fullDetails: "We use a holistic approach to control migraines and thyroid disorders without relying on medication. This includes dietary changes, stress management, acupressure, herbal remedies, and lifestyle modifications to regulate hormonal function and enhance overall health.",
    icon: "fas fa-brain",
    image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    link: "#migraine-thyroid-management"
  },
  {
    title: "Female Wellness (स्त्री स्वास्थ्य देखभाल)",
    description: "Specialized care for PCOD, menstrual irregularities, infertility, and hormonal imbalances to restore overall women’s health.",
    fullDetails: "Our Female Wellness program addresses reproductive health issues like PCOD, irregular periods, hormonal imbalance, and infertility. We use a blend of natural therapies, nutrition, and yoga to promote balanced hormones and overall well-being.",
    icon: "fas fa-female",
    image: "https://images.unsplash.com/photo-1617634667039-8a98f54ec1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    link: "#female-wellness"
  },
  {
    title: "Child Brain & Memory Boost Programs",
    description: "Engaging activities and techniques to enhance children’s focus, speech, IQ, and moral development for lifelong benefits.",
    fullDetails: "Our Child Brain & Memory Boost programs include memory exercises, focus-building games, speech improvement techniques, and moral education sessions to nurture a child’s mental and emotional development.",
    icon: "fas fa-child",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    link: "#child-brain-memory"
  },
  {
    title: "Herbal Detox & Diet Consultation",
    description: "Personalized herbal detox and diet plans for weight loss, glowing skin, and improved vitality using natural remedies.",
    fullDetails: "We create customized herbal detox programs and diet plans to cleanse the body, improve digestion, aid weight loss, and enhance skin glow. Our approach uses traditional herbs, superfoods, and lifestyle adjustments for long-lasting health benefits.",
    icon: "fas fa-leaf",
    image: "https://images.unsplash.com/photo-1505575967455-40e256f73376?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    link: "#herbal-detox-diet"
  },
  {
    title: "Pain & Rehab Therapy (दर्द व पुनर्वास चिकित्सा)",
    description: "Therapeutic solutions for joint pain, back pain, frozen shoulder, and post-surgery rehabilitation to restore mobility and comfort.",
    fullDetails: "Our Pain & Rehab Therapy is designed to relieve chronic pain, improve flexibility, and speed up recovery after injuries or surgeries. We use physiotherapy, stretching exercises, and natural treatments to restore movement and reduce discomfort.",
    icon: "fas fa-hand-holding-medical",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    link: "#pain-rehab-therapy"
  },
  {
    title: "Emotional & Mental Wellness Counseling",
    description: "Confidential counseling to manage stress, anxiety, pregnancy blues, and build confidence for a happier, balanced life.",
    fullDetails: "We offer one-on-one counseling sessions to help individuals overcome stress, anxiety, depression, and low self-esteem. Our techniques include mindfulness, guided meditation, and positive psychology for mental peace.",
    icon: "fas fa-smile-beam",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    link: "#emotional-mental-wellness"
  }
];

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceIndex = parseInt(urlParams.get('index'));
    const serviceContentContainer = document.getElementById('service-content');

    if (!isNaN(serviceIndex) && serviceIndex >= 0 && serviceIndex < servicesData.length) {
        const service = servicesData[serviceIndex];
        serviceContentContainer.innerHTML = `
            <div class="service-card-details">
              <div class="service-image-container">
                <img src="${service.image}" alt="${service.title}" class="service-detail-img">
              </div>
              <div class="service-detail-content">
                <h2 class="service-detail-title">${service.title}</h2>
                <p class="service-detail-text">${service.fullDetails}</p>
              </div>
            </div>
        `;
    } else {
        serviceContentContainer.innerHTML = '<p>Service not found. Please go back to the services page.</p>';
    }
});
