import React from "react";
import { createRoot } from 'react-dom/client';
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Reservation from "./Reservetion.jsx";
function Modal({dataModal}) {
    const [stat, setStat] = useState({id: undefined, show:false});
    useEffect(() => {
        dataModal.addcallback((value) => setStat(value));
    }, [])
    console.log(dataModal);
    return (
        <Transition.Root show={stat.show} as={Fragment}>
            <Dialog as="div" className="relative z-[40]" onClose={() => setStat({id:undefined, show:false})}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-[rgba(0,_0,_0,_0.53)] bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-[#1B1B1A] px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[500px] sm:p-6">
                                <h3 className="text-3xl lg:text-[20px] font-medium uppercase leading-6 text-white mb-[13px]">БРОНИРОВАНИЕ</h3>
                                <Reservation dataForm={data}/>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )

    // return (
    //     <div className={`${stat.show ? 'opacity-100' : 'opacity-0 hidden'}  w-full h-full fixed top-0 left-0 bg-[rgba(0,_0,_0,_0.53)] z-[50] overflow-hidden transition-opacity`}>
    //         <div className="w-[600px] p-10 top-[5%] left-[35%] relative bg-[#1B1B1A]">
    //             <h3 className="text-3xl lg:text-[20px] font-medium uppercase leading-6 text-white mb-[13px]">БРОНИРОВАНИЕ</h3>
    //             <p className="text-white text-[16px] opacity-50 mb-[20px]">Выберите день посещения</p>
    //             <Reservation dataForm={data}/>
    //             <button onClick={() => setStat({...stat, show: false})} className="absolute right-5 top-5"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 23 24" fill="none">
    //                 <g clip-path="url(#clip0_413_39520)">
    //                     <rect width="2.88763" height="10.8286" rx="1.44382" transform="matrix(0.707069 -0.707145 0.707069 0.707145 1.00391 3.55273)" fill="white"/>
    //                     <rect width="2.88763" height="10.8286" rx="1.44382" transform="matrix(0.707069 0.707145 -0.707069 0.707145 20.3887 1.51099)" fill="white"/>
    //                     <rect width="2.88763" height="10.8286" rx="1.44382" transform="matrix(-0.707069 0.707145 -0.707069 -0.707145 22.4316 20.9119)" fill="white"/>
    //                     <rect width="2.88763" height="10.8286" rx="1.44382" transform="matrix(-0.707069 -0.707145 0.707069 -0.707145 3.00977 22.9529)" fill="white"/>
    //                 </g>
    //                 <defs>
    //                     <clipPath id="clip0_413_39520">
    //                         <rect width="22.12" height="22.12" fill="white" transform="translate(0.439453 0.959961)"/>
    //                     </clipPath>
    //                 </defs>
    //             </svg></button>
    //         </div>
    //     </div>
    // )
}


let domContainer = createRoot(document.querySelector('#modalRes'));
domContainer.render(<Modal dataModal={stageModal}/>);