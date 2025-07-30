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

// send wa logic

// Kirim data form ke WhatsApp
document.addEventListener("DOMContentLoaded", function () {
  const sendBtn = document.getElementById("send-wa");

  if (sendBtn) {
    sendBtn.addEventListener("click", function () {
      const name = document
        .querySelector('input[placeholder="Name"]')
        .value.trim();
      const email = document
        .querySelector('input[placeholder="Email"]')
        .value.trim();
      const phone = document
        .querySelector('input[placeholder="Phone"]')
        .value.trim();

      if (!name || !email || !phone) {
        alert("Harap isi semua kolom.");
        return;
      }

      const pesan = `Halo, saya ingin memesan kopi.%0A%0ANama: ${name}%0AEmail: ${email}%0ANo HP: ${phone}`;
      const noWA = "6285259305470"; // Ganti dengan nomor WA kamu, format tanpa + dan nol
      const linkWA = `https://wa.me/${noWA}?text=${pesan}`;

      window.open(linkWA, "_blank");
    });
  }
});

// send wa logic end
