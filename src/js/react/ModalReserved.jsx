import React, {useEffect, useMemo, useRef, useState} from "react";
import VanillaCalendar from "./components/VanillaCalendar.jsx";
import TimeReserved from "./TimeReserved.jsx";
import InputForm from "./InputForm.jsx";

export default function ModalReserved({dayType, onChangeDate, broneDate, dataTime, disabledData, sumForm, sumbitReservation, getBroneDate}) {

    const [currentDay, setCurrentDay] = useState([`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate() < 10 ? '0' : ''}${new Date().getDate()}`, new Date().getMonth()]);
    const [activeTime, setActiveTime] = useState(undefined);
    const myData = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate() < 10 ? '0' : ''}${new Date().getDate()}`

    const weekDays = [1,2,3,4,5];
    const weekEnd = [0, 6];
    const currentTime = currentDay[0] === myData ? new Date().getHours() : ''

    // const dataTime = [
    //     {id: 3, hourse: 11, time: '11:00'},
    //     {id: 4, hourse: 12, time: '12:00'}, {id: 5, hourse: 13, time: '13:00'}, {id: 6, hourse: 14, time: '14:00'},
    //     {id: 7, hourse: 15, time: '15:00'}, {id: 8, hourse: 16, time: '16:00'}, {id: 9, hourse: 17, time: '17:00'},
    //     {id: 10, hourse: 18, time: '18:00'}, {id: 11, hourse: 19, time: '19:00'}, {id: 12, hourse: 20, time: '20:00'},
    //     {id: 13, hourse: 21, time: '21:00'},
    // ];

    const currentWeekDay = dayType === "weekday" ? weekDays.includes(new Date(currentDay[0]).getDay()) : weekEnd.includes(new Date(currentDay[0]).getDay());

    // const disabledDate = useMemo(() => {
    //
    //     console.log(broneDate)
    //
    //     const activeReservetTime= dataTime.reduce((agg, curr) => {
    //         return [...agg, curr.time]
    //     }, []);
    //     const disabled = Object.entries(broneDate).reduce((acc, curr) => {
    //         if(curr[1]?.toString() === activeReservetTime.toString()) {
    //             return [...acc, curr[0]]
    //         }
    //         else {
    //             return acc
    //         }
    //     }, [])
    //     return disabled;
    // }, [broneDate]);

    const onChangeTime = (data) => {
        setActiveTime(data);
        onChangeDate({selectDate: currentDay, selectTime: data});
    }

    console.log(disabledData)

    return (
        <div>
                <h6 className="text-white text-[18px]">Выберите дату посещения:</h6>
                <VanillaCalendar config={
                    {
                    type: 'default',

                    date: {
                        min: myData,
                        max: '2024-12-31',

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
                            dates: disabledData.includes(currentDay[0]) ? '' : currentWeekDay && [currentDay[0]],
                            month: currentDay[1]
                        },
                        range: {
                            disablePast: false,
                            disableWeekday: dayType === 'weekend' ? weekDays : weekEnd,
                            disabled: disabledData
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
                        content: 'calendar-content',
                        wrapper: 'calendar-wrapper',
                        week: 'calendar-week',
                        weekDay: 'calendar-week__day' }
                }} className="calendar" />
                <h6 className="text-white text-[18px] mb-4">Выберите время:</h6>
            {
                currentWeekDay ? <TimeReserved dataTime={dataTime} currentTime={currentTime} activeTime={activeTime} onChangeTime={onChangeTime}  broneTime={broneDate[currentDay[0]] ?? ''} /> : ''
            }
                <InputForm sumbitReservation={sumbitReservation} sumForm={sumForm}/>
        </div>
    )
}
