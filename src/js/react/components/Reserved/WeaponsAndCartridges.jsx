import React, {useMemo} from "react";
import {useState, useEffect} from "react";
import {AddCartidges} from "./ReservedComponent.jsx";
import Select from "../Select.jsx";

export default function WeaponsAndCartridges({section, weaponsCount}) {
    const [weapons, setWeapons] = useState([]);
    const [selectWeapon, setSelectWeapon] = useState({});

    useEffect(() => {
        if (!section?.weapons) return
        setWeapons([...section.weapons])
    }, [section]);

    //
    // useEffect(() => {
    //     if(!Object.keys(selectWeapon).length) return
    //     setSelectWeapon({})
    // }, [weaponsCount])



    useEffect(() => {
        if(!Object.keys(selectWeapon).length) return
        let selectWeaponValues = Object.values(selectWeapon).flatMap(obj => obj.value);
        setWeapons((weapon) => section.weapons.filter((obj) => !selectWeaponValues.includes(obj)))

    }, [selectWeapon])

    const weaponsOptions = weapons?.map((item) => ({value: item, label: item.name}));

    const changeWeapon = (name, item) => {
        setSelectWeapon(selectWeapon => ({...selectWeapon, [name]: item}));
       // setWeapons((weapon) =>  {
       //     console.log(selectWeapon)
       // })
    }
     console.log('RENDER WEAPONS AND CARTIFGES')

    return (
        <div>
            {console.log(selectWeapon)}
            <div>
                <Select options={weaponsOptions} onChange={(item) => changeWeapon('firstWeapon', item)}  title="Выберите оружия"/>
                <AddCartidges defaultShot={2500} valueCount={100} />
            </div>
            {weaponsCount !== 1 ? <div>
                <Select options={weaponsOptions} onChange={(item) => changeWeapon('secondWeapon', item)}
                        select={selectWeapon.secondWeapon} title="Выберите оружия"/>
                <AddCartidges defaultShot={2500} valueCount={100}/>
            </div> : ''}
            {weaponsCount === 3 ? <div>
                <Select options={weaponsOptions} onChange={(item) => changeWeapon('thirdWeapon', item)}
                        select={selectWeapon.thirdWeapon} title="Выберите оружия"/>
                <AddCartidges defaultShot={2500} valueCount={100}/>
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