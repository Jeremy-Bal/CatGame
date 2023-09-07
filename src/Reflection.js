import { MeshReflectorMaterial } from '@react-three/drei'
// import { useControls } from 'leva'

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

    // const { posCollider, rotColliders } = useControls('collider', {
    //     posCollider:{
    //         value:{
    //             x: -28.7,
    //             y: 16.5,
    //             z: -19.5
    //         },
    //         min: -100,
    //         max: 100,
    //         step: 0.1
    //     },
    //     rotColliders:{
    //         value : 0.25,
    //         min: -1,
    //         max: 1,
    //         step: 0.01
    //     }
    // })

    return <>
        <mesh position={[-23.5, 16.9, 30.2]} rotation-y={Math.PI * 0.75}>
            <planeGeometry args={[13.5, 17]} />
            <MeshReflectorMaterial
                blur={[400, 100]}
                mirror={0}
                resolution={1024/2}
                mixBlur={0.2}
                mixStrength={15}
                depthScale={1}
                minDepthThreshold={0}
                color="#151515"
                metalness={0.5}
                roughness={0.5}
            />
        </mesh>
        {/* <mesh position={[posCollider.x, posCollider.y, posCollider.z]} rotation-y={Math.PI * rotColliders}>
            <planeGeometry args={[13.5, 17]} />
            <MeshReflectorMaterial
                blur={[400, 100]}
                mirror={0}
                resolution={1024}
                mixBlur={0.2}
                mixStrength={15}
                depthScale={1}
                minDepthThreshold={0.6}
                color="#151515"
                metalness={0.5}
                roughness={1}
            />
        </mesh> */}
    </>
}