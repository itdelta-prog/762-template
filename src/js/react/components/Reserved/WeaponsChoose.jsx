import React from "react";
import {CountParams} from "./ReservedComponent.jsx";
import WeaponsAndCartridges from "./WeaponsAndCartridges.jsx";

export default function WeaponsChoose({onChange, section, currentSelectWeapons, currentWeaponsNumber}) {
    const weaponsCount = [1, 2, 3]; // Исправить

    return (
        <div className="mb-5">
            <CountParams
                value={currentWeaponsNumber}
                onChange={(item) => {
                    onChange('currentWeaponsNumber', item)
                    onChange("currentSelectWeapons", currentSelectWeapons.reduce((acc, el, idx) => {
                        if (idx + 1 <= item) return [...acc, el]
                        return [...acc, {["weaponSelect"]: {}}]
                    }, []))
                }}
                count={weaponsCount}/>
            <WeaponsAndCartridges
                onChange={onChange}
                currentSelectWeapons={currentSelectWeapons}
                currentWeaponsNumber={currentWeaponsNumber}
                weapons={section?.weapons ?? []}/>
        </div>
    )

}