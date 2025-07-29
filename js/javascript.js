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
// Klik di luar sidebar menghilangkan menu end

// carousel logic
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".carousel-slides");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  let currentIndex = 0;
  const totalSlides = slides.length;

  function showSlide(index) {
    // Reset semua slide dan dot
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      dots[i].classList.remove("active");
    });

    // Tampilkan slide yang sesuai index
    slides[index].classList.add("active");
    dots[index].classList.add("active");
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  }

  // Event listeners
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      currentIndex = i;
      showSlide(currentIndex);
    });
  });

  // Auto-slide (opsional)
  setInterval(nextSlide, 5000); // slide otomatis tiap 5 detik

  // Inisialisasi pertama
  showSlide(currentIndex);
});

// carousel logic end
