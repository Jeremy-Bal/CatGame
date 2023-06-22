import { useAnimations, useGLTF, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect, useRef, useState } from "react";
import { Euler, LoopOnce, LoopRepeat, MeshBasicMaterial, Quaternion, Vector3 } from "three";
import { RigidBody, CuboidCollider, useRapier } from '@react-three/rapier'

export default function Cat()
{
    const catCollider = useRef()

    const modele = useGLTF('./cat.glb')
    const animation = useAnimations(modele.animations, modele.scene)
    const [currentAnimation, setCurrentAnimation] = useState('Tpose')
    const action = animation.actions[currentAnimation]
    
    const [isCurrentRunning, setIsCurrentRunning] = useState(false)

    const [sub, get]  = useKeyboardControls()
    
    const {rapier, world} = useRapier()
    const rapierWorld = world.raw()
    
    //Control all inputs and set animation
    useEffect(()=>{
        //Animations
        action.reset().fadeIn(0.5).play()
        action.setLoop(LoopRepeat)

        //This condition is used to simulate walk if user jump and hold  z || w
        if(currentAnimation === 'sautUp'){
            setTimeout(()=>{
                action.setLoop(LoopRepeat)
                isCurrentRunning ? setCurrentAnimation('Course') : setCurrentAnimation('Marche') 
            }, 1200)
        }

        //set direction to cast
        const direction = { x: 0, y: -1, z:0 }

        //keyboardControl
        const unsubcribeWalk = sub(
            (state)=>(state),
            (value)=>{
                const { backward, forward, jump, leftward, rightward, shift} = value
                
                //RAYCAST used to know the distance from the floor
                //set origin
                const origin = catCollider.current.translation()
                origin.y -= 0.51
                //set raycast
                const ray = new rapier.Ray(origin, direction)
                //associate raycast with rapierWorld
                const hit = rapierWorld.castRay(ray, 10, true)
                
                //If user press any key
                if(forward || leftward || rightward || backward || jump){
                    //If user jump
                    console.log('hit.toi', hit);
                    if(jump){
                        console.log('jump');
                        if(hit && hit.toi < 0.15){
                            console.log('in jump', hit.toi);
                            setCurrentAnimation('sautUp')
                            action.setLoop(LoopOnce)

                            //impulse up
                            catCollider.current.applyImpulse({ x: 0, y: 25, z:0 })
                        }
                    }
                    //or walking
                    if(forward || leftward || rightward || backward){
                        //if is not on the air
                        if(hit && hit.toi < 0.15){
                            //run or not
                            if(shift && currentAnimation != 'Course'){
                                setCurrentAnimation('Course')
                                setIsCurrentRunning(true)
                            }else if(!shift && currentAnimation != 'Marche'){
                                setCurrentAnimation('Marche')
                                setIsCurrentRunning(false)
                            }
                        }
                    }
                }
            }
        )

        return () => {
            unsubcribeWalk()
            action.fadeOut(0.5)
        }

    }, [currentAnimation])
    
    const { pos, posCAT } = useControls('camera', {
        pos:{
            value:{
                x: -5,
                y: 23,
                z: 28
            },
           /*  value:{
                x: 1,
                y: 2,
                z: 4
            }, */
            min: -100,
            max: 100,
            step: 1
        },
        posCAT:{
            /* value:{
                x: 10,
                y: 1,
                z: 0
            }, */
            value:{
                x: -16,
                y: 20,
                z: 34
            },
            min: -100,
            max: 100,
            step: 2
        },
    })

    //constantes used to catControl
    const eulerRotation = new Euler(0, 0, 0)
    const quaternionRotation = new Quaternion()
    const lerpQuaternion = 0.1
    const catSpeed = 0.1
    // const catSpeed = 0.07

    useFrame((state)=>{
        //Following camera
        const cameraPosition = new Vector3()
        cameraPosition.copy(catCollider.current.translation())
        cameraPosition.z += pos.x
        cameraPosition.y += pos.y
        cameraPosition.x += pos.z

        const target = new Vector3()
        target.copy(catCollider.current.translation())
        target.x += -0.31
        target.y += 1.32
        target.z += 0.64

        state.camera.position.copy(cameraPosition)
        state.camera.lookAt(target)

        //Cat controls
        const {forward, backward, leftward, rightward, shift, jump} = get()
        if(forward || backward || leftward || rightward || shift)
        {
            const catTranslation = catCollider.current.translation()
            const catRotation = catCollider.current.rotation()
           
            catCollider.current.lockRotations(true)
            if(forward)
            {
                //forward and left
                if(leftward){
                    eulerRotation.y = -Math.PI * 0.25
                    quaternionRotation.setFromEuler(eulerRotation)
                    
                    catTranslation.x -= shift ? catSpeed * 1.2 : catSpeed * 0.7
                    catTranslation.z += shift ? catSpeed * 1.2 : catSpeed * 0.7
                }
                //forward and right
                else if(rightward){
                    eulerRotation.y = -Math.PI * 0.75
                    quaternionRotation.setFromEuler(eulerRotation)
                    
                    catTranslation.x -= shift ? catSpeed * 1.2 : catSpeed * 0.7
                    catTranslation.z -= shift ? catSpeed * 1.2 : catSpeed * 0.7
                }
                //just forward
                else{
                    eulerRotation.y = -Math.PI * 0.5
                    quaternionRotation.setFromEuler(eulerRotation)
                    
                    catTranslation.x -= shift ? catSpeed * 1.5 : catSpeed * 1
                }
            }

            else if(backward)
            {
                //backward and left
                if(leftward){
                    eulerRotation.y = Math.PI * 0.25
                    quaternionRotation.setFromEuler(eulerRotation)
                    
                    catTranslation.x += shift ? catSpeed * 1.2 : catSpeed * 0.7
                    catTranslation.z += shift ? catSpeed * 1.2 : catSpeed * 0.7
                    
                }
                //backward and right
                else if(rightward){
                    eulerRotation.y = Math.PI * 0.75
                    quaternionRotation.setFromEuler(eulerRotation)
                    
                    catTranslation.x += shift ? catSpeed * 1.2 : catSpeed * 0.7
                    catTranslation.z -= shift ? catSpeed * 1.2 : catSpeed * 0.7
                }
                //just backward
                else{
                    eulerRotation.y = Math.PI * 0.5
                    quaternionRotation.setFromEuler(eulerRotation)
                    
                    catTranslation.x += shift ? catSpeed * 1.5 : catSpeed * 1
                }
            }

            //just left or rightward input
            else if(leftward || rightward)
            {
                if(leftward)
                {
                    eulerRotation.y = 0
                    quaternionRotation.setFromEuler(eulerRotation)
                    
                    catTranslation.z += shift ? catSpeed * 1.5 : catSpeed * 1
                }
                else if(rightward)
                {
                    eulerRotation.y = Math.PI * 1
                    quaternionRotation.setFromEuler(eulerRotation)
                    
                    catTranslation.z -= shift ? catSpeed * 1.5 : catSpeed * 1
                }
            }

            //set smoothed rotation after settting
            const smoothedQuaternionRotation = catRotation.rotateTowards(quaternionRotation, lerpQuaternion)
            //and apply to catCollider
            catCollider.current.setRotation(smoothedQuaternionRotation)

            //set tranlation after setting
            catCollider.current.setTranslation(catTranslation)

        }
        //ending of catController

        //Reset the postion to Tpose if user dont press any keys and if the current animation is not "jump"
        else{
            if(currentAnimation != 'Tpose' && currentAnimation != 'sautUp'){
                setCurrentAnimation('Tpose')
                action.setLoop(LoopRepeat)
            }
        }

    })

    return <>
    <group>
        <RigidBody 
            ref={catCollider} 
            position={[-17.3, 4, -14]}
            mass={2}
            linearDamping={0.1}
            angularDamping={50.5}
            colliders={false}
            >

            <CuboidCollider args={[0.2, 0.5, 0.7]} />
            <primitive object={modele.scene} scale={0.6} position={[0, -0.49, 0.8]}/>
        </RigidBody>
        <RigidBody type='fixed' position={[0, 0, 0]} rotation={[0, 0, 0]} >
            <mesh>
                <boxGeometry />
                <meshBasicMaterial />
            </mesh>
        </RigidBody>
        <RigidBody colliders={'ball'} position={[0, 5, 0]} rotation={[0, 0, 0]} mass={3} >
            <mesh scale={1}>
                <sphereGeometry />
                <meshStandardMaterial />
            </mesh>
        </RigidBody>
    </group>
    </>
}