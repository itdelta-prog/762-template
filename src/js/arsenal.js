

function minusShort() {

}
const shortCurrent = () => {
    const shortWrapper = document.querySelector('.current-shot');
    const formGung = document.getElementById('gungForm');
    const contentShort = document.querySelector('.btnContent');
    const shortValues = 2550;
    let shortActive = undefined;
    function shortPrice(short) {

        console.log(short?.dataset.minus);
        if(short?.dataset.minus) {
           return contentShort.innerHTML = `${shortValues - Number(short.dataset.minus)} выстрелов`;
        }
        if(short?.dataset.plus) {
          return  contentShort.innerHTML = `${shortValues + Number(short.dataset.plus)} выстрелов`;
        }
        else {
            console.log('ok')
          return contentShort.innerHTML = `${shortValues} выстрелов`;
        }


        // contentShort.dataset.contentshort = Number(contentShort.dataset.contentshort) + Number(eve.target.dataset.currentshort)
        // return contentShort.innerHTML = `${Number(contentShort.dataset.contentshort) + Number(eve.target.dataset.currentshort)} выстрелов`;
    }


    formGung.addEventListener('click', (eve) => {
        eve.preventDefault();
    })

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


shortCurrent();