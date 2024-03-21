//incio carrossel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const intervalTime = 5000; // Tempo em milissegundos entre cada transição

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Função para passar automaticamente para o próximo slide
function autoSlide() {
  nextSlide();
}

// Iniciar o temporizador para passar automaticamente os slides
setInterval(autoSlide, intervalTime);


//fim do carrossel