import"./main-3107183f.js";document.addEventListener("DOMContentLoaded",()=>{let a=new Swiper(".mySwiper",{slidesPerView:3,spaceBetween:30,breakpoints:{320:{slidesPerView:1,spaceBetween:20},750:{slidesPerView:"auto",spaceBetween:28}},pagination:{el:".pagination__custom",dynamicBullets:!0,clickable:!0,renderBullet:function(l,e){return`<div class="${e}">
            <span>0${l+1}</span>
          </div>`}},navigation:{nextEl:".custom-next",prevEl:".custom-prev"}});new Swiper(".myGallerey",{navigation:{nextEl:".myGallerey-custom-next",prevEl:".myGallerey-custom-prev"}}),a.on("paginationRender",function(l,e){let n=e.querySelector(".swiper-pagination-bullet-active"),i=[...e.querySelectorAll(".swiper-pagination-bullet")],t=i.indexOf(n);i.forEach((s,r)=>{t+1!==r&&t-1!==r&&t!==r?s.classList.add("acti"):s.classList.remove("acti")})})});const c=()=>{let a=document.querySelectorAll("[data-gun]"),l=document.querySelector('[data-filter="firstVisit"]'),e=a[0];e&&e.classList.toggle("btn__active"),l.addEventListener("click",n=>{n.currentTarget.classList.toggle("btn__active")}),document.querySelector(".nav-gung").addEventListener("click",n=>{let i=document.querySelectorAll("[data-gun]");e&&e.classList.toggle("btn__active"),i.forEach(t=>{t.isEqualNode(n.target.parentNode)&&(e!=null&&e.isEqualNode(t)?(t.classList.remove("btn__active"),e=void 0):(e=t,t.classList.toggle("btn__active")))})})};c();
