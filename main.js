import"./assets/script-df64ac74.js";import{T as p}from"./assets/tabs-0d1d1a23.js";async function c(n){let a=new FormData;return console.log(n),a.append("firstVisit",n.firstVisit),a.append("type",n.type),await(await fetch("https://651e822d44a3a8aa47687cb1.mockapi.io/pistolet",{method:"POST",body:a})).json()}const o=()=>{let n=document.querySelectorAll("[data-gun]"),a=document.querySelector('[data-filter="false"]'),e=document.getElementById("gungs");console.log(e);let t=n[0];t&&t.classList.toggle("btn__active"),a.addEventListener("click",async i=>{i.currentTarget.classList.toggle("btn__active"),i.currentTarget.dataset.filter==="false"?i.currentTarget.setAttribute("data-filter",!0):i.currentTarget.setAttribute("data-filter",!1);let l=await c({firstVisit:a.dataset.filter,type:t==null?void 0:t.dataset.gun});e.innerHTML="",l.forEach(r=>{e.insertAdjacentHTML("afterBegin",`<div class="p-[18px_18px_24px_18px] sm:p-[18px_18px_32px_18px] flex flex-col items-start sm:items-center gap-6 sm:gap-8 bg-[#1A1A19]">
  <div class="py-8 px-[60px] sm:p-[43px_78px_42px_81px] bg-[#222220] w-[294px] sm:w-[380px]"><img class="w-[220px] h-[150px]" src=${r.avatar}></div>
  <div class="max-w-[283px] sm:max-w-[350px]">
    <h3 class="sm:text-xl text-base font-medium leading-4 sm:leading-6 text-white mb-[18px]">${r.name}</h3>
    <p class="sm:text-base text-sm font-normal leading-[140%] text-[rgba(_255,_255,_255,_0.40)] mb-6">Программы, включающие обучение навыкам безопасного обращения с оружием, меткой и быстрой стрельбы...</p>
    <a href="#" class="inline-block sm:text-base text-sm font-normal underline text-white mb-6">Подробнее</a>
    <div class="w-full h-[1px] bg-[#2D2D2B]"></div>
  </div>
  <div class="flex justify-between items-center gap-x-4 sm:gap-16">
    <p class="text-white text-base sm:text-xl font-normal leading-6">20 500 ₽</p>
    <button class="flex justify-center items-start py-[18px] px-9 bg-[#272723] text-white text-base btn font-normal">Забронировать</button>
  </div>
</div>
      `)})}),document.querySelector(".nav-gung").addEventListener("click",async i=>{let l=document.querySelectorAll("[data-gun]");t&&t.classList.toggle("btn__active"),l.forEach(s=>{s.isEqualNode(i.target.parentNode)&&(t!=null&&t.isEqualNode(s)?(s.classList.remove("btn__active"),t=void 0):(t=s,s.classList.toggle("btn__active")))});let r=await c({firstVisit:a.dataset.filter,type:t==null?void 0:t.dataset.gun});e.innerHTML="",r.forEach(s=>{e.insertAdjacentHTML("afterBegin",`<div class="p-[18px_18px_24px_18px] sm:p-[18px_18px_32px_18px] flex flex-col items-start sm:items-center gap-6 sm:gap-8 bg-[#1A1A19]">
  <div class="py-8 px-[60px] sm:p-[43px_78px_42px_81px] bg-[#222220] w-[294px] sm:w-[380px]"><img class="w-[220px] h-[150px]" src=${s.avatar}></div>
  <div class="max-w-[283px] sm:max-w-[350px]">
    <h3 class="sm:text-xl text-base font-medium leading-4 sm:leading-6 text-white mb-[18px]">${s.name}</h3>
    <p class="sm:text-base text-sm font-normal leading-[140%] text-[rgba(_255,_255,_255,_0.40)] mb-6">Программы, включающие обучение навыкам безопасного обращения с оружием, меткой и быстрой стрельбы...</p>
    <a href="#" class="inline-block sm:text-base text-sm font-normal underline text-white mb-6">Подробнее</a>
    <div class="w-full h-[1px] bg-[#2D2D2B]"></div>
  </div>
  <div class="flex justify-between items-center gap-x-4 sm:gap-16">
    <p class="text-white text-base sm:text-xl font-normal leading-6">20 500 ₽</p>
    <button class="flex justify-center items-start py-[18px] px-9 bg-[#272723] text-white text-base btn font-normal">Забронировать</button>
  </div>
</div>
      `)})})};o();document.addEventListener("DOMContentLoaded",()=>{const n=e=>{let t=e.querySelector(".swiper-pagination-bullet-active"),i=[...e.querySelectorAll(".swiper-pagination-bullet")],l=i.indexOf(t);i.forEach((r,s)=>{l+1!==s&&l-1!==s&&l!==s?r.classList.add("acti"):r.classList.remove("acti")})};let a=new Swiper(".mySwiper",{slidesPerView:3,spaceBetween:30,breakpoints:{320:{slidesPerView:1,spaceBetween:20},750:{slidesPerView:"auto",spaceBetween:28}},pagination:{el:".pagination__custom",dynamicBullets:!0,clickable:!0,renderBullet:function(e,t){return console.log(e),`<div class="${t}">
            <span>0${e+1}</span>
          </div>`}},navigation:{nextEl:".custom-next",prevEl:".custom-prev"}});n(a.pagination.el),a.on("paginationRender",function(e,t){n(t)}),new Swiper(".myGallerey",{navigation:{nextEl:".myGallerey-custom-next",prevEl:".myGallerey-custom-prev"}}),p(".galleries__tabs",".tabs__head",".tabs__body",".tabs__caption","tabs__caption_active","tabs__content_active"),p(".route__tabs",".tabs__head",".tabs__body",".tabs__caption","tabs__caption_active","tabs__content_active")});
