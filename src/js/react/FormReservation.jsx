import React from "react";
import {createRoot} from 'react-dom/client';
import {useState, useReducer, useEffect, useMemo, Fragment} from "react";
import axios from "axios";
import Select from "./components/Select.jsx";
import {DayType, TotalAmount} from "./components/Reserved/ReservedComponent.jsx";
import WeaponsChoose from "./components/Reserved/WeaponsChoose.jsx";
import ButtonChecked from "./components/ButtonChecked.jsx";
import ReservedSubmit from "./components/Reserved/ReservedSubmit.jsx";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function reducer(state, action) {
    switch (action.type) {
        case 'dayType': {
            return {...state, dayType: action.value}
        }
        case 'currentWeaponsNumber': {
            return {...state, currentWeaponsNumber: action.value}
        }
        case 'currentSelectWeapons': {
            return {...state, currentSelectWeapons: [...action.value]}
        }
        case 'currentDate': {
            return {...state, currentDate: {...action.value}}
        }
        case 'selectInstructor': {
            return {...state, selectInstructor: {...action.value}}
        }
        case 'personalGallerey': {
            return {...state, personalGallerey: action.value}
        }
    }
}

function FormReservation() {
    const [state, dispatch] = useReducer(reducer, {
        dayType: 'weekday', currentWeaponsNumber: 1, currentSelectWeapons: [{
            weaponSelect: {}
        }, {
            weaponSelect: {}
        }, {
            weaponSelect: {}
        }], currentDate: {}, selectInstructor: {}, personalGallerey: 'N'
    })
    const [loader, setLoader] = useState(false);
    const [section, setSection] = useState([]);
    const [instructors, setInstructors] = useState([]);
    const [selectSection, setSelectSection] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const dataWeapons = await axios.post(`${baseUrl}api/v1/reservation/get-weapons`, {
                body: {}
            });
            const dataInstructor = await axios.post(`${baseUrl}api/v1/reservation/get-instructors`, {
                body: JSON.stringify({'sdad': 'dsds'})
            });
            if (dataWeapons.data.status === "success") {
                setSection(dataWeapons.data.data);
            }
            if (dataInstructor.data.status === "success") {
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

    const currentWeaponsData = state.currentSelectWeapons.map((weapon) => weapon?.weaponSelect?.value?.id).filter((weapon) => weapon);
    const currentWeaponsAmmo = state.currentSelectWeapons.filter((weapon) => weapon?.weaponSelect?.value?.id).map((weapon) => `${weapon?.weaponSelect?.label}:${weapon?.currentAmmo}`)


    const onChangeSection = (value) => {
        setSelectSection({...value})
    }

    const onChangeData = (type, value) => {
        dispatch({type: type, value: value})
    }

    const handleSubmit = (data) => {
        console.log(state)
        axios.post(`${baseUrl}api/v1/reservation/create`, {
            "reservationType": "arsenal",
            "dayType": state.dayType,
            "priceSum": 30,
            "instructor": state?.selectInstructor ? state?.selectInstructor?.value?.id : '',
            "personalGallery": state.personalGallerey,
            "date": state?.currentDate?.selectDate,
            "hours": state?.currentDate?.selectTime?.time,
            "fullName": data?.fullName,
            "email": data?.email,
            "phone": data?.phone,
            "weaponCount": state?.currentWeaponsNumber,
            "weapon": currentWeaponsData,
            "weaponCartridges": currentWeaponsAmmo
        }).then(res => {
            if(res.data.status === "success") {
                toast.success('Успешно забронирована', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            }
            if(res.data.status === "error") {
                console.log(res.data.errors)
                res.data.errors.forEach((error) => {
                    toast.error(error.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    });
                })
            }
        });
    }

    const myCom = useMemo(() => {
        if (!loader) return ''
        return <>
            <Select onChange={onChangeSection} options={weaponsSectionOptions} title="Выбирите раздел"/>
            <DayType onChange={onChangeData}/>
        </>
    }, [section]);

    const weaponChoose = useMemo(() => {
        return <WeaponsChoose currentSelectWeapons={state.currentSelectWeapons}
                              currentWeaponsNumber={state.currentWeaponsNumber} onChange={onChangeData}
                              section={selectSection?.value}/>
    }, [selectSection, state.currentSelectWeapons, state.currentWeaponsNumber]);


    console.log("RENDER")
    console.log(currentWeaponsAmmo)


    return (<Fragment>
        {myCom}
        <div className="mb-[31px] flex justify-between items-center">
            <span className="text-white text-lg leading-5">Базовая стоимость</span>
            <span
                className="text-white text-lg leading-5 opacity-50">{selectSection?.value?.direction[`${state.dayType}-price`]} р.</span>
        </div>
        {loader ? <>
            {weaponChoose}
            <Select className="mb-5"
                    options={instructorOptions}
                    onChange={(instructor) => {
                        onChangeData("selectInstructor", instructor)
                    }}
                    title='Выберите инстуктора'/>
            <ButtonChecked onClick={(val) => onChangeData('personalGallerey', val ? 'Y' : 'N')}
                           className="flex justify-between mb-6">
                        <span className="btn__content">
                            Персональная галерея
                        </span>
                <span className="btn__content">
                            +{selectSection?.value?.gallery[`${state.dayType}-price`]}
                        </span>
            </ButtonChecked>
            <TotalAmount amount={totalAmount}/>
            <ReservedSubmit onChageData={onChangeData} handleSubmit={handleSubmit} stateForm={state}
                            amount={totalAmount}/>
        </> : <div className="w-full flex justify-center items-center">
            <img className="" src="/img/loader.svg" alt=""/>
        </div>}
        <ToastContainer />
    </Fragment>)
}

let domContainer = createRoot(document.querySelector('#formReservation'));
domContainer.render(<FormReservation/>);