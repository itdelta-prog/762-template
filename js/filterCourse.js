const filterCatalog = () => {

  let filterBtnGun = document.querySelectorAll('[data-gun]');
  let filterBtn = document.querySelector('[data-filter="firstVisit"]')
 // let filterBtn = document.querySelectorAll('[data-filter]');
  //let activeElemFilter = filterBtn[0];
  let activeElemGang = filterBtnGun[0];

  console.log(activeElemGang)

  if (activeElemGang) {
    activeElemGang.classList.toggle('btn__active');
  }

  // if (activeElemFilter) {
  //   activeElemFilter.classList.toggle('btn__active');
  // }

  // document.querySelector('.nav-filter').addEventListener('click', (event) => {

  //   if (activeElemFilter) {
  //     activeElemFilter.classList.toggle('btn__active');
  //   }

  //   filterBtn.forEach((item) => {
  //     if (item.isEqualNode(event.target)) {
  //       if (activeElemFilter?.isEqualNode(item)) {
  //         item.classList.remove('btn__active');
  //         activeElemFilter = undefined;
  //       }
  //       else {
  //         activeElemFilter = item;
  //         item.classList.toggle('btn__active');
  //       }
  //     }
  //   });
  // });

  filterBtn.addEventListener('click', (eve) => {
    eve.target.classList.toggle('btn__active');
  })

  document.querySelector('.nav-gung').addEventListener('click', (event) => {
    let filterBtn = document.querySelectorAll('[data-gun]');

    if (activeElemGang) {
      activeElemGang.classList.toggle('btn__active');
    }

    filterBtn.forEach((item) => {
      if (item.isEqualNode(event.target)) {
        if (activeElemGang?.isEqualNode(item)) {
          item.classList.remove('btn__active');
          activeElemGang = undefined;
        }
        else {
          activeElemGang = item;
          item.classList.toggle('btn__active');
        }
      }
    });
  });

};

filterCatalog();