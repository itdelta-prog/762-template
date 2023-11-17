import React, {useState} from "react";
export default function ButtonChecked({children, onClick, className}) {
    const [active, setActive] = useState(false)
    return (
        <button onClick={() => {
            setActive(!active);
            onClick(!active);
        }}
                className={`${className} ${active ? 'tabs__caption_active' : ''} p-[12px_19px_12px_19px] after:w-[calc(100%_-_10%)] btn-catalog flex justify-between group btnService`}>
            {children}
        </button>
    )
}


// <button onClick={() => dataReserv.galleryPrice === 0 ? setDataReserv({...dataReserv, galleryPrice: Number(dataForm[dataReserv.day].personalGallery)}) : setDataReserv({...dataReserv, galleryPrice: 0})}
//         className={`${dataReserv.galleryPrice !== 0 ? 'tabs__caption_active' : ''} p-[12px_19px_12px_19px] after:w-[calc(100%_-_10%)] btn-catalog flex justify-between group btnService`}>
//     <span className="text-[17px] opacity-20 group-hover:opacity-100 btn-link__text">Персональная галерея </span>
//     <span className="text-[17px] opacity-20  group-hover:opacity-100 btn-link__text" data-gallery="price">+{Number(dataForm[dataReserv.day].personalGallery).toLocaleString()} р.</span>
// </button>