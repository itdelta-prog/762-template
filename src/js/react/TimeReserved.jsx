import React from "react";

export default function TimeReserved({activeTime, broneTime, onChangeTime}) {
    const dataTime = [
        {id: 1, time: '9:00'}, {id: 2, time: '10:00'}, {id: 3, time: '11:00'},
        {id: 4, time: '12:00'}, {id: 5, time: '13:00'}, {id: 6, time: '14:00'},
        {id: 7, time: '15:00'}, {id: 8, time: '16:00'}, {id: 9, time: '17:00'},
        {id: 10, time: '18:00'}, {id: 11, time: '19:00'}, {id: 12, time: '20:00'},
        {id: 13, time: '21:00'}, {id: 14, time: '22:00'}, {id: 15, time: '23:00'},
    ];
    return (
        <div className="grid grid-cols-5 gap-x-0 sm:gap-x-5">
            {dataTime.map((data, idx) => {
                return <button key={data.id}
                               onClick={() => activeTime?.id === data.id ? onChangeTime(undefined) : onChangeTime(data)}
                               className={`${activeTime?.id === data.id ? 'active' : ''} ${broneTime?.includes(data.time) ? "pointer-events-none text-[#3A3A3A]" : ""} btnTime`}>{data.time}</button>
            })}
        </div>
    )
}