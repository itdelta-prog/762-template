const filterCatalog = () => {
  let activeElemFilter;
  let activeElemGang;

  document.querySelector('.nav-filter').addEventListener('click', (event) => {
    let filterBtn = document.querySelectorAll('[data-filter]');

    if (activeElemFilter) {
      activeElemFilter.classList.remove('btn__active');
    }

    filterBtn.forEach((item) => {
      if (item.isEqualNode(event.target)) {
        if (activeElemFilter?.isEqualNode(item)) {
          item.classList.remove('btn__active');
          activeElemFilter = undefined;
        }
        else {
          activeElemFilter = item;
          item.classList.toggle('btn__active');
        }
      }
    });
  });

  document.querySelector('.nav-gung').addEventListener('click', (event) => {
    let filterBtn = document.querySelectorAll('[data-gun]');

    if (activeElemGang) {
      activeElemGang.classList.remove('btn__active');
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