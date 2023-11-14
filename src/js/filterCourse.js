let content = document.getElementById('gungs');
async function submitFitler(param) {

  let formData = new FormData();

  console.log(param);

  formData.append("firstVisit", param.firstVisit);
  formData.append("type", param.type);
  let response = await fetch('/local/ajax/main/weapons.php', {
    method: 'POST',
    body: formData
  });
  let res = await response.json();
  return res;
}


const contentAdd = (result) => {
  content.innerHTML = '';
  result.forEach((item) => {
    content.insertAdjacentHTML('afterBegin', `<div class="p-[18px_18px_24px_18px] sm:p-[18px_18px_32px_18px] flex flex-col items-start sm:items-center gap-6 sm:gap-8 bg-[#1A1A19]">
  <div class="py-8 px-[60px] sm:p-[43px_78px_42px_81px] bg-[#222220] w-[294px] sm:w-[380px]"><img class="w-[220px] h-[150px]" src=${item.avatar}></div>
  <div class="max-w-[283px] sm:max-w-[350px]">
    <h3 class="sm:text-xl text-base font-medium leading-4 sm:leading-6 text-white mb-[18px] min-h-[50px]">${item.name}</h3>
    <p class="sm:text-base text-sm font-normal leading-[140%] text-[rgba(_255,_255,_255,_0.40)] mb-6 min-h-[150px]">Программы, включающие обучение навыкам безопасного обращения с оружием, меткой и быстрой стрельбы...</p>
    <a href="#" class="inline-block sm:text-base text-sm font-normal underline text-white mb-6">Подробнее</a>
    <div class="w-full h-[1px] bg-[#2D2D2B]"></div>
  </div>
  <div class="flex justify-between items-center gap-x-4 sm:gap-16">
    <p class="text-white text-base sm:text-xl font-normal leading-6">20 500 ₽</p>
    <button class="flex justify-center items-start py-[18px] px-9 bg-[#272723] text-white text-base btn font-normal">Забронировать</button>
  </div>
</div>
    content.insertAdjacentHTML('afterBegin', `<div class="flex flex-col justify-between items-start basis-[414px] p-[18px_18px_32px_18px] bg-[#1A1A19]">
                  <div class="flex flex-col items-start mb-[24px]">
                    <div class="w-full h-[189px] sm:h-[243px] bg-[#222220] mb-[32px]">
                      <img class="w-full h-full object-cover" src="${item.avatar}" alt="">
                    </div>
                    <h3 class="text-[16px] sm:text-xl font-medium leading-[24px] text-white mb-3 sm:mb-[18px] break-all">${item.name}/h3>
                    <p class="text-sm sm:text-[16px] font-normal leading-5 text-[rgba(255,_255,_255,_0.40)] mb-[18px] break-all">Программы, включающие обучение навыкам безопасного обращения с оружием, меткой и быстрой стрельбы...</p>
                    <a class="text-white text-sm sm:text-[16px] font-normal underline" href="">Подробнее</a>
                  </div>
                  <div class="flex w-full items-center justify-between pt-[25px] border-t border-[#2D2D2B]">
                    <span class="text-white text-base sm:Ltext-xl font-normal">20 500 ₽</span>
                    <button class="flex justify-center items-start py-[18px] px-[30px] bg-[#272723] text-white text-base btn font-normal">Забронировать</button>
                  </div>
                </div>
      `)
  });
}

const filterCatalog = () => {

  let filterBtnGun = document.querySelectorAll('[data-gun]');
  let filterBtnVisit = document.querySelector('[data-filter="false"]');




 // let filterBtn = document.querySelectorAll('[data-filter]');
  //let activeElemFilter = filterBtn[0];
  let activeElemGang = filterBtnGun[0];


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

    if(eve.target.closest('.btn__custom')) {
      eve.target.closest('.btn__custom').classList.toggle('active');
    }
    // eve.currentTarget.classList.toggle('active');

    if(eve.currentTarget.dataset.filter === 'false') {
      eve.currentTarget.setAttribute('data-filter', true)
    }
    else {
      eve.currentTarget.setAttribute('data-filter', false)
    }

    let result = await submitFitler({firstVisit:filterBtnVisit.dataset.filter, type: activeElemGang?.dataset.gun});
    contentAdd(result);
  })

  document.querySelector('.nav-gung').addEventListener('click', async (event) => {
    let el = event.target.closest('.btn__custom');
    if(el) {
      if(activeElemGang === el) {
        activeElemGang.classList.remove('active');
        activeElemGang = undefined;
      }
      else {
        activeElemGang?.classList.remove('active');
        activeElemGang = el;
        activeElemGang.classList.add('active');
      }
    }


    let result = await submitFitler({firstVisit: filterBtnVisit.dataset.filter, type: activeElemGang?.dataset.gun});
    contentAdd(result);

  });

};

  filterCatalog();