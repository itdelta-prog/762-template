import React, {useReducer} from "react";
import { createRoot } from 'react-dom/client';
import {useState, useEffect, useMemo, Fragment} from "react";
import axios from "axios";
import Select from "./components/Select.jsx";
import {DayType, TotalAmount} from "./components/Reserved/ReservedComponent.jsx";
import WeaponsChoose from "./components/Reserved/WeaponsChoose.jsx";
import ButtonChecked from "./components/ButtonChecked.jsx";
import ReservedSubmit from "./components/Reserved/ReservedSubmit.jsx";

function reducer(state, action) {
    switch (action.type) {
        case 'dayType': {
            return {...state, dayType: action.value}
        }
        case 'weaponsCount': {
            return {...state, weaponsCount: action.value}
        }
        case 'weapons': {
            return {...state, weapons: {...action.value}}
        }
    }
}

function FormReservation() {
    const [state, dispatch] = useReducer(reducer, {
        dayType: '',
        weaponsCount: 1,
        weapons: {},
    })
    const [loader, setLoader] = useState(false);
    const [section, setSection] = useState([]);
    const [instructors, setInstructors] = useState([]);
    const [selectSection, setSelectSection] = useState({});

    useEffect(() => {
        const fetchData = async() => {
            const dataWeapons = await axios.get('https://651e822d44a3a8aa47687cb1.mockapi.io/weapons');
            const dataInstructor = await axios.post(`${baseUrl}api/v1/reservation/get-instructors`, {
                body: JSON.stringify({'sdad': 'dsds'})
            });
            if(dataWeapons.statusText === "OK") {
                setSection(dataWeapons.data);
            }
            if(dataInstructor.data.status === "success") {
                setInstructors(dataInstructor.data.data);
            }
            setLoader(true);
        }
        fetchData()
    }, []);

    const weaponsSectionOptions = section.map(item => ({value: item, label: item.name}));
    const instructorOptions = instructors.map(item => ({value: item, label: item.name}));


    const totalAmount = useMemo(() => {
        return 10 + 10 + 10;
    }, [state])


    const onChangeSection = (value) => {
        setSelectSection({...value})
    }

    const onChangeData = (type, value) => {
        dispatch({type: type, value: value})
    }

    const myCom = useMemo(() => {
        if(!loader) return  ''
        return <>
            <Select onChange={onChangeSection} options={weaponsSectionOptions} title="Выбирите раздел"/>
            <DayType onChange={onChangeData} />
        </>
    }, [section]);

    const weaponChoose = useMemo(() => {
        return <WeaponsChoose onChange={onChangeData} section={selectSection?.value} />
    }, [selectSection]);
    // const onChangeDayType  = (value) => {
    //     setFormData({...formData, dayType: value})
    // }
    //
    // const onChangeWeaponsCount = (value) => {
    //     setFormData({...formData, weaponsCount: value})
    // }

    console.log("RENDER")

    return (
        <Fragment>
            {myCom}
            {loader ? <>
                    {weaponChoose}
                    <Select className="mb-5"
                            options={instructorOptions}
                            title='Выберите инстуктора'/>
                    <ButtonChecked className="flex justify-between">
                        <span className="btn__content">
                            Персональная галерея
                        </span>
                        <span className="btn__content">
                            324234 f
                        </span>
                    </ButtonChecked>
                    <TotalAmount amount={totalAmount}/>
                    <ReservedSubmit stateForm={state} amount={totalAmount} />
                </>
                : <div className="w-full flex justify-center items-center">
                    <img className="" src="/img/loader.svg" alt=""/>
                </div>
            }
        </Fragment>
    )
}

let domContainer = createRoot(document.querySelector('#formReservation'));
domContainer.render(<FormReservation />);