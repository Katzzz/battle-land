// source/scripts/hamburger.js
var navMain = document.querySelector(".main-header__nav");
var navToggle = document.querySelector(".toggle");
navMain.classList.remove("main-header__nav--nojs");
navToggle.classList.remove("toggle--nojs");
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("toggle--open");
  navToggle.classList.toggle("toggle--close");
  navMain.classList.toggle("main-header__nav--closed");
  navMain.classList.toggle("main-header__nav--opened");
});
//# sourceMappingURL=hamburger.js.map
