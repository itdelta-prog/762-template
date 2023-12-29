import React from "react";
import {useState} from "react";
import {CountParams} from "./ReservedComponent.jsx";
import WeaponsAndCartridges from "./WeaponsAndCartridges.jsx";

export default function WeaponsChoose({onChange, section}) {
    const [weaponCountSelect, setWeaponCountSelect] = useState(1);
    const weaponsCount = [1, 2, 3];


    console.log('RENDER WEAPONS CHOOSE')

    return (
        <div className="mb-5">
            <CountParams
                value={weaponCountSelect}
                onChange={(item) => {
                    setWeaponCountSelect(item);
                    onChange('weaponsCount', item)
                }}
                count={weaponsCount} />
            <WeaponsAndCartridges
                onChange={onChange}
                weaponsCount={weaponCountSelect}
                weapons={section?.weapons ?? []}/>
        </div>
    )

}