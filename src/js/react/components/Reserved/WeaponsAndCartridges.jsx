import React from "react";
import {useState,useMemo, useEffect} from "react";
import {AddCartidges} from "./ReservedComponent.jsx";
import Select from "../Select.jsx";

export default function WeaponsAndCartridges({onChange, weapons, currentWeaponsNumber, currentSelectWeapons}) {

    const isSelectedWeapons = (selectWeapons) => {
        if(selectWeapons === undefined) return false;
        else if(!selectWeapons.some((obj) => Object.keys(obj.weaponSelect).length)) return false
        return true
    }


    const weaponsOptions = useMemo(() => {
        if(!isSelectedWeapons(currentSelectWeapons)) return weapons?.map((item) => ({value: item, label: item.name}))
        let selectWeaponValues = currentSelectWeapons.map((obj) => obj.weaponSelect).flatMap(obj => obj.value)
        return weapons.filter((obj) => !selectWeaponValues.includes(obj)).map((item) => ({value: item, label: item.name}))
    }, [weapons, currentSelectWeapons])


    useEffect(() => {
        if(!isSelectedWeapons(currentSelectWeapons)) return

        onChange("currentSelectWeapons", currentSelectWeapons.map(obj => ({weaponSelect: {}})))
    }, [weapons])


    const changeWeapon = (select, idx) => {
        onChange("currentSelectWeapons", currentSelectWeapons.reduce((acc, el, elIdx) => {
            if(elIdx === idx) return [...acc, {["weaponSelect"]: select}]
            return [...acc, el]
        }, []))

    }
    console.log('RENDER WEAPONS AND CARTIFGES')

    console.log(currentSelectWeapons)
    return (
        <div className="flex flex-col gap-y-5">
            {Array.from({length: currentWeaponsNumber}).map((item, idx) => {
                return (
                    <div key={idx}>
                        <Select options={weaponsOptions} onChange={(item) => changeWeapon(item, idx)}
                                select={currentSelectWeapons[idx]?.weaponSelect ?? {}} title="Выберите оружия" className="mb-5" />
                        {currentSelectWeapons[idx]?.weaponSelect?.value ? <AddCartidges cartidges={currentSelectWeapons[idx]?.weaponSelect?.value?.cartridges}/> : ''}
                    </div>
                )
            })}
        </div>
    )

}