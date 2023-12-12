import React from "react";
import {useState} from "react";
import {AddCartidges, CountParams} from "./ReservedComponent.jsx";
import Select from "../Select.jsx";

export default function WeaponsChoose() {
    const [weaponCountSelect, setWeaponCountSelect] = useState(1);
    const weaponsCount = [1, 2, 3];
    return (
        <>
            <CountParams value={weaponCountSelect} onChange={(item) => setWeaponCountSelect(item)} count={weaponsCount} />
            {
                weaponCountSelect === 1 ? <div>
                    <Select title="Выберите оружия"/>
                    <AddCartidges defaultShot={2500} valueCount={100} />
                </div> : ''
            }
        </>
    )
}