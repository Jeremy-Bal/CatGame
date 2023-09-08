import { Suspense } from "react"
import { Center, KeyboardControls, Sparkles, Stars } from "@react-three/drei"

import Lights from "./Lights"
import Effect from "./Effect"
import Emissions from "./Emissions"
import Ground from "./Ground"
import Modeles from "./Modeles"
import Cat from './Cat'
import Reflection from "./Reflection"
import Game from './Game'

import { Physics, Debug} from '@react-three/rapier'
import Colliders from './Colliders'

export default function Experience()
{
    const show = ()=>{
        document.querySelector('.column').classList.add('show')
    }

    return <>
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
                <Suspense fallback={show()}>
                    <Stars radius={1} depth={50} count={1000} factor={2} saturation={0} fade speed={3} />
                    <Sparkles count={100} scale={[10, 7, 30]} size={20} position={[-10, 5, 0]} opacity={0.2} speed={0.3}/>
                    <Physics gravity={[0, -20, 0]}>
                        {/* <Debug /> */}
                        <Cat />
                        <Colliders />
                        <Modeles />
                        <Ground />
                        <Game />
                    </Physics>
                    <Effect />
                    <Emissions />
                    <Lights />
                    <Reflection />
                </Suspense>
            </group>
        </Center>
        </KeyboardControls>
    </>
}