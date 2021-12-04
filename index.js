const circle = document.querySelector("#circleId");
const headline = document.querySelector("#circleId > h2");
const leftPane = document.querySelector("#leftPane");
const rightPane = document.querySelector("#rightPane");

const elements = [circle, headline, leftPane, rightPane];
const elementClasses = [
  "circleAnimation",
  "headlineAnimation",
  "leftPaneAnimation",
  "rightPaneAnimation",
];

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

window.addEventListener("keypress", ({ key }) => {
  if (key !== "r") return;

  elements.forEach((element, index) => {
    element.classList.remove(elementClasses[index]);
  });
  void headline.offsetWidth;
  elements.forEach((element, index) => {
    element.classList.add(elementClasses[index]);
  });
  const elapsedMilliseconds = Date.now() - startTime;
  console.log("elapsed: " + elapsedMilliseconds);
  let delay = 14000 - elapsedMilliseconds;
  console.log("delay: -" + delay + " ms");

  elements.forEach((element) => {
    element.style.animationDelay = `-${delay}ms`;
  });
  elements.forEach((element) => {
    element.style.animationPlayState = "running";
  });

  console.log("now is " + Date.now());
  startTime = Date.now() + delay;
  clearInterval(handle);
  handle = setInterval(() => {
    startTime = Date.now();
  }, 14 * 1000);
});
let forward = true;
let handle = null;
let startTime = Date.now();
headline.addEventListener(
  "animationstart",
  (event) => {
    console.log("animation started 1");
    handle = setInterval(() => {
      startTime = Date.now();
    }, 14 * 1000);
  },
  { once: true }
);
// headline.addEventListener("animationend", (event) => {
//   console.log("animation ended");
// });
// headline.addEventListener("animationiteration", (event) => {
//   forward = !forward;
//   if (forward === true) console.log("animating forward");
//   else console.log("animating backward");
// });
// forward = 0 it is forward, else backward
