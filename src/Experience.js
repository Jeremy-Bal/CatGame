import { Center, OrbitControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

import { Suspense } from "react"
import * as THREE from 'three'

import Lights from "./Lights"
import Effect from "./Effect"
import Emissions from "./Emissions"
import Ground from "./Ground"
import Modeles from "./Modeles"
import Reflection from "./Reflection"
import { useControls } from "leva"

export default function Experience()
{
    var orbitChange = false
    const finalPosition = new THREE.Vector3(90, 40, 50)

    useFrame(({ camera })=>{
        if(orbitChange === false || camera.position.x > 81)
        {
            camera.position.lerp(finalPosition, 0.015)
        }
    })
    const { minPolarAngle, maxPolarAngle, maxZoom } = useControls({
        minPolarAngle: {
            value: 1,
            min: -10,
            max: 10,
            step: 0.001
        },
        maxPolarAngle: {
            value: 1.5,
            min: -10,
            max: 10,
            step: 0.001
        },
        maxZoom: {
            value: 0,
            min: 0,
            max: 10,
            step: 0.001
        },
    })
    return <>

        <color args={['#1d1b1b']} attach='background' />
        <fog attach="fog" args={['#1d1b1b', window.innerWidth <= 800 ? 120 : 130, 250]} />

        <Center>
            <group>
                <OrbitControls 
                    onStart={ ()=>orbitChange = true } 
                    maxAzimuthAngle = {1.9} 
                    minAzimuthAngle={0} 
                    minPolarAngle = {1}
                    maxPolarAngle = {1.5}
                    enableZoom = {false}
                />

                <Suspense fallback={null}>
                    <Modeles />
                    <Ground />
                    <Effect />
                    <Emissions />
                    <Lights />
                    <Reflection />
                    {/* <Perf position="top-left" /> */}
                </Suspense>
            </group>
        </Center>
    </>
}