document.addEventListener('DOMContentLoaded', function () {
  let searchForm = document.querySelector('.search-form');
  let navbar = document.querySelector('.navbar');
  let menuBtn = document.querySelector('#menu-btn');

  document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
  };

  menuBtn.onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
  };

  window.addEventListener('scroll', () => {
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
  });

  // Tambahkan event listener untuk menutup navbar jika link di dalamnya diklik
  navbar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
    });
  });

  // Tambahkan event listener untuk menutup navbar jika dokumen di klik di luar navbar
  document.addEventListener('click', function (e) {
    if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
      navbar.classList.remove('active');
    }
  });
});



var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
  