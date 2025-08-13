
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

        const whatsappUrl = `https://wa.me/7355227127?text=${whatsappMessage}`;
        window.open(whatsappUrl, '_blank');
    });
}