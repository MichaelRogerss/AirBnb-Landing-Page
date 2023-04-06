const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let count = 0;

setInterval(() => {
  count = (count + 1) % slides.length;
  const slideTo = slides[count];
  slider.scroll({
    left: slideTo.offsetLeft,
    behavior: 'smooth'
  });
}, 5000);