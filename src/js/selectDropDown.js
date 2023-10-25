export const SelectDropDown = (render) => {
    const dropdowns = document.querySelectorAll('.selectCustom');

    console.log(dropdowns);
    dropdowns.forEach(dropDown => {
        const select = dropDown.querySelector('.select');
        const caret = dropDown.querySelector('.caret');
        const menu = dropDown.querySelector('.menu');
        const options = dropDown.querySelectorAll('.menu li');
        const selected = dropDown.querySelector('.selected');

        select.addEventListener('click', (eve) => {

            select.classList.toggle('select-clicked');
            caret.classList.toggle('caret-rotate');
            menu.classList.toggle('menu-open');
        });
        options.forEach(option => {
            option.addEventListener('click', () => {
                selected.innerText = option.innerText;
                select.classList.remove('select-clicked');
                caret.classList.remove('caret-rotate');
                menu.classList.remove('menu-open');

                options.forEach(option => {
                    option.classList.remove('active');
                });
                option.classList.add('active');
            })
        });
    });
}

export const DropDownMenu = (menuElement) => {
    const btnAll = menuElement.querySelector('.all-btn');
    const hiddenMenu = menuElement.querySelector('[data-all="gun"]');

    btnAll.addEventListener('click', () => {
        hiddenMenu.classList.toggle('active');
        btnAll.classList.toggle('active');
        if(hiddenMenu.classList.contains('active')) {
            btnAll.innerHTML = `Свернуть <svg xmlns="http://www.w3.org/2000/svg" width="13" height="9" viewBox="0 0 13 9" fill="none">
                                <path d="M12.3604 1.14004L6.36035 7.86005L0.360351 1.14004" stroke="white" stroke-width="0.923077"/>
                            </svg>`
        }
        else {
            btnAll.innerHTML = `Все курсы <svg xmlns="http://www.w3.org/2000/svg" width="13" height="9" viewBox="0 0 13 9" fill="none">
                                <path d="M12.3604 1.14004L6.36035 7.86005L0.360351 1.14004" stroke="white" stroke-width="0.923077"/>
                            </svg>`;
        }
    })
}

// export const modal = () => {
//    const modalWrapper = document.querySelector('.modalReserve');
//    modalWrapper.classList.add('active');
// }