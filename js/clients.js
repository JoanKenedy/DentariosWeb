const carousel = document.querySelector(".carousel-items");
let maxScrolLeft = carousel.scrollWidth - carousel.clientWidth;
let interval = null;
let step = 1;

const start = () => {
  interval = setInterval(() => {
    carousel.scrollLeft = carousel.scrollLeft + step;
    if (carousel.scrollLeft === maxScrolLeft) {
      step = step * -1;
    } else if (carousel.scrollLeft === 0) {
      step = step * -1;
    }
  }, 10);
};

const stop = () => {
  clearInterval(interval);
};

carousel.addEventListener("mouseover", () => {
  stop();
});
carousel.addEventListener("mouseout", () => {
  start();
});
start();
