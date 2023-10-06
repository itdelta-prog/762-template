async function submitFitler(param) {

  let formData = new FormData();

  formData.append("firstVisit", param.firstVisit);
  formData.append("type", param.type);
  let response = await fetch('https://651e822d44a3a8aa47687cb1.mockapi.io/pistolet', {
    method: 'POST',
    headers: { "Content-Type": "form-data" },
    body: formData
  });
  let res = await response.json();
  return res;
}


const filterCatalog = () => {

  let filterBtnGun = document.querySelectorAll('[data-gun]');
  let filterBtnVisit = document.querySelector('[data-filter="false"]');

  let loader = document.getElementById('loader');

  let content = document.getElementById('gungs');

  console.log(content)
 // let filterBtn = document.querySelectorAll('[data-filter]');
  //let activeElemFilter = filterBtn[0];
  let activeElemGang = filterBtnGun[0];


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

  filterBtnVisit.addEventListener('click', async(eve) => {
    eve.currentTarget.classList.toggle('btn__active');

    if(eve.currentTarget.dataset.filter === 'false') {
      eve.currentTarget.setAttribute('data-filter', true)
    }
    else {
      eve.currentTarget.setAttribute('data-filter', false)
    }

    loader.classList.remove('hidden');
    content.innerHTML = '';
    let result = await submitFitler({firstVisit:filterBtnVisit.dataset.filter, type: activeElemGang.dataset.gun});
    loader.classList.add('hidden')
    result.forEach((item) => {
      content.insertAdjacentHTML('afterBegin', `<div class="p-[18px_18px_24px_18px] sm:p-[18px_18px_32px_18px] flex flex-col items-start sm:items-center gap-6 sm:gap-8 bg-[#1A1A19]">
  <div class="py-8 px-[60px] sm:p-[43px_78px_42px_81px] bg-[#222220] w-[294px] sm:w-[380px]"><img class="w-[220px] h-[150px]" src=${item.avatar}/></div>
  <div class="max-w-[283px] sm:max-w-[350px]">
    <h3 class="sm:text-xl text-base font-medium leading-4 sm:leading-6 text-white mb-[18px]">${item.name}</h3>
    <p class="sm:text-base text-sm font-normal leading-[140%] text-[rgba(_255,_255,_255,_0.40)] mb-6">Программы, включающие обучение навыкам безопасного обращения с оружием, меткой и быстрой стрельбы...</p>
    <a href="#" class="inline-block sm:text-base text-sm font-normal underline text-white mb-6">Подробнее</a>
    <div class="w-full h-[1px] bg-[#2D2D2B]"></div>
  </div>
  <div class="flex justify-between items-center gap-x-4 sm:gap-16">
    <p class="text-white text-base sm:text-xl font-normal leading-6">20 500 ₽</p>
    <button class="flex justify-center items-start py-[18px] px-9 bg-[#272723] text-white text-base btn font-normal">Забронировать</button>
  </div>
</div>
      `)
    })
  })

  document.querySelector('.nav-gung').addEventListener('click', async (event) => {
    let filterBtn = document.querySelectorAll('[data-gun]');

    if (activeElemGang) {
      activeElemGang.classList.toggle('btn__active');
    }

    filterBtn.forEach((item) => {
      if (item.isEqualNode(event.target.parentNode)) {
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
    loader.classList.remove('hidden');
    content.innerHTML = '';
    let result = await submitFitler({firstVisit: filterBtnVisit.dataset.filter, type: activeElemGang.dataset.gun});
    loader.classList.add('hidden')
    result.forEach((item) => {
      content.insertAdjacentHTML('afterBegin', `<div class="p-[18px_18px_24px_18px] sm:p-[18px_18px_32px_18px] flex flex-col items-start sm:items-center gap-6 sm:gap-8 bg-[#1A1A19]">
  <div class="py-8 px-[60px] sm:p-[43px_78px_42px_81px] bg-[#222220] w-[294px] sm:w-[380px]"><img class="w-[220px] h-[150px]" src=${item.avatar}/></div>
  <div class="max-w-[283px] sm:max-w-[350px]">
    <h3 class="sm:text-xl text-base font-medium leading-4 sm:leading-6 text-white mb-[18px]">${item.name}</h3>
    <p class="sm:text-base text-sm font-normal leading-[140%] text-[rgba(_255,_255,_255,_0.40)] mb-6">Программы, включающие обучение навыкам безопасного обращения с оружием, меткой и быстрой стрельбы...</p>
    <a href="#" class="inline-block sm:text-base text-sm font-normal underline text-white mb-6">Подробнее</a>
    <div class="w-full h-[1px] bg-[#2D2D2B]"></div>
  </div>
  <div class="flex justify-between items-center gap-x-4 sm:gap-16">
    <p class="text-white text-base sm:text-xl font-normal leading-6">20 500 ₽</p>
    <button class="flex justify-center items-start py-[18px] px-9 bg-[#272723] text-white text-base btn font-normal">Забронировать</button>
  </div>
</div>
      `)
    })

  });

};

  filterCatalog();