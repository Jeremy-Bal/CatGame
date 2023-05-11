import { useThree } from "@react-three/fiber";
import { useControls } from "leva"
import { useEffect, useRef } from "react"
// import * as THREE from 'three'

export default function Lights()
{
    const { pos, pos2, pos3 } = useControls('light', {
        pos:{
            value:{
                x: -24,
                y: 30.5,
                z: -6
            },
            min: -100,
            max: 100,
            step: 0.5
        },
        pos2:{
            value:{
                x: -31.5,
                y: 37.5,
                z: 50
            },
            min: -100,
            max: 100,
            step: 0.5
        },
        pos3:{
            value:{
                x: 38.0,
                y: 31,
                z: 33
            },
            min: -100,
            max: 100,
            step: 0.5
        }
    })

    // const pointLight = useRef();
    // const pointLight2 = useRef();
    // const pointLight3 = useRef();
    // const { scene } = useThree();

    // useEffect(()=>{
        // const pointLightHelper = new THREE.PointLightHelper( pointLight.current, 5, 'blue');
        // const pointLightHelper2 = new THREE.PointLightHelper( pointLight2.current, 5, 'red');
        // const pointLightHelper3 = new THREE.PointLightHelper( pointLight3.current, 5, 'orange');

        // scene.add(pointLightHelper, pointLightHelper2, pointLightHelper3)
    // }, [])
    

    return <>
        {/* Blue Light */}
        <pointLight args={['#99C9FF', 70, 62, 2]} position={[pos.x, pos.y, pos.z]} /* ref={pointLight} */ /> 

        {/* Red Light */}
        <pointLight args={['#B92223', 50, 70, 2]} position={[pos2.x, pos2.y, pos2.z]} intensity={110} /* ref={pointLight2} */ /> 

        {/* Orange Light */}
        <pointLight args={['#FF9964', 80, 70, 2]} position={[pos3.x, pos3.y, pos3.z]} /* ref={pointLight3} */ /> 
    </>
}