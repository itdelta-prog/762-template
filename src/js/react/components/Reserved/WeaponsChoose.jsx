import React from "react";
import {useState} from "react";
import {CountParams} from "./ReservedComponent.jsx";
import WeaponsAndCartridges from "./WeaponsAndCartridges.jsx";

export default function WeaponsChoose({section}) {
    const [weaponCountSelect, setWeaponCountSelect] = useState(1);
    const weaponsCount = [1, 2, 3];


    console.log('RENDER WEAPONS CHOOSE')
    return (
        <div>
            <CountParams
                value={weaponCountSelect}
                onChange={(item) => setWeaponCountSelect(item)}
                count={weaponsCount} />
            <WeaponsAndCartridges weaponsCount={weaponCountSelect} section={section} />
        </div>
    )

}