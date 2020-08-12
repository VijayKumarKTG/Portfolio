let sentences = [
  `VijayKumar`,
  `AFrontEndDeveloper`,
  `ABookLover`,
  `ANovicePhotographer`,
  `NextSkillIsComingSoon`,
];

let i = 0;

const sentence = document.querySelector('#sentence');
sentence.addEventListener('animationiteration', () => {
  sentence.textContent = sentences[i];
  if (i === 4) i = 0;
  else i++;
});

let slideIndex = 0;

const plusSlides = (n) => showSlides((slideIndex += n));

const currentSlide = (n) => showSlides((slideIndex = n));

const showSlides = (n) => {
  let j;
  let slides = document.querySelectorAll('.work__item');
  let dots = document.querySelectorAll('.dot');
  if (n === slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (j = 0; j < slides.length; j++) {
    slides[j].style.display = 'none';
    dots[j].className = dots[j].className.replace('active', '');
  }
  slides[slideIndex].style.display = 'block';
  dots[slideIndex].className += ' active';
};

showSlides(slideIndex);
