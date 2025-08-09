const serviceDetailsData = [
  {
    title: "Personalized Weight Loss Programs",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    fullDetails: "Our Personalized Weight Loss Programs are meticulously crafted to provide a holistic approach to your health. We combine evidence-based dietary plans with a customized exercise regimen and natural therapies. Our programs focus on sustainable weight management, addressing individual metabolism, lifestyle, and health goals to ensure long-term success without compromising well-being."
  },
  {
    title: "Diet & Nutrition Consultation",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    fullDetails: "Get expert advice with our Diet & Nutrition Consultation services. We provide personalized dietary plans that are not just about weight loss, but also about improving overall health, managing chronic conditions like diabetes and hypertension, and enhancing energy levels. Our consultations include detailed assessments and ongoing support to help you achieve your nutritional goals."
  },
  {
    title: "Lifestyle Disease Therapy",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    fullDetails: "Our Lifestyle Disease Therapy focuses on the root causes of conditions such as diabetes, high blood pressure, and heart disease. We use a blend of natural remedies, therapeutic practices, and lifestyle modifications to manage and reverse these conditions. The goal is to empower you with the knowledge and tools to lead a healthier, disease-free life."
  },
  {
    title: "Physiotherapy",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    fullDetails: "Our Physiotherapy services offer advanced rehabilitation and pain management solutions. Whether you're recovering from an injury, managing a chronic condition, or need to improve your physical function, our certified physiotherapists use a range of techniques, including manual therapy, exercises, and electrotherapy, to help you regain mobility, reduce pain, and get back to your daily activities."
  },
  {
    title: "Panchkarma Therapy",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    fullDetails: "Experience the profound cleansing effects of our Panchkarma Therapy. This traditional Ayurvedic detoxification program is designed to remove toxins from the body and restore the balance of the three doshas. The five-step process includes massages, herbal treatments, and other therapies to rejuvenate your body, boost immunity, and promote mental clarity."
  },
  {
    title: "Pregnancy & Postnatal Fitness Program",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    fullDetails: "Our Pregnancy & Postnatal Fitness Program is a specialized wellness plan for expectant and new mothers. We offer safe and effective exercise routines, nutritional guidance, and relaxation techniques to support a healthy pregnancy and prepare for childbirth. After delivery, the program focuses on postnatal recovery, helping mothers regain strength and confidence."
  }
];

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceIndex = urlParams.get('index');
    const serviceContentContainer = document.getElementById('service-content');

    if (serviceIndex !== null && serviceIndex >= 0 && serviceIndex < serviceDetailsData.length) {
        const service = serviceDetailsData[serviceIndex];

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