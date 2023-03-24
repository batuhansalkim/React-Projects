import React, {useState} from "react";
import "../proje9/app9.css";
import Accordion from "./Accordion";
function App9(){
    const [active,setActive] = useState("");
    return(
        <div className="App">
            <h1>FA1 APP</h1>
            <Accordion title="Question1" active={active} setActive={setActive}/>
            <Accordion title="Question2" active={active} setActive={setActive}/>
            <Accordion title="Question3" active={active} setActive={setActive}/>
            <Accordion title="Question4" active={active} setActive={setActive}/>
        </div>
    )
}
export default App9;