function FormReservation({dataForm}) {
    const [dataReserv, setDataReserv] = React.useState({
        day: 'weekdays',
        basicPrice: dataForm.weekdays.basicPrice.price,
        shoatsPrice: dataForm.weekdays.shoatsPrice.price,
        quantityPerson: 1,
        instructor: '',
        instructorPrice: 0,
        galleryPrice: 0,
    });
    const [active, setActive] = React.useState(false);
    const person = [1, 2, 3, 4];
    console.log(dataReserv)
    return (
        <React.Fragment>
            <div className="mb-[31px]">
                <div className="flex gap-x-[13px] mb-[31px]">
                    <button onClick={() => setDataReserv({...dataReserv, day:'weekdays', basicPrice: dataForm.weekdays.basicPrice.price, shoatsPrice: dataForm.weekdays.shoatsPrice.price})} className={` btn-catalog basis-[184px] ${dataReserv.day === 'weekdays' ? "tabs__caption_active"  : ''}`}>
                        <span className="btn-link__text">Будни</span>
                    </button>
                    <button onClick={() => setDataReserv({...dataReserv, day:'weekend', basicPrice: dataForm.weekend.basicPrice.price, shoatsPrice: dataForm.weekend.shoatsPrice.price})} className={` btn-catalog basis-[184px] ${dataReserv.day === 'weekend' ? "tabs__caption_active"  : ''}`}>
                        <span className="btn-link__text ">Выходные</span>
                    </button>
                </div>
                <div className="flex justify-between mb-[31px] person">
                    {dataReserv.quantityPerson}
                    {
                        person.map((item) => {
                            return (
                                <button onClick={() => setDataReserv({...dataReserv, quantityPerson: item})} className={`${dataReserv.quantityPerson === item ? 'text-[#0F0F0F] bg-[#B8AA91] border-transparent opacity-100' : 'hover:border-[#B8AA91] border-white border-opacity-[0.4] hover:border-opacity-100 hover:text-[#B8AA91] hover:opacity-100 opacity-[0.4]'} transition-all px-6 py-4 border border-solid`}>{item}</button>
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
            <div class="flex flex-col gap-y-[11px] mb-[31px]">

                <div id="addService" class="flex flex-col gap-y-5">
                    <button  onClick={() => {
                        setActive(!active);
                        active ? setDataReserv({...dataReserv, instructorPrice: Number(dataForm.personalInstructor)}) : setDataReserv({...dataReserv, instructorPrice: 0})
                    }} className={`${active ? 'bg-red-500 after:opacity-0 before:opacity-0' : 'btn-catalog after:w-[calc(100%_-_10%)] group'} p-[12px_19px_12px_19px]  flex justify-between`}><span class={`${active ? 'text-white opacity-100' : 'opacity-20 group-hover:opacity-100'} text-[17px] btn-link__text`}>Персональный инструктор</span><span class="text-[17px] opacity-20 group-hover:opacity-100 btn-link__text" data-instructor="price">+{Number(dataForm.personalInstructor).toLocaleString()} р.</span></button>
                    <div id="instructor" class="selectCustom disabled">
                        <div class="select">
                            <span class="selected">Выбрать инструктора</span>
                            <div class="caret"></div>
                        </div>
                        <ul class="menu h-[200px] scrollCustom overflow-y-scroll">
                            <li>Framer</li>
                            <li>Sketch</li>
                            <li>Figma</li>
                        </ul>
                    </div>
                    <button onClick={() => dataReserv.galleryPrice === 0 ? setDataReserv({...dataReserv, galleryPrice: dataForm[dataReserv.day].personalGallery}) : setDataReserv({...dataReserv, galleryPrice: 0})} class="p-[12px_19px_12px_19px] after:w-[calc(100%_-_10%)] btn-catalog flex justify-between group btnService"><span class="text-[17px] opacity-20 group-hover:opacity-100 btn-link__text">Персональная галерея </span><span className="text-[17px] opacity-20  group-hover:opacity-100 btn-link__text" data-gallery="price">+{Number(dataForm[dataReserv.day].personalGallery).toLocaleString()} р.</span></button>
                </div>
            </div>
            <div class="flex justify-between items-center mb-[21px]">
                <p class="text-[18px] text-white">Итого</p>
                <p class="text-[18px] text-white totalAmout">85 000 р.</p>
            </div>
            <div class="flex justify-between md:justify-normal md:gap-x-[13px]">
                <button class="btn-catalog"><span
                    class="btn-link__text">В подарок</span></button>
                <button class="btn-catalog btnReserve">
                    <span class="btn-link__text">К бронированию</span></button>
            </div>
        </React.Fragment>
    )
}

let domContainer = document.querySelector('#formReservation');
ReactDOM.render(<FormReservation dataForm={data}/>, domContainer);