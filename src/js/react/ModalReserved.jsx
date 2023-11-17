import React, {useEffect, useState} from "react";
import VanillaCalendar from "./VanillaCalendar.jsx";
import TimeReserved from "./TimeReserved.jsx";
import axios from "axios";

export default function ModalReserved({onChangeDate, modalActive, onClose}) {
    const [bronDate, setBronDate] = useState({});
    const [currentDay, setCurrentDay] = useState([`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`]);
    const [activeTime, setActiveTime] = useState(undefined);
    const [dataForm, setDataForm] = useState({
        fullName: '',
        phone: '',
        email: ''
    })

    const [loading, setLoading] = useState(false);
    const myData = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`

    useEffect(() => {
        const fetchData = async () => {
            try {
                    axios.post("http://localhost/api/v1/reservation/get-reserved-dates", {
                        "year": "2023",
                        "month": "11"
                }).then((res) => setBronDate(res.data.data))
            }
            catch (error) {
                console.log(error);
                alert("Ошибка при запросе данных")
            }
            setLoading(true);
        }
        fetchData();
    }, []);


    const onChangeTime = (data) => {
        setActiveTime(data);
        onChangeDate({selectDate: currentDay, selectTime: data});
    }

    return (
        loading ? <div>
            <div className={modalActive ? 'w-full h-full fixed top-0 left-0 opacity-10 bg-black z-[9999] overflow-hidden' : ''} onClick={onClose}></div>
            <div className={`modalReserve  ${modalActive ? 'active' : ''} scrollCustom overflow-x-auto transition-all duration-300`}>
                <h6 className="text-white text-[18px]">Выберите дату посещения:</h6>
                <VanillaCalendar config={{
                    type: 'default',

                    actions: {
                        clickDay(e, dates) {
                            setCurrentDay(dates);
                            onChangeDate({selectDate: dates, selectTime:activeTime})
                        },
                    },
                    settings: {
                        lang: 'ru',
                        selection: {
                            year: false,
                        },
                        selected: {
                            dates: currentDay
                        },
                        range: {
                            disablePast: true,
                        },
                        visibility: {
                            weekend: false,
                            today: false,
                        },
                    },
                    CSSClasses: {
                        calendar: 'calendar-custom',
                        header: 'calendar-header',
                        headerContent: 'calendar-header__content',
                        arrow: 'calendar-arrow',
                        arrowPrev: 'calendar-arrow-prev',
                        arrowNext: 'calendar-arrow-next',
                        month: 'calendar-month',
                        year: 'calendar-year',
                        days: 'calendar-days',
                        day: 'calendar-day',
                        dayBtn: 'calendar-dayBtn',
                        dayBtnPrev: 'calendar-dayBtnPrev',
                        dayBtnNext: 'calendar-datBtnNext',
                        dayBtnDisabled: 'calendar-dayBtn-disabled',
                        dayBtnSelected: 'calendar-dayBtn-selected',
                        weekDay: 'calendar-week__day' }
                }} className="calendar" />
                <h6 className="text-white text-[18px] mb-4">Выберите время:</h6>
                <TimeReserved onChangeTime={onChangeTime} activeTime={activeTime} broneTime={bronDate[currentDay] ?? 'asda'} />
                <div className="mb-16">
                    <input type="text" value={dataForm.fullName} onChange={(eve) => setDataForm({...dataForm, fullName: eve.target.value})} placeholder="ФИО" className="w-full py-[20px] border-b border-[#3A3A3A] bg-transparent outline-none ring-offset-0 placeholder-[#878787] text-[#878787] text-[16px]" />
                    <input type="text" value={dataForm.email} onChange={(eve) => setDataForm({...dataForm, email: eve.target.value})} placeholder="Номер телефона" className="w-full py-[20px] border-b border-[#3A3A3A] bg-transparent outline-none ring-offset-0 placeholder-[#878787] text-[#878787] text-[16px]" />
                    <input type="text" value={dataForm.phone} onChange={(eve) => setDataForm(...dataForm, phone: eve.target.value))} placeholder="E-mail" className="w-full py-[20px] border-b border-[#3A3A3A] bg-transparent outline-none ring-offset-0 placeholder-[#878787] text-[#878787] text-[16px]" />
                </div>
                <div className="bg-[#1C1C1A] px-[17px] py-4">
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-white text-[18px] font-normal">Итого</p>
                        <p className="text-white text-[18px] font-normal totalAmout">25 000 ₽</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <button className="btn-catalog basis-[140px] px-[15px]"><span
                            className="btn-link__text text-sm">Забронировать</span></button>
                        <button className="btn-catalog basis-[145px]"><span
                            className="btn-link__text text-sm">Оплатить</span></button>
                    </div>
                </div>
            </div>
        </div> : 'loading'
    )
}
