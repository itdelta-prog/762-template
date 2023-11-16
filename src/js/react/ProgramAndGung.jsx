import React, {useState} from "react";
import Select from "./Select.jsx";
export default function ProgramAndGung({data}) {
    const [selectValue, setSelectValue] = useState({});
    const [selectProgram, setSelectProgram] = useState({})
    let res = [];
    const recur = (arr) => {
        if(arr.length) {
            arr.forEach((item) => {
                if(item.program) {
                    recur(item.program);
                }
                else {
                    res.push(item);
                }
            })
        }
        return res;
    }
    const  allResult = recur(data);
    const gungsOptions = data.map((obj) => {
        return {
            value: obj, label: obj.name
        }
    });

   // const programOptions = selectValue?.program.map(obj => ({value: obj, label: obj.name}))
   //  console.log(programOptions)

    return (
        <div className="mb-[20px]">
            <Select options={gungsOptions} onChange={(item) => setSelectValue(item)}/>
            {/*<Select options={programOptions} onChange={(item) => setSelectProgram(item)}/>*/}
        </div>
    )
}