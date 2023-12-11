import React from "react";
import {useState} from "react";

export const DayType = () => {

    const [dayType,setDayType] = useState('weekday');
    return (
        <div className="flex gap-x-[13px] mb-[31px] mt-8">
            <button onClick={() => setDayType('weekday')} className={`btn-catalog basis-[184px] ${dayType === 'weekday' ? "tabs__caption_active"  : ''}`}>
                <span className="btn-link__text text-[14px] sm:text-[17px]">Будни</span>
            </button>
            <button onClick={() => setDayType('weekend')} className={`btn-catalog basis-[184px] ${dayType === 'weekend' ? "tabs__caption_active"  : ''}`}>
                <span className="btn-link__text text-[14px] sm:text-[17px] ">Выходные</span>
            </button>
        </div>
    )
}

export const CountParams = ({count, onChange, value}) => {
    return (
        <div className="flex gap-x-[13px] mb-[31px] person">
            {
                count.map((item, idx) => {
                    return (
                        <button key={idx}
                                onClick={() => onChange(item)}
                                className={`${value === item ? 'text-[#0F0F0F] bg-[#B8AA91] border-transparent' + 'opacity-100' : 'hover:border-[#B8AA91] border-white border-opacity-[0.4] ' + 'hover:border-opacity-100 ' + 'hover:text-[#B8AA91] ' + 'hover:opacity-100  text-white  opacity-[0.4]'} transition-all px-6 py-4 text-[14px] sm:text-[17px] border border-solid`
                                }>
                            {item}
                        </button>
                    )
                })
            }
        </div>
    )
}