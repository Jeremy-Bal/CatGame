import {PositionalAudio, useGLTF, useTexture, useVideoTexture } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"
import useGame from "./Utils/useGame"

export default function Modeles()
{
    const [ neige_1, neige_2, baked_1, baked_2, baked_3 ] = useTexture(['./neige.png', './neige2.png', './modeles/baked_1.jpg', './modeles/baked_2.jpg', './modeles/threeBaked.jpg'])
    const [ gameWorld_1, gameWorld_2, gameWorld_3 ] = useGLTF(['./modeles/gameWorld_1.glb','./modeles/gameWorld_2.glb', './modeles/gameWorld_3.glb'])
    const hxhVideo = useVideoTexture('./videoHxH.mp4')
    const neigeVid = useVideoTexture('./neigeVid.mp4')

    const catImagesRef = useRef()
    const hxhVideoRef = useRef()

    const [currentReady, setReady] = useState(false)

    useEffect(()=>{
        //I subscribe to phase event if value change 
        const unsubscribePhase = useGame.subscribe(
            (state)=>state.phase,
            (value)=>{
                if(value === 'end'){
                    catImagesRef.current.visible = true
                    hxhVideoRef.current.visible = false
                }
                if(value === 'playing'){
                    setTimeout(()=>{
                        setReady(true)
                    }, 1000)
                }
            }
        )

        return ()=>{
            unsubscribePhase()
        }
    })
    return <>
        {currentReady && <PositionalAudio url={'themeMusic.mp3'} distance={3} loop autoplay position={[-7, 4, 1]} />}

        <mesh position={[-24.5, 15, 20.45]} rotation={[0, Math.PI * 0.5, 0]} visible={true} ref={hxhVideoRef}>
            <planeGeometry args={[6.8, 11.5]} />
            <meshBasicMaterial map={hxhVideo} toneMapped={false} />
        </mesh>
        
        <mesh geometry={gameWorld_1.nodes.gameModele_1.geometry} >
            <meshBasicMaterial map={baked_1} map-flipY="false"/>
        </mesh>

        <mesh geometry={gameWorld_2.nodes.gameModele_2.geometry} >
            <meshBasicMaterial map={baked_2} map-flipY="false"/>
        </mesh>
        <mesh geometry={gameWorld_3.nodes.gameModele_3.geometry} >
            <meshBasicMaterial map={baked_3} map-flipY="false"/>
        </mesh>

        <group visible={false} ref={catImagesRef}>
            <mesh position={[-24.5, 15, 20.45]} rotation={[0, Math.PI * 0.5, 0]}>
                <planeGeometry args={[6.8, 11.5]} />
                <meshBasicMaterial map={neigeVid} toneMapped={false} />
            </mesh>
            <mesh rotation={[ 0, Math.PI * 0.5, 0]} position={[-16.3, 2, 11.5]}>
                <planeGeometry args={[8, 5]} />
                <meshBasicMaterial transparent map={neige_1}/>
            </mesh>
            <mesh rotation={[ 0, Math.PI * 1, 0]} position={[-24, 10, -6.8]}>
                <planeGeometry args={[10, 7]} />
                <meshBasicMaterial transparent map={neige_2}/>
            </mesh>
        </group>
    </>
}