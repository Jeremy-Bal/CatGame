import { useGLTF } from "@react-three/drei"
import { useControls } from "leva"

export default function Emissions()
{
    const { nodes } = useGLTF('./emission.glb')

    const { color } = useControls({
        color: {
            value : [ 0.05, 1.1, 0.05 ],
            min: 0,
            max: 5,
            step: 0.01
        },
    })

    return <>
        <group>

            <mesh geometry={nodes.darkOrangeEmission.geometry}>
                 <meshBasicMaterial color={ [ 1, 1, 5 ] } toneMapped={ false }/>
            </mesh>
            
            <mesh geometry={nodes.blueEmission.geometry}>
                 <meshBasicMaterial color={[0.2, 2.4, 2.0]} toneMapped={ false }/>
            </mesh>
            
            <mesh geometry={nodes.orangeEmission.geometry}>
                 <meshBasicMaterial color={ [ 1.5, 1, 4 ] } toneMapped={ false }/>
            </mesh>
            
            <mesh geometry={nodes.redEmission.geometry}>
                 <meshBasicMaterial color={ [ 2.7, 0.05, 0.05 ] } toneMapped={ false }/>
            </mesh>
            
            <mesh geometry={nodes.whiteEmission.geometry}>
                 <meshBasicMaterial color={ [ 1.5, 1, 4 ] } toneMapped={ false }/>
            </mesh>
            
            <mesh geometry={nodes.yellowEmission.geometry}>
                 <meshBasicMaterial color={ [ 1.5, 1, 4 ] } toneMapped={ false }/>
            </mesh>
        </group>
    </>
}