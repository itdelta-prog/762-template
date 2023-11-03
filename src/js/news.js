import './script.js';


let myProgram = new Swiper(".myProgram", {
    slidesPerView: 1,
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 20
        }
    },
    pagination: {
        el: ".swiper-pagination__custom",
        type: "progressbar",
    },
})