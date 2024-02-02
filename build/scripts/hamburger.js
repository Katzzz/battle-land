// source/scripts/hamburger.js
var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".toggle");
navMain.classList.remove("main-nav--nojs");
navToggle.classList.remove("toggle--nojs");
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("toggle--open");
  navToggle.classList.toggle("toggle--close");
  navMain.classList.toggle("main-nav--closed");
  navMain.classList.toggle("main-nav--opened");
});
//# sourceMappingURL=hamburger.js.map
