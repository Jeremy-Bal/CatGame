import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from 'postprocessing'
export default function ()
{

    return <>
        <EffectComposer>
            <Bloom mipmapBlur intensity={0.6}  />
            <Vignette offset={0.8} 
            darkness={0.8}
            opacity={0.7}
            resolutionX={1024 / 2}
            resolutionY={1024 / 2}
            blendFunction={BlendFunction.MULTIPLY}
            />
        </EffectComposer>
    </>
}