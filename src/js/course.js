import './script.js';
import './filterCourse.js';
import {SelectDropDown, DropDownMenu} from "./selectDropDown.js";
import {Tabs} from "./tabs.js";


const courseMobileWrapper = document.querySelectorAll('.select-catalog__mobile')
const selectProgram = document.querySelectorAll('.select-catalog');

Tabs('.catalog__tabs', '.tabs__head', '.tabs__body', '.tabs__caption', 'active', 'tabs__content_active')
courseMobileWrapper.forEach((item) => {
    SelectDropDown(item);
})

selectProgram.forEach((select) => {
    console.log(select);
    DropDownMenu(select);
});
