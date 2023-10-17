import './script.js';
import './filterCourse.js';
import {Tabs} from "./tabs.js";

document.addEventListener('DOMContentLoaded', () => {

  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      750: {
        slidesPerView: "auto",
        spaceBetween: 28
      }
    },

    pagination: {
      el: ".pagination__custom",
      dynamicBullets: true,
      clickable: true,
      renderBullet: function (index, className) {
        console.log(index);
        return `<div class="${ className}">
            <span>0${index + 1}</span>
          </div>`;
      },
    },
    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },
  });

  swiper.on('paginationRender', function (swiper, paginationEl) {
    let activeElement = paginationEl.querySelector('.swiper-pagination-bullet-active');
    let element = [...paginationEl.querySelectorAll('.swiper-pagination-bullet')];
    let indexActive = element.indexOf(activeElement);

    element.forEach((item, idx) => {
      if (indexActive + 1 !== idx && indexActive - 1 !== idx && indexActive !== idx) {
        item.classList.add('acti');
      }
      else {
        item.classList.remove('acti');
      }
    });
  });

  let myGallerey = new Swiper(".myGallerey", {
    navigation: {
      nextEl: ".myGallerey-custom-next",
      prevEl: ".myGallerey-custom-prev",
    },
  });

  Tabs('.galleries__tabs', '.tabs__head', '.tabs__body', '.tabs__caption', 'tabs__caption_active', 'tabs__content_active');
  Tabs('.route__tabs', '.tabs__head', '.tabs__body', '.tabs__caption', 'tabs__caption_active', 'tabs__content_active');
  // tabs('.tabs__visits', '.tabs__head', '.tabs__body', '.tabs__caption', 'tabs__caption_active', 'tabs__content_active');
});