import React from "react";
import {useState} from "react";
import {CountParams} from "./ReservedComponent.jsx";
import WeaponsAndCartridges from "./WeaponsAndCartridges.jsx";

export default function WeaponsChoose({onChange, section, weapons}) {
    const [weaponCountSelect, setWeaponCountSelect] = useState(1);
    const weaponsCount = [1, 2, 3]; // Исправить


    console.log('RENDER WEAPONS CHOOSE')



    return (
        <div className="mb-5">
            <CountParams
                value={weaponCountSelect}
                onChange={(item) => {
                    setWeaponCountSelect(item);

                    // debugger
                    // console.log(weapons.reduce((acc, select) => {
                    //     if(select.weaponCount < item) {
                    //         return [...acc, {["weaponsCount"]: item, ["weapons"]: {}}]
                    //     }
                    //     return [select]
                    // }, weapons))
                    onChange('weapons', [...weapons, {["weaponsCount"]: item, ["weapons"]: {}}])
                    //console.log(weapons.filter((el) =>  el.weaponsCount <= item))
                    onChange('weaponsCount', item)
                }}
                count={weaponsCount} />
            <WeaponsAndCartridges
                onChange={onChange}
                weaponsSelect={weapons}
                weaponsCount={weaponCountSelect}
                weapons={section?.weapons ?? []}/>
        </div>
    )

}