import React from "react";
import {useState} from "react";

export default function TimeReserved() {
    const [activeTimemmm, setActiveTimemmm] = useState(undefined);
    const dataTime = [{id: 1, time: '9:00'}, {id: 2, time: '10:00'}, {id: 3, time: '11:00'}, {id: 4, time: '12:00'}, {id: 5, time: '13:00'}, {id: 6, time: '14:00'}]
    return (
        <div className="grid grid-cols-5 gap-x-5">
            {dataTime.map((data) => {
                return <button key={data.id} onClick={() => activeTimemmm?.id === data.id ? setActiveTimemmm(undefined) : setActiveTimemmm(data)} className={`${activeTimemmm?.id === data.id ? 'active' : ''} btnTime`} >{data.time}</button>
            })}
        </div>
    )
}