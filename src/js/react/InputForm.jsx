import React, {useState} from "react";

export default function InputForm({sumForm, sumbitReservation}) {
    const [dataForm, setDataForm] = useState({
        fullName: '',
        phone: '',
        email: ''
    });
    return (
        <>
            <div className="mb-6">
                <input type="text" value={dataForm.fullName} onChange={(eve) => setDataForm({...dataForm, fullName: eve.target.value})} placeholder="ФИО" className="w-full py-[20px] border-b border-[#3A3A3A] bg-transparent outline-none ring-offset-0 placeholder-[#878787] text-[#878787] text-[16px]" />
                <input type="text" value={dataForm.phone} onChange={(eve) => setDataForm({...dataForm, phone: eve.target.value})} placeholder="Номер телефона" className="w-full py-[20px] border-b border-[#3A3A3A] bg-transparent outline-none ring-offset-0 placeholder-[#878787] text-[#878787] text-[16px]" />
                <input type="text" value={dataForm.email} onChange={(eve) => setDataForm({...dataForm, email: eve.target.value})} placeholder="E-mail" className="w-full py-[20px] border-b border-[#3A3A3A] bg-transparent outline-none ring-offset-0 placeholder-[#878787] text-[#878787] text-[16px]" />
            </div>
            <div className="bg-[#1C1C1A] px-[17px] py-4">
                <div className="flex justify-between items-center mb-4">
                    <p className="text-white text-[18px] font-normal">Итого</p>
                    <p className="text-white text-[18px] font-normal totalAmout">{sumForm.toLocaleString()} ₽</p>
                </div>
                <div className="flex justify-center gap-x-5 items-center">
                    <button onClick={() => sumbitReservation(dataForm)} className="btn__custom w-full group hover:bg-[#B9AB91] bg-transparent border border-[#2D2D2B]" data-filter="false">
                        <span className="absolute w-[24px] h-[24px] top-0 left-0 border-t border-[#B8AA91] group-hover:opacity-0 border-l transition-opacity opacity-100"></span>
                        <span className="absolute w-[24px] h-[24px] bottom-0 left-0 -rotate-90 border-t border-[#B8AA91] border-l group-hover:opacity-0 transition-opacity opacity-100"></span>
                        <span className="absolute w-[24px] h-[24px] top-0 right-0 border-t border-[#B8AA91] border-r transition-opacity group-hover:opacity-0 opacity-100"></span>
                        <span className="absolute w-[24px] h-[24px] bottom-0 rotate-90 right-0 border-t border-[#B8AA91] border-r transition-opacity group-hover:opacity-0 opacity-100"></span>
                        <span className="btn__content group-hover:text-[#0F0F0F]">Забронировать</span>
                    </button>
                    {/*<button className="btn-catalog basis-[145px]"><span*/}
                    {/*    className="btn-link__text text-sm">Оплатить</span></button>*/}
                </div>
            </div>
        </>
    )
}