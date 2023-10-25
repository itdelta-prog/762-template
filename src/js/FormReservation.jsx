function FormReservation() {
    const person = [1, 2, 3, 4];
    return (
        <React.Fragment>
            <div className="mb-[31px]">
                <div className="flex gap-x-[13px] mb-[31px]">
                    <button className=" btn-catalog basis-[184px] tabs__caption_active">
                        <span className="btn-link__text">Будни</span>
                    </button>
                    <button className="btn-catalog basis-[184px]">
                        <span className="btn-link__text">Выходные</span></button>
                    sdsadasfdsfs
                </div>
                <div className="flex justify-between mb-[31px] person">
                    {
                        person.map((item) => {
                            return (
                                <button className="transition-all px-6 text-white py-4 border border-solid border-white opacity-[0.4] hover:border-[#B8AA91] hover:text-[#B8AA91] hover:opacity-100 btnCurrent">{item}</button>
                            )
                        })
                    }
                </div>
                <div className="">
                    <div className="daysContent">
                        <div className="flex justify-between mb-[12px]">
                            <p className="text-white text-[18px] font-normal leading-5">Базовая стоимость</p>
                            <div data-cost="basic"><span className="text-[14px] text-[rgba(255,_255,_255,_0.50)] line-through">20 р</span> <span className="text-[18px] text-white font-normal leading-5 opacity-50">500 р.</span></div>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-white text-[18px] font-normal leading-5">Стоимость выстрелов</p>
                            <div data-cost="shots"><span className=" text-[14px] text-[rgba(255,_255,_255,_0.50)] line-through">10 р</span> <span className="text-[18px] text-[#B8AA91] font-normal leading-5">600 р.</span></div>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

let domContainer = document.querySelector('#formReservation');
ReactDOM.render(<FormReservation />, domContainer);