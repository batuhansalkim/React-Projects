import { useState } from "react"

export const App10=()=> {
    const [hex,setHex] = useState("#ffffff");
    function randomHex(){
        const randomHex = "#" +Math.floor(Math.random()*12777721).toString(16);
        setHex(randomHex);
    }
    return(
        <div className="App">
            <h1>{hex}</h1>
            <button>Click for new Background</button>
        </div>
    )
}