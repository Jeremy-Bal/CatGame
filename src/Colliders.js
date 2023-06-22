import { useRef } from "react";
import { RigidBody, CuboidCollider, BallCollider } from '@react-three/rapier'
import { useControls } from "leva";


export default function Colliders()
{
    const colliders = useRef()


    const { posCollider, transCollider, rotColliders } = useControls('collider', {
        posCollider:{
            value:{
                x: 8.75,
                y: 0.2,
                z: -20.8
            },
            min: -100,
            max: 100,
            step: 0.05
        },
        transCollider:{
            value:{
                x: 2,    
                y: 0.2, 
                z: 2
            },
            min: -100,
            max: 100,
            step: 0.1
        },
        rotColliders:{
            value : 0,
            min: -1,
            max: 1,
            step: 0.01
        }
    })

    return <>
        <RigidBody 
            ref={colliders} 
            type='fixed'
            colliders={false} 
            position={[0, 0, 0]}
            >
            {/* OBJECTS 1 (left) */}
            {/* Arbres court*/}
            <CuboidCollider args={[1.0, 5, 1.0]} 
                            position={[34.3, 1, 23.2]} />
            <CuboidCollider args={[1.0, 5, 1.0]} 
                            position={[15.2, 1, 23.6]} />
            <CuboidCollider args={[1.0, 5, 1.0]} 
                            position={[1.7, 1, 23.5]} />
            <CuboidCollider args={[1.0, 5, 5.0]} 
                            position={[-30, 1, 22.9]} />
            <CuboidCollider args={[1.0, 5, 5.0]} 
                            position={[-29, 1, 18]} />
            {/* Arbres long */}
            <CuboidCollider args={[0.8, 9, 0.8]} 
                            position={[33, 1, 37.9]} />
            <CuboidCollider args={[0.8, 9, 0.8]} 
                            position={[7.4, 1, 38.8]} />
            <CuboidCollider args={[0.8, 9, 0.8]} 
                            position={[-14.5, 1, 34]} />
          
            {/* Poteaux */}
            <CuboidCollider args={[0.8, 9, 0.8]} 
                            position={[32, 1, 29]} />
            <CuboidCollider args={[0.8, 9, 0.8]} 
                            position={[16.3, 1, 28.8]} />
            <CuboidCollider args={[0.8, 9, 0.8]} 
                            position={[0.5, 1, 28.8]} />
            <CuboidCollider args={[0.8, 9, 0.8]} 
                            position={[-15.7, 1, 28.8]} />
           
           {/* Maisons */}
            <CuboidCollider args={[15, 9, 6]} 
                            position={[20, 1, 46.8]} />
            <CuboidCollider args={[15, 9, 6]} 
                            position={[-9.9, 1, 43.3]} />
            <CuboidCollider args={[15, 9, 6]} 
                            position={[-24.2, 1, 38.6]}
                            rotation={[0, Math.PI * -0.2, 0]} />

            {/* Cones */}
            <CuboidCollider args={[0.7, 0.5, 0.7]} 
                            position={[4, 1, 34.5]}
                            rotation={[0, Math.PI * 0.22, 0]} />
            <CuboidCollider args={[0.7, 0.5, 0.7]} 
                            position={[1.4, 1, 33.1]}
                            rotation={[0, Math.PI * 0.22, 0]} />
            <CuboidCollider args={[0.7, 0.5, 0.7]} 
                            position={[-0.5, 1, 33.8]}
                            rotation={[0, Math.PI * 0.22, 0]} />
            <CuboidCollider args={[0.7, 0.5, 0.7]} 
                            position={[-18, 1, 17.2]}
                            rotation={[0, Math.PI * 0.22, 0]} />
            <CuboidCollider args={[0.7, 0.5, 0.7]} 
                            position={[-21.0, 1, 23.7]}
                            rotation={[0, Math.PI * 0.22, 0]} />
            {/* Cars */}
            <CuboidCollider args={[2.5, 1, 1]} 
                            position={[-21.4, 1, 19.1]}
                            rotation={[0, Math.PI * -0.08, 0]} />
            <CuboidCollider args={[2.5, 1, 1]} 
                            position={[-25.5, 1, 23.3]}
                            rotation={[0, Math.PI * -0.31, 0]} />

            {/* OBJECTS 2 (right) */}
            {/* Arbres court*/}
            <CuboidCollider args={[1, 5, 1]} 
                            position={[27.6, 1, 12.7]} />
            <CuboidCollider args={[1, 5, 1]} 
                            position={[9.8, 1, 14.5]} />
            <CuboidCollider args={[1, 5, 1]} 
                            position={[9.8, 1, 14.5]} />
            <CuboidCollider args={[1, 5, 1]} 
                            position={[-4.6, 1, 12.9]} />
            <CuboidCollider args={[0.5, 5, 0.5]} 
                            position={[-6.5, 1, -17]} />
            <CuboidCollider args={[1, 5, 1]} 
                            position={[-21.8, 1, -12.1]} />
            {/* Poteau */}
            <CuboidCollider args={[0.5, 5, 0.5]} 
                            position={[-16.6, 1, -11.5]} />
            {/* Poubelle */}
            <CuboidCollider args={[0.8, 1, 0.8]} 
                            position={[-16.2, 1, -6.2]} />
            {/* Maisons */}
            <CuboidCollider args={[10, 9, 11.2]} 
                            position={[-26.1, 1, 4.2]} />
            <CuboidCollider args={[10, 9, 11.2]} 
                            position={[-31.6, 0, -25.6]} 
                            rotation={[0, Math.PI * -0.16, 0]} />
            <CuboidCollider args={[5, 9, 15]} 
                            position={[-10, 1, -24.9]} 
                            rotation={[0, Math.PI * 0.5, 0]} />
            {/* Chateau */}
            <CuboidCollider args={[13.5, 9, 13.5]} 
                            position={[17.5, 1, -11.8]} />
            <CuboidCollider args={[0.5, 9, 0.5]} 
                            position={[34.4, 1, 4.3]} />
            <CuboidCollider args={[0.5, 9, 0.5]} 
                            position={[1, 1, 4.3]} />
                            
      
            {/* Affiche */}
            <CuboidCollider args={[0.6, 1, 0.6]} 
                            position={[-17.3, 1, -14]}
                            rotation={[0, Math.PI * -0.15, 0]} />
            {/* Pont */}
            <CuboidCollider args={[1.7, 0.2, 2]} 
                            position={[19.3, 0.2, 18.2]}
                            rotation={[0, 0, Math.PI * 0.12]} />
            <CuboidCollider args={[1.7, 0.2, 2]} 
                            position={[21.9, 1, 18.2]}
                            rotation={[0, 0, Math.PI * 0.12]} />
            <CuboidCollider args={[1.7, 0.2, 2]} 
                            position={[25.2, 1.4, 18.2]}
                            rotation={[0, 0, Math.PI * -0.06]} />
            <CuboidCollider args={[1.7, 0.2, 2]} 
                            position={[28.4, 0.5, 18.2]}
                            rotation={[0, 0, Math.PI * -0.12]} />
            {/* Barrieres */}
            <CuboidCollider args={[5, 0.3, 3]} 
                            position={[24.5, 2.4, 20]}
                            rotation={[Math.PI * 0.5, 0, 0]} />
            <CuboidCollider args={[5, 0.3, 3]} 
                            position={[25, 2.4, 16.8]}
                            rotation={[Math.PI * 0.5, 0, 0]} />
            {/* Escalier */}
            <CuboidCollider args={[0.5, 0.2, 2]} 
                            position={[-20.6, 0.2, -8.35]} />
            <CuboidCollider args={[0.5, 0.2, 2]} 
                            position={[-22.00, 0.9, -8.35]} />
            <CuboidCollider args={[0.5, 0.2, 2]} 
                            position={[-23.35, 1.6, -8.35]} />
            <CuboidCollider args={[0.5, 0.2, 2]} 
                            position={[-24.70, 2.35, -8.35]} />
            <CuboidCollider args={[0.5, 0.2, 2]} 
                            position={[-26.00, 3.05, -8.35]} />
            <CuboidCollider args={[0.5, 0.2, 2]} 
                            position={[-27.35, 3.75, -8.35]} />
            <CuboidCollider args={[0.5, 0.2, 2]} 
                            position={[-28.65, 4.5, -8.35]} />
            <CuboidCollider args={[0.5, 0.2, 2]} 
                            position={[-30.05, 5.15, -8.35]} />
            <CuboidCollider args={[0.5, 0.2, 2]} 
                            position={[-31.35, 5.85, -8.35]} />
            <CuboidCollider args={[0.5, 0.2, 2]} 
                            position={[-32.65, 6.6, -8.35]} />
            <CuboidCollider args={[0.5, 0.2, 2]} 
                            position={[-34.00, 7.45, -8.35]} />
            <CuboidCollider args={[0.5, 0.2, 2]} 
                            position={[-35.2, 8.3, -8.35]} />
            <CuboidCollider args={[1.8, 0.2, 2]} 
                            position={[-38.7, 8.45, -8.35]} />

            <CuboidCollider args={[transCollider.x, transCollider.y, transCollider.z]} 
                    position={[posCollider.z, posCollider.y, -posCollider.x]}
                    rotation={[Math.PI * rotColliders, 0, 0]} 
                    />
        </RigidBody>
    </>
}