document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.querySelector('[role="dialog"]');
  const btnBurger = document.querySelector('[data-burger="menu"]');

  const dropDown = document.querySelector('#dropdownDefaultButton');
  const dropDownMenu = document.querySelector('#dropdown');

  const routeModal = document.getElementById('route-modal');
  const routeBtn = document.querySelector('.route__modal-btn');


  btnBurger.addEventListener("click", (eve) => {
    eve.preventDefault();


    btnBurger.classList.toggle('active');
    dialog.classList.toggle('active');
    document.body.classList.toggle('active');
    dialog.previousElementSibling.classList.toggle('active');
  });

  dropDown.addEventListener('click', () => {
    dropDownMenu.classList.toggle('hidden');
  });

  document.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(dropDownMenu.parentElement);
    if (!withinBoundaries) {
      dropDownMenu.classList.add('hidden'); // скрываем элемент т к клик был за его пределами
    }

    if (!e.composedPath().includes(routeModal) && !e.composedPath().includes(routeBtn)) {
      routeModal.classList.remove('route__modal-active');
    }
  });


  routeBtn.addEventListener('click', (eve) => {
    eve.preventDefault();
    routeModal.classList.toggle('route__modal-active');
  })


  const tabs = (tabsSelector, tabsHeadSelector, tabsBodySelector, tabsCaptionSelector, tabsCaptionActiveClass, tabsContentActiveClass) => {

    const tabs = document.querySelectorAll(tabsSelector);

    tabs.forEach((element) => {


      const head = element.querySelector(tabsHeadSelector);
      const body = element.querySelector(tabsBodySelector);

      const getActiveTabName = () => {
        return head.querySelector(`.${tabsCaptionActiveClass}`).dataset.tab;
      };

      const setActiveContent = () => {
        if (body.querySelector(`.${tabsContentActiveClass}`)) {
          body.querySelector(`.${tabsContentActiveClass}`).classList.remove(tabsContentActiveClass);
        }
        body.querySelector(`[data-tab=${getActiveTabName()}]`).classList.add(tabsContentActiveClass);
      };
      // проверяем при загрузке страницы, есть ли активная вкладка
      if (!head.querySelector(`.${tabsCaptionActiveClass}`)) {
        head.querySelector(tabsCaptionSelector).classList.add(tabsCaptionActiveClass);
      }

      setActiveContent(getActiveTabName());

      head.addEventListener('click', (e) => {
        const caption = e.target.closest(tabsCaptionSelector);
        if (!caption) return;
        if (caption.classList.contains(tabsCaptionActiveClass)) return;

        if (head.querySelector(`.${tabsCaptionActiveClass}`)) {
          head.querySelector(`.${tabsCaptionActiveClass}`).classList.remove(tabsCaptionActiveClass);
        }

        caption.classList.add(tabsCaptionActiveClass);

        setActiveContent(getActiveTabName());
      });
    });

  };


  tabs('.galleries__tabs', '.tabs__head', '.tabs__body', '.tabs__caption', 'tabs__caption_active', 'tabs__content_active');
  tabs('.route__tabs', '.tabs__head', '.tabs__body', '.tabs__caption', 'tabs__caption_active', 'tabs__content_active');


});