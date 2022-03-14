const loadText = document.querySelector(".load");
const blur = document.querySelector(".loading");

let load = 0;
let opacity = 30;

const text = () => {
  load++;
  if (load <= 100) loadText.innerHTML = `${load}% `;
  clearInterval();
  if (load == 100) loadText.innerHTML = "";
};
const blurring = () => {
  opacity--;
  if (opacity >= 0) {
    blur.style.backgroundColor = `rgba(0, 0, 0, ${opacity}%)`;
    blur.style.backdropFilter = `blur(${opacity}px)`;
  }
};

setInterval(text, 30);
setInterval(blurring, 100);
