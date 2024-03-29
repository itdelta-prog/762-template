let content = document.getElementById('program-reserved');
async function submitFitler(param) {

  let formData = new FormData();


  formData.append("type", param.type);
  let response = await fetch('/local/ajax/main/courses.php', {
    method: 'POST',
    body: formData
  });
  let res = await response.json();
  return res;
}



const contentAdd = (result) => {
  content.innerHTML = '';
  console.log(result);
  result.forEach((item) => {
    content.insertAdjacentHTML('afterBegin', `<div data-id="${item.id}" class="flex blockGung flex-col justify-between items-start basis-[414px] p-[18px_18px_32px_18px] bg-[#1A1A19]">
                  <div class="w-full flex flex-col items-start mb-[24px]">
                    <div class="w-full h-full bg-[#222220] mb-[32px]">
                      <img class="w-full h-full object-cover" src="${item.avatar}" alt="">
                    </div>
                    <h3 class="text-[16px] sm:text-xl font-medium leading-[24px] text-white mb-3 sm:mb-[18px] break-words">${item.name}</h3>
                    <p class="text-sm sm:text-[16px] font-normal leading-5 text-[rgba(255,_255,_255,_0.40)] mb-[18px] break-words">${item.description}</p>
                    <a class="text-white text-sm sm:text-[16px] font-normal underline" href="${item.link}">Подробнее</a>
                  </div>
                  <div class="flex w-full items-center justify-between pt-[25px] border-t border-[#2D2D2B]">
                    <span class="text-white text-base sm:text-xl font-normal">${item.price} ₽</span>
                    <button class="reserved flex justify-center items-start py-[18px] px-[30px] bg-[#272723] text-white text-base btn font-normal">Оставить заявку</button>
                  </div>
                </div>
      `)
  });
}

const filterCatalog = () => {

  let filterBtnGun = document.querySelectorAll('[data-gun]');



  let activeElemGang;






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


    let result = await submitFitler({type: activeElemGang?.dataset.gun});
    contentAdd(result);

  });

};

  filterCatalog();
