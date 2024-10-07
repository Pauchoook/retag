import Swiper from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

export default function slider() {
  if (window.matchMedia("(max-width: 767px)").matches) {
    const flowSlider = document.querySelector(".flow__slider");
    if (flowSlider) {
      const swiper = new Swiper(flowSlider, {
        speed: 700,
        modules: [Autoplay, Navigation],
        autoplay: {
          delay: 3000,
        },
        grabCursor: true,
        slidesPerView: "auto",
        slideToClickedSlide: true,
        spaceBetween: 15,
        navigation: {
          nextEl: ".flow .slider-nav__btn--next",
          prevEl: ".flow .slider-nav__btn--prev",
        },
      });
    }
  }

  const sayAboutSlider = document.querySelector(".say-about__slider");
  if (sayAboutSlider) {
    const swiper = new Swiper(sayAboutSlider, {
      direction: "horizontal",
      speed: 700,
      modules: [Autoplay, Navigation],
      autoplay: {
        delay: 3000,
      },
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 15,
      navigation: {
        nextEl: ".say-about .slider-nav__btn--next",
        prevEl: ".say-about .slider-nav__btn--prev",
      },
      breakpoints: {
        767: {
          direction: "vertical",
          slidesPerView: 3,
          spaceBetween: 30,
        },
        577: {
          slidesPerView: 2,
        }
      }
    });
  }
}
