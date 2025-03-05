document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let index = 0;

    function showSlide(n) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
        });
        slides[n].classList.add('active');
    }

    // Next Slide
    nextBtn.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        showSlide(index);
    });

    // Previous Slide
    prevBtn.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    });

    // Auto Slide Every 3 Seconds
    setInterval(() => {
        index = (index + 1) % slides.length;
        showSlide(index);
    }, 3000);
});
