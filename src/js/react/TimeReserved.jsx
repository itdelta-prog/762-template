import React from "react";

export default function TimeReserved({activeTime, currentTime, broneTime, onChangeTime}) {
    const dataTime = [
        {id: 3, hourse: 11, time: '11:00'},
        {id: 4, hourse: 12, time: '12:00'}, {id: 5, hourse: 13, time: '13:00'}, {id: 6, hourse: 14, time: '14:00'},
        {id: 7, hourse: 15, time: '15:00'}, {id: 8, hourse: 16, time: '16:00'}, {id: 9, hourse: 17, time: '17:00'},
        {id: 10, hourse: 18, time: '18:00'}, {id: 11, hourse: 19, time: '19:00'}, {id: 12, hourse: 20, time: '20:00'},
        {id: 13, hourse: 21, time: '21:00'},
    ];

    const resultTime = currentTime ? dataTime.filter((obj) => obj.hourse > currentTime) : dataTime

    return (
        <div className="grid grid-cols-5 gap-x-0 sm:gap-x-5">
            {resultTime.map((data, idx) => {
                return <button key={data.id}
                               onClick={() => activeTime?.id === data.id ? onChangeTime(undefined) : onChangeTime(data)}
                               className={`${activeTime?.id === data.id ? 'active' : ''} ${broneTime?.includes(data.time) ? "pointer-events-none text-[#3A3A3A]" : ""} btnTime`}>{data.time}</button>
            })}
        </div>
    )
}