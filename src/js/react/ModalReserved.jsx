import React, {useEffect, useMemo, useRef, useState} from "react";
import VanillaCalendar from "./components/VanillaCalendar.jsx";
import TimeReserved from "./TimeReserved.jsx";
import InputForm from "./InputForm.jsx";
import axios from "axios";

export default function ModalReserved({dayType, onChangeDate, sumForm, sumbitReservation}) {
    const [broneDate, setBroneDate] = useState({});
    const [loader, setLoader] = useState(false);
    const [currentDay, setCurrentDay] = useState([`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate() < 10 ? '0' : ''}${new Date().getDate()}`, new Date().getMonth()]);
    const [activeTime, setActiveTime] = useState(undefined);
    const disebladeRef = useRef(null);
    const myData = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate() < 10 ? '0' : ''}${new Date().getDate()}`
    const weekDays = [1,2,3,4,5];
    const weekEnd = [0, 6];
    const currentTime = currentDay[0] === myData ? new Date().getHours() : ''

    const fetchGetBroneDate = async (year, month) => {
        let {data} = await axios.post(`${baseUrl}api/v1/reservation/get-reserved-dates`, {
            "year": year,
            "month": month,
        });
        if(data.status === "success") {
            return data.data;
        }
        else {
            alert('dasdsas')
        }
    }

    useEffect(() => {

        console.log("REE")
        const fetchData = async() => {
            if(!JSON.parse(sessionStorage.getItem('broneDate'))) {
             let data = await fetchGetBroneDate(new Date().getFullYear(), new Date().getMonth()+1);
             sessionStorage.setItem('broneDate', JSON.stringify(data))
            }
            setBroneDate(JSON.parse(sessionStorage.getItem('broneDate')))
            const activeReservetTime= dataTime.reduce((agg, curr) => {
                return [...agg, curr.time]
            }, []);
            const disabled = Object.entries(broneDate).reduce((acc, curr) => {
                if(curr[1]?.toString() === activeReservetTime.toString()) {
                    return [...acc, curr[0]]
                }
                else {
                    return acc
                }
            }, []);
            disebladeRef.current = disabled
            setLoader(true);
        }
        fetchData()
    }, []);

    const getBroneDate = async (year, month) => {
        let data = await fetchGetBroneDate(year, month);
        sessionStorage.setItem('broneDate', JSON.stringify(data));
        setBroneDate(data);
    }


    const dataTime = [
        {id: 3, hourse: 11, time: '11:00'},
        {id: 4, hourse: 12, time: '12:00'}, {id: 5, hourse: 13, time: '13:00'}, {id: 6, hourse: 14, time: '14:00'},
        {id: 7, hourse: 15, time: '15:00'}, {id: 8, hourse: 16, time: '16:00'}, {id: 9, hourse: 17, time: '17:00'},
        {id: 10, hourse: 18, time: '18:00'}, {id: 11, hourse: 19, time: '19:00'}, {id: 12, hourse: 20, time: '20:00'},
        {id: 13, hourse: 21, time: '21:00'},
    ];


    const currentWeekDay = dayType === "weekday" ? weekDays.includes(new Date(currentDay[0]).getDay()) : weekEnd.includes(new Date(currentDay[0]).getDay());

    const disabledDate = useMemo(() => {
        const activeReservetTime= dataTime.reduce((agg, curr) => {
            return [...agg, curr.time]
        }, []);
        const disabled = Object.entries(broneDate).reduce((acc, curr) => {
            if(curr[1]?.toString() === activeReservetTime.toString()) {
                return [...acc, curr[0]]
            }
            else {
                return acc
            }
        }, [])
        return disabled;
    }, [broneDate]);

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


    return (
        loader ? <div>
            {    console.log(disebladeRef.current)}
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
                            //setCurrentDay(['', month]);
                            getBroneDate(year, month+1)
                        }
                    },
                    settings: {
                        lang: 'ru',
                        selection: {
                            year: false,
                        },
                        selected: {
                            dates:  currentWeekDay && [currentDay[0]],
                            month: currentDay[1]
                        },
                        range: {
                            disablePast: false,
                            disableWeekday: dayType === 'weekend' ? weekDays : weekEnd,
                            disabled: disebladeRef.current
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
                currentWeekDay ? <TimeReserved dataTime={dataTime} currentTime={currentTime} activeTime={activeTime} onChangeTime={onChangeTime}  broneTime={ ''} /> : ''
            }
            <InputForm sumbitReservation={sumbitReservation} sumForm={sumForm}/>
        </div> : <img className="" src="/img/loader.svg" alt=""/>
    )
}
