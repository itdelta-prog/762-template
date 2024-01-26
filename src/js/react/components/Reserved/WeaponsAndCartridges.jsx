import React from "react";
import {useState,useMemo, useEffect} from "react";
import {AddCartidges} from "./ReservedComponent.jsx";
import Select from "../Select.jsx";

export default function WeaponsAndCartridges({onChange, weapons, weaponsCount, weaponsSelect}) {
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


    // useEffect(() => {
    //     if(!isSelectedWeapons(selectWeapon)) return
    //     onChange('weapons', selectWeapon)
    // }, [selectWeapon]);

    const changeWeapon = (select, item, idx) => {
        //console.log(select, item)
        //console.log({...select, weapons: item})
       // console.log([{...select, weapons: item}])




       // console.log([...weaponsSelect, {...weaponsSelect[idx], ...select, weapons: item}])
        //console.log({...select, weapons: item})
        //console.log(idx)
       // console.log([weaponsSelect[idx], {...select, weapons: item}])
        // console.log({...weaponsSelect, [select]: item})
        onChange('weapons', weaponsSelect.reduce((acc, el) => {
            if(el.weaponsCount === select.weaponsCount) return [...acc, {...select, weapons: item}]
            return [...acc, el]
        }, []))

       //setSelectWeapon(selectWeapon => ({...selectWeapon, [select]: item}));
    }
    console.log('RENDER WEAPONS AND CARTIFGES')


    console.log(weaponsSelect)
    // console.log(Object.keys(weaponsSelect))

    return (
        <div className="flex flex-col gap-y-5">
            {weaponsSelect.map((select, idx) => {
                return (
                    <div key={select.weaponsCount}>
                        <Select className="mb-5" options={weaponsOptions}
                                onChange={(item) => changeWeapon(select, item, idx)}
                                select={select?.weapons ?? {}} title="Выберите оружия"/>
                        {/*{isSelectedWeapons(selectWeapon[select.weaponsCount]) ?*/}
                        {/*    <AddCartidges cartidges={selectWeapon?.firstWeapon.value?.cartridges}/> : ''}*/}
                    </div>
                )
            })}
            {/*<div>*/}
            {/*    <Select className="mb-5" options={weaponsOptions} onChange={(item) => changeWeapon('firstWeapon', item)} select={selectWeapon?.firstWeapon ?? {}} title="Выберите оружия"/>*/}
            {/*    {isSelectedWeapons(selectWeapon?.firstWeapon) ? <AddCartidges cartidges={selectWeapon?.firstWeapon.value?.cartridges} /> : ''}*/}
            {/*</div>*/}
            {/*{weaponsCount !== 1 ? <div>*/}
            {/*    <Select options={weaponsOptions} onChange={(item) => changeWeapon('secondWeapon', item)}*/}
            {/*            select={selectWeapon?.secondWeapon ?? {}} title="Выберите оружия" className="mb-5"/>*/}
            {/*    {isSelectedWeapons(selectWeapon?.secondWeapon) ? <AddCartidges cartidges={selectWeapon?.secondWeapon.value?.cartridges} /> : ''}*/}
            {/*</div> : ''}*/}
            {/*{weaponsCount === 3 ? <div>*/}
            {/*    <Select options={weaponsOptions} onChange={(item) => changeWeapon('thirdWeapon', item)}*/}
            {/*            select={selectWeapon?.thirdWeapon ?? {}} title="Выберите оружия" className="mb-5"/>*/}
            {/*    {isSelectedWeapons(selectWeapon?.thirdWeapon) ? <AddCartidges  cartidges={selectWeapon?.thirdWeapon.value?.cartridges}/> : ''}*/}
            {/*</div> : ''}*/}
        </div>
    )

}