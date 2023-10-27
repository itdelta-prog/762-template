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


  const customSwiper = (pagEl) => {
    let activeElement = pagEl.querySelector('.swiper-pagination-bullet-active');
    let element = [...pagEl.querySelectorAll('.swiper-pagination-bullet')];
    let indexActive = element.indexOf(activeElement);

    element.forEach((item, idx) => {
      if (indexActive + 1 !== idx && indexActive - 1 !== idx && indexActive !== idx) {
        item.classList.add('acti');
      }
      else {
        item.classList.remove('acti');
      }
    });
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
        spaceBetween: 28
      }
    },

    pagination: {
      el: ".pagination__custom",
      dynamicBullets: true,
      clickable: true,
      renderBullet: function (index, className) {
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

  customSwiper(swiper.pagination.el);

  swiper.on('paginationRender', function (swiper, paginationEl) {
    customSwiper(paginationEl);
  });

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