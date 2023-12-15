import ModalReserved from "./ModalReserved.jsx";
import React from "react";
import {useState, useEffect, useMemo, Fragment} from "react";
import { createRoot } from 'react-dom/client';
import Select from "./components/Select.jsx";
//import Select from "./components/Ui/Select.jsx"
import {DayType} from "./components/Reserved/ReservedComponent.jsx";
import WeaponsChoose from "./components/Reserved/WeaponsChoose.jsx";
import axios from "axios";
function FormReservation() {
    const [modal, setModal] = useState(false);
    const [loader, setLoader] = useState(false);
    const [section, setSection] = useState([]);
    const [selectSection, setSelectSection] = useState({});
    const [dayType,setDayType] = useState('weekday');

    useEffect(() => {
        const fetchData = async() => {
            const {data} = await axios.get('https://651e822d44a3a8aa47687cb1.mockapi.io/weapons');
            setSection(data)
            setLoader(true);
        }
        fetchData()
    }, []);

    const weaponsSectionOptions = section.map(item => ({value: item, label: item.name}))

    const onChangeSection = (value) => {
        setSelectSection({...value})
    }

    const onChangeDayType  = (value) => {
        setDayType(value);
    }

    const myCom = useMemo(() => {
        if(!loader) return  ''
        return <>
            <Select onChange={onChangeSection} options={weaponsSectionOptions} title="Выбирите раздел"/>
            <DayType onChange={onChangeDayType} />
        </>
    }, [section]);

    const weaponChoose = useMemo(() => {
        return <WeaponsChoose section={selectSection?.value} />
    }, [selectSection])

    return (
        <Fragment>
            {myCom}
            {loader ? weaponChoose : ''}
            {/*<Select onChange={onChangeSection} options={weaponsSectionOptions} select={'dsadsa'} title="Выбирите раздел"/>*/}
            {/*{loader ? <div>*/}
            {/*    {myCom}*/}
            {/*    {weaponChoose}*/}
            {/*</div> : ''}*/}
            {/*<ModalReserved modalActive={modal} onClose={onClose}/>*/}
        </Fragment>
    )
}

let domContainer = createRoot(document.querySelector('#formReservation'));
domContainer.render(<FormReservation />);