const dialog = document.querySelector('[role="dialog"]');
const btnBurger = document.querySelector('[data-burger="menu"]');

const dropDownLink = document.querySelectorAll('.dropdown-link');
let dropDownMenu
const dropDown = document.querySelector('#dropdownDefaultButton');

const routeModal = document.getElementById('route-modal');
const routeBtn = document.querySelector('.route__modal-btn');

dropDownLink.forEach((link) =>{
    link.addEventListener("click", (eve) => {
       dropDownMenu = link.querySelector('.dropdown');
        dropDownMenu.classList.toggle('hidden')
    })
})
btnBurger.addEventListener("click", (eve) => {
    eve.preventDefault();
    btnBurger.classList.toggle('active');
    dialog.classList.toggle('active');
    document.body.classList.toggle('active');
    dialog.previousElementSibling.classList.toggle('active');
});

// dropDown.addEventListener('click', () => {
//     dropDownMenu.classList.toggle('hidden');
// });

if(routeBtn) {
    console.log(routeBtn)
    routeBtn.addEventListener('click', (eve) => {
        eve.preventDefault();
        routeModal.classList.toggle('route__modal-active');
    })
}
document.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(dropDownMenu.parentElement);
    if (!withinBoundaries) {
        dropDownMenu.classList.add('hidden'); // скрываем элемент т к клик был за его пределами
    }

    if (routeBtn) {
        if (!e.composedPath().includes(routeModal) && !e.composedPath().includes(routeBtn)) {
            routeModal.classList.remove('route__modal-active');
        }
    }
})