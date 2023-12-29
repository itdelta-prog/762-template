import React from "react";
import {useState,useMemo, useEffect} from "react";
import {AddCartidges} from "./ReservedComponent.jsx";
import Select from "../Select.jsx";

export default function WeaponsAndCartridges({onChange, weapons, weaponsCount}) {
  //  const [weapons, setWeapons] = useState(section?.weapons ?? []);
    const [selectWeapon, setSelectWeapon] = useState(undefined);
    const isSelectedWeapons = (obj) => {
        if(obj === undefined) return false;
        else if(!Object.keys(obj).length) return false
        return true;
    }


    const weaponsOptions = useMemo(() => {
        if(!isSelectedWeapons(selectWeapon)) return weapons?.map((item) => ({value: item, label: item.name}))
        let selectWeaponValues = Object.values(selectWeapon).flatMap(obj => obj.value);
        return weapons.filter((obj) => !selectWeaponValues.includes(obj)).map((item) => ({value: item, label: item.name}))
    }, [weapons, selectWeapon])


    useEffect(() => {
        if(!isSelectedWeapons(selectWeapon)) return
        setSelectWeapon({
            firstWeapon: {},
            secondWeapon: {},
            thirdWeapon: {}
        })
    }, [weaponsCount, weapons])


    useEffect(() => {
        if(!isSelectedWeapons(selectWeapon)) return
        onChange('weapons', selectWeapon)
    }, [selectWeapon]);

    const changeWeapon = (name, item) => {
        setSelectWeapon(selectWeapon => ({...selectWeapon, [name]: item}));
    }
    console.log('RENDER WEAPONS AND CARTIFGES')

    return (
        <div className="flex flex-col gap-y-5">
            <div>
                <Select className="mb-5" options={weaponsOptions} onChange={(item) => changeWeapon('firstWeapon', item)} select={selectWeapon?.firstWeapon ?? {}} title="Выберите оружия"/>
                {isSelectedWeapons(selectWeapon?.firstWeapon) ? <AddCartidges cartidges={selectWeapon?.firstWeapon.value?.cartridges} /> : ''}
            </div>
            {weaponsCount !== 1 ? <div>
                <Select options={weaponsOptions} onChange={(item) => changeWeapon('secondWeapon', item)}
                        select={selectWeapon?.secondWeapon ?? {}} title="Выберите оружия" className="mb-5"/>
                {isSelectedWeapons(selectWeapon?.secondWeapon) ? <AddCartidges cartidges={selectWeapon?.secondWeapon.value?.cartridges} /> : ''}
            </div> : ''}
            {weaponsCount === 3 ? <div>
                <Select options={weaponsOptions} onChange={(item) => changeWeapon('thirdWeapon', item)}
                        select={selectWeapon?.thirdWeapon ?? {}} title="Выберите оружия" className="mb-5"/>
                {isSelectedWeapons(selectWeapon?.thirdWeapon) ? <AddCartidges  cartidges={selectWeapon?.thirdWeapon.value?.cartridges}/> : ''}
            </div> : ''}
        </div>
    )

    // let component;
    //
    // switch (weaponsCount) {
    //     case 1:
    //         component = <div aria-label="one">
    //             <Select options={weaponsOptions} onChange={(item) => changeWeapon('firstWeapon', item)} select={selectWeapon} title="Выберите оружия"/>
    //             <AddCartidges defaultShot={2500} valueCount={100} />
    //         </div>
    //     break;
    //     case 2:
    //         component = <>
    //             <Select options={weaponsOptions} onChange={(item) => changeWeapon('secondWeapon', item)} title="Выберите оружия"/>
    //             <AddCartidges defaultShot={1500} valueCount={500} />
    //             <Select title="Выберите оружия"/>
    //             <AddCartidges defaultShot={1500} valueCount={500} />
    //         </>
    //     break;
    //     case 3:
    //         component =  <div aria-label="three">
    //             <Select title="Выберите оружия" />
    //             <AddCartidges defaultShot={12500} valueCount={200} />
    //             <Select title="Выберите оружия"/>
    //             <AddCartidges defaultShot={1500} valueCount={500} />
    //             <Select title="Выберите оружия"/>
    //             <AddCartidges defaultShot={1500} valueCount={500} />
    //         </div>
    //     break;
    // }
    //
    // return component
}