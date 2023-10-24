const ddd = 111;
import './script.js';
import {SelectDropDown, DropDownMenu} from "./selectDropDown.js";
import './react_jsx.js';

var dataForm = `{
    "weekend":{
        "basicCost":{
            "price":"95000",
            "salesPrice":"34000"
        },
        "costOfShots":{
            "price":"35000",
            "salesPrice":"800000"
        },
        "personalGallery":"12000"
    },
    "weekdays":{
        "basicCost":{
            "price":"85000",
            "salesPrice":""
        },
        "costOfShots":{
            "price":"55000",
            "salesPrice":"100000"
        },
        "personalGallery":"12000"
    },
    "personalInstructor":"15000"
}`;
let dataResult  = JSON.parse(dataForm)

const state = {
    weekDay: 'weekdays',
    basicCost: Number(dataResult.weekdays.basicCost.price),
    costOfShoats: Number(dataResult.weekdays.costOfShots.price),
    quantityPerson: 1,
    instructor: false,
    instructorPrice: 0,
    galleryPrice: 0,
}

function totalAmout() {
    const totalElement = document.querySelectorAll('.totalAmout');

    let sum = state.basicCost * state.quantityPerson + state.instructorPrice + state.galleryPrice;
    totalElement.forEach(el => el.textContent = `${sum} р.`)
    console.log(state)
}


const days = () => {
    const wrapper = document.querySelector('.daysWrapper');
    const body = document.querySelector('.daysContent');
    let actvieElement = wrapper.querySelectorAll('button')[0];
    body.innerHTML = `<div class="flex justify-between mb-[12px]">
                             <p class="text-white text-[18px] font-normal leading-5">Базовая стоимость</p>
                             <div data-cost="basic"><span class="${dataResult[state.weekDay].basicCost.salesPrice ? '' : 'hidden'} text-[14px] text-[rgba(255,_255,_255,_0.50)] line-through">${dataResult[state.weekDay].basicCost.salesPrice} р</span> <span class="text-[18px] text-white font-normal leading-5 opacity-50">${state.basicCost} р.</span></div>
                              </div>
                              <div class="flex justify-between">
                                 <p class="text-white text-[18px] font-normal leading-5">Стоимость выстрелов</p>
                              <div data-cost="shots"><span class="${dataResult[state.weekDay].costOfShots.salesPrice ? '' : 'hidden'} text-[14px] text-[rgba(255,_255,_255,_0.50)] line-through">${dataResult[state.weekDay].costOfShots.salesPrice} р</span> <span class="text-[18px] text-[#B8AA91] font-normal leading-5">${state.costOfShoats} р.</span></div>
                           </div>`

    wrapper.addEventListener('click', (eve) => {
        if(eve.target.closest(".btn-catalog")) {
            if(!eve.target.closest(".btn-catalog").classList.contains('tabs__caption_active')) {
                actvieElement.classList.remove('tabs__caption_active')
                actvieElement = eve.target.closest(".btn-catalog");
                actvieElement.classList.add('tabs__caption_active');

                state.weekDay = actvieElement.dataset.day
                state.basicCost = Number(dataResult[actvieElement.dataset.day].basicCost.price);
                state.costOfShoats = Number(dataResult[actvieElement.dataset.day].costOfShots.price);

                body.innerHTML = `<div class="flex justify-between mb-[12px]">
                             <p class="text-white text-[18px] font-normal leading-5">Базовая стоимость</p>
                             <div data-cost="basic"><span class="${dataResult[state.weekDay].basicCost.salesPrice ? '' : 'hidden'} text-[14px] text-[rgba(255,_255,_255,_0.50)] line-through">${dataResult[state.weekDay].basicCost.salesPrice} р</span> <span class="text-[18px] text-white font-normal leading-5 opacity-50">${state.basicCost} р.</span></div>
                              </div>
                              <div class="flex justify-between">
                                 <p class="text-white text-[18px] font-normal leading-5">Стоимость выстрелов</p>
                              <div data-cost="shots"><span class="${dataResult[state.weekDay].costOfShots.salesPrice ? '' : 'hidden'} text-[14px] text-[rgba(255,_255,_255,_0.50)] line-through">${dataResult[state.weekDay].costOfShots.salesPrice} р</span> <span class="text-[18px] text-[#B8AA91] font-normal leading-5">${state.costOfShoats} р.</span></div>
                           </div>`
            }
            totalAmout();
        }
    })
}


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
            totalAmout();
        }
    })
}
const addSerice = () => {
    const serviceWrapper = document.getElementById('addService');
    const select = document.querySelector('.selectCustom');
    const instructor = serviceWrapper.querySelector('[data-instructor="price"]');
    const gallerey = serviceWrapper.querySelector('[data-gallery="price"]');

    instructor.textContent = `+${dataResult.personalInstructor} р.`;
    gallerey.textContent = `+${dataResult[state.weekDay].personalGallery} р.`
    serviceWrapper.addEventListener('click', (eve) => {
        if(eve.target.closest(".btnService")) {
            eve.target.closest(".btnService").classList.toggle('tabs__caption_active');
            if(eve.target.closest(".btnService").dataset.personal === 'instructor') {
                select.classList.toggle('disabled');

                if(!state.instructorPrice) {
                    state.instructorPrice = Number(dataResult.personalInstructor);
                }
                else {
                    state.instructorPrice = 0
                }
            }

            if(eve.target.closest(".btnService").dataset.personal === 'gallery') {
                if(!state.galleryPrice) {
                    state.galleryPrice = Number(dataResult[state.weekDay].personalGallery);
                }
                else {
                    state.galleryPrice = 0
                }
            }
        }
        totalAmout();
    });
}

const getInstrucotor = async() => {
    const wrapperSelect = document.getElementById('instructor');
    const bodyInstructor = wrapperSelect.querySelector('.menu');
    let response = await fetch('https://651e822d44a3a8aa47687cb1.mockapi.io/instrucotr')
    let data;
    if(response.ok) {
        data = await response.json();
        data.forEach((item) => {
            bodyInstructor.innerHTML += `<li>${item.first_name} ${item.last_name}</li>`
        });
    }
    SelectDropDown();
}

const modalReserv = () => {
    const btn = document.querySelector('.btnReserve');
    const modalWrapper = document.querySelector('.modalReserve');
    const timeWrapper = document.getElementById('time');
    let activeTime = undefined;

    btn.addEventListener('click', (eve) => {
        if(eve.target.closest('.btnReserve')) {
            document.body.classList.add('active');
            modalWrapper.classList.add('active');
        }
    });


    document.addEventListener('click', (eve) => {
        const withinBoundaries = eve.composedPath().includes(modalWrapper);
        if(!withinBoundaries && !eve.composedPath().includes(btn)) {
            document.body.classList.remove('active');
            modalWrapper.classList.remove('active');
        }
    });



    const calendar = new VanillaCalendar('#calendar', {
        settings: {
            lang: 'ru',
            range: {
                disablePast: true,
            },
            visibility: {
                weekend: false,
                today: false,
            },
        },
        CSSClasses: {
            calendarDefault: 'calendar-custom',
            header: 'calendar-header',
            headerContent: 'calendar-header__content',
            arrow: 'calendar-arrow',
            arrowPrev: 'calendar-arrow-prev',
            arrowNext: 'calendar-arrow-next',
            month: 'calendar-month',
            year: 'calendar-year',
            days: 'calendar-days',
            day: 'calendar-day',
            dayBtn: 'calendar-dayBtn',
            dayBtnDisabled: 'calendar-dayBtn-disabled',
            dayBtnSelected: 'calendar-dayBtn-selected',
            weekDay: 'calendar-week__day'
        }
    });
    calendar.init();

    time.addEventListener('click', (eve) => {

        if(eve.target.closest('.btnTime')) {
            if(activeTime) {
                activeTime.classList.remove('active')
            }
            if(activeTime === eve.target) {
                activeTime.classList.remove('active');
                activeTime = undefined;
            }
            else {
                activeTime = eve.target;
                activeTime.classList.add('active');
            }
            console.log(activeTime)
        }
    })
};

totalAmout();

getInstrucotor();

personShort();
// shortCurrent();
modalReserv();
addSerice();
days();


const getCourse = async(id) => {
    const resp = await fetch(`https://651e822d44a3a8aa47687cb1.mockapi.io/program/${id}`).then(res => res.json());
    console.log(resp);
}

const selectCourse = () => {
    const courseWrapper = document.querySelectorAll('.gunCourse');
    let activeCourse = document.querySelector('.course-text')
    courseWrapper.forEach((bodyCourse) => {
        bodyCourse.addEventListener('click', (eve) => {
           if(eve.target.closest('.course-text')) {
               if(activeCourse) {
                   activeCourse.classList.remove('active');
               }
               activeCourse = eve.target;
               activeCourse.classList.add('active');
           }
           console.log(activeCourse);
        })
    })
}
selectCourse()

DropDownMenu(document.getElementById('gun'));
DropDownMenu(document.getElementById('rifle'));
DropDownMenu(document.getElementById('carabin'));


document.addEventListener('DOMContentLoaded', () => {
    let myArsenal = new Swiper(".myArsenal", {
        slidesPerView: "auto",
        spaceBetween: 6,

        breakpoints: {
            500: {
                spaceBetween: 20
            }
        },
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

    totalAmout();
    days();
})