import { create } from 'zustand'
import {subscribeWithSelector} from 'zustand/middleware'

export default create(subscribeWithSelector((set)=>{
    return{
        // phase : 'playing',
        phase : 'ready',

        start : (()=>
        {
            set((state)=>{
                if(state.phase === 'ready'){
                    return {phase : 'playing'}
                }
                return {}
            })
        }),
        end: (()=>
        {
            set((state)=>{
                if(state.phase === 'playing'){
                    return {phase: 'end'}
                }
                return{}
            })
        })
    }
}))