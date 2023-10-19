import './script.js';
import {Tabs} from "./tabs.js";
import {SelectDropDown, DropDownMenu} from "./selectDropDown.js";

const state = {
    weekDay: '',
    quantityPerson: 1,
    quantityPatron: 0,
    instructor: false,
    galleryRental: false,
}
const formGung = document.getElementById('gungForm');



const shortCurrent = () => {
    const shortWrapper = document.querySelector('.current-shot');
    const contentShort = document.querySelector('.btnContent');
    const shortValues = 2550;
    let shortActive = undefined;
    function shortPrice(short) {

        if(short?.classList.contains('btnMinus')) {
            return contentShort.innerHTML = `${shortValues + Number(short.dataset.pattron)} выстрелов`;
        }
        if(short?.classList.contains('btnPlus')) {
            return  contentShort.innerHTML = `${shortValues + Number(short.dataset.pattron)} выстрелов`;
        }
        else {
            return contentShort.innerHTML = `${shortValues} выстрелов`;
        }
    }

    shortWrapper.addEventListener('click', (eve) => {
        if(eve.target.className.includes('btnCurrent')) {
            if(shortActive) {
                shortActive.classList.remove('shortActive');
            }
            if(shortActive === eve.target) {
                shortActive = null;
            }
            else {
                shortActive = eve.target;
                shortActive.classList.add('shortActive')
            }

            shortPrice(shortActive);
            state.quantityPatron = Number(shortActive?.dataset.pattron);
            render();
        }
    })
}
const personShort = () => {
    const personWrapper = document.querySelector('.person');
    let activeElement = document.querySelector('.person-active');
    personWrapper.addEventListener('click', (eve) => {
        if(eve.target.className.includes('btnCurrent')) {
            if(activeElement) {
                activeElement.classList.remove('person-active')
            }
            activeElement = eve.target;
            activeElement.classList.add('person-active');
            state.quantityPerson = Number(activeElement.dataset.person);
            render();
        }
    })
}
const addSerice = () => {
    const ServiceWrapper = document.getElementById('addService');

    ServiceWrapper.addEventListener('click', (eve) => {

        if(eve.target.closest(".btnService")) {
            eve.target.closest(".btnService").classList.toggle('active');
            // eve.target.classList.toggle('active');
        }
    })
}

function render() {
    console.log(state);
}



formGung.addEventListener('click', (eve) => {
    eve.preventDefault();
});

let myArsenal = new Swiper(".myArsenal", {
    slidesPerView: "auto",
    spaceBetween: 20,
    //slidesPerView: 6,
    navigation: {
        nextEl: ".myArsenal-custom-next",
        prevEl: ".myArsenal-custom-prev",
        lockClass: false
    },
    pagination: {
        el: ".swiper-pagination__custom",
        type: "progressbar",
    },
});
let imageGang = new Swiper(".imageGang", {
    slidesPerView: 1,
    spaceBetween: 15,
    pagination: {
        el: ".imageGang-pagination",
        type: "custom",
        renderCustom: function (swiper, current, total) {
            return `<span class="text-white">0${current}</span> <span class="text-[rgba(255,_255,_255,_0.30)]">/ 0${total}</span>`;
        }
    },
    navigation: {
        nextEl: ".imageGang-button-next",
        prevEl: ".imageGang-button-prev",
    },
});

let GungSlider = new Swiper(".GungSlider", {
    slidesPerView: 1,
    spaceBetween: 30,

    breakpoints: {
        1416: {
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
})



Tabs('.tabs__visits', '.tabs__head', '.tabs__body', '.tabs__caption', 'tabs__caption_active', 'tabs__content_active')
SelectDropDown();
personShort();
shortCurrent();
addSerice();

DropDownMenu(document.getElementById('gun'));
DropDownMenu(document.getElementById('rifle'));
DropDownMenu(document.getElementById('carabin'));