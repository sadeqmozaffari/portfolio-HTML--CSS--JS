/* copyright 2023 Sadeqmozaffari.com */

/*=============== Auto Type ===============*/
var typed = new Typed(".auto-type", {
  strings: ["Software Developer", "Web Developer", "Frontend Developer"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});
/*=============== Theme ===============*/

// navbar variables
const nav = document.querySelector(".mobile-nav"),
  navMenuBtn = document.querySelector(".nav-menu-btn"),
  navCloseBtn = document.getElementById("nav-close-btn");

// navToggle function
const navToggleFunc = () => nav.classList.toggle("active");
navMenuBtn.addEventListener("click", navToggleFunc);
navCloseBtn.addEventListener("click", navToggleFunc);

// theme toggle variables
const themeBtn = document.querySelectorAll(".theme-btn");

for (let i = 0; i < themeBtn.length; i++) {
  themeBtn[i].addEventListener("click", function () {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");

    for (let j = 0; j < themeBtn.length; j++) {
      themeBtn[j].classList.toggle("light");
      themeBtn[j].classList.toggle("dark");
    }
  });
}
