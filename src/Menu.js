import { useState } from "react";
import useGame from "./Utils/useGame"

export default function Menu ()
{
    const start = useGame((state) => state.start)
    const [currentHide, setHide] = useState(false)

    return <>
        <div className={`column ${currentHide ? 'hide' : ''}`}>
            <div className="imgContent">
                <img src="./logo.png" />
            </div>
            <p className="title">Neige</p>
            <p className="desc">{`Find all items 'patoune' and get an extraordinary reward`}</p>
            <button onClick={()=>{
                start()
                setHide(true)
                }} >Ready ?</button>
        </div>
        <div className="score">
            <p>Patoune left : <span>32</span></p>
        </div>
        <div className={'endGame'}>
            <p>Great job ! You just end the game.. <br />
            You can now find some pictures of my cat in all map</p>
        </div>
    </>
}