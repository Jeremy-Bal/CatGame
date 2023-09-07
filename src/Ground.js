import { MeshReflectorMaterial, useTexture } from "@react-three/drei"
import { RigidBody } from '@react-three/rapier'
import { useControls } from "leva"

export default function Ground()
{
 
    const props = useTexture({
        map: './ground/bakedRoad.jpg',
        roughnessMap: './ground/bakedRoad_Roughness.jpg',
    })

    //leva
    const val = useControls('Reflection', {
        valBlur:{
            value: {
                x: 300,
                y: 100,
            },
            min: 0,
            max: 1000,
            step: 5
        },
        reflectorOffset:{
            min: 0,
            max: 3,
            step: 0.0001,
            value: 1
        },
        resolution:{
            min: 256,
            max: 1000,
            step: 1,
            value: 1054
        },
        mixBlur:{
            min: 0,
            max: 10,
            step: 0.1,
            value: 7
        },
        roughness:{
            min: 0,
            max: 100,
            step: 0.01,
            value: 6    
        },
        metalness:{
            min: 0,
            max: 1,
            step: 0.01,
            value: 0.74
        },
        depthToBlurRatioBias:{
            min: 0,
            max: 1,
            step: 0.01,
            value: 0.25
        },
        
        minDepthThreshold:{
            min: 0,
            max: 1,
            step: 0.01,
            value: 0.4
        },
        maxDepthThreshold:{
            min: 0,
            max: 1,
            step: 0.01,
            value: 1
        },
        depthScale:{
            min: 0,
            max: 1,
            step: 0.01,
            value: 0.4
        },
        mixContrast:{
            min: 0,
            max: 3,
            step: 0.01,
            value: 1.75
        },
        mixStrength:{
            min: 0,
            max: 3,
            step: 0.01,
            value: 0.78
        },
    })
    return <>
        <RigidBody type={'fixed'}>
            <mesh rotation={[- Math.PI * 0.5, 0, Math.PI * 0.5]} position={[0, -1, 15]}  >
                <boxGeometry args={[90, 81.4, 2]} />
                <MeshReflectorMaterial
                    blur={[val.valBlur.x, val.valBlur.y]} // Blur ground reflections (width, heigt), 0 skips blur
                    {...props}
                    {...val}
                    mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
                />
            </mesh>
        </RigidBody>
    </>
}