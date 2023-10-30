import './script.js';
import {SelectDropDown, DropDownMenu} from "./selectDropDown.js";

document.addEventListener('DOMContentLoaded', () => {
    const courseMobileWrapper = document.getElementById('courseSelected');
    let GungSlider = new Swiper(".GungSlider", {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            1416: {
                slidesPerView: 4,
                spaceBetween: 30,
            },

            970: {
                slidesPerView: 3,
                spaceBetween: 30,
            },

            500: {
                slidesPerView: 2,
                spaceBetween: 30,
            }

        },
        pagination: {
            el: ".swiper-pagination__custom",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".myGung-custom-next",
            prevEl: ".myGung-custom-prev",
            lockClass: false
        }
    })

    let InstructorSlider = new Swiper(".InstructorSlider", {
        slidesPerView: 1,
        spaceBetween: 30,

        breakpoints: {
            1500: {
                slidesPerView: 4,
            },

            970: {
                slidesPerView: 3
            },

            500: {
                slidesPerView: 2
            }
        },
        pagination: {
            el: ".swiper-pagination__custom",
            type: "progressbar",
        },


        navigation: {
            nextEl: ".InstructorSlider-custom-next",
            prevEl: ".InstructorSlider-custom-prev",
            lockClass: false
        }
    });

    SelectDropDown(courseMobileWrapper);

    DropDownMenu(document.getElementById('gun'));
    DropDownMenu(document.getElementById('rifle'));
    DropDownMenu(document.getElementById('carabin'));
})