import React, {useEffect, useMemo, useState} from "react";
import Select from "./Select.jsx";
export default function ProgramAndGung({data, onChangeProgram}) {
    const [selectGun, setSelectGun] = useState(undefined);
    const [selectProgram, setSelectProgram] = useState({});
    const allResult = data.flatMap(obj => obj?.program).filter((obj) => (obj));


    const programOptions = useMemo(() => {
        if(!selectGun) {
            return allResult.map(obj => ({value: obj, label: obj.name}))
        }
        else if (selectGun.value.program) {
            return selectGun.value.program.map(obj => ({value: obj, label: obj.name}))
        }
        else {
            return false;
        }
    }, [selectGun]);


    useEffect(() => {
        setSelectProgram({})
    }, [selectGun]);


    let res = [];
    // const recur = (arr) => {
    //     if(arr.length) {
    //         arr.forEach((item) => {
    //             if(item.program) {
    //                 recur(item.program);
    //                 res.push(item.program.flat());
    //             }
    //         })
    //     }
    //     return res;
    // }

    const gungsOptions = data.map((obj) => {
        return {
            value: {...obj}, label: obj.name
        }
    });


    return (
        <div className="mb-[20px]">
            <Select options={gungsOptions} select={selectGun} onChange={(item) => {
                setSelectGun(item);
                onChangeProgram(selectProgram, item)
            }} className={"mb-5"} title={"Выбрать оружия"}/>
            <Select options={programOptions} onChange={(item) => {
                setSelectProgram(item);
                onChangeProgram(item, selectGun)
            }} select={selectProgram} title={"Выбрать программу"}/>
        </div>
    )
}