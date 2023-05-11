import { MeshReflectorMaterial } from '@react-three/drei'
import { useControls } from 'leva'

export default function Reflection()
{

    //leva
    // const val = useControls('Reflection Carreaux', {
    //     resolution:{
    //         min: 256,
    //         max: 1000,
    //         step: 1,
    //         value: 256 * 4
    //     },
    //     mixBlur:{
    //         min: 0,
    //         max: 10,
    //         step: 0.1,
    //         value: 0.2
    //     },
    //     roughness:{
    //         min: 0,
    //         max: 100,
    //         step: 0.01,
    //         value: 1
    //     },
    //     metalness:{
    //         min: 0,
    //         max: 1,
    //         step: 0.01,
    //         value: 0.5
    //     },
    //     // reflectorOffset:{
    //     //     min: 0,
    //     //     max: 3,
    //     //     step: 0.0001,
    //     //     value: 0
    //     // },
    //     // depthToBlurRatioBias:{
    //     //     min: 0,
    //     //     max: 1,
    //     //     step: 0.01,
    //     //     value: 0.25
    //     // },
    //     // minDepthThreshold:{
    //     //     min: 0,
    //     //     max: 1,
    //     //     step: 0.01,
    //     //     value: 0.6
    //     // },
    //     maxDepthThreshold:{
    //         min: 0,
    //         max: 1,
    //         step: 0.01,
    //         value: 0.6
    //     },
    //     depthScale:{
    //         min: 0,
    //         max: 1,
    //         step: 0.01,
    //         value: 1
    //     },
    //     // mixContrast:{
    //     //     min: 0,
    //     //     max: 3,
    //     //     step: 0.01,
    //     //     value: 0.8
    //     // },
    //     mixStrength:{
    //         min: 0,
    //         max: 20,
    //         step: 0.01,
    //         value: 15
    //     },
    //     color: "#151515"

    // })

    return <>
        {/* Big Appartement --> Right to left */}
        <mesh position={[-24.16, 16.4, -29.5]} rotation-y={Math.PI * 0.5}>
            <planeGeometry args={[10, 17]} />
            <meshBasicMaterial color={'#1d1b1b'} />
        </mesh>
        <mesh position={[-28.7, 16.5, -19.5]} rotation-y={Math.PI * 0.25}>
            <planeGeometry args={[13.5, 17]} />
            <MeshReflectorMaterial
                blur={[400, 100]}
                mirror={0}
                resolution={1024/2}
                mixBlur={0.2}
                mixStrength={15}
                depthScale={1}
                minDepthThreshold={0.6}
                color="#151515"
                metalness={0.5}
                roughness={1}
            />
        </mesh>

        {/* Medium Appartement --> bottom to Up */}
        <mesh position={[-45.2, 10.6, 0.4]} rotation-y={Math.PI * 0.5} >
            <planeGeometry args={[13.5, 5]} />
            <meshBasicMaterial color={'#1d1b1b'} />
        </mesh>
        <mesh position={[-47.4, 16.8, 0]} rotation-y={Math.PI * 0.5} >
            <planeGeometry args={[12.7, 5]} />
            <meshBasicMaterial color={'#1d1b1b'} />
        </mesh>
        
        {/* Hotel --> right  to left */}
        <mesh position={[-45.6, 10.5, 19.3]} rotation-y={Math.PI * 0.5} >
            <planeGeometry args={[7.2, 10]} />
            <meshBasicMaterial color={'#1d1b1b'} />
        </mesh>
        <mesh position={[-43.7, 7.6, 25.8]} rotation-y={Math.PI * 0.5} >
            <planeGeometry args={[4, 15.5]} />
            <meshBasicMaterial color={'#1d1b1b'} />
        </mesh>

        {/* Hotel --> right  to left */}
        <mesh position={[-45.6, 10.5, 39.7]} rotation-y={Math.PI * 0.5} >
            <planeGeometry args={[7.2, 10]} />
            <MeshReflectorMaterial
                blur={[400, 100]}
                resolution={1024/2}
                mixBlur={0.2}
                mixStrength={15}
                depthScale={1}
                minDepthThreshold={0.6}
                color="#151515"
                metalness={0.5}
                roughness={1}
            />
        </mesh>
        <mesh position={[-43.7, 7.6, 32.8]} rotation-y={Math.PI * 0.5} >
            <planeGeometry args={[4, 15.5]} />
            <meshBasicMaterial color={'#1d1b1b'} />
        </mesh>
    </>
}