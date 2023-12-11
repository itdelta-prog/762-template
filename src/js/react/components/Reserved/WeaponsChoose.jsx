import React from "react";
import {useState} from "react";
import {CountParams} from "./ReservedComponent.jsx";
import Select from "../Select.jsx";

export default function WeaponsChoose() {
    const [shooterCount, setShooterCount] = useState(1)
    const weaponsCount = [1, 2, 3];

    return (
        <CountParams value={shooterCount} onChange={(item) => setShooterCount(item)} count={weaponsCount}/>
        {shooterCount === 1 ? <div>
            {
                <Select />

            }
        </div>}
    )
}