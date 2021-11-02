import React, { useEffect, useRef, useState } from 'react';
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
function Chair(props) {
    const { nodes, materials } = useGLTF("./chair.glb")
    const ref = useRef()
    let [items, setItems] = useState([
        { name: 'back', color: '#F8E71C', isSelect: true },
        { name: 'cushions', color: '#7ED321', isSelect: false },
        { name: 'base', color: '#D0021B', isSelect: false },
        { name: 'legs', color: '#0602D0', isSelect: false },
        { name: 'supports', color: '#F5A623', isSelect: false },
    ])
    useEffect(() => {

        let tmp = items.map(e => {
            if (e.isSelect === true) e.color = props.color
            return e
        })
        setItems(tmp)
    }, [props.color])
    let choose = (e) => {
        let tmp = items.map(f => {
            if (f.name === e) f.isSelect = true
            else f.isSelect = false
            return f
        })
        props.changeItem(e)
        setItems(tmp)
    }
    return (
        <group
            ref={ref} scale={1.2}
            dispose={null}
            position={(0, 0, 0)}
        >
            <mesh onClick={() => { choose('back') }} geometry={nodes.back.geometry} material={materials.laces}
                material-color={items[0].color} />
            <mesh onClick={() => { choose('cushions') }} geometry={nodes.cushions.geometry} material={materials.laces}
                material-color={items[1].color} />
            <mesh onClick={() => { choose('base') }} geometry={nodes.base.geometry} material={materials.laces}
                material-color={items[2].color} />
            <mesh onClick={() => { choose('legs') }} geometry={nodes.legs.geometry} material={materials.laces}
                material-color={items[3].color} />
            <mesh onClick={() => { choose('supports') }} geometry={nodes.supports.geometry} material={materials.laces}
                material-color={items[4].color} />
        </group>
    )
}
export {
    Chair,
}