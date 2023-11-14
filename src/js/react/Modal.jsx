import Reservation from "./Reservation.jsx";


function Modal({dataModal}) {
    const [stat, setStat] = React.useState({id: undefined, show:false});
    React.useEffect(() => {
        dataModal.addcallback((value) => setStat(value))
    }, [])
    console.log(dataModal);
    return (
        <div className={`${stat.show ? 'opacity-100' : 'opacity-0 hidden'}  w-full h-full fixed top-0 left-0 bg-[rgba(0,_0,_0,_0.53)] z-[50] overflow-hidden transition-opacity`}>
            <div className="w-[600px] p-10 top-[5%] left-[35%] relative bg-[#1B1B1A]">
                <h3 className="text-3xl lg:text-[20px] font-medium uppercase leading-6 text-white mb-[13px]">БРОНИРОВАНИЕ</h3>
                <p className="text-white text-[16px] opacity-50 mb-[20px]">Выберите день посещения</p>
                <Reservation dataForm={data}/>
                <button onClick={() => setStat({...stat, show: false})} className="absolute right-5 top-5"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 23 24" fill="none">
                    <g clip-path="url(#clip0_413_39520)">
                        <rect width="2.88763" height="10.8286" rx="1.44382" transform="matrix(0.707069 -0.707145 0.707069 0.707145 1.00391 3.55273)" fill="white"/>
                        <rect width="2.88763" height="10.8286" rx="1.44382" transform="matrix(0.707069 0.707145 -0.707069 0.707145 20.3887 1.51099)" fill="white"/>
                        <rect width="2.88763" height="10.8286" rx="1.44382" transform="matrix(-0.707069 0.707145 -0.707069 -0.707145 22.4316 20.9119)" fill="white"/>
                        <rect width="2.88763" height="10.8286" rx="1.44382" transform="matrix(-0.707069 -0.707145 0.707069 -0.707145 3.00977 22.9529)" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_413_39520">
                            <rect width="22.12" height="22.12" fill="white" transform="translate(0.439453 0.959961)"/>
                        </clipPath>
                    </defs>
                </svg></button>
            </div>
        </div>
    )
}


let domContainer = document.querySelector('#modalRes');
ReactDOM.render(<Modal dataModal={stageModal}/>, domContainer);