import Modal from "./Modal.jsx";
function Button({stageModal}) {
    return (
        <button onClick={(eve) => stageModal = {id: eve.target.closest('.blockGung').dataset.id, show:true}} class="flex justify-center items-start py-[18px] px-9 bg-[#272723] text-white text-base btn font-normal">Забронировать</button>
    )
}
Modal();
let domContainer = document.querySelectorAll('.blockGung');
domContainer.forEach(item =>  ReactDOM.render(<Button stageModal={stageModal}/>, item.querySelector('.diynamicBtn')))