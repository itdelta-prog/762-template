import React, {useEffect, useMemo} from "react";
import {useState, Fragment} from "react";
import ModalReserved from "./ModalReserved.jsx";
import ButtonChecked from "./components/ButtonChecked.jsx";
import Select from "./components/Select.jsx";
import ProgramAndGung from "./ProgramAndGung.jsx";
import Modal from "./components/Modal.jsx";
import axios from "axios";
export  default function Reservation({gungs, instructor, broneDate, getBroneDate}) {
    const [dataReserv, setDataReserv] = useState({
        dayType: 'weekday',
        basicPrice: Number(dataForm.weekday.basicPrice.price),
        // shoatsPrice: Number(dataForm.weekday.shoatsPrice.price),
        shooterCount: 1,
        instructor: '',
        program: '',
        weapon: '',
        personalGallery: false,
        personalInstructor: false,
        instructorPrice: 0,
        galleryPrice: 0,
        date: '',
        hourse: '',
    });
    // const [personalInstructor, setPersonalInstructor] = useState(false);
    const [modal, setModal] = useState(false);

    const priceSum = useMemo(() => {
        return dataReserv.basicPrice * dataReserv.shooterCount + Number(`${dataReserv.personalGallery ? dataReserv.galleryPrice : 0}`) + Number(`${dataReserv.personalInstructor ? dataReserv.instructorPrice : 0}`);
    }, [dataReserv]);
    //
    const person = [1, 2, 3];
    const instructorOptions = useMemo(() => instructor.map((obj) => {
        return {value: obj, label: obj.name}
    }), [])


    const onChangeGallerey = (active) => {
        setDataReserv({...dataReserv, personalGallery: active})
    }

    const onChangeProgram = (program, weapon) => {
        setDataReserv({
            ...dataReserv,
            program: program?.value,
            instructorPrice: dataReserv.dayType === 'weekday' ? Number(program?.value["gallery-weekday-price"]) : Number(program?.value["gallery-weekend-price"]),
            galleryPrice: dataReserv.dayType === 'weekday' ? Number(program?.value["gallery-weekday-price"]) : Number(program?.value["gallery-weekend-price"])
        });
    }

    const onChangeDayType = (day) => {
        setDataReserv({
            ...dataReserv,
            dayType: day,
            basicPrice: Number(dataForm[day].basicPrice.price),
            instructorPrice: Number(dataReserv.program ? dataReserv.program[`instructor-${day}-price`] : 0),
            galleryPrice: Number(dataReserv.program ? dataReserv.program[`gallery-${day}-price`] : 0)
        })
    }

    const onChangeDate = (dateReserved) => {
     setDataReserv({...dataReserv, date: dateReserved.selectDate[0], hourse: dateReserved.selectTime?.time})
    }

    const closeModal = (value) => {
        setModal(value);
    }

    const sumbitReservation = (inputData) => {
        console.log({
            "program": dataReserv?.program?.id,
            "dayType": dataReserv?.dayType,
            "priceSum": priceSum,
            "shooterCount": dataReserv?.shooterCount,
            "instructor": dataReserv?.instructor?.value?.id,
            "personalGallery": dataReserv.personalGallery ? 'Y' : 'N',
            "date": dataReserv?.date,
            "hours": dataReserv?.hourse,
            "fullName": inputData?.fullName,
            "email": inputData?.email,
            "phone": inputData?.phone
        });
        axios.post('http://localhost/api/v1/reservation/create', {
            "program": dataReserv?.program?.id,
            "dayType": dataReserv?.dayType,
            "priceSum": '',
            "shooterCount": dataReserv?.shooterCount,
            "instructor": dataReserv?.instructor?.value?.id,
            "personalGallery": '',
            "date": dataReserv?.date,
            "hours": dataReserv?.hourse,
            "fullName": inputData?.fullName,
            "email": inputData?.email,
            "phone": inputData?.phone
        }).then(res => {
            if(res.data.status === "success") {
                alert("Успешно забронирована");
                setModal(false);
            }
            if(res.data.status === "error") {
                console.log(res.data)
                alert(res.data.errors[0].message)
            }
        });
    }


    console.log("RENDER FORM");
    console.log(dataReserv)

    return (
             <Fragment>
                <p className="text-white text-[16px] opacity-50 mb-[20px]">Выберите день посещения</p>
                <div>
                    <ProgramAndGung  onChangeProgram={onChangeProgram} data={gungs}/>
                    <div className="mb-[31px]">
                        <div className="flex gap-x-[13px] mb-[31px]">
                            <button onClick={() => onChangeDayType('weekday')} className={`btn-catalog basis-[184px] ${dataReserv.dayType === 'weekday' ? "tabs__caption_active"  : ''}`}>
                                <span className="btn-link__text">Будни</span>
                            </button>
                            <button onClick={() => onChangeDayType('weekend')} className={`btn-catalog basis-[184px] ${dataReserv.dayType === 'weekend' ? "tabs__caption_active"  : ''}`}>
                                <span className="btn-link__text ">Выходные</span>
                            </button>
                        </div>
                        <div className="flex gap-x-[13px] mb-[31px] person">
                            {
                                person.map((item, idx) => {
                                    return (
                                        <button key={idx} onClick={() => setDataReserv({...dataReserv, shooterCount: item})}
                                        className={`${dataReserv.shooterCount === item ? 'text-[#0F0F0F] bg-[#B8AA91] border-transparent opacity-100' : 
                                            'hover:border-[#B8AA91] border-white border-opacity-[0.4] hover:border-opacity-100 hover:text-[#B8AA91] ' +
                                            'hover:opacity-100  text-white  opacity-[0.4]'} transition-all px-6 py-4  border border-solid`
                                        }>
                                            {item}</button>
                                    )
                                })
                            }
                        </div>
                        <div className="">
                            <div className="daysContent">
                                <div className="flex justify-between mb-[12px]">
                                    <p className="text-white text-[18px] font-normal leading-5">Базовая стоимость</p>
                                    <div data-cost="basic">
                                        <span className="text-[18px] text-white font-normal leading-5 opacity-50">
                                            {Number(dataReserv.basicPrice).toLocaleString()} р.
                                        </span>
                                    </div>
                                </div>
                                {/*<div className="flex justify-between">*/}
                                {/*    <p className="text-white text-[18px] font-normal leading-5">Стоимость выстрелов</p>*/}
                                {/*    <div data-cost="shots"><span className=" text-[14px] text-[rgba(255,_255,_255,_0.50)] line-through">10 р</span> <span className="text-[18px] text-[#B8AA91] font-normal leading-5">{Number(dataReserv.shoatsPrice).toLocaleString()} р.</span></div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-[#282828] mb-9"></div>
                    <div className="flex flex-col gap-y-[11px] mb-[31px]">
                        <div className="flex flex-col gap-y-5">
                            <ButtonChecked onClick={(active) => {
                                setDataReserv({...dataReserv, personalInstructor: active})
                            }}>
                                <span className={"text-[14px] sm:text-[17px] opacity-20 group-hover:opacity-100 btn-link__text"}>
                                    Персональный инструктор
                                </span>
                                <span className={"text-[14px] sm:text-[17px] opacity-20 group-hover:opacity-100 btn-link__text"}>
                                    {dataReserv.instructorPrice ? `${dataReserv.instructorPrice.toLocaleString()} р.` : ''}
                                </span>
                            </ButtonChecked>
                            {
                                dataReserv.personalInstructor ? <Select options={instructorOptions} onChange={(item) => {
                                    setDataReserv({...dataReserv, instructor: item})
                                }} select={dataReserv.instructor} title={"Выбрать интсруктора"}/> : ''
                            }
                            <ButtonChecked onClick={onChangeGallerey}>
                                <span className="text-[14px] sm:text-[17px] opacity-20 group-hover:opacity-100 btn-link__text">
                                    Персональная галерея
                                </span>
                                <span className="text-[14px] sm:text-[17px] opacity-20  group-hover:opacity-100 btn-link__text">
                                    {dataReserv.galleryPrice ? `${dataReserv.galleryPrice.toLocaleString()} р.` : ''}</span>
                            </ButtonChecked>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mb-[21px]">
                        <p className="text-[18px] text-white">Итого</p>
                        <p className="text-[18px] text-white totalAmout">{priceSum.toLocaleString()} р.</p>
                    </div>
                    <div className="flex justify-end md:justify-end md:gap-x-[13px]">
                        {/*<button className="btn-catalog"><span*/}
                        {/*    className="btn-link__text">В подарок</span></button>*/}
                        <button className="btn-catalog btnReserve " onClick={() => {
                            setModal(true);
                           // document.body.classList.add('active')
                        }}>
                            <span className="btn-link__text" >К бронированию</span></button>
                        <Modal showModal={modal} onChangeShow={closeModal}>
                            <div onClick={() => closeModal(false)} className="flex justify-end items-center cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                                    <g clipPath="url(#clip0_413_26368)">
                                        <rect width="2.88763" height="10.8286" rx="1.44382" transform="matrix(0.707069 -0.707145 0.707069 0.707145 1.00391 3.55273)" fill="white"/>
                                        <rect width="2.88763" height="10.8286" rx="1.44382" transform="matrix(0.707069 0.707145 -0.707069 0.707145 20.3887 1.51099)" fill="white"/>
                                        <rect width="2.88763" height="10.8286" rx="1.44382" transform="matrix(-0.707069 0.707145 -0.707069 -0.707145 22.4316 20.9119)" fill="white"/>
                                        <rect width="2.88763" height="10.8286" rx="1.44382" transform="matrix(-0.707069 -0.707145 0.707069 -0.707145 3.00977 22.9529)" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_413_26368">
                                            <rect width="22.12" height="22.12" fill="white" transform="translate(0.439453 0.959961)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <ModalReserved dayType={dataReserv.dayType} getBroneDate={getBroneDate} sumForm={priceSum} broneDate={broneDate} onChangeDate={onChangeDate} sumbitReservation={sumbitReservation}/>
                        </Modal>
                    </div>
                </div>
            </Fragment>
    )
}


