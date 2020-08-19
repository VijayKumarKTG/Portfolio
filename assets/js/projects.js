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
