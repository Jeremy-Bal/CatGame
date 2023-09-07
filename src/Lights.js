export default function Lights()
{

    return <>
        <ambientLight args={['#576482']} intensity={1.3} />
        <pointLight args={['#f22727', 70, 62, 2]} position={[0.5, 20.5, 9]} intensity={10} /> 
        <pointLight args={['#344a68', 50, 70, 2]} position={[11.5, 20, 22]} intensity={55} /> 
        <pointLight args={['#ffacac', 50, 50, 1]} position={[3.5, 20, 0]} intensity={3} /> 
    </>
}