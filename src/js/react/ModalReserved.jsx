import VanillaCalendar from "./VanillaCalendar.jsx";
import TimeReserved from "./TimeReserved.jsx";

export default function ModalReserved({modalActive, onClose}) {
    return (
        <div>
            <div className={modalActive ? 'w-full h-full fixed top-0 left-0 opacity-10 bg-black z-[9999] overflow-hidden' : ''} onClick={onClose}></div>
            <div className={`modalReserve  ${modalActive ? 'active' : ''} scrollCustom overflow-x-auto transition-all duration-300`}>
                <h6 className="text-white text-[18px]">Выберите дату посещения:</h6>
                <VanillaCalendar config={{
                    type: 'default',
                    settings: {
                        lang: 'ru',
                        selection: {
                            year: false,
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
                <TimeReserved />
                <div className="mb-16">
                    <input type="text" placeholder="ФИО" className="w-full py-[20px] border-b border-[#3A3A3A] bg-transparent outline-none ring-offset-0 placeholder-[#878787] text-[#878787] text-[16px]" />
                    <input type="text" placeholder="Номер телефона" className="w-full py-[20px] border-b border-[#3A3A3A] bg-transparent outline-none ring-offset-0 placeholder-[#878787] text-[#878787] text-[16px]" />
                    <input type="text" placeholder="E-mail" className="w-full py-[20px] border-b border-[#3A3A3A] bg-transparent outline-none ring-offset-0 placeholder-[#878787] text-[#878787] text-[16px]" />
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
        </div>
    )
}
