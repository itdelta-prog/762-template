import './script.js';
import './filterCourse.js';
import {Tabs} from "./tabs.js";


// function mySli() {
//   let el  = [1, 2, 3, 4, 5, 6];
//   for(let i = 0; i < el.length; i++) {
//     if(i === 0) {
//       console.log(`${el[el.length-1]} ||||| ${el[i]} |||||${el[i+1]}`);
//     }
//     if(i === el.length-1) {
//       console.log(`${el[i-1]} |||||| ${el[i]} |||||| ${el[0]}`)
//     }
//     if (i!== 0 && i !== el.length-1) {
//       console.log(`${el[i-1]} |||||| ${el[i]} ||||| ${el[i+1]}`)
//     }
//   }
// }
//
// mySli();




document.addEventListener('DOMContentLoaded', () => {


  const customSwiper = (swiper) => {
    const pagination = document.getElementById('pagintaionCustom');
    const paginationPrev = pagination.querySelector('[data-prev]');
    const paginationActive = pagination.querySelector('[data-active]');
    const paginationNext = pagination.querySelector('[data-next]');

    if(swiper.activeIndex === 0) {
      paginationPrev.textContent = `0${swiper.slides.length - 1}`
      paginationNext.textContent = `0${swiper.activeIndex + 2}`
    }
    console.log(swiper.activeIndex)
    if(swiper.activeIndex === swiper.slides.length-2) {
      paginationPrev.textContent = `0${swiper.slides.length-2}`
      paginationNext.textContent = `0${1}`
    }
    if(swiper.activeIndex !== swiper.slides.length-2 && swiper.activeIndex !== 0) {
      paginationNext.textContent = `0${swiper.activeIndex + 2}`
      paginationPrev.textContent = `0${(swiper.activeIndex+1) - 1}`
    }

    paginationActive.textContent = `0${swiper.activeIndex + 1}`


    // let activeElement = pagEl.querySelector('.swiper-pagination-bullet-active');
    // let element = [...pagEl.querySelectorAll('.swiper-pagination-bullet')];
    // let indexActive = element.indexOf(activeElement);
    //
    // element.forEach((item, idx) => {
    //   if (indexActive + 1 !== idx && indexActive - 1 !== idx && indexActive !== idx) {
    //     item.classList.add('acti');
    //   }
    //   else {
    //     item.classList.remove('acti');
    //   }
    // });
  }

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
        slidesPerGroup: 1,
        spaceBetween: 28
      }
    },

    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },
    on: {
      init: function (swiper) {
        customSwiper(swiper)
      },
      activeIndexChange: function (swiper) {
        customSwiper(swiper);
      }
    }
  });


  // swiper.on('paginationRender', function (swiper, paginationEl) {
  //   customSwiper(paginationEl);
  // });

  let myGallerey = new Swiper(".myGallerey", {
    navigation: {
      nextEl: ".myGallerey-custom-next",
      prevEl: ".myGallerey-custom-prev",
    },
  });

  // document.getElementById('gungs').addEventListener('click', (eve) => {
  //   if(eve.target.classList.contains('btn')) {
  //     // modal()
  //   }
  // })

  Tabs('.galleries__tabs', '.tabs__head', '.tabs__body', '.tabs__caption', 'tabs__caption_active', 'tabs__content_active');
  Tabs('.route__tabs', '.tabs__head', '.tabs__body', '.tabs__caption', 'tabs__caption_active', 'tabs__content_active');
  // tabs('.tabs__visits', '.tabs__head', '.tabs__body', '.tabs__caption', 'tabs__caption_active', 'tabs__content_active');
});