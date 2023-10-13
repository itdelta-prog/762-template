
const formGung = document.getElementById('gungForm');
const shortCurrent = () => {
    const shortWrapper = document.querySelector('.current-shot');
    const contentShort = document.querySelector('.btnContent');
    const shortValues = 2550;
    let shortActive = undefined;
    function shortPrice(short) {

        if(short?.dataset.minus) {
           return contentShort.innerHTML = `${shortValues - Number(short.dataset.minus)} выстрелов`;
        }
        if(short?.dataset.plus) {
          return  contentShort.innerHTML = `${shortValues + Number(short.dataset.plus)} выстрелов`;
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

            shortPrice(shortActive)
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
        }
    })
}
formGung.addEventListener('click', (eve) => {
    eve.preventDefault();
})


personShort();
shortCurrent();
