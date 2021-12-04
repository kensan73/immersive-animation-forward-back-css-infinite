const circle = document.querySelector("#circleId");
const headline = document.querySelector("#circleId > h2");
const leftPane = document.querySelector("#leftPane");
const rightPane = document.querySelector("#rightPane");
const progressElement = document.querySelector("#progressId");
const timeElement = document.querySelector("#timeId");

const elements = [circle, headline, leftPane, rightPane];
const elementClasses = [
  "circleAnimation",
  "headlineAnimation",
  "leftPaneAnimation",
  "rightPaneAnimation",
];

let isPaused = false;
let duration = 28000;
let time = 0;

setInterval(() => {
  progressElement.innerHTML = `${(
    ((Date.now() - startTime) / duration) *
    100
  ).toPrecision(2)}%`;
  console.log("setting timeel");
  time = time + 500;
  timeElement.innerHTML = `${(time / 1000).toPrecision(3)}s`;
}, 500);

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
  let delay = duration - elapsedMilliseconds;
  console.log("delay: -" + delay + "ms");

  elements.forEach((element) => {
    element.style.animationDelay = `-${delay}ms`;
  });
  elements.forEach((element) => {
    element.style.animationPlayState = "running";
  });

  // console.log("now is " + Date.now());
  startTime = Date.now() + delay;
  console.log("startTime is " + startTime);
  clearInterval(handle);
  handle = setInterval(() => {
    startTime = Date.now();
  }, duration);
});

// window.addEventListener("keypress", (event) => {
//   if (event.key !== "p") return;
//
//   isPaused = !isPaused;
//
//   let animationPlayState = "running";
//   if (isPaused) {
//     animationPlayState = "paused";
//   }
//   for (let i = 0; i !== elements.length; i++) {
//     elements[i].style.animationPlayState = animationPlayState;
//   }
// });

// window.addEventListener("keypress", ({ key }) => {
//   if (key !== "r") return;
//
//   elements.forEach((element, index) => {
//     element.classList.remove(elementClasses[index]);
//   });
//   void headline.offsetWidth;
//   elements.forEach((element, index) => {
//     element.classList.add(elementClasses[index]);
//   });
//
//   const elapsedMilliseconds = Date.now() - startTime;
//   let delay = 0;
//
//   elements.forEach((element) => {
//     element.style.animationDelay = `${delay}ms`;
//   });
//   elements.forEach((element) => {
//     element.style.animationPlayState = "running";
//   });
//
//   // console.log("now is " + Date.now());
//   startTime = Date.now() + delay;
//   console.log("startTime is " + startTime);
//   clearInterval(handle);
//   handle = setInterval(() => {
//     startTime = Date.now();
//   }, duration);
// });
let forward = true;
let handle = null;
let startTime = Date.now();
headline.addEventListener(
  "animationstart",
  (event) => {
    console.log("animation started 1");
    handle = setInterval(() => {
      startTime = Date.now();
      time = 0;
    }, duration);
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
