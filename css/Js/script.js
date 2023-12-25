import Swiper from 'swiper';
import { Navigation } from 'swiper/modules'; 

// ================swiper================
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  observer: true,
  observeParents: true,
  parallax:true,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});