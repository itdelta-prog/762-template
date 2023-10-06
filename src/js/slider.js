// import '@splidejs/splide/css/core';
// import Splide from '@splidejs/splide';


// let splideCourse = new Splide('#splideCourse', {
//   autoWidth: true,
//   focus: 0,
//   gap: '28px',
//   omitEnd: true,
//   pagination: false
// });

// let bar = splideCourse.root.querySelector('.my-slider-progress-bar');



// splideCourse.on('mounted move', function () {

//   var end = splideCourse.Components.Controller.getEnd() + 1;
//   var rate = Math.min((splideCourse.index + 1) / end, 1);
//   bar.style.width = String(100 * rate) + '%';
// });

// splideCourse.mount();

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


let myArsenal = new Swiper(".myArsenal", {
  spaceBetween: 16,
  //slidesPerView: 6,
  navigation: {
    nextEl: ".myArsenal-custom-next",
    prevEl: ".myArsenal-custom-prev",
  },
});

console.log('ok')

// let as = swiper.pagination.el.querySelectorAll('div');

// as.forEach((item, i) => {
//   if (i > 3) {
//     console.log(item);
//   }
// })


// splideGallery.on('pagination:mounted', function (data) {
//   // You can add your class to the UL element
//   // data.items.forEach((el) => {
//   //   console.log(el)
//   // });
//   let fixElem = document.createElement('li');
//   fixElem.className = 'flex items-end mb-[800px] gap-10';
//   fixElem.innerHTML = `<span class="block w-[1px] h-[19px] bg-[rgba(255,_255,_255,_0.15)]"></span>
//         <span class="block w-[1px] h-[19px] bg-[rgba(255,_255,_255,_0.15)]"></span>
//         <span class="block w-[1px] h-[37px] bg-[rgba(255,_255,_255,_0.15)]"></span>
//         <span class="block w-[1px] h-[19px] bg-[rgba(255,_255,_255,_0.15)]"></span>
//         <span class="block w-[1px] h-[19px] bg-[rgba(255,_255,_255,_0.15)]"></span>`;
//   data.list.classList.add('splide__pagination--custom');

//   let lis = data.list.querySelectorAll('li');

//   lis.forEach((el, i) => {
//     if (i !== lis.length - 1) {
//       el.insertAdjacentHTML('beforeend', `<div class="splide__pagination__li-custom">
//         <span class=""></span>
//         <span class=""></span>
//         <span class="special"></span>
//         <span class=""></span>
//         <span class=""></span>
//       </div>`);
//     }
//   })
  
//   console.log(data.items);
//   // `items` contains all dot items
//   data.items.forEach(function (item) {
//     console.log(item)
//     item.button.innerHTML = `<span>${0 + String(item.page + 1)}</span>`;
//   });
// });

// splideGallery.mount(); 