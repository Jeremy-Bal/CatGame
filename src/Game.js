import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useState } from "react";

export default function Game ()
{
    const [patouneRotation, setPatouneRotation] = useState(0)
    const patoune = useGLTF('./modeles/catPaw.glb')

    useFrame((state, delta)=>{
        setPatouneRotation(()=>(state.clock.elapsedTime + patouneRotation * delta) * 0.1)
    })
    
    return <>
         <RigidBody 
            type='fixed'
            colliders={false} 
            sensor
            >
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[34, 1, 18.5]}>
                    <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[30, 1, 18.5]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[26, 2, 18.5]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[22, 2, 18.5]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[18, 1, 19.5]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[14, 1, 17.5]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[10, 1, 22.5]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[6, 1, 14.5]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[2, 1, 15.5]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[-2, 1, 20.5]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[-6, 1, 19.5]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[-12, 1, 13.5]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[-11, 1, 9.5]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[-10, 1, 5.5]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[-9, 1, 1.5]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[-9, 1, -3.5]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[-10, 1, -6.5]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[-12, 1, -8.5]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[-17, 1, -9]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[-21, 1, -8.5]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[-25, 3, -8.5]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[-29, 5, -8.5]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[-33, 7, -8.5]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[-37, 9, -8.5]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[-38, 9, -6.5]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[-30, 9, -12.5]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[-27.5, 9, -16.5]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[-25, 9, -20.5]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[-22.5, 9, -24.5]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[-16.5, 6, -24.5]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[-11.5, 6, -24.5]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
                <CuboidCollider name="active" args={[0.7, 0.7, 0.7]} position={[-7.5, 6, -24.5]}>
                     <mesh rotation={[0, Math.PI * patouneRotation, 0]} scale={0.5} geometry={patoune.nodes.patoune.geometry}>
                        <meshMatcapMaterial color={'#d8a45f'} />
                    </mesh>
                </CuboidCollider>
            </RigidBody>
    </>
}