// Carousel (anasayfa görselleri)
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
  slides[index].classList.add('active');
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 4000);

// Ürünler sağ-sol kaydırma
const container = document.querySelector('.product-grid');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

prevBtn.addEventListener('click', () => {
  container.scrollBy({ left: -320, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  container.scrollBy({ left: 320, behavior: 'smooth' });
});


// HAMBUGER
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});