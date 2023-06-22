import {useGLTF, useTexture } from "@react-three/drei"

export default function Modeles()
{
    const [ baked_1, baked_2 ] = useTexture(['./modeles/baked_1.jpg', './modeles/baked_2.jpg'])
    const [ gameWorld_1, gameWorld_2, world] = useGLTF(['./modeles/gameWorld_1.glb','./modeles/gameWorld_2.glb', './modeles/world.glb'])

    return <>
        <mesh geometry={gameWorld_1.nodes.gameModele_1.geometry} >
            <meshBasicMaterial map={baked_1} map-flipY="false"/>
        </mesh>
        <mesh geometry={gameWorld_2.nodes.gameModele_2.geometry} >
            <meshBasicMaterial map={baked_2} map-flipY="false"/>
        </mesh>

        <mesh geometry={world.nodes.World.geometry} scale={[0.98, 1, 1]} position-z={-0.2} >
            <meshStandardMaterial color={'#353641'} />
        </mesh>
    </>
}