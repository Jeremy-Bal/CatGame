import { useControls } from "leva"

export default function Lights()
{
    const { pos, pos2, pos3 } = useControls('light', {
        pos:{
            value:{
                x: 0.5,
                y: 20.5,
                z: 9
            },
            min: -100,
            max: 100,
            step: 0.5
        },
        pos2:{
            value:{
                x: 11.5,
                y: 20,
                z: 22
            },
            min: -100,
            max: 100,
            step: 0.5
        },
        pos3:{
            value:{
                x: 3.5,
                y: 20,
                z: 0
            },
            min: -100,
            max: 100,
            step: 0.5
        }
    })

    return <>
        <ambientLight args={['#576482']} intensity={1.3} />
        <pointLight args={['#f22727', 70, 62, 2]} position={[pos.x, pos.y, pos.z]} intensity={10} /> 
        <pointLight args={['#344a68', 50, 70, 2]} position={[pos2.x, pos2.y, pos2.z]} intensity={110/2} /> 
        <pointLight args={['#ffacac', 50, 50, 1]} position={[pos3.x, pos3.y, pos3.z]} intensity={3} /> 
    </>
}