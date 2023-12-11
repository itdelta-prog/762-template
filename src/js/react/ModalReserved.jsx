import React, {useCallback, useEffect, useMemo, useState} from "react";
// import VanillaCalendar from "./components/VanillaCalendar.jsx";
import TimeReserved from "./TimeReserved.jsx";
import InputForm from "./InputForm.jsx";
import axios from "axios";
import Calendar from 'react-calendar';

export default function ModalReserved({dayType, onChangeDate, sumForm, sumbitReservation}) {
    const [broneDate, setBroneDate] = useState({});
    const [loader, setLoader] = useState(false);
    const [currentDay, setCurrentDay] = useState([`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate() < 10 ? '0' : ''}${new Date().getDate()}`, new Date().getMonth()]);
    const [activeTime, setActiveTime] = useState(undefined);
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
        const fetchData = async() => {
            if(!JSON.parse(sessionStorage.getItem('broneDate'))) {
             let data = await fetchGetBroneDate(new Date().getFullYear(), new Date().getMonth()+1);
             sessionStorage.setItem('broneDate', JSON.stringify(data))
            }
            setBroneDate(JSON.parse(sessionStorage.getItem('broneDate')))

        }
        fetchData()
        // console.log(currentDay)
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

    const disabledBroneDate = useMemo(() => {
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
        console.log(disabled)
        return disabled
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
        onChangeDate({selectDate: currentDay[0], selectTime: data});
    }


    const disabledDate = ({date}) => {
      return dayType === 'weekend' ? weekDays.some(el => el === date.getDay()) : weekEnd.some(el => el === date.getDay()) || disabledBroneDate?.some(el => el === `${date.getFullYear()}-${date.getMonth()+1 < 10 ? '0' : ''}${date.getMonth()+1}-${date.getDate() < 10 ? '0' : ''}${date.getDate()}`)
    }

    return (
        <div>
            <h6 className="text-white text-[18px]">Выберите дату посещения:</h6>
            <Calendar
                defaultValue={currentWeekDay ? new Date : ''}
                minDate={new Date()}
                nextLabel={<img src="./img/arrLeft.svg" alt=""/>}
                prevLabel={<img src="./img/arrLeft.svg" alt=""/>}
                next2Label={null}
                prev2Label={null}
                navigationLabel={({date, label, locale, view}) => {
                    return <>
                        <span className='react-calendar__navigation__label__labelText-month'>{label.split(' ')[0].toLowerCase()} </span>
                        <span className='react-calendar__navigation__label__labelText-year'> {label.split(' ')[1]} </span>
                    </>
                }}
                tileDisabled={disabledDate}
                onActiveStartDateChange={({ action, activeStartDate, value, view }) => {
                    getBroneDate(activeStartDate.getFullYear(), activeStartDate.getMonth()+1)
                }}
                onClickDay={(val, eve) => {
                    setCurrentDay([`${val.getFullYear()}-${val.getMonth()+1}-${val.getDate() < 10 ? '0' : ''}${val.getDate()}`, val.getMonth()]);
                    onChangeDate({selectDate: `${val.getFullYear()}-${val.getMonth()+1}-${val.getDate() < 10 ? '0' : ''}${val.getDate()}`, selectTime: activeTime})
                }}
            />
            <h6 className="text-white text-[18px] mb-4">Выберите время:</h6>
            {
               <TimeReserved dataTime={dataTime} currentTime={currentTime} activeTime={activeTime} onChangeTime={onChangeTime} bronDate={broneDate} broneTime={broneDate[currentDay[0]]} />
            }
            <InputForm sumbitReservation={sumbitReservation} sumForm={sumForm}/>
        </div>
    )
}
