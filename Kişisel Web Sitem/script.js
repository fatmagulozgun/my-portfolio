// Yazı animasyonu için
document.addEventListener('DOMContentLoaded', function () {
    const text = document.querySelector('.typing-text');
    const words = ['Yazılım Mühendisliği Öğrencisi', 'Web Geliştirici', 'Mobil Uygulama Geliştirici'];
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            text.textContent = currentWord.substring(0, letterIndex - 1);
            letterIndex--;
        } else {
            text.textContent = currentWord.substring(0, letterIndex + 1);
            letterIndex++;
        }

        if (!isDeleting && letterIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 50 : 100);
        }
    }

    type();
});

// Smooth scroll için
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form gönderimi
const form = document.querySelector('.contact-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Mesajınız gönderildi! (Bu bir demo mesajıdır)');
    form.reset();
});

// Scroll animasyonu için
window.addEventListener('scroll', function () {
    const skills = document.querySelectorAll('.progress');
    skills.forEach(skill => {
        const skillPosition = skill.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (skillPosition < screenPosition) {
            skill.style.width = skill.parentElement.getAttribute('data-progress') + '%';
        }
    });
});
