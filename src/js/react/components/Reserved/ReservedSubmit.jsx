import React from "react";
import {useState} from "react";
import Modal from "../Modal.jsx";
import ModalReserved from "../../ModalReserved.jsx";
export default function ReservedSubmit({stateForm, amount}) {
    const [show, setShow] = useState(false);

    const onChangeShow = (showStatus) => {
        setShow(showStatus);
    }

    const onChangeDate = (value) => {
        console.log(value)
    }

    const sumbitReservetion = () => {
        console.log('AAA')
    }

    return (
            <div className="flex justify-end">
                <button onClick={() => onChangeShow(true)}
                        className="btn__custom group sm:hover:bg-[#B9AB91] px-[25x] py-[14px] bg-transparent border border-[#2D2D2B]">
                    <span
                        className="absolute w-[24px] h-[24px] top-0 left-0 border-t border-[#B8AA91] group-hover:opacity-0 border-l transition-opacity opacity-100"></span>
                    <span
                        className="absolute w-[24px] h-[24px] bottom-0 left-0 -rotate-90 border-t border-[#B8AA91] border-l group-hover:opacity-0 transition-opacity opacity-100"></span>
                    <span
                        className="absolute w-[24px] h-[24px] top-0 right-0 border-t border-[#B8AA91] border-r transition-opacity group-hover:opacity-0 opacity-100"></span>
                    <span
                        className="absolute w-[24px] h-[24px] bottom-0 rotate-90 right-0 border-t border-[#B8AA91] border-r transition-opacity group-hover:opacity-0 opacity-100"></span>
                    <span className="btn__content group-hover:text-[#0F0F0F]">К бронированию</span>
                </button>
                <Modal showModal={show} onChangeShow={onChangeShow}>
                    <ModalReserved dayType={stateForm.dayType} sumForm={amount} onChangeDate={onChangeDate} sumbitReservetion={sumbitReservetion}/>
                </Modal>
            </div>
)
}