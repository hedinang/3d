import React, { useEffect, useRef, useState } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Chair } from '../model/threeDModel'
import { Col, Row } from 'react-bootstrap'
import { SketchPicker } from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faVrCardboard } from '@fortawesome/free-solid-svg-icons'
import { ARCanvas } from '@react-three/xr'
import { Redirect } from 'react-router'
export default function ThreeD() {
    let [model, setModel] = useState({
        url: 'http://amibigroup-3d.com/model-viewer/ban-go',
        txt: 'This is wood table This is wood table This is wood table This is wood table This is wood table ' +
            'This is wood table This is wood table This is wood table This is wood table This is wood table' +
            'This is wood table This is wood table This is wood table This is wood table This is wood table This is wood table' +
            'This is wood table This is wood table This is wood table This is wood table This is wood table This is wood table',
        header: 'Wood Table'
    })
    let changeModel = (e) => {
        switch (e) {
            case 'table':
                model = {
                    url: 'http://amibigroup-3d.com/model-viewer/ban-go',
                    txt: 'This is wood table This is wood table This is wood table This is wood table This is wood table ' +
                        'This is wood table This is wood table This is wood table This is wood table This is wood table' +
                        'This is wood table This is wood table This is wood table This is wood table This is wood table This is wood table' +
                        'This is wood table This is wood table This is wood table This is wood table This is wood table This is wood table',
                    header: 'Wood Table'
                }
                break;
            case 'child-bike':
                model = {
                    url: 'http://amibigroup-3d.com/model-viewer/child-bike',
                    txt: 'This is child bike This is child bike This is child bike This is child bike This is child bike' +
                        'This is child bike This is child bike This is child bike This is child bike This is child bike' +
                        'This is child bike This is child bike This is child bike This is child bike This is child bike',
                    header: 'Child Bike'
                }
                break;
            case 'mini-fridge':
                model = {
                    url: 'http://amibigroup-3d.com/model-viewer/mini-fridge',
                    txt: 'This is mini fride This is mini fride This is mini fride This is mini fride This is mini fride' +
                        'This is mini fride This is mini fride This is mini fride This is mini fride This is mini fride' +
                        'This is mini fride This is mini fride This is mini fride This is mini fride This is mini fride',
                    header: 'Mini Fridge'
                }
                break;
        }
        setModel(model)
    }
    let useAr = (e) => {
        window.location.href = model.url
    }
    return (
        <>
            <div >
                <div
                    style={{
                        float: 'left',
                    }}>
                    <Row>
                        <Col></Col>
                        <Col>
                            <h2 >3D</h2>
                            <div>
                                A solution for present 3d object, which helps bussinesses in observing
                                all aspects of objects in the digital era.
                                Our 3d solution can be easily customized and integrated, which is extremely
                                convenient for bussinesses to apply in many fields and support diverse purposes.
                            </div>
                        </Col>
                        <Col>
                        </Col>
                        <Col></Col>
                    </Row>

                </div>
            </div>
            <div>
                <h2 style={{ textAlign: 'center', marginTop: '10px' }}>AR shopping</h2>
                <Row style={{ textAlign: 'center' }}>
                    <Col>
                        <img style={{ width: '20rem', height: '20rem' }} src='./child-bike.jpg' />
                        <div>Child bike</div>
                        <div>$100</div>
                        <FontAwesomeIcon icon={faEye} onClick={() => {
                            changeModel('child-bike')
                        }} />
                    </Col>
                    <Col>
                        <img style={{ width: '20rem', height: '15rem', marginTop: '5rem' }} src='./mini-fridge.jpg' />
                        <div>Mini fridge</div>
                        <div>$100</div>
                        <FontAwesomeIcon icon={faEye} onClick={() => {
                            changeModel('mini-fridge')
                        }} />
                    </Col>
                    <Col>
                        <img style={{ width: '20rem', height: '15rem', marginTop: '5rem' }} src='./table.jpg' />
                        <div>Table</div>
                        <div>$100</div>
                        <FontAwesomeIcon icon={faEye} onClick={() => {
                            changeModel('table')
                        }} />
                    </Col>
                </Row>
                <Row>
                    <Col style={{ marginLeft: '25rem', marginTop: '2rem' }}>
                        <h2 style={{ textAlign: 'center' }} >{model.header}</h2>
                        <div >{model.txt}</div>
                        <FontAwesomeIcon icon={faVrCardboard} onClick={useAr} />
                    </Col>
                    <Col style={{ marginTop: '5rem' }}>
                        <iframe style={{ width: '50rem', height: '38rem', border: 'none', overflow: 'hidden' }}
                            src={model.url}>aa</iframe>
                    </Col>
                </Row>
                <div>
                    <footer>
                        <p>Designed by Amibi.,JSC - <a href='https://www.amibigroup.com/'>
                            amibigroup.com</a></p>
                    </footer>
                </div>
            </div>
        </>

    )
}
