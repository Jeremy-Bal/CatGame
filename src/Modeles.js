import {useGLTF, useTexture } from "@react-three/drei"

export default function Modeles()
{
    const [baked1, baked2, baked3, baked4, baked5, baked6] = useTexture(['./new/nBaked-1.jpg', './new/nBaked-2.jpg', './new/nBaked-3.jpg', './new/nBaked-4.jpg',  './new/nBaked-5.jpg', './new/nBaked-6.jpg'])
    const [modele1, modele2, modele3, modele4, modele5, modele6, world] = useGLTF(['./new/baked-1.glb', './new/baked-2.glb', './new/baked-3.glb', './new/baked-4.glb', './new/baked-5.glb', './new/baked-6.glb', './new/world.glb'])

    return <>
        <mesh geometry={modele1.nodes.baked.geometry}>
            <meshBasicMaterial map={baked1} map-flipY="false"/>
        </mesh>
        <mesh geometry={modele2.nodes.baked.geometry}>
            <meshBasicMaterial map={baked2} map-flipY="false"/>
        </mesh>
        <mesh geometry={modele3.nodes.baked.geometry}>
            <meshBasicMaterial map={baked3} map-flipY="false"/>
        </mesh>
        <mesh geometry={modele4.nodes.baked.geometry}>
            <meshBasicMaterial map={baked4} map-flipY="false"/>
        </mesh>
        <mesh geometry={modele5.nodes.baked.geometry}>
            <meshBasicMaterial map={baked5} map-flipY="false"/>
        </mesh>
        <mesh geometry={modele6.nodes.baked.geometry}>
            <meshBasicMaterial map={baked6} map-flipY="false"/>
        </mesh>

        <mesh geometry={world.nodes.World.geometry} scale={[0.98, 1, 1]} position-z={-0.2} >
            <meshStandardMaterial color={'#353641'} />
        </mesh>
    </>
}