import { useState } from "react";
import "../proje3/app3.css";
import "../proje3/index.css";

 const App3 =()=>{
    const [newItem,setNewItem] = useState("");
    const addItem=()=>{ 
        console.log(newItem);
        setNewItem("");
    }
    return(
        <div className="container">
            <h1>Todo List App</h1>
            <input type="text" placeholder="add an item..." value={newItem} onChange={e=> setNewItem(e.target.value)}/>
            <button onClick={()=>addItem()}>Add</button>
            <ul>
                <li>react çalış</li>
                <li>js çalış</li>
                <li>c# çalış</li>
            </ul>
        </div>
        
    )
}
export default App3;