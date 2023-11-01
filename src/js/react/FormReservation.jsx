import ModalReserved from "./ModalReserved.jsx";
function FormReservation({dataForm}) {
    const [dataReserv, setDataReserv] = React.useState({
        day: 'weekdays',
        basicPrice: Number(dataForm.weekdays.basicPrice.price),
        shoatsPrice: Number(dataForm.weekdays.shoatsPrice.price),
        quantityPerson: 1,
        instructor: '',
        instructorPrice: 0,
        galleryPrice: 0,
        dataTime: null
    });
    const [sum, setSum] = React.useState(Number(dataForm.weekdays.basicPrice.price))
    const [active, setActive] = React.useState(false);
    const [selectedActive, setSelectedActive] = React.useState(false);
    const [modal, setModal] = React.useState(false);
    const [instructor, setInstructor] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async() => {
            let response = await fetch('https://651e822d44a3a8aa47687cb1.mockapi.io/instrucotr');
            if(response.ok) {
                setInstructor(await response.json())
            }
        }
        fetchData();
    }, [])

    React.useEffect(() => {
        console.log(dataReserv)
        setSum(dataReserv.basicPrice * dataReserv.quantityPerson + dataReserv.instructorPrice + dataReserv.galleryPrice)
    }, [dataReserv]);

    const person = [1, 2, 3, 4];

    const onClose = () => {
        setModal(false);
        document.body.classList.remove('active')
    }
    return (
        <React.Fragment>
            <div>
                <div className="mb-[31px]">
                    <div className="flex gap-x-[13px] mb-[31px]">
                        <button onClick={() => setDataReserv({...dataReserv, day:'weekdays', basicPrice: Number(dataForm.weekdays.basicPrice.price), shoatsPrice: Number(dataForm.weekdays.shoatsPrice.price)})} className={`btn-catalog basis-[184px] ${dataReserv.day === 'weekdays' ? "tabs__caption_active"  : ''}`}>
                            <span className="btn-link__text">Будни</span>
                        </button>
                        <button onClick={() => setDataReserv({...dataReserv, day:'weekend', basicPrice: Number(dataForm.weekend.basicPrice.price), shoatsPrice: Number(dataForm.weekend.shoatsPrice.price)})} className={`btn-catalog basis-[184px] ${dataReserv.day === 'weekend' ? "tabs__caption_active"  : ''}`}>
                            <span className="btn-link__text ">Выходные</span>
                        </button>
                    </div>
                    <div className="flex justify-between mb-[31px] person">
                        {
                            person.map((item) => {
                                return (
                                    <button onClick={() => setDataReserv({...dataReserv, quantityPerson: item})} className={`${dataReserv.quantityPerson === item ? 'text-[#0F0F0F] bg-[#B8AA91] border-transparent opacity-100' : 'hover:border-[#B8AA91] border-white border-opacity-[0.4] hover:border-opacity-100 hover:text-[#B8AA91] hover:opacity-100  text-white  opacity-[0.4]'} transition-all px-6 py-4  border border-solid`}>{item}</button>
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
                <div className="flex flex-col gap-y-[11px] mb-[31px]">
                    <div id="addService" className="flex flex-col gap-y-5">
                        <button  onClick={() => {
                            setActive(!active);
                            dataReserv.instructorPrice === 0 ? setDataReserv({...dataReserv, instructorPrice: Number(dataForm.personalInstructor)}) : setDataReserv({...dataReserv, instructorPrice: 0})
                        }} className={`${active ? 'tabs__caption_active' : ''} p-[12px_19px_12px_19px] after:w-[calc(100%_-_10%)] btn-catalog group flex justify-between btnService`}><span className={"text-[17px] opacity-20 group-hover:opacity-100 btn-link__text"}>Персональный инструктор</span><span className={"text-[17px] opacity-20 group-hover:opacity-100 btn-link__text"} data-instructor="price">+{Number(dataForm.personalInstructor).toLocaleString()} р.</span></button>
                        <div id="instructor" onClick={() => active ? setSelectedActive(!selectedActive) : ''} className={`${active ? '' : 'disabled'} + selectCustom`}>
                            <div className="select">
                                <span className={`${selectedActive ? 'select-clicked' : ''} selected`}>{dataReserv.instructor.first_name ?? "Выбрать инструктора"}</span>
                                <div className={`${selectedActive ? 'caret-rotate' : ''} caret`}></div>
                            </div>
                            <ul className={`${selectedActive ? 'menu-open' : ''} menu h-[200px] scrollCustom overflow-y-scroll menuReserved`}>
                                {
                                    instructor.map((item) => {
                                        return <li key={item.id} onClick={() => setDataReserv({...dataReserv, instructor: item})} className={item.id === dataReserv.instructor.id ? 'active' : ''}>{item.first_name} {item.last_name}</li>
                                    })
                                }
                            </ul>
                        </div>
                        <button onClick={() => dataReserv.galleryPrice === 0 ? setDataReserv({...dataReserv, galleryPrice: Number(dataForm[dataReserv.day].personalGallery)}) : setDataReserv({...dataReserv, galleryPrice: 0})} className={`${dataReserv.galleryPrice !== 0 ? 'tabs__caption_active' : ''} p-[12px_19px_12px_19px] after:w-[calc(100%_-_10%)] btn-catalog flex justify-between group btnService`}><span className="text-[17px] opacity-20 group-hover:opacity-100 btn-link__text">Персональная галерея </span><span className="text-[17px] opacity-20  group-hover:opacity-100 btn-link__text" data-gallery="price">+{Number(dataForm[dataReserv.day].personalGallery).toLocaleString()} р.</span></button>
                    </div>
                </div>
                <div className="flex justify-between items-center mb-[21px]">
                    <p className="text-[18px] text-white">Итого</p>
                    <p className="text-[18px] text-white totalAmout">{sum.toLocaleString()} р.</p>
                </div>
                <div className="flex justify-between md:justify-normal md:gap-x-[13px]">
                    <button className="btn-catalog"><span
                        className="btn-link__text">В подарок</span></button>
                    <button className="btn-catalog btnReserve " onClick={() => {
                        setModal(true);
                        document.body.classList.add('active')
                    }}>
                        <span className="btn-link__text" >К бронированию</span></button>
                </div>
            </div>
            <ModalReserved modalActive={modal} onClose={onClose}/>
        </React.Fragment>
    )
}

let domContainer = document.querySelector('#formReservation');
ReactDOM.render(<FormReservation dataForm={data}/>, domContainer);