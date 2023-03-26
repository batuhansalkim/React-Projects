import React,{useState,useEffect} from "react";
import "../16/App16.css";
import "../16/Scrollindicator.css";
export function App16(){
    const [scrollTop,setScrollTop] = useState(0);


    return(
        <div className="App">
            <div className="progressMainWrapper">
                <div className="progressMainStyle"></div>
            </div>
            <h1>Roma İmparatorluğu</h1>
        </div>
    )
}