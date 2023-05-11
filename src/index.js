import { Loader } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { createRoot } from 'react-dom/client'
import { Leva } from 'leva'

import * as THREE from 'three'

import Experience from './Experience'

import './style.css'

const root = createRoot(document.querySelector('#root'))

root.render(
    <>
        <Leva collapsed />

        <Canvas
            camera={{
                position: [ 125, 100, 100 ],
                near: 10,
                far: window.innerWidth <= 800 ? 230 : 250,
                fov: window.innerWidth <= 800 ? 90 : 40
            }}
            dpr={[1, 2]}
            gl={{
                antialias: false,
                outputEncoding: THREE.sRGBEncoding
            }}>
            <Experience />

        </Canvas>

        <Loader />
    </>
)