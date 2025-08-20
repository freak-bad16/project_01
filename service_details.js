
const servicesData = {
  therapies: [
    {
      title: "Weight Management",
      description: "Personalized natural weight management program for balance, energy, and long-term health.",
      fullDetail: "At Kapsveda Wellness Clinic, our Weight Management Program is not just about losing weight – it’s about achieving a healthy body balance and preventing lifestyle disorders. We design personalized plans combining natural therapies, nutrition, and physical activity to help you reduce excess fat, boost energy, and improve overall well-being.",
      icon: "⚖️",
      image: "weight-management.jpg",
      healingApproach: [
        "Natural Detox Therapies – To cleanse toxins & improve metabolism",
        "Diet & Nutrition Plans – Balanced, sustainable meal planning",
        "Customized Exercise Programs – Fat burning, strength & flexibility training",
        "Posture & Lifestyle Correction – To prevent recurrence of weight gain",
        "Panchkarma & Ayurvedic Support – For hormonal balance & digestion",
        "Naturopathy & Yoga – To harmonize body & mind",
        "Behavior & Stress Management – To control emotional eating",
        "Kids & Post-pregnancy Programs – Safe, guided weight control"
      ],
      benefits: [
        "Manages PCOD / PCOS & Hormonal Imbalance",
        "Controls Thyroid-related Weight Gain",
        "Supports Fatty Liver & Metabolic Syndrome",
        "Improves Diabetes & Cholesterol Management",
        "Addresses Post-pregnancy & Menopausal Weight Issues",
        "Helps with Childhood / Teen Obesity"
      ]
    },
    {
      title: "Diet & Nutrition Therapy",
      description: "Food as medicine – creating a healthy relationship with food that heals & prevents disease.",
      fullDetail: "At Kapsveda Wellness Clinic, we believe ‘Food is Medicine.’ Our Diet & Nutrition Therapy is not about strict dieting – it’s about creating a healthy relationship with food that heals the body, balances the mind, and prevents disease.",
      icon: "🥗",
      image: "diet-nutrition.jpg",
      healingApproach: [
        "Personalized Diet Plans – Based on body type (Prakriti), health goals & medical history",
        "Therapeutic Nutrition – For thyroid, diabetes, fatty liver, PCOD & lifestyle disorders",
        "Pregnancy & Postnatal Diet – Supporting mother’s health & baby’s growth",
        "Kids’ Nutrition Plans – For growth, immunity & childhood obesity management",
        "Detox & Healing Diets – To cleanse toxins & boost metabolism",
        "Weight & Energy Balance – Naturally reduce fat, improve strength & stamina",
        "Holistic Guidance – Nutrition with yoga, lifestyle changes & stress control",
        "Diet as per Prakriti (Vata, Pitta & Kapha) – Balancing the body through Ayurvedic principles"
      ],
      benefits: [
        "Improves digestion & gut health",
        "Balances hormones naturally",
        "Boosts immunity & energy",
        "Controls blood sugar, cholesterol & weight",
        "Prevents chronic lifestyle diseases",
        "Promotes long-term wellness – without side effects"
      ]
    },
    {
      title: "Edema & Swelling Treatment",
      description: "Natural therapies to reduce swelling, improve circulation & restore mobility.",
      fullDetail: "At Kapsveda Wellness Clinic, we focus on reducing swelling by addressing the root causes such as poor circulation, fluid retention, or lifestyle imbalance. Our treatment combines lymphatic drainage techniques, herbal remedies, dietary adjustments, physiotherapy, and naturopathy for long-term relief.",
      icon: "💧",
      image: "edema-treatment.jpg",
      healingApproach: [
        "Lymphatic Drainage Techniques – To reduce fluid buildup",
        "Herbal Remedies – Natural support for kidney & circulation health",
        "Dietary Adjustments – To prevent water retention",
        "Physiotherapy & Gentle Exercises – To improve blood & lymph flow",
        "Naturopathy & Ayurvedic Therapies – For long-term relief"
      ],
      benefits: [
        "Reduces swelling & heaviness",
        "Improves circulation & mobility",
        "Relieves discomfort & stiffness",
        "Prevents recurrence with lifestyle care"
      ]
    },
    {
      title: "Pelvic Floor Rehabilitation",
      description: "Rebuilding strength, control & comfort in men and women with pelvic floor issues.",
      fullDetail: "At Kapsveda Wellness Clinic, our Pelvic Floor Rehabilitation program helps restore strength, control, and comfort in both men and women. Safe, non-invasive, and doctor-supervised care designed for both men & women.",
      icon: "🧘",
      image: "pelvic-floor.jpg",
      healingApproach: [
        "Targeted exercises & posture correction",
        "Pelvic floor physiotherapy",
        "Lifestyle modifications",
        "Natural therapies to restore pelvic health"
      ],
      benefits: [
        "For Women: Relief from urinary incontinence, postnatal weakness, pelvic organ prolapse (early stage), chronic pelvic pain",
        "For Men: Support for urinary leakage/frequency, erectile dysfunction, prostatitis-related pelvic pain, post-surgical weakness, pelvic floor tension",
        "Rebuilds core stability",
        "Improves confidence & quality of life"
      ]
    },
    {
      title: "Pregnancy Fitness & Garbhsanskar Care",
      description: "Holistic pregnancy care program nurturing mothers, babies & planning couples.",
      fullDetail: "At Kapsveda Wellness Clinic, we go beyond fitness – offering a comprehensive pregnancy & fertility wellness program that nurtures mothers, babies, and planning couples. Our aim is to ensure a safe pregnancy, smooth delivery, and a healthier next generation.",
      icon: "🤰",
      image: "pregnancy-fitness.jpg",
      healingApproach: [
        "Prenatal Yoga & Stretching – Trimester-wise safe exercises",
        "Breathing & Relaxation Techniques – To reduce stress & support labor",
        "Nutritional Guidance – Healthy weight gain & baby’s growth",
        "Pelvic Floor & Core Training – Prevents urinary incontinence",
        "Postural Correction & Back Care – Relief from back pain & stiffness",
        "Meditation, Affirmations & Music Therapy – Emotional stability & bonding",
        "Garbhsanskar Classes – Mantra, meditation & spiritual practices",
        "Beej Shuddhi Sanskar – Preconception care & IVF/IUI support"
      ],
      benefits: [
        "Promotes healthy pregnancy & baby development",
        "Lowers risk of gestational diabetes, hypertension & delivery complications",
        "Makes labor smoother & enhances postnatal recovery",
        "Boosts mental, physical & spiritual well-being",
        "Supports fertility planning & reduces risk of abnormalities"
      ]
    },
    {
      title: "Infertility Support & Fertility Wellness",
      description: "Holistic & natural infertility solutions for men and women.",
      fullDetail: "At Kapsveda Wellness Clinic, we go beyond treatment – offering holistic & natural infertility solutions for both men and women. We address physical, emotional, and lifestyle factors that affect conception, aiming to enhance natural fertility, support IVF/IUI success, and prepare couples for safe & healthy parenthood.",
      icon: "🌸",
      image: "infertility-support.jpg",
      healingApproach: [
        "Hormone Balancing & Detox – For PCOD/PCOS, thyroid & male imbalance",
        "Nutrition & Fertility Diet Plans – For egg quality & sperm health",
        "Stress & Mind-Body Care – Yoga & relaxation therapies",
        "Fertility Yoga & Exercises – Strengthen reproductive organs",
        "Couple Fertility Care – Counseling, Beej Shuddhi Sanskar, IVF/IUI support",
        "Male Fertility Support – For low sperm count, motility & ED",
        "Natural Infertility Therapy – Integrated diet, naturopathy & physiotherapy"
      ],
      benefits: [
        "Enhances natural conception chances",
        "Improves IVF/IUI success rate",
        "Corrects hormonal imbalance & PCOD/PCOS",
        "Strengthens reproductive health",
        "Reduces stress & builds emotional balance",
        "100% natural, safe & side-effect–free"
      ]
    },
    {
      title: "Postnatal Recovery Programs",
      description: "Holistic care for body, mind & emotions after childbirth.",
      fullDetail: "At Kapsveda Wellness Clinic, we understand that childbirth is just the beginning of a mother’s healing journey. Recovery after delivery needs more than rest – it requires holistic care for body, mind, and emotions.",
      icon: "👩‍🍼",
      image: "postnatal-recovery.jpg",
      healingApproach: [
        "Gentle Exercises & Stretching – To rebuild stamina safely",
        "Core & Pelvic Floor Strengthening – Prevents back pain & urinary issues",
        "Emotional & Mental Support – Meditation & counseling",
        "Nutrition & Healing Diets – Faster recovery & lactation support"
      ],
      benefits: [
        "Faster healing & restored energy",
        "Stronger muscles & better posture",
        "Relief from postnatal pains & fatigue",
        "Improved emotional balance & confidence",
        "Healthy lactation & baby nourishment"
      ]
    },
    {
      title: "Tummy Fat / Visceral Fat Reduction",
      description: "Safe, natural methods to reduce stubborn belly fat & strengthen the core.",
      fullDetail: "At Kapsveda Wellness Clinic, we help reduce stubborn belly fat with safe, natural, and non-invasive methods. Our program is designed to not just burn fat but also strengthen your core and restore balance.",
      icon: "🏋️",
      image: "tummy-fat.jpg",
      healingApproach: [
        "Natural Therapies & Detox – Reduces bloating & fat storage",
        "Dietary Guidance – Nutrition for fat metabolism",
        "Core Strengthening Exercises – Tones abdomen & improves posture",
        "Lifestyle Correction – Stress, sleep & routine management",
        "Customized Diet & Exercise – As per body type (Vata, Pitta, Kapha)"
      ],
      benefits: [
        "Visible inch loss & slimmer waistline",
        "Stronger core & better posture",
        "Relief from bloating & heaviness",
        "Safe, natural & side-effect–free methods"
      ]
    },
    {
      title: "Toning & Tightening Therapies",
      description: "Natural methods to enhance skin firmness, muscle tone & body shape.",
      fullDetail: "At Kapsveda Wellness Clinic, our therapies are designed to naturally enhance skin firmness, muscle tone, and overall body shape. We combine advanced natural methods with personalized care for visible, lasting results.",
      icon: "✨",
      image: "toning-tightening.jpg",
      healingApproach: [
        "Herbal Treatments & Detox – Improves skin elasticity",
        "Specialized Massages – Boost blood circulation & firmness",
        "Targeted Exercises – Strengthen muscles & sculpt body",
        "Non-invasive Methods – Safe & effective tightening"
      ],
      benefits: [
        "Firmer, youthful & glowing skin",
        "Better muscle tone & definition",
        "Improved body contour & confidence",
        "100% safe, natural & holistic care"
      ]
    },
    {
      title: "Women’s Wellness – Complete Care Under One Roof",
      description: "Natural and integrative solutions for every stage of a woman’s life.",
      fullDetail: "At Kapsveda Wellness Clinic, we provide natural and integrative solutions for every stage of a woman’s life. From puberty to motherhood and beyond, our programs are designed to heal, strengthen, and restore balance.",
      icon: "🌸",
      image: "womens-wellness.jpg",
      healingApproach: [
        "PCOD / PCOS & hormonal imbalance",
        "Menstrual issues (pain, irregular cycles, heavy bleeding)",
        "Fertility & Pre/Postnatal care (Garbhsanskar, pregnancy support, postnatal recovery)",
        "Pelvic floor rehabilitation & urinary problems",
        "Thyroid, obesity & lifestyle disorder management",
        "Menopause care – hot flushes, mood swings, bone & joint health"
      ],
      benefits: [
        "Natural, safe & non-invasive therapies",
        "Customized diet, exercise & lifestyle guidance",
        "Ayurvedic + modern physiotherapy blend",
        "Doctor-supervised holistic healing"
      ]
    },
    {
      title: "Urine / Fecal Incontinence Care",
      description: "Holistic and non-invasive therapies to restore bladder & bowel control.",
      fullDetail: "At Kapsveda Wellness Clinic, we understand that urinary leakage in men and women can be uncomfortable and affect daily life, confidence, and overall well-being. With holistic and non-invasive methods, it can be effectively managed and even reversed.",
      icon: "🚻",
      image: "incontinence-care.jpg",
      healingApproach: [
        "Pelvic Floor Rehabilitation – Kegel & strengthening exercises",
        "Customized Nutrition – diet plans to improve muscle strength",
        "Non-invasive Therapies – safe methods for retraining muscles",
        "Lifestyle Guidance – stress, weight & routine management"
      ],
      benefits: [
        "Better bladder control & fewer leakage episodes",
        "Stronger pelvic floor & core stability",
        "Restored comfort, confidence & active lifestyle",
        "100% natural, safe & doctor-supervised care"
      ]
    },
    {
      title: "Constipation & Gut Reset Therapy",
      description: "Holistic gut-healing therapy for digestion, cholesterol & metabolism.",
      fullDetail: "At Kapsveda Wellness Clinic, we don’t just treat constipation or cholesterol — we heal your gut health. A clean gut improves digestion, boosts metabolism, purifies blood, and protects your heart. Our holistic therapies target the root cause for lasting relief, naturally & safely.",
      icon: "🌿",
      image: "gut-reset.jpg",
      healingApproach: [
        "Gut Cleaning & Detox – Ayurvedic herbs & therapies",
        "Personalized Nutrition – body-type diets & fiber-rich foods",
        "Herbal Medicines – safe remedies for smooth bowel flow",
        "Lifestyle Balance – stress, sleep & routine corrections",
        "Yoga & Breathwork – gentle asanas & pranayama"
      ],
      benefits: [
        "Daily smooth & light bowel movement",
        "Deep gut cleansing → better energy & absorption",
        "Lower cholesterol & stronger heart health",
        "Natural weight balance & improved metabolism",
        "100% safe, doctor-guided holistic care"
      ]
    },
    {
      title: "Migraine Relief",
      description: "Natural & non-pharmacological approach for long-lasting migraine relief.",
      fullDetail: "At Kapsveda Wellness Clinic, we understand that migraine is not just a headache — it impacts focus, energy, mood, and overall quality of life. Instead of temporary painkillers, our non-pharmacological, holistic approach works on the root causes to give lasting relief.",
      icon: "💆",
      image: "migraine-relief.jpg",
      healingApproach: [
        "Identifying Triggers – food, stress, sleep & lifestyle factors",
        "Acupressure & Natural Therapies – to calm the nervous system",
        "Diet & Nutrition – migraine-friendly plans",
        "Stress & Sleep Balance – yoga, pranayama & relaxation techniques",
        "Holistic Guidance – doctor-supervised, natural healing"
      ],
      benefits: [
        "Reduced frequency & severity of migraine attacks",
        "Natural pain relief without side effects",
        "Improved focus, energy & emotional balance",
        "Long-lasting comfort & enhanced quality of life"
      ]
    },
    {
      title: "Thyroid Disorders Care",
      description: "Root-cause treatment to balance thyroid hormones & restore health.",
      fullDetail: "At Kapsveda Wellness Clinic, we focus on the root cause of thyroid problems. Early-stage thyroid disorders can often be 100% naturally reversed, while chronic cases are safely managed to reduce complications and restore balance. By addressing stress, poor lifestyle, obesity & nutritional deficiencies, we naturally regulate thyroid hormones and boost overall health.",
      icon: "🦋",
      image: "thyroid-care.jpg",
      healingApproach: [
        "Root-Cause Treatment – stress, obesity & nutrition balance",
        "Dietary Corrections – thyroid-friendly diet plans",
        "Herbal Remedies – natural support for hormone regulation",
        "Detox & Gut Health – improved absorption & metabolism",
        "Lifestyle Management – yoga, pranayama & sleep regulation",
        "Doctor-Supervised Care – continuous monitoring & guidance"
      ],
      benefits: [
        "Balanced thyroid hormones & metabolism",
        "Healthy weight & sustained energy",
        "Reduced hair fall, fatigue & mood swings",
        "100% natural, safe & side-effect–free management"
      ]
    }
  ]
};


document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const serviceIndex = parseInt(urlParams.get('index'));
  const serviceContentContainer = document.getElementById('service-content');

  // Support both shapes: an array or an object with a "therapies" array
  const servicesList = Array.isArray(servicesData)
    ? servicesData
    : (servicesData && Array.isArray(servicesData.therapies) ? servicesData.therapies : []);

  if (!isNaN(serviceIndex) && serviceIndex >= 0 && serviceIndex < servicesList.length) {
    const service = servicesList[serviceIndex];
    serviceContentContainer.innerHTML = `
      <div class="container service-details-container">
        <div class="service-card-details">

          <!-- Title + Short Desc -->
          <div class="service-detail-content">
            <h2 class="service-detail-title">
              <span class="service-icon">${service.icon || ''}</span> ${service.title || ''}
            </h2>
            <p class="service-detail-text">${service.description || ''}</p>
          </div>
        </div>

        <!-- Full Details -->
        <div class="service-detail-section">
          <h3>About This Therapy</h3>
          <p>${service.fullDetails || service.fullDetail || ''}</p>
        </div>

        <!-- Healing Approach -->
        ${service.healingApproach && service.healingApproach.length > 0 ? `
          <div class="service-detail-section">
            <h3>🌸 Our Healing Approach</h3>
            <ul>
              ${service.healingApproach.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        ` : ''}

        <!-- Benefits -->
        ${service.benefits && service.benefits.length > 0 ? `
          <div class="service-detail-section">
            <h3>📌 Benefits You’ll Feel</h3>
            <ul>
              ${service.benefits.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
      </div>
    `;
  } else {
    serviceContentContainer.innerHTML = '<p>Service not found. Please go back to the services page.</p>';
  }
});


// WhatsApp Form Integration
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
