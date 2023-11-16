import React, {useState} from "react";
import Button from "./Button.jsx";

export default function Select({options, onChange, className}) {
    const [open, setOpen] = useState(false);
    const [select, setSelect] = useState({});

    return (
        <div className={`${className} selectCustom`}>
            <div onClick={() => setOpen(!open)} className="select">
                <span className={`${open ? 'select-clicked' : ''} selected`}>{select.label ?? "Выбрать инструктора"}</span>
                <div className={`${open ? 'caret-rotate' : ''} caret`}></div>
            </div>
            <ul className={`${open ? 'menu-open' : ''} menu h-[200px] scrollCustom overflow-y-scroll menuReserved`}>
                {
                    options.map((item) => {
                        return <li key={item.value.id} onClick={() => {
                            setOpen(!open);
                            setSelect(item);
                            onChange(item.value);
                        }} className={item.value.id === select.id ? 'active' : ''}>{item.label}</li>
                    })
                }
            </ul>
        </div>
    )
}

