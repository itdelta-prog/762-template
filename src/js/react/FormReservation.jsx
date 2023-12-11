import ModalReserved from "./ModalReserved.jsx";
import React from "react";
import {useState, Fragment} from "react";
import { createRoot } from 'react-dom/client';
import Select from "./components/Select.jsx";
import {DayType} from "./components/Reserved/ReservedComponent.jsx";
import WeaponsChoose from "./components/Reserved/WeaponsChoose.jsx";
function FormReservation() {
    const [modal, setModal] = useState(false);
    const [section, setSection] = useState('');

    const weaponsSectionOptions = [
        {value: {id: 1, name: 'Винтовка'}, label: "Винтовка"},
        {value: {id: 2, name: 'Карабин'}, label: "Карабин"},
        {value: {id: 1, name: 'Ружье'}, label: "Ружье"},
        {value: {id: 1, name: 'Пистолет'}, label: "Пистолет"}
    ]

    const onClose = () => {
        setModal(false);
        document.body.classList.remove('active')
    }

    const onChangeSection = (value) => {
        console.log(value);
        setSection(value)
    }

    console.log("RENDER")

    return (
        <Fragment>
            <Select onChange={onChangeSection} options={weaponsSectionOptions} title="Выбирите раздел"/>
            <DayType />
            <WeaponsChoose/>
            {/*<ModalReserved modalActive={modal} onClose={onClose}/>*/}
        </Fragment>
    )
}

let domContainer = createRoot(document.querySelector('#formReservation'));
domContainer.render(<FormReservation />);