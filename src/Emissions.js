import { useGLTF } from "@react-three/drei"
// import { useControls } from "leva"


export default function Emissions()
{
    const { nodes } = useGLTF('./emission.glb')

//     const { lightColor } = useControls({
//           lightColor: {
//           value : [ 2.7, 0.06, 0.05 ],
//           min: 0,
//           max: 5,
//           step: 0.01
//         },
//     })

//     console.log(lightColor);
    return <>
        <group>

            <mesh geometry={nodes.darkOrangeEmission.geometry}>
                 <meshBasicMaterial color={ [5.93, 1.15, 0.51] } toneMapped={ false }/>
            </mesh>
            
            <mesh geometry={nodes.blueEmission.geometry}>
                 <meshBasicMaterial color={[2.93, 1/1.4, 1/1.4]} toneMapped={ false }/>
            </mesh>
            
            <mesh geometry={nodes.orangeEmission.geometry}>
                 <meshBasicMaterial color={ [ 1.1, 1, 4 ] } toneMapped={ false }/>
            </mesh>
            
            <mesh geometry={nodes.redEmission.geometry}>
                 <meshBasicMaterial color={ [4.23, 0, 0.13] } toneMapped={ false }/>
            </mesh>
            
            <mesh geometry={nodes.whiteEmission.geometry}>
                 <meshBasicMaterial color={ [ 1.5, 7, 7 ] } toneMapped={ false }/>
            </mesh>
            
            <mesh geometry={nodes.yellowEmission.geometry}>
                 <meshBasicMaterial color={ [ 1.5, 1, 4 ] } toneMapped={ false }/>
            </mesh>
        </group>
    </>
}