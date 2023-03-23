import { useState } from "react";
import "../proje3/app3.css";
import "../proje3/index.css";

 const App3 =()=>{
    const [newItem,setNewItem] = useState("");
    const [items,setItems] = useState([]);

    const deleteItem=(id)=>{
        const newArray = items.filter(item=>item.id !== id);
        setItems(newArray);
    }

    const addItem=()=>{ 
        if(!newItem){
            alert("bir şeyler yazın!");
        }
        console.log(newItem);
        const item = {
            id:Math.floor(Math.random()*100),
            value:newItem
        }
        setItems(oldItems=>[...oldItems,item])
        setNewItem("");
    }
    return(
        <div className="container">
            <h1>Todo List App</h1>
            <input type="text" placeholder="add an item..." value={newItem} onChange={e=> setNewItem(e.target.value)}/>
            <button onClick={()=>addItem()}>Add</button>
            <ul>
                {items.map(item=>{
                    return(
                        <li key={item.id}>{item.value} 
                            <button onClick={()=>deleteItem(item.id)}>X</button>
                        </li>
                    )
                })}
            </ul>
        </div>
        
    )
}
export default App3;