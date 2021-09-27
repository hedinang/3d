import React, { useRef } from 'react';
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
function ModelCar(props) {
    const gltf = useGLTF('./test.gltf')
    const ref = useRef()
    return (
        <mesh {...props} ref={ref}>
            <primitive object={gltf.scene.clone(true)} scale={0.2} />
        </mesh>
    )
}
function ModelLogo(props) {
    const gltf = useGLTF('./a.gltf')
    const ref = useRef()
    useFrame((state, delta) => {
        ref.current.rotation.z += 0.05
        ref.current.rotation.x += 0.05
        ref.current.rotation.y += 0.05
    })
    return (
        <mesh {...props} ref={ref}>
            <primitive object={gltf.scene.clone(true)} scale={0.2} />
        </mesh>
    )
}
export {
    ModelCar,
    ModelLogo,
}