import React from "react";
import {useEffect, useRef, useState} from "react";
import VC  from "@uvarov.frontend/vanilla-calendar";
import "@uvarov.frontend/vanilla-calendar/build/vanilla-calendar.min.css";
import "@uvarov.frontend/vanilla-calendar/build/themes/light.min.css";


function VanillaCalendar({ config, ...attributes }) {
    const ref = useRef(null);
    const [calendar, setCalendar] = useState(null);

    useEffect(() => {
        if (!ref.current) return
        setCalendar(new VC(ref.current, config));
    }, [ref])

    useEffect(() => {
        if (!calendar) return;
        calendar.init();
    }, [calendar]);

    return (
        <div {...attributes} ref={ref}></div>
    )
}

export default VanillaCalendar