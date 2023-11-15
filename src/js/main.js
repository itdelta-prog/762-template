import './script.js';
import './filterCourse.js';
import {Tabs} from "./tabs.js";
// import './react/Modal.jsx';

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

  // const gungs = document.querySelector('#gungs');
  // gungs.addEventListener('click', (eve) => {
  //   if(eve.target.closest('.btn')) {
  //     console.log(stageModal)
  //     stageModal.setvalue({id:eve.target.closest('.blockGung').dataset.id, show: true})
  //   }
  // })
  const customSwiper = (swiper, pagEl) => {

    // const pagination = document.getElementById('pagintaionCustom');
    // const paginationPrev = pagination.querySelector('[data-prev]');
    // const paginationActive = pagination.querySelector('[data-active]');
    // const paginationNext = pagination.querySelector('[data-next]');

    // if(swiper.activeIndex === 0) {
    //   paginationPrev.textContent = `0${swiper.slides.length - 1}`
    //   paginationNext.textContent = `0${swiper.activeIndex + 2}`
    // }
    // console.log(swiper.activeIndex)
    // if(swiper.activeIndex === swiper.slides.length-2) {
    //   paginationPrev.textContent = `0${swiper.slides.length-2}`
    //   paginationNext.textContent = `0${1}`
    // }
    // if(swiper.activeIndex !== swiper.slides.length-2 && swiper.activeIndex !== 0) {
    //   paginationNext.textContent = `0${swiper.activeIndex + 2}`
    //   paginationPrev.textContent = `0${(swiper.activeIndex+1) - 1}`
    // }
    //
    // paginationActive.textContent = `0${swiper.activeIndex + 1}`


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
        // if(index === 0) {
        //   return  `<div class="${className}">
        //     <span>0${index + 1}</span>
        //     <div class="absolute right-[200px] -top-[40px]">
        //         <span class="w-[1px] h-[37px] bg-red-500"></span>
        //         <span class="absolute top-[20px]">01</span>
        //     </div>
        //   </div>`
        // }

          return `<div class="${ className}">
            <span>0${index + 1}</span>
          </div>`;

      },
    },

    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },
    on: {
      paginationRender: function (swiper, paginationEl) {
        customSwiper(swiper, paginationEl);
      },
      init: function (swiper) {
        console.log(swiper.pagination.el);
       // customSwiper(swiper)
      },
      // activeIndexChange: function (swiper) {
      //   customSwiper(swiper);
    //   // }
    }
  });


  let activeEl = document.querySelector('.slidePhoto-pagination__one');
  let myGallerey = new Swiper(".myGallerey", {
    allowTouchMove: false,

    pagination: {
      el: ".swiper-pagination__mobile",
      bulletClass: "swiper-pagination-bullet__custom",
      bulletActiveClass: "swiper-pagination-bullet-active__custom",
      clickable: true,
      renderBullet: function (index, className) {
        let values = ['50 метров', '150 метров', '300 метров'];
        return `<div data-slide="${index}" class="${className} whitespace-nowrap cursor-pointer px-[32px] py-[20px] border border-[#2D2D2B] lg:border-none lg:px-12 xl:px-20 2xl:px-[120px] md:py-4 lg:backdrop-blur-xl text-base font-normal">${values[index]}</div>`;
      },
    },
    breakpoints: {
      1030: {
        allowTouchMove: true,
        pagination: {
          el: ".swiper-pagination__gallerey",
        }
      }
    }
  });

  myGallerey.on('paginationRender', (swiper, pag) => {
    let active = swiper.pagination.el.querySelector('.swiper-pagination-bullet-active__custom');
    let wrapperPagination = document.querySelector('#photoPagination');

    if(activeEl) {
      activeEl.classList.remove('active')
    }

    if(wrapperPagination.querySelector(`[data-slide="${active.dataset.slide}"]`)) {
        activeEl = wrapperPagination.querySelector(`[data-slide="${active.dataset.slide}"]`);
        activeEl.classList.add('active');
    }

  })

  let photoSlideOne = new Swiper(".myPhotoOne", {
    slidesPerView: 1,
    allowTouchMove: true,
    breakpoints: {
      1030: {
        allowTouchMove: false,
      }
    },
    navigation: {
      nextEl: ".myGallerey-customOne-next",
      prevEl: ".myGallerey-customOne-prev"
    }
  })

  let photoSlideTwo = new Swiper(".myPhotoTwo", {
    slidesPerView: 1,
    allowTouchMove: true,
    breakpoints: {
      1030: {
        allowTouchMove: false,
      }
    },
    navigation: {
      nextEl: ".myGallerey-customTwo-next",
      prevEl: ".myGallerey-customTwo-prev"
    }
  })

  let photoSlideThree = new Swiper(".myPhotoThree", {
    allowTouchMove: true,
    breakpoints: {
      1030: {
        allowTouchMove: false,
      }
    },
    navigation: {
      nextEl: ".myGallerey-customThree-next",
      prevEl: ".myGallerey-customThree-prev"
    }
  })


  // Tabs('.galleries__tabs', '.tabs__head', '.tabs__body', '.tabs__caption', 'tabs__caption_active', 'tabs__content_active');
  Tabs('.route__tabs', '.tabs__head', '.tabs__body', '.tabs__caption', 'tabs__caption_active', 'tabs__content_active');
});