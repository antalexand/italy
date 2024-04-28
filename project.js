const slider = document.querySelector('.slider');

const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));

const slideCount = slides.length;


let slideIndex = 0;


prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);


function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
  updateSlider2();
}


function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
  updateSlider2();
}


function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}
updateSlider();


const slider2 = document.querySelector('.slider2');
const slide = Array.from(slider2.querySelectorAll('h2'));
const slideCount2 = slide.length;

function updateSlider2() {
  slide.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}
updateSlider2();
