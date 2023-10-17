import"./assets/script-df64ac74.js";import{T as p}from"./assets/tabs-0d1d1a23.js";async function c(r){let s=new FormData;return console.log(r),s.append("firstVisit",r.firstVisit),s.append("type",r.type),await(await fetch("https://651e822d44a3a8aa47687cb1.mockapi.io/pistolet",{method:"POST",body:s})).json()}const o=()=>{let r=document.querySelectorAll("[data-gun]"),s=document.querySelector('[data-filter="false"]'),a=document.getElementById("gungs");console.log(a);let t=r[0];t&&t.classList.toggle("btn__active"),s.addEventListener("click",async i=>{i.currentTarget.classList.toggle("btn__active"),i.currentTarget.dataset.filter==="false"?i.currentTarget.setAttribute("data-filter",!0):i.currentTarget.setAttribute("data-filter",!1);let n=await c({firstVisit:s.dataset.filter,type:t==null?void 0:t.dataset.gun});a.innerHTML="",n.forEach(l=>{a.insertAdjacentHTML("afterBegin",`<div class="p-[18px_18px_24px_18px] sm:p-[18px_18px_32px_18px] flex flex-col items-start sm:items-center gap-6 sm:gap-8 bg-[#1A1A19]">
  <div class="py-8 px-[60px] sm:p-[43px_78px_42px_81px] bg-[#222220] w-[294px] sm:w-[380px]"><img class="w-[220px] h-[150px]" src=${l.avatar}></div>
  <div class="max-w-[283px] sm:max-w-[350px]">
    <h3 class="sm:text-xl text-base font-medium leading-4 sm:leading-6 text-white mb-[18px]">${l.name}</h3>
    <p class="sm:text-base text-sm font-normal leading-[140%] text-[rgba(_255,_255,_255,_0.40)] mb-6">Программы, включающие обучение навыкам безопасного обращения с оружием, меткой и быстрой стрельбы...</p>
    <a href="#" class="inline-block sm:text-base text-sm font-normal underline text-white mb-6">Подробнее</a>
    <div class="w-full h-[1px] bg-[#2D2D2B]"></div>
  </div>
  <div class="flex justify-between items-center gap-x-4 sm:gap-16">
    <p class="text-white text-base sm:text-xl font-normal leading-6">20 500 ₽</p>
    <button class="flex justify-center items-start py-[18px] px-9 bg-[#272723] text-white text-base btn font-normal">Забронировать</button>
  </div>
</div>
      `)})}),document.querySelector(".nav-gung").addEventListener("click",async i=>{let n=document.querySelectorAll("[data-gun]");t&&t.classList.toggle("btn__active"),n.forEach(e=>{e.isEqualNode(i.target.parentNode)&&(t!=null&&t.isEqualNode(e)?(e.classList.remove("btn__active"),t=void 0):(t=e,e.classList.toggle("btn__active")))});let l=await c({firstVisit:s.dataset.filter,type:t==null?void 0:t.dataset.gun});a.innerHTML="",l.forEach(e=>{a.insertAdjacentHTML("afterBegin",`<div class="p-[18px_18px_24px_18px] sm:p-[18px_18px_32px_18px] flex flex-col items-start sm:items-center gap-6 sm:gap-8 bg-[#1A1A19]">
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
      `)})})};o();document.addEventListener("DOMContentLoaded",()=>{new Swiper(".mySwiper",{slidesPerView:3,spaceBetween:30,breakpoints:{320:{slidesPerView:1,spaceBetween:20},750:{slidesPerView:"auto",spaceBetween:28}},pagination:{el:".pagination__custom",dynamicBullets:!0,clickable:!0,renderBullet:function(s,a){return console.log(s),`<div class="${a}">
            <span>0${s+1}</span>
          </div>`}},navigation:{nextEl:".custom-next",prevEl:".custom-prev"}}).on("paginationRender",function(s,a){let t=a.querySelector(".swiper-pagination-bullet-active"),i=[...a.querySelectorAll(".swiper-pagination-bullet")],n=i.indexOf(t);i.forEach((l,e)=>{n+1!==e&&n-1!==e&&n!==e?l.classList.add("acti"):l.classList.remove("acti")})}),new Swiper(".myGallerey",{navigation:{nextEl:".myGallerey-custom-next",prevEl:".myGallerey-custom-prev"}}),p(".galleries__tabs",".tabs__head",".tabs__body",".tabs__caption","tabs__caption_active","tabs__content_active"),p(".route__tabs",".tabs__head",".tabs__body",".tabs__caption","tabs__caption_active","tabs__content_active")});
