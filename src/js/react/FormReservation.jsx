
function FormReservation({dataForm}) {
    const person = [1, 2, 3, 4];
    const [dataReserv, setDataReserv] = React.useState({
        day: 'weekdays',
        basicPrice: dataForm.weekdays.basicPrice.price,
        shoatsPrice: dataForm.weekdays.shoatsPrice.price,
        quantityPerson: 1,
        instructor: '',
        instructorPrice: 0,
        galleryPrice: 0,
    });
    console.log(dataReserv);
    return (
        <React.Fragment>
            <div className="mb-[31px]">
                <div className="flex gap-x-[13px] mb-[31px]">
                    <button onClick={() => setDataReserv({...dataReserv, day:'weekdays', basicPrice: dataForm.weekdays.basicPrice.price, shoatsPrice: dataForm.weekdays.shoatsPrice.price})} className={` btn-catalog basis-[184px] ${dataReserv.day === 'weekdays' ? "tabs__caption_active"  : ''}`}>
                        <span className="btn-link__text">Будни</span>
                    </button>
                    <button onClick={() => setDataReserv({...dataReserv, day:'weekend', basicPrice: dataForm.weekend.basicPrice.price, shoatsPrice: dataForm.weekend.shoatsPrice.price})} className={` btn-catalog basis-[184px] ${dataReserv.day === 'weekend' ? "tabs__caption_active"  : ''}`}>
                        <span className="btn-link__text">Выходные</span>
                    </button>
                </div>
                <div className="flex justify-between mb-[31px] person">
                    {dataReserv.quantityPerson}
                    {
                        person.map((item) => {
                            return (
                                <button onClick={() => setDataReserv({...dataReserv, quantityPerson: item})} className={`${dataReserv.quantityPerson === item ? 'text-[#0F0F0F] bg-red-600 opacity-100' : 'hover:border-[#B8AA91]  border-white border-opacity-[0.4] hover:border-opacity-100 hover:text-[#B8AA91] hover:opacity-100 opacity-[0.4]'} transition-all bg-transparent px-6 py-4 border border-solid `}>{item}</button>
                            )
                        })
                    }
                </div>
                <div className="">
                    <div className="daysContent">
                        <div className="flex justify-between mb-[12px]">
                            <p className="text-white text-[18px] font-normal leading-5">Базовая стоимость</p>
                            <div data-cost="basic"><span className="text-[14px] text-[rgba(255,_255,_255,_0.50)] line-through">20 р</span> <span className="text-[18px] text-white font-normal leading-5 opacity-50">{Number(dataReserv.basicPrice).toLocaleString()} р.</span></div>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-white text-[18px] font-normal leading-5">Стоимость выстрелов</p>
                            <div data-cost="shots"><span className=" text-[14px] text-[rgba(255,_255,_255,_0.50)] line-through">10 р</span> <span className="text-[18px] text-[#B8AA91] font-normal leading-5">{Number(dataReserv.shoatsPrice).toLocaleString()} р.</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-[#282828] mb-9"></div>
        </React.Fragment>
    )
}

let domContainer = document.querySelector('#formReservation');
ReactDOM.render(<FormReservation dataForm={data}/>, domContainer);