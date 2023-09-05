import { Loader } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { createRoot } from 'react-dom/client'
import { Leva } from 'leva'
import { Perf } from "r3f-perf"

import Menu from './Menu'

import Experience from './Experience'

import './style.css'

const root = createRoot(document.querySelector('#root'))

root.render(
    <>
        <Leva /* collapsed */ />
        <Menu />
        <Canvas
            camera={{
                /* position: [ 125, 100, 100 ], */
                near: 1,
                far: 100,
                fov: 60
            }}
            dpr={[1, 2]}
            gl={{
                antialias: false,
                alpha: true,
             
            }}>
                <Perf position="top-left" />
                <Experience />
        </Canvas>

        <Loader />
    </>
)