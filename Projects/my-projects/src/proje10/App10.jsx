import { useState } from "react";
import "../proje10/app10.css";

export const App10=()=> {

    const [hex,setHex] = useState("#ffffff");
    
    function randomHex(){
        const randomHex = "#" +Math.floor(Math.random()*12777721).toString(16);
        setHex(randomHex);
    }
    return(
        <div className="App" style={{backgroundColor:`${hex}`}}>
            <h1>{hex}</h1>
            <button onClick={randomHex }>Click for new Background</button>
            <button onClick={()=>navigator.clipboard.writeText(hex)}>copy the hex value </button>
        </div>
    )
}