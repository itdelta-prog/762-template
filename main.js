import{T as c}from"./assets/tabs-9f3d8d9a.js";let o=document.getElementById("gungs");async function p(a){let e=new FormData;return console.log(a),e.append("firstVisit",a.firstVisit),e.append("type",a.type),await(await fetch("/local/ajax/main/weapons.php",{method:"POST",body:e})).json()}const d=a=>{o.innerHTML="",a.forEach(e=>{o.insertAdjacentHTML("afterBegin",`<div class="p-[18px_18px_24px_18px] sm:p-[18px_18px_32px_18px] flex flex-col items-start sm:items-center gap-6 sm:gap-8 bg-[#1A1A19]">
  <div class="py-8 px-[60px] sm:p-[43px_78px_42px_81px] bg-[#222220] w-[294px] sm:w-[380px]"><img class="w-[220px] h-[150px]" src=${e.avatar}></div>
  <div class="max-w-[283px] sm:max-w-[350px]">
    <h3 class="sm:text-xl text-base font-medium leading-4 sm:leading-6 text-white mb-[18px]">${e.name}</h3>
    <p class="sm:text-base text-sm font-normal leading-[140%] text-[rgba(_255,_255,_255,_0.40)] mb-6">Программы, включающие обучение навыкам безопасного обращения с оружием, меткой и быстрой стрельбы...</p>
    <a href="#" class="inline-block sm:text-base text-sm font-normal underline text-white mb-6">Подробнее</a>
    <div class="w-full h-[1px] bg-[#2D2D2B]"></div>
  </div>
  <div class="flex justify-between items-center gap-x-4 sm:gap-16">
    <p class="text-white text-base sm:text-xl font-normal leading-6">20 500 ₽</p>
    <button class="flex justify-center items-start py-[18px] px-9 bg-[#272723] text-white text-base btn font-normal">Забронировать</button>
  </div>
</div>
      `)})},u=()=>{let a=document.querySelectorAll("[data-gun]"),e=document.querySelector('[data-filter="false"]'),t=a[0];e.addEventListener("click",async s=>{s.target.closest(".btn__custom")&&s.target.closest(".btn__custom").classList.toggle("active"),s.currentTarget.dataset.filter==="false"?s.currentTarget.setAttribute("data-filter",!0):s.currentTarget.setAttribute("data-filter",!1);let i=await p({firstVisit:e.dataset.filter,type:t==null?void 0:t.dataset.gun});d(i)}),document.querySelector(".nav-gung").addEventListener("click",async s=>{let i=s.target.closest(".btn__custom");i&&(t===i?(t.classList.remove("active"),t=void 0):(t==null||t.classList.remove("active"),t=i,t.classList.add("active")));let n=await p({firstVisit:e.dataset.filter,type:t==null?void 0:t.dataset.gun});d(n)})};u();document.addEventListener("DOMContentLoaded",()=>{const a=(e,t)=>{let s=t.querySelector(".swiper-pagination-bullet-active"),i=[...t.querySelectorAll(".swiper-pagination-bullet")],n=i.indexOf(s);i.forEach((r,l)=>{n+1!==l&&n-1!==l&&n!==l?r.classList.add("acti"):r.classList.remove("acti")})};new Swiper(".mySwiper",{slidesPerView:3,spaceBetween:30,loop:!0,breakpoints:{320:{slidesPerView:1,spaceBetween:20},750:{slidesPerView:"auto",spaceBetween:28}},pagination:{el:".pagination__custom",dynamicBullets:!0,clickable:!0,renderBullet:function(e,t){return`<div class="${t}">
            <span>0${e+1}</span>
          </div>`}},navigation:{nextEl:".custom-next",prevEl:".custom-prev"},on:{paginationRender:function(e,t){a(e,t)},init:function(e){console.log(e.pagination.el)}}}),new Swiper(".myGallerey",{navigation:{nextEl:".myGallerey-custom-next",prevEl:".myGallerey-custom-prev"}}),c(".galleries__tabs",".tabs__head",".tabs__body",".tabs__caption","tabs__caption_active","tabs__content_active"),c(".route__tabs",".tabs__head",".tabs__body",".tabs__caption","tabs__caption_active","tabs__content_active")});
