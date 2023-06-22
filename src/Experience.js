import * as THREE from 'three'
import { Suspense } from "react"
import { useFrame } from "@react-three/fiber"
import { Center, KeyboardControls, OrbitControls } from "@react-three/drei"

import Lights from "./Lights"
import Effect from "./Effect"
import Emissions from "./Emissions"
import Ground from "./Ground"
import Modeles from "./Modeles"
import Cat from './Cat'
import Reflection from "./Reflection"

import { Physics, Debug} from '@react-three/rapier'
import Colliders from './Colliders'

export default function Experience()
{
    return <>

        <color args={['#1d1b1b']} attach='background' />
        {/* <fog attach="fog" args={['#1d1b1b', window.innerWidth <= 800 ? 120 : 130, 250]} /> */}
        <KeyboardControls map={ [
            { name: 'forward', keys: [ 'ArrowUp', 'KeyW' ] },
            { name: 'backward', keys: [ 'ArrowDown', 'KeyS' ] },
            { name: 'leftward', keys: [ 'ArrowLeft', 'KeyA' ] },
            { name: 'rightward', keys: [ 'ArrowRight', 'KeyD' ] },
            { name: 'shift', keys: [ 'Shift' ] },
            { name: 'jump', keys: [ 'Space' ] },
        ] }>
        <Center>
            <group>
                {/* <OrbitControls /> */}
                <Suspense fallback={null}>
                    <Physics gravity={[0, -20, 0]}>
                        {/* <Debug /> */}
                        <Cat />
                        <Colliders />
                        <Modeles />
                        <Ground />
                    </Physics>
                    {/* <Effect /> */}
                    <Emissions />
                    <Lights />
                    {/* <Reflection /> */}
                </Suspense>
            </group>
        </Center>
        </KeyboardControls>
    </>
}