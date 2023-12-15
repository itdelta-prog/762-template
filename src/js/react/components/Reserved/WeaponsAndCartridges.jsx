import React, {useMemo} from "react";
import {useState, useEffect} from "react";
import {AddCartidges} from "./ReservedComponent.jsx";
import Select from "../Select.jsx";

export default function WeaponsAndCartridges({weapons, weaponsCount}) {
  //  const [weapons, setWeapons] = useState(section?.weapons ?? []);
    const [selectWeapon, setSelectWeapon] = useState({
        firstWeapon: {},
        secondWeapon: {},
        thirdWeapon: {}
    });

    const weaponsOptions = useMemo(() => {
        if(!Object.keys(selectWeapon).length) {
            return weapons?.map((item) => ({value: item, label: item.name}))
        }
        let selectWeaponValues = Object.values(selectWeapon).flatMap(obj => obj.value);
        console.log(weapons.filter((obj) => !selectWeaponValues.includes(obj)))
        return  weapons.filter((obj) => !selectWeaponValues.includes(obj)).map((item) => ({value: item, label: item.name}))
        // return weapons.filter((obj) => !selectWeaponValues.includes(obj))
    }, [weapons, selectWeapon])


    // useEffect(() => {
    //     if(!Object.keys(selectWeapon).length) return
    //     let selectWeaponValues = Object.values(selectWeapon).flatMap(obj => obj.value);
    //     // setWeapons((weapon) => section.weapons.filter((obj) => !selectWeaponValues.includes(obj)))
    //
    // }, [selectWeapon])


    useEffect(() => {
        if(!Object.keys(selectWeapon).length) return
        setSelectWeapon({
            firstWeapon: {},
            secondWeapon: {},
            thirdWeapon: {}
        })
    }, [weaponsCount, weapons])


    const changeWeapon = (name, item) => {
        setSelectWeapon(selectWeapon => ({...selectWeapon, [name]: item}));
       // setWeapons((weapon) =>  {
       //     console.log(selectWeapon)
       // })
    }
    console.log('RENDER WEAPONS AND CARTIFGES',selectWeapon)

    return (
        <div className="flex flex-col gap-y-5">
            <div>
                <Select className="mb-5" options={weaponsOptions} onChange={(item) => changeWeapon('firstWeapon', item)} select={selectWeapon.firstWeapon} title="Выберите оружия"/>
                {Object.keys(selectWeapon.firstWeapon).length ? <AddCartidges cartidges={selectWeapon?.firstWeapon.value?.cartridges} /> : ''}
            </div>
            {weaponsCount !== 1 ? <div>
                <Select options={weaponsOptions} onChange={(item) => changeWeapon('secondWeapon', item)}
                        select={selectWeapon.secondWeapon} title="Выберите оружия" className="mb-5"/>
                {Object.keys(selectWeapon.secondWeapon).length ? <AddCartidges cartidges={selectWeapon?.secondWeapon.value?.cartridges} /> : ''}
            </div> : ''}
            {weaponsCount === 3 ? <div>
                <Select options={weaponsOptions} onChange={(item) => changeWeapon('thirdWeapon', item)}
                        select={selectWeapon.thirdWeapon} title="Выберите оружия" className="mb-5"/>
                {Object.keys(selectWeapon.thirdWeapon).length ? <AddCartidges  cartidges={selectWeapon?.thirdWeapon.value?.cartridges}/> : ''}
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