// Toogle class active
const navbarNav = document.querySelector(".navbar-nav");
// Toogle class active

// ketika Hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// ketika Hamburger menu di klik

// Klik di luar sidebar menghilangkan menu
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    //selama bukan side bar dan navbar yang di klik maka remove function active
    navbarNav.classList.remove("active");
  }
});
// Klik di luar sidebar menghilangkan menu
