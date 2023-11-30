import React, {useState} from "react";
import ButtonChecked from "./ButtonChecked.jsx";

export default function Select({options, onChange, className, select, title}) {
    const [open, setOpen] = useState(false);
    // const [select, setSelect] = useState({});

    return (
        <div className={`${className} selectCustom`}>
            <div onClick={() => setOpen(!open)} className="select">
                <span className={`${open ? 'select-clicked' : ''} selected text-[14px] sm:text-[17px]`}>{select?.label ?? title}</span>
                <div className={`${open ? 'caret-rotate' : ''} caret`}></div>
            </div>
            <ul className={`${open ? 'menu-open' : ''} menu min-h-[50px] max-h-[200px] scrollCustom overflow-y-scroll menuReserved`}>
                { options ?
                    options.map((item, idx) => {
                        return <li key={idx} onClick={() => {
                            setOpen(!open);
                            onChange(item);
                        }} className={`${item.value.id === select?.id ? 'active' : ''} text-[14px] sm:text-[16px] break-words`}>{item.label}</li>
                    })
                    : <div className="text-center">Пусто</div>}
            </ul>
        </div>
    )
}

