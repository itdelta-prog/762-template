import React, {useEffect, useRef, useState} from "react";
import VanillaCalendar from "./components/VanillaCalendar.jsx";
import TimeReserved from "./TimeReserved.jsx";
import InputForm from "./InputForm.jsx";

export default function ModalReserved({onChangeDate, broneDate, sumForm, sumbitReservation, getBroneDate}) {
    const [currentDay, setCurrentDay] = useState([`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`, new Date().getMonth()]);
    const [activeTime, setActiveTime] = useState(undefined);
    const myData = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`

    const onChangeTime = (data) => {
        setActiveTime(data);
        onChangeDate({selectDate: currentDay, selectTime: data});
    }

    return (
        <div>
                <h6 className="text-white text-[18px]">Выберите дату посещения:</h6>
                <VanillaCalendar config={
                    {
                    type: 'default',

                    date: {
                        min: myData,
                        max: '2023-12-31'
                    },

                    actions: {
                        clickDay(e, dates) {
                            setCurrentDay([...dates, new Date(dates).getMonth()]);
                            setActiveTime(undefined);
                           onChangeDate({selectDate: dates, selectTime:activeTime})
                        },
                        clickArrow(e, year, month) {
                            setCurrentDay(['', month]);
                           getBroneDate(year, month+1);
                        }
                    },
                    settings: {
                        lang: 'ru',
                        selection: {
                            year: false,
                        },
                        selected: {
                            dates: [currentDay[0]],
                            month: currentDay[1]
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
                <TimeReserved activeTime={activeTime} onChangeTime={onChangeTime} broneTime={broneDate[currentDay[0]] ?? ''} />
                <InputForm sumbitReservation={sumbitReservation} sumForm={sumForm}/>
        </div>
    )
}
