import VC  from "@uvarov.frontend/vanilla-calendar";
import "@uvarov.frontend/vanilla-calendar/build/vanilla-calendar.min.css";
import "@uvarov.frontend/vanilla-calendar/build/themes/light.min.css";


function VanillaCalendar({ config, ...attributes }) {
    const ref = React.useRef(null);
    const [calendar, setCalendar] = React.useState(null);

    React.useEffect(() => {
        if (!ref.current) return
        setCalendar(new VC(ref.current, config));
    }, [ref, config])

    React.useEffect(() => {
        if (!calendar) return;
        calendar.init();
    }, [calendar]);

    return (
        <div {...attributes} ref={ref}></div>
    )
}

export default VanillaCalendar