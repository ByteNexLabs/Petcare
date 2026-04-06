// Toggle Other Pet Field
const petSelect = document.getElementById('petType');
const otherPetGroup = document.getElementById('otherPetGroup');

petSelect.addEventListener('change', () => {
    if (petSelect.value === 'Other') {
        otherPetGroup.classList.remove('hidden');
    } else {
        otherPetGroup.classList.add('hidden');
    }
});

// Form Submission & WhatsApp Redirect
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('ownerName').value;
    const phone = document.getElementById('mobile').value;
    const type = document.getElementById('petType').value;
    const customPet = document.getElementById('otherPetName').value;
    const date = document.getElementById('appDate').value;

    const finalPet = (type === 'Other') ? customPet : type;

    const message = `Hello Doctor, I want to book an appointment.
Name: ${name}
Mobile: ${phone}
Pet: ${finalPet}
Date: ${date}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/917384899003?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
});

// Scroll Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(30px)';
    card.style.transition = '0.8s ease-out';
    observer.observe(card);
});

// 1. "Other" option dikhane ka logic
function toggleOtherPet() {
    const petSelect = document.getElementById('petType');
    const otherGroup = document.getElementById('otherPetGroup');
    const otherInput = document.getElementById('otherPetName');

    if (petSelect.value === 'Other') {
        otherGroup.classList.remove('hidden');
        otherInput.required = true; // Other field ko compulsory banana
    } else {
        otherGroup.classList.add('hidden');
        otherInput.required = false;
        otherInput.value = ""; // Clear input if hidden
    }
}

// 2. WhatsApp Integration Logic
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Data nikalna
    const name = document.getElementById('ownerName').value;
    const phone = document.getElementById('mobile').value;
    const type = document.getElementById('petType').value;
    const customPet = document.getElementById('otherPetName').value;
    const date = document.getElementById('appDate').value;

    // Agar other hai toh custom name lo, varna dropdown wala
    const finalPet = (type === 'Other') ? customPet : type;

    // Message taiyar karna
    const message = `Hello Doctor, I want to book an appointment.
----------------------------
👤 Owner: ${name}
📞 Mobile: ${phone}
🐾 Pet Type: ${finalPet}
📅 Date: ${date}
----------------------------
Please confirm my booking.`;

    // URL Encoding (Special characters handle karne ke liye)
    const encodedMessage = encodeURIComponent(message);
    
    // Yahan apna WhatsApp Number daalein (Country code ke saath, bina '+')
    const whatsappNumber = "917384899003"; 
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Naye tab mein open karna
    window.open(whatsappURL, '_blank');
});


document.querySelectorAll(".faq-question").forEach(btn => {
    btn.addEventListener("click", () => {
        let answer = btn.nextElementSibling;

        // close others
        document.querySelectorAll(".faq-answer").forEach(a => {
            if (a !== answer) a.style.display = "none";
        });

        // toggle current
        answer.style.display =
            answer.style.display === "block" ? "none" : "block";
    });
});
