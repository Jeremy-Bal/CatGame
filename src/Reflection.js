import { MeshReflectorMaterial } from '@react-three/drei'
import { useControls } from 'leva'

export default function Reflection()
{
    return <>
        <mesh position={[-23.5, 16.9, 30.2]} rotation-y={Math.PI * 0.75}>
            <planeGeometry args={[13.5, 17]} />
            <MeshReflectorMaterial
                blur={[10, 10]}
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
    </>
}