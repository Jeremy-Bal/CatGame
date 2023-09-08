import { useAnimations, useGLTF, useKeyboardControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect, useRef, useState } from "react";
import { Euler, LoopOnce, LoopRepeat, Quaternion, Vector3 } from "three";
import { RigidBody, CuboidCollider, useRapier } from '@react-three/rapier'

import useGame from "./Utils/useGame";

export default function Cat()
{
    const catCollider = useRef()

    const modele = useGLTF('./cat.glb')
    const animation = useAnimations(modele.animations, modele.scene)
    const [currentAnimation, setCurrentAnimation] = useState('Tpose')
    //feed action on each currentAnimation changes 
    const action = animation.actions[currentAnimation]
    
    const [isCurrentRunning, setIsCurrentRunning] = useState(false)

    const [sub, get]  = useKeyboardControls()
    
    const {rapier, world} = useRapier()
    const rapierWorld = world.raw()
    
    const [ smoothedCameraPosition, setSmoothedCameraPosition ] = useState(() => new Vector3())
    const [ smoothedCameraTarget, setSmoothedCameraTarget ] = useState(() => new Vector3())

    const [currentPhase, setPhase] = useState(useGame.getState().phase)
    const [currentIntro, setIntro] = useState(false)
    
    const lerpTarget = new Vector3( 37.604283752441404, 22, 17.53972496032715)
    const cameraPosition = new Vector3()
    const target = new Vector3()

    const [currentTravelCamera, setTravelCamera] = useState(false)

    const [currentScore, setScore] = useState(0)

    const endGame = useGame((state)=> state.end)

    //sound
    const patouneSound = new Audio('patouneSound.wav')

    useFrame((state, delta)=>{
        //Introduction travel camera
        if(currentIntro){
            cameraPosition.copy(catCollider.current.translation())
            cameraPosition.z += 1
            cameraPosition.y += 8
            cameraPosition.x += 11
            
            target.copy(catCollider.current.translation())
            target.x += -0.31
            target.y += 3.32
            target.z += 0.64
            
            lerpTarget.lerp(target, 0.025 * delta * 50)

            state.camera.position.lerp(cameraPosition, 0.025 * delta * 50)
            state.camera.lookAt(lerpTarget)


            //when travel reach the end I sent camera coordinates and change boolean intro
            if(currentAnimation && lerpTarget.y < 3.9){
                setSmoothedCameraPosition(state.camera.position)
                setSmoothedCameraTarget(lerpTarget)
                setIntro(false)
            }
        }
    })

    useEffect(()=>{
        //I subscribe to phase event if value change 
        const unsubscribePhase = useGame.subscribe(
            (state)=>state.phase,
            (value)=>{
                if(value === 'playing'){
                    setIntro(true)
                    setPhase(useGame.getState().phase)
                }
            }
        )
        return ()=>{
            unsubscribePhase()
        }
    }, [])

    //setting position and rotation once at the start
    //and sound
    const {camera} = useThree()
    useEffect(()=>{
        cameraPosition.copy(catCollider.current.translation())
        cameraPosition.z += 1
        cameraPosition.y += 19
        cameraPosition.x += 25

        target.copy(catCollider.current.translation())
        target.x += -0.31
        target.y += 20
        target.z += 0.64
        camera.position.copy(cameraPosition)
        camera.lookAt(target)

        const eulerRotation = new Euler(0, 0, 0)
        const quaternionRotation = new Quaternion()
        
        eulerRotation.y = -Math.PI * 0.5
        quaternionRotation.setFromEuler(eulerRotation)
        
        catCollider.current.setRotation(quaternionRotation)

    }, [])

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

        //keyboardControl
        const unsubcribeWalk = sub(
            (state)=>(state),
            (value)=>{
                const { backward, forward, jump, leftward, rightward, shift} = value
                
                //RAYCAST used to know the distance from the floor
                //set origin
                const origin = catCollider.current.translation()
                origin.y -= 0.51

                //set direction to cast
                const direction = { x: 0, y: -1, z:0 }

                //set raycast
                const ray = new rapier.Ray(origin, direction)

                //associate raycast with rapierWorld
                const hit = rapierWorld.castRay(ray, 5, true)
                
                //If user press any key
                if(forward || leftward || rightward || backward || jump){
                    if(currentPhase === 'playing' && !currentIntro)
                    {
                        //If user jump
                        if(jump){
                            if(hit && hit.toi < 0.15){
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
            }
        )

        return () => {
            unsubcribeWalk()
            action.fadeOut(0.5)
        }

    }, [currentAnimation, currentIntro])
    
    const { pos, posCAT } = useControls('camera', {
        pos:{
            value:{
                x: 1,
                y: 8,
                z: 11
            },
            min: -100,
            max: 100,
            step: 1
        },
        posCAT:{
            value:{
                x: 39,
                y: 4,
                z: 18.45
            },
            min: -100,
            max: 100,
            step: 0.01
        },
    })

    //constantes used to catControl
    const eulerRotation = new Euler(0, 0, 0)
    const quaternionRotation = new Quaternion()

    
    //CatControls
    useFrame((state, delta)=>{
        if(currentPhase === 'playing' && !currentIntro)
        {
            const lerpQuaternion = 0.1 * delta * 60
            // const catSpeed = 10 * delta
            const catSpeed = 4 * delta

            //Following camera
            cameraPosition.copy(catCollider.current.translation())
            if(currentTravelCamera)
            {
                
                cameraPosition.z += -15
                cameraPosition.y += 35
                cameraPosition.x += 24
            }else{
                cameraPosition.z += pos.x
                cameraPosition.y += pos.y
                cameraPosition.x += pos.z
            }
            target.copy(catCollider.current.translation())
            target.x += -0.31
            target.y += 3.32
            target.z += 0.64
            if(currentTravelCamera){
                smoothedCameraPosition.lerp(cameraPosition, 0.2 * delta * 5)
            }else{
                smoothedCameraPosition.lerp(cameraPosition, 0.3 * delta * 5)
            }
            
            smoothedCameraTarget.lerp(target, 0.5 * delta * 5)
            
            state.camera.position.copy(smoothedCameraPosition)
            state.camera.lookAt(smoothedCameraTarget)

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

        }

    })

    //Function called when cat traverse every "patoune"
    useEffect(()=>{
        if(currentPhase === 'playing'){
            const score = document.querySelector('.score span')
            score.innerHTML = 32 - currentScore

            patouneSound.volume = 0.015
            patouneSound.play()
        }
        if(currentScore === 32 ){
            endGame()
            document.querySelector('.endGame').classList.add('show')
            
            setTimeout(()=>{
                document.querySelector('.endGame').classList.remove('show')
            }, 5000)
        }
    }, [currentScore])

return <>
    <group>
        <RigidBody 
            ref={catCollider} 
            position={[posCAT.x, posCAT.y, posCAT.z]}
            mass={2}
            linearDamping={0.1}
            angularDamping={50.5}
            colliders={false}
            name="cat"
            onIntersectionEnter={(e)=>{
                if(e.colliderObject.name === 'active'){
                    e.colliderObject.removeFromParent()
                    e.colliderObject.name = 'inactive'
                    setScore(()=>currentScore + 1)
                }
            }}>

            <CuboidCollider args={[0.2, 0.5, 0.7]} />
            <primitive object={modele.scene} scale={0.6} position={[-0, -0.49, 0.6]} />
        </RigidBody>
        <RigidBody type="fixed" sensor>
            <CuboidCollider 
                sensor
                args={[10, 8, 0.1]}
                position={[-7, 1, 7]}
                onIntersectionEnter={()=>{
                    setTravelCamera(!currentTravelCamera)
                }}
                />
        </RigidBody>
    </group>
 
    </>
}