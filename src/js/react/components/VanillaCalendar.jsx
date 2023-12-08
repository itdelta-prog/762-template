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
        console.log(calendar)
        setCalendar(new VC(ref.current, config));
    }, [ref, config])

    // useEffect(() => {
    //     if(!calendar) return
    //     calendar.settings.range.disabled = config.settings.range.disabled;
    //     calendar.update();
    //     console.log(calendar)
    // }, [config.settings.range.disabled]);

    useEffect(() => {
        if (!calendar) return;
        console.log('calendar', calendar)
        calendar.init();
    }, [calendar]);



    console.log("RENDER")
    return (
        <div {...attributes} ref={ref}>
        </div>
    )
}

export default VanillaCalendar