'use strict';
// The implementation of the sentence animation
// let sentences = [
//   `VijayKumar`,
//   `AFullStackDeveloper`,
//   `ABookLover`,
//   `ANovicePhotographer`,
//   `NextSkillIsComingSoon`,
// ];
// let i = 1;
// const sentence = document.querySelector('#sentence');
// sentence.addEventListener('animationiteration', () => {
//   sentence.textContent = sentences[i];
//   if (i === 4) i = 0;
//   else i++;
// });

// The implementation of the slide in of prject cards using intersection observer
let j = 1;
let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (j % 2 == 0) {
          entry.target.classList.add('slide-in-right');
        } else {
          entry.target.classList.add('slide-in-left');
        }
        observer.unobserve(entry.target);
        ++j;
      }
    });
  },
  { threshold: 0.5 }
);
let workList = document
  .querySelectorAll('.work__item')
  .forEach((entries) => observer.observe(entries));

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
    if (navList.classList === 'disappear') navList.classList = 'nav__list';
  });
});
