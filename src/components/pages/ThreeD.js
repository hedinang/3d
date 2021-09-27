import React, { useRef } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { ModelCar, ModelLogo } from '../model/threeDModel'
import { Button, Col, Row } from 'react-bootstrap'
function Box(props) {
    const ref = useRef()
    return (
        <mesh
            {...props}
            ref={ref}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={'orange'} />
        </mesh>
    )
}
export default function ThreeD() {
    return (
        <div>
            <div style={{ background: '#f4ffc8' }}>
                <div style={{ float: 'left', marginTop: '100px', marginLeft: '30rem' }}>
                    <h2>3D</h2>
                    <div>
                        A solution for present 3d object, which helps bussinesses in observing <br />
                    all aspects of objects in the digital era.<br />
                    Our 3d solution can be easily customized and integrated, which is extremely <br />
                    convenient for bussinesses to apply in many fields and support diverse purposes.<br />
                    </div>
                </div>
                <div style={{  marginTop: '100px' }}>
                    <Canvas style={{
                        width: '400px', height: '400px'
                    }}>
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        <ModelLogo />
                    </Canvas>
                </div>
                {/* <img src={logoThreeD} style={{ width: '30rem', height: '30rem' }} /> */}
            </div>
            <div>
                <h2 style={{ textAlign: 'center' }}>Demo</h2>
                <Row>
                    <Col></Col>
                    <Col>
                        <Button style={{
                            width: '50px', height: '50px',
                            borderRadius: '50%', background: 'black', borderStyle: 'none'
                        }} />
                        <Button style={{
                            width: '50px', height: '50px', borderRadius: '50%',
                            background: 'red', borderStyle: 'none'
                        }} />
                        <Button style={{
                            width: '50px', height: '50px', borderRadius: '50%',
                            background: 'blue', borderStyle: 'none'
                        }} />
                    </Col>
                    <Col>
                        <Canvas>
                            <ambientLight />
                            <pointLight position={[10, 10, 10]} />
                            <ModelCar position={[1.2, 0, 0]} />
                            <OrbitControls />
                        </Canvas>

                    </Col>
                    <Col></Col>
                </Row>

            </div>
        </div>

    )
}
