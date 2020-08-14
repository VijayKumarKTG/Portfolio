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

let times = `<i class="fas fa-times"></i>`;
let hamburger = document.querySelector('.hamburger');
let animate = document.querySelector('.animate');
let navList = document.querySelector('#nav__list');
hamburger.addEventListener('click', () => {
  animate.classList = `comein`;
  if (times === animate.innerHTML) {
    navList.classList = `disappear`;
    animate.innerHTML = `<i class="fas fa-bars"></i>`;
  } else {
    navList.classList = `appear`;
    animate.innerHTML = times;
  }
  navList.addEventListener('animationend', (e) => {
    if (e.animationName === 'disappear') navList.classList = 'nav__list';
  });
  animate.addEventListener('animationend', () => {
    animate.classList = ``;
    console.log(navList.classList);
    if (navList.classList === 'disappear') navList.classList = 'nav__list';
  });
});
