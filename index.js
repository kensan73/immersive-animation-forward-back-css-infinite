const circle = document.querySelector("#circleId");
const headline = document.querySelector("#circleId > h2");
const leftPane = document.querySelector("#leftPane");
const rightPane = document.querySelector("#rightPane");

const elements = [circle, headline, leftPane, rightPane];

let isPaused = false;

window.addEventListener("keypress", (event) => {
  if (event.key !== "p") return;

  isPaused = !isPaused;

  let animationPlayState = "running";
  if (isPaused) {
    animationPlayState = "paused";
  }
  for (let i = 0; i !== elements.length; i++) {
    elements[i].style.animationPlayState = animationPlayState;
  }
});
