import React,{useState} from "react";
import List from "./List";
import data from "../4/data";
import "../4/app4.css";
function App4(){
    const [people,setPeople] =useState(data);
    return(
        
        <main>
            <section classNasme="container">
                <h2>{people.length} brithday today</h2>
                <List people={people}/>
                <button onClick={()=>setPeople([])}>Clear All</button>
                <button onClick={()=>setPeople(data)}>Refresh</button>
            </section>
        </main>
    )
}
export default App4;